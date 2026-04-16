const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");
const mailchimp = require("@mailchimp/mailchimp_marketing");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

// Utility: Slugify neighborhood names for URLs
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

// Utility: Format time range (e.g., "1600" -> "4pm", "1930" -> "7:30pm")
function formatTimeRange(startTime, endTime) {
  if (!startTime || !endTime || startTime === "null" || endTime === "null") return "";

  const formatTime = (time) => {
    // Time is stored as 4-digit string like "1600" for 4:00pm
    const timeStr = time.toString().padStart(4, '0');
    const hours = parseInt(timeStr.substring(0, 2));
    const minutes = parseInt(timeStr.substring(2, 4));

    const ampm = hours >= 12 ? "pm" : "am";
    const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return minutes === 0 ? `${displayHour}${ampm}` : `${displayHour}:${minutes.toString().padStart(2, '0')}${ampm}`;
  };

  const start = formatTime(startTime);
  const end = formatTime(endTime);

  // If both have same am/pm, only show it once
  if (start.includes("am") && end.includes("am")) {
    return `${start.replace("am", "")}–${end}`;
  } else if (start.includes("pm") && end.includes("pm")) {
    return `${start.replace("pm", "")}–${end}`;
  }

  return `${start}–${end}`;
}

// Utility: Format days (e.g., ["MO", "TU", "WE", "TH", "FR"] -> "Weekdays")
// Using the same logic as lib/date.js formatDaysOfWeek
function formatDays(days) {
  if (!days || days.length === 0) return "";

  const dayCodeToAbbrMapping = {
    "MO": "Mon",
    "TU": "Tue",
    "WE": "Wed",
    "TH": "Thu",
    "FR": "Fri",
    "SA": "Sat",
    "SU": "Sun",
  };

  const daysOrder = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  // Single day
  if (days.length === 1) {
    return dayCodeToAbbrMapping[days[0]];
  }

  // Remove duplicates and sort
  const uniqueDays = [...new Set(days)];
  const sortedDays = uniqueDays.sort((a, b) => daysOrder.indexOf(a) - daysOrder.indexOf(b));

  // Special cases
  if (JSON.stringify(sortedDays) === JSON.stringify(daysOrder)) {
    return "Everyday";
  } else if (JSON.stringify(sortedDays) === JSON.stringify(["SA", "SU"])) {
    return "Weekends";
  } else if (JSON.stringify(sortedDays) === JSON.stringify(["MO", "TU", "WE", "TH", "FR"])) {
    return "Weekdays";
  }

  // Format ranges (e.g., Mon-Fri)
  const formatRange = (range) => {
    return range.length === 1
      ? dayCodeToAbbrMapping[range[0]]
      : `${dayCodeToAbbrMapping[range[0]]}-${dayCodeToAbbrMapping[range[range.length - 1]]}`;
  };

  let formattedString = "";
  let currentRange = [sortedDays[0]];

  for (let i = 1; i < sortedDays.length; i++) {
    const currentDay = sortedDays[i];
    const prevDay = sortedDays[i - 1];

    if (daysOrder.indexOf(currentDay) - daysOrder.indexOf(prevDay) === 1) {
      // Days are consecutive
      currentRange.push(currentDay);
      if (i === sortedDays.length - 1) {
        formattedString += formatRange(currentRange);
      }
    } else if (i === sortedDays.length - 1) {
      // Last day, not consecutive
      formattedString += formatRange(currentRange);
      formattedString += ", ";
      formattedString += dayCodeToAbbrMapping[sortedDays[i]];
    } else {
      // Not consecutive
      formattedString += formatRange(currentRange);
      if (i < sortedDays.length - 1) {
        formattedString += ", ";
        currentRange = [currentDay];
      }
    }
  }

  return formattedString;
}

// Format a happy hour event into a readable string
function formatHappyHour(event) {
  if (!event || !event.eventSchedule || event.eventSchedule.length === 0) {
    return "";
  }

  const schedule = event.eventSchedule[0];
  const days = formatDays(schedule.byDay);
  const time = formatTimeRange(schedule.startTime, schedule.endTime);

  // Build description from menu items
  let description = "";

  if (event.menu && event.menu.length > 0) {
    const menuItems = event.menu
      .filter(item => item.name && item.name !== " 3-6p") // Filter out time-only entries
      .slice(0, 3) // Take first 3 items
      .map(item => {
        if (item.price) {
          return `$${item.price} ${item.name.toLowerCase()}`;
        }
        return item.name;
      });

    if (menuItems.length > 0) {
      description = menuItems.join(", ");
    }
  }

  // Add schedule info
  if (days && time) {
    description += `<br>${days} ${time}`;
  } else if (days) {
    description += `<br>${days}`;
  } else if (time) {
    description += `<br>${time}`;
  }

  return description;
}

// Fetch data from production database
async function fetchProductionData() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db(DB_NAME);

    // Get enabled AND featured places with happy hour events
    const places = await db
      .collection("eventPlaces")
      .find({
        enabled: true,
        featured: true,
        events: {
          $elemMatch: {
            keywords: "happyHour",
          },
        },
      })
      .toArray();

    console.log(`Found ${places.length} featured places with happy hour events`);

    return places;
  } finally {
    await client.close();
  }
}

// Group places by neighborhood and select top places
function organizeDataForEmail(places) {
  // Group by neighborhood
  const byNeighborhood = {};

  places.forEach((place) => {
    const neighborhood = place.neighborhood;
    if (!neighborhood) return;

    if (!byNeighborhood[neighborhood]) {
      byNeighborhood[neighborhood] = [];
    }

    byNeighborhood[neighborhood].push(place);
  });

  // Sort neighborhoods by number of places (descending)
  const sortedNeighborhoods = Object.entries(byNeighborhood)
    .map(([name, places]) => ({
      name,
      places: places.sort((a, b) => (b.featured || 0) - (a.featured || 0)),
    }))
    .sort((a, b) => b.places.length - a.places.length);

  // Select deal of the week (first featured place)
  const dealOfTheWeek = places.find((p) => p.featured) || places[0];

  // Select top 3 neighborhoods for the main section
  const topNeighborhoods = sortedNeighborhoods.slice(0, 3);

  // Select spotlight neighborhood (4th neighborhood or one with interesting places)
  const spotlightNeighborhood = sortedNeighborhoods[3] || sortedNeighborhoods[0];

  return {
    dealOfTheWeek,
    topNeighborhoods,
    spotlightNeighborhood,
  };
}

// Generate deal HTML for a place
function generateDealHTML(place, includeNeighborhood = false) {
  const happyHourEvent = place.events?.find((e) => e.keywords === "happyHour");
  const dealDescription = happyHourEvent ? formatHappyHour(happyHourEvent) : "";
  const slug = place.slug || place.alt_id || place._id;

  let html = `<p style="font-family:Georgia,serif;font-size:15px;font-weight:bold;color:#f5f0e8;margin:0 0 4px;">
    ${place.name}
  </p>`;

  if (includeNeighborhood) {
    html += `<p style="font-family:Georgia,serif;font-size:13px;color:#7c3aed;margin:0 0 8px;">
      ${place.neighborhood}
    </p>`;
  }

  html += `<p style="font-family:Georgia,serif;font-size:13px;color:#888;margin:0;line-height:1.5;">
    ${dealDescription}
  </p>`;

  return html;
}

// Generate neighborhood section HTML
function generateNeighborhoodSection(neighborhood) {
  const { name, places } = neighborhood;
  const slug = slugify(name);
  const displayPlaces = places.slice(0, 5); // Show up to 5 places

  let html = `
    <tr>
      <td style="padding:0 0 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #2a2a2a;">
          <tr>
            <td style="padding-top:24px;">
              <p style="font-family:Georgia,serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#7c3aed;margin:0 0 16px;">
                ${name}
              </p>
  `;

  // Create rows of 2 deals each
  for (let i = 0; i < displayPlaces.length; i += 2) {
    const place1 = displayPlaces[i];
    const place2 = displayPlaces[i + 1];

    html += `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td style="vertical-align:top;padding-right:16px;width:50%;">
                    ${generateDealHTML(place1)}
                  </td>
                  <td style="vertical-align:top;padding-left:16px;width:50%;">
                    ${place2 ? generateDealHTML(place2) : "&nbsp;"}
                  </td>
                </tr>
              </table>
    `;
  }

  html += `
              <a href="https://hellochicago.co/neighborhood/${slug}" style="font-family:Georgia,serif;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#555;text-decoration:none;border-bottom:1px solid #333;padding-bottom:2px;">
                All ${name} deals &rarr;
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;

  return html;
}

// Generate the full email HTML
function generateEmailHTML(data) {
  const { dealOfTheWeek, topNeighborhoods, spotlightNeighborhood } = data;

  // Read the template
  const templatePath = path.join(__dirname, "../public/hellochicago-email-template.html");
  let html = fs.readFileSync(templatePath, "utf-8");

  // Replace Deal of the Week
  if (dealOfTheWeek) {
    const happyHourEvent = dealOfTheWeek.events?.find((e) => e.keywords === "happyHour");
    const dealDescription = happyHourEvent ? formatHappyHour(happyHourEvent) : "";
    const insiderNote = dealOfTheWeek.notes || "A local favorite with great atmosphere.";
    const slug = dealOfTheWeek.slug || dealOfTheWeek.alt_id || dealOfTheWeek._id;

    html = html.replace(
      /<!-- EDIT: Bar name here -->\s*The Whistler/,
      dealOfTheWeek.name
    );
    html = html.replace(
      /<!-- EDIT: Neighborhood -->\s*Logan Square/,
      dealOfTheWeek.neighborhood || ""
    );
    html = html.replace(
      /<!-- EDIT: Deal description -->\s*\$4 draft beers &amp; \$6 cocktails — Mon through Fri, 5–7pm/,
      dealDescription
    );
    html = html.replace(
      /<!-- EDIT: Insider note -->\s*"Best back patio in Logan Square\. Get there early on Fridays — it fills up by 5:30\."/,
      `"${insiderNote}"`
    );
    html = html.replace(
      /href="https:\/\/hellochicago\.co" style="font-family:Georgia,serif;font-size:13px;letter-spacing:0\.1em;text-transform:uppercase;color:#7c3aed;text-decoration:none;border-bottom:1px solid #7c3aed;padding-bottom:2px;">\s*See full deal/,
      `href="https://hellochicago.co/place/${slug}" style="font-family:Georgia,serif;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:#7c3aed;text-decoration:none;border-bottom:1px solid #7c3aed;padding-bottom:2px;">See full deal`
    );
  }

  // Replace neighborhood sections (1, 2, 3)
  const neighborhoodSections = topNeighborhoods.map((n) => generateNeighborhoodSection(n)).join("\n");

  // Find and replace the neighborhood sections
  const neighborhoodRegex = /<!-- ============ NEIGHBORHOOD 1 ============ -->[\s\S]*?<!-- ============ NEIGHBORHOOD 3 ============ -->[\s\S]*?<\/tr>/;
  html = html.replace(neighborhoodRegex, neighborhoodSections);

  // Replace Spotlight Neighborhood
  if (spotlightNeighborhood) {
    const spotlightPlaces = spotlightNeighborhood.places.slice(0, 2);
    const slug = slugify(spotlightNeighborhood.name);

    // Build the spotlight HTML from scratch to avoid replacement issues
    let spotlightHTML = `
    <tr>
      <td style="padding:0 0 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#161616;border-radius:4px;">
          <tr>
            <td style="padding:28px;">
              <p style="font-family:Georgia,serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#555;margin:0 0 8px;">
                Neighborhood Spotlight
              </p>
              <h3 style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:normal;color:#f5f0e8;margin:0 0 6px;">
                ${spotlightNeighborhood.name}
              </h3>
              <p style="font-family:Georgia,serif;font-size:13px;color:#666;margin:0 0 20px;font-style:italic;">
                Great happy hour deals across ${spotlightNeighborhood.places.length} local spot${spotlightNeighborhood.places.length !== 1 ? 's' : ''}.
              </p>

              <!-- Spotlight deals -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">`;

    // Add spotlight places
    spotlightPlaces.forEach((place) => {
      const event = place.events?.find((e) => e.keywords === "happyHour");
      const deal = event ? formatHappyHour(event).replace(/<br>/g, " — ") : "";

      spotlightHTML += `
                <tr>
                  <td style="border-top:1px solid #2a2a2a;padding:14px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <p style="font-family:Georgia,serif;font-size:14px;font-weight:bold;color:#f5f0e8;margin:0 0 3px;">
                            ${place.name}
                          </p>
                          <p style="font-family:Georgia,serif;font-size:13px;color:#777;margin:0;">
                            ${deal}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`;
    });

    spotlightHTML += `
              </table>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
                <tr>
                  <td style="border:1px solid #333;border-radius:3px;">
                    <a href="https://hellochicago.co/neighborhood/${slug}" style="display:inline-block;padding:10px 20px;font-family:Georgia,serif;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#aaa;text-decoration:none;">
                      Explore ${spotlightNeighborhood.name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;

    // Replace the entire spotlight section
    const spotlightRegex = /<!-- ============ SPOTLIGHT NEIGHBORHOOD ============ -->[\s\S]*?<\/tr>\s*<\/tr>\s*<\/table>\s*<\/td>\s*<\/tr>/;
    html = html.replace(spotlightRegex, spotlightHTML);
  }

  return html;
}

// Create or update Mailchimp template
async function createMailchimpTemplate(htmlContent, templateName = "Hello Chicago - Weekly Happy Hours") {
  try {
    // Check if template already exists
    const response = await mailchimp.templates.list();
    const existingTemplate = response.templates.find((t) => t.name === templateName);

    if (existingTemplate) {
      console.log(`Updating existing template: ${templateName} (ID: ${existingTemplate.id})`);

      await mailchimp.templates.updateTemplate(existingTemplate.id, {
        name: templateName,
        html: htmlContent,
      });

      console.log(`✅ Template updated successfully!`);
      console.log(`Template ID: ${existingTemplate.id}`);
    } else {
      console.log(`Creating new template: ${templateName}`);

      const newTemplate = await mailchimp.templates.create({
        name: templateName,
        html: htmlContent,
      });

      console.log(`✅ Template created successfully!`);
      console.log(`Template ID: ${newTemplate.id}`);
    }
  } catch (error) {
    console.error("❌ Error creating/updating Mailchimp template:", error);

    if (error.response) {
      console.error("Response body:", error.response.body);
    }

    throw error;
  }
}

// Main function
async function main() {
  try {
    console.log("🔍 Fetching data from production database...");
    const places = await fetchProductionData();

    console.log("📊 Organizing data for email template...");
    const emailData = organizeDataForEmail(places);

    console.log("\n📧 Email Content Preview:");
    console.log(`Deal of the Week: ${emailData.dealOfTheWeek.name} (${emailData.dealOfTheWeek.neighborhood})`);
    console.log(`Top Neighborhoods: ${emailData.topNeighborhoods.map((n) => n.name).join(", ")}`);
    console.log(`Spotlight: ${emailData.spotlightNeighborhood.name} (${emailData.spotlightNeighborhood.places.length} places)`);

    console.log("\n🎨 Generating HTML email template...");
    const htmlContent = generateEmailHTML(emailData);

    // Save to file for preview
    const outputPath = path.join(__dirname, "../public/generated-email-template.html");
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`✅ Saved preview to: ${outputPath}`);

    console.log("\n📮 Creating Mailchimp template...");
    await createMailchimpTemplate(htmlContent);

    console.log("\n✨ Done! Your email template is ready.");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fetchProductionData, organizeDataForEmail, generateEmailHTML };

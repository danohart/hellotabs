import Head from "next/head";

const DAY_MAP = {
  MO: "Monday",
  TU: "Tuesday",
  WE: "Wednesday",
  TH: "Thursday",
  FR: "Friday",
  SA: "Saturday",
  SU: "Sunday",
};

function formatTime(time) {
  if (!time || time === "null") return null;
  const timeStr = String(time).padStart(4, "0");
  const hours = timeStr.slice(0, 2);
  const minutes = timeStr.slice(2, 4);
  return `${hours}:${minutes}`;
}

const DAY_INDEX = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };

// Google's Event rich-result requirements call for a top-level startDate —
// a recurring `eventSchedule.startTime` alone doesn't satisfy that. Since
// this is a weekly-recurring happy hour with no fixed start, we compute the
// next matching occurrence's date each time the page renders.
function getNextOccurrenceDate(dayCodes) {
  const indices = dayCodes.map((d) => DAY_INDEX[d]).filter((i) => i !== undefined);
  if (indices.length === 0) return null;

  const now = new Date();
  for (let offset = 0; offset < 7; offset++) {
    const candidate = new Date(now);
    candidate.setDate(now.getDate() + offset);
    if (indices.includes(candidate.getDay())) {
      return candidate.toISOString().split("T")[0];
    }
  }
  return null;
}

// Chicago's UTC offset, DST-aware, for the given date — lets startDate/
// endDate be unambiguous ISO 8601 without hand-rolling DST rules.
function getChicagoOffset(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    timeZoneName: "shortOffset",
  }).formatToParts(date);
  const offsetPart = parts.find((p) => p.type === "timeZoneName")?.value || "GMT-6";
  const match = offsetPart.match(/GMT([+-]\d+)/);
  const hours = match ? parseInt(match[1], 10) : -6;
  const sign = hours >= 0 ? "+" : "-";
  return `${sign}${String(Math.abs(hours)).padStart(2, "0")}:00`;
}

function generateLocalBusinessSchema(place) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: place.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: place.location?.streetAddress,
      addressLocality: place.location?.city || "Chicago",
      addressRegion: place.location?.state || "IL",
      postalCode: place.location?.postalCode,
      addressCountry: "US",
    },
  };

  // Add geo coordinates
  if (place.location?.geo?.latitude && place.location?.geo?.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: place.location.geo.latitude,
      longitude: place.location.geo.longitude,
    };
  }

  // Add URL
  if (place.urls?.homepage) {
    schema.url = place.urls.homepage;
  }

  // Add canonical URL
  if (place.slug) {
    schema.sameAs = [`https://www.hellochicago.co/place/${place.slug}`];
  }

  // Add price range if available from Google Places
  if (place.googlePlaces?.priceLevel) {
    schema.priceRange = place.googlePlaces.priceLevel;
  }

  // Add attributes from Google Places
  if (place.googlePlaces?.attributes) {
    const attrs = place.googlePlaces.attributes;
    if (attrs.servesBeer !== undefined) schema.servesBeer = attrs.servesBeer;
    if (attrs.servesWine !== undefined) schema.servesWine = attrs.servesWine;
    if (attrs.servesCocktails !== undefined) schema.servesCocktails = attrs.servesCocktails;
  }

  // Add primary type
  if (place.googlePlaces?.primaryType) {
    schema.additionalType = `https://schema.org/${place.googlePlaces.primaryType}`;
  }

  return schema;
}

function generateEventSchema(place) {
  if (!place.events) return null;

  const allDays = [];
  const rawDayCodes = [];
  let startTime = null;
  let endTime = null;
  const allOffers = [];

  for (const event of place.events) {
    if (!event.eventSchedule) continue;

    for (const schedule of event.eventSchedule) {
      const days = Array.isArray(schedule.byDay)
        ? schedule.byDay
        : [schedule.byDay];

      for (const dayCode of days) {
        rawDayCodes.push(dayCode);
        const dayName = DAY_MAP[dayCode];
        if (dayName && !allDays.includes(`https://schema.org/${dayName}`)) {
          allDays.push(`https://schema.org/${dayName}`);
        }
      }

      if (!startTime) startTime = formatTime(schedule.startTime);
      if (!endTime) endTime = formatTime(schedule.endTime);
    }

    if (event.menu) {
      for (const item of event.menu) {
        if (item.price && item.name) {
          allOffers.push({
            "@type": "Offer",
            name: item.name,
            price: item.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            category: item.category || "Drink",
          });
        }
      }
    }
  }

  if (allDays.length === 0) return null;

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Happy Hour at ${place.name}`,
    description: `Happy hour specials at ${place.name} in ${place.neighborhood || "Chicago"}`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: place.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: place.location?.streetAddress,
        addressLocality: place.location?.city || "Chicago",
        addressRegion: place.location?.state || "IL",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: place.name,
    },
    eventSchedule: {
      "@type": "Schedule",
      byDay: allDays,
      repeatFrequency: "P1W",
    },
  };

  if (startTime) eventSchema.eventSchedule.startTime = startTime;
  if (endTime) eventSchema.eventSchedule.endTime = endTime;

  // Google's Event rich-result requirements need a top-level startDate, not
  // just the recurring schedule's startTime — fill in the next occurrence.
  const nextDate = getNextOccurrenceDate(rawDayCodes);
  if (nextDate) {
    const offset = getChicagoOffset(new Date(`${nextDate}T12:00:00Z`));
    if (startTime) eventSchema.startDate = `${nextDate}T${startTime}:00${offset}`;
    if (endTime) eventSchema.endDate = `${nextDate}T${endTime}:00${offset}`;
    if (!startTime) eventSchema.startDate = nextDate;
  }

  if (allOffers.length > 0) {
    eventSchema.offers = allOffers;
  }

  return eventSchema;
}

export default function JsonLd({ place }) {
  if (!place) return null;

  const localBusinessSchema = generateLocalBusinessSchema(place);
  const eventSchema = generateEventSchema(place);

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {eventSchema && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventSchema),
          }}
        />
      )}
    </Head>
  );
}

export function NeighborhoodJsonLd({ neighborhood, places }) {
  if (!places || places.length === 0) return null;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Happy Hour Specials in ${neighborhood}, Chicago`,
    description: `Bars and restaurants with happy hour specials in ${neighborhood}, Chicago`,
    numberOfItems: places.length,
    itemListElement: places.slice(0, 10).map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BarOrPub",
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.location?.streetAddress,
          addressLocality: place.location?.city || "Chicago",
          addressRegion: place.location?.state || "IL",
          addressCountry: "US",
        },
        ...(place.slug && {
          url: `https://www.hellochicago.co/place/${place.slug}`,
        }),
      },
    })),
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
    </Head>
  );
}

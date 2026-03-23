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

  if (place.location?.geo?.latitude && place.location?.geo?.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: place.location.geo.latitude,
      longitude: place.location.geo.longitude,
    };
  }

  if (place.urls?.homepage) {
    schema.url = place.urls.homepage;
  }

  return schema;
}

function generateEventSchema(place) {
  if (!place.events) return null;

  const allDays = [];
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

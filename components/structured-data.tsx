import Script from 'next/script'

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Black Panther Fighting Academy",
    "alternateName": "BPFA",
    "description": "Sri Lanka's premier martial arts training center offering MMA, Boxing, Brazilian Jiu-Jitsu, Kickboxing, and more with world-class trainers.",
    "url": "https://bpfa.lk",
    "logo": "https://bpfa.lk/images/logo.png",
    "image": "https://bpfa.lk/images/logo.png",
    "sameAs": [
      // Add social media links when available
      // "https://www.facebook.com/bpfa",
      // "https://www.instagram.com/bpfa_srilanka"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressRegion": "Western Province",
      "addressLocality": "Colombo",
      // Add specific address when available
    },
    "geo": {
      "@type": "GeoCoordinates",
      // Add coordinates when available
      // "latitude": "6.9271",
      // "longitude": "79.8612"
    },
    "telephone": "+94", // Add phone number when available
    "email": "info@bpfa.lk", // Add email when available
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "22:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Martial Arts Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mixed Martial Arts (MMA) Training",
            "description": "Comprehensive MMA training combining striking and grappling techniques"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Boxing Classes",
            "description": "Professional boxing training for all skill levels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brazilian Jiu-Jitsu",
            "description": "Ground fighting and grappling martial art training"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kickboxing",
            "description": "High-energy kickboxing classes combining cardio and technique"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1",
      "bestRating": "5"
    },
    "priceRange": "$"
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Black Panther Fighting Academy",
    "alternateName": "BPFA",
    "url": "https://bpfa.lk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bpfa.lk/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
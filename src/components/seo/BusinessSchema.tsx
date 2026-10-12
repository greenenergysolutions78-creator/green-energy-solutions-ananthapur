const siteUrl = "https://www.greenenergysolutions.energy";

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Green Energy Solutions",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      telephone: "+91-92814-87878",
      email: "greenenergysolutions78@gmail.com",
      description: "Solar EPC and solar energy solutions provider in Ananthapur, Andhra Pradesh.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#5-85-1, Opp. T.V. Tower, Siva Sai Nagar",
        addressLocality: "Ananthapur",
        addressRegion: "Andhra Pradesh",
        postalCode: "515002",
        addressCountry: "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Green Energy Solutions",
      url: siteUrl,
      telephone: "+91-92814-87878",
      email: "greenenergysolutions78@gmail.com",
      image: `${siteUrl}/hero_solar.jpg`,
      priceRange: "$$",
      parentOrganization: {
        "@id": `${siteUrl}/#organization`
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "#5-85-1, Opp. T.V. Tower, Siva Sai Nagar",
        addressLocality: "Ananthapur",
        addressRegion: "Andhra Pradesh",
        postalCode: "515002",
        addressCountry: "IN"
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Andhra Pradesh, India"
        },
        {
          "@type": "City",
          name: "Ananthapur"
        }
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "09:00",
          closes: "19:00"
        }
      ]
    }
  ]
};

export default function BusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
}

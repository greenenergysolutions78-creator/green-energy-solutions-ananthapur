type ServiceSchemaProps = {
  name: string;
  description: string;
  serviceType: string;
  url: string;
};

export default function ServiceSchema({
  name,
  description,
  serviceType,
  url,
}: ServiceSchemaProps) {
  const siteUrl = "https://www.greenenergysolutions.energy";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${url}#service`,
    name,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Green Energy Solutions",
      url: siteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Andhra Pradesh, India",
    },
    url: `${siteUrl}${url}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

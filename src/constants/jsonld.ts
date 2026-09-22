import type { LocalBusiness, Organization, WebSite } from "schema-dts"

import { company, whatsapp } from "@/data/common.json"

const SITE = "https://amanilaundry.net"

export const organizationSchema: Organization = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "PT. Badiuzzaman Cipta Amani",
  sameAs: [
    "https://glints.com/id/companies/pt-badiuzzaman-cipta-amani/6d576fec-79db-4b96-a4cb-feebc88118c3",
    "https://www.instagram.com/badiuzzamanentrepreneur",
    "https://companieshouse.id/badiuzzaman-cipta-amani",
  ],
}

export const businessSchema: LocalBusiness = {
  "@type": "LocalBusiness",
  "@id": `${SITE}/#localbusiness`,
  name: company.name,
  description: company.description,
  image: `${SITE}/logo.png`,
  telephone: whatsapp.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruko Bumi Asri, Jl. Cikiray-Cijambu No. A6, Sukamanah",
    addressLocality: "Cisaat",
    addressRegion: "Jawa Barat",
    postalCode: "43152",
    addressCountry: "ID",
  },
  openingHours: "Mo-Su 08:00-20:00",
  parentOrganization: { "@id": `${SITE}/#organization` },
}

export const websiteSchema: WebSite = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: company.name,
}

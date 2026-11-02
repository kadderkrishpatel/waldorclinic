export interface ClinicItem {
  region: string;
  name: string;
  addressLines: string[];
  phone: string;
  phoneHref: string;
  mapsHref: string;
}

export interface InternationalData {
  eyebrow: string;
  heading: { before: string; highlight: string };
  description: string;
  clinics: ClinicItem[];
}

export const internationalData: InternationalData = {
  eyebrow: "NOW IN THE USA",
  heading: {
    before: "HydraGlass™",
    highlight: "Internationally",
  },
  description:
    "We’re proud to announce that HydraGlass™ is now offered at selected medical spas in the US.",
  clinics: [
    {
      region: "HONOLULU · HAWAII",
      name: "Kaia House of Esthetics",
      addressLines: [
        "835 Kawaiaha‘o St, Suite 1",
        "Honolulu, HI 96813",
        "United States",
      ],
      phone: "+1 808-356-9830",
      phoneHref: "tel:+18083569830",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Kaia+House+of+Esthetics+835+Kawaiaha%CA%BBo+St+Honolulu+HI+96813",
    },
    {
      region: "SAN JUAN · PUERTO RICO",
      name: "Oceanic Clinic",
      addressLines: [
        "Oriental Tower, Suite 1005",
        "290 Ave. Jesús T. Piñero",
        "San Juan, PR 00918, Puerto Rico",
      ],
      phone: "+1 787-773-1494",
      phoneHref: "tel:+17877731494",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Oceanic+Clinic+290+Ave+Jes%C3%BAs+T+Pi%C3%B1ero+San+Juan+PR+00918",
    },
  ],
};

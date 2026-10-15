export interface OfficeDetails {
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
  telephone: string;
  email: string;
  businessHours: string;
  isPlaceholder?: boolean;
}

export const contactData = {
  corporateOffice: {
    name: "PROMETALLIK Head Office",
    streetAddress: "Village - Gopali, PO - Salua, PS - Kharagpur, Near IIT-Kharagpur Tea Garden",
    city: "Kolkata",
    state: "West Bengal",
    pinCode: "721145",
    country: "India",
    telephone: "+91 7439 777 074",
    email: "info@prometallik.com",
    salesEmail: "sales@prometallik.com",
    businessHours: "Monday – Friday: 09:00 – 18:00 IST",
    isPlaceholder: false,
  } as OfficeDetails,

  
plantFacility: {
  name: "PROMETALLIK Advanced Materials Manufacturing Plant",
  streetAddress:
    "Village - Gopali, PO - Salua, PS - Kharagpur, Near IIT-Kharagpur Tea Garden",
  city: "Kharagpur",
  state: "Paschim Medinipur, West Bengal",
  pinCode: "721145",
  country: "India",
  telephone: "+91 7439 777 074",
  email: "admin@prometallik.com",
  businessHours: "Monday – Saturday: 08:30 – 19:00 IST (Continuous Shifts)",
  isPlaceholder: false,
},


  departments: [
    {
      role: "International Sales & RFQ",
      email: "export@prometallik.com",
      availability: "Worldwide Time Zones Supported",
    },
    {
      role: "Technical Assays & Laboratory Data",
      email: "technical@prometallik.com",
      availability: "Batch COA & MSDS Inquiries",
    },
    {
      role: "Procurement & Secondary Metal Recycling",
      email: "procurement@prometallik.com",
      availability: "Feedstock & Scrap Reclamation",
    },
  ],

  map: {
    embedUrlEnvVar: "NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL",
    defaultSearchUrl: "https://maps.google.com/?q=Kolkata,+West+Bengal,+India",
    coordinates: {
      latitude: "22.5726° N",
      longitude: "88.3639° E",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    placeholderTitle: "PROMETALLIK Kolkata Facilities",
    placeholderNote:
      "Strategic metallurgical operations located in Kolkata, West Bengal with direct access to Syama Prasad Mookerjee Port & Haldia deep-water export docks.",
  },
};

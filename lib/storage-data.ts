export interface StorageUnit {
  size: string
  sqft: string
  price: string
  description: string
  items: string[]
}

export interface StorageLocation {
  id: string
  name: string
  address: string
  phone: string
  hours: string
  accessHours: string
  description: string
  features: string[]
  unitSizes: StorageUnit[]
  videoUrl: string
  region: "us" | "canada"
}

export const allStorageLocations: StorageLocation[] = [
  // US Locations
  {
    id: "california-main",
    region: "us",
    name: "California Main Storage",
    address: "123 Storage Lane, Sacramento, CA 95000",
    phone: "(530) 742-2508",
    hours: "Monday-Saturday: 9AM-5PM",
    accessHours: "6AM-8PM Daily",
    description:
      "Our flagship location featuring state-of-the-art security systems, climate-controlled units, and professional customer service.",
    features: [
      "Individual drive-up units",
      "24-hour digital video surveillance",
      "Personal security passcode access",
      "Resident manager on-site",
      "Climate-controlled units available",
      "Ground level storage units",
    ],
    unitSizes: [
      {
        size: "5x10x8",
        sqft: "50 sq ft",
        price: "$65/month",
        description: "Perfect for small apartment contents and personal items.",
        items: ["Beds, couch, chairs", "Small items and boxes", "Outdoor furniture"],
      },
      {
        size: "10x10x10",
        sqft: "100 sq ft",
        price: "$105/month",
        description: "Great for one bedroom apartment contents.",
        items: ["Bedroom furniture", "Business inventory", "Approximately 1 ton truck load"],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "california-north",
    region: "us",
    name: "North California Storage",
    address: "456 Storage Ave, Redding, CA 96001",
    phone: "(530) 555-0123",
    hours: "Tuesday-Saturday: 9AM-5PM",
    accessHours: "6AM-8PM Daily",
    description: "Convenient northern location with RV and boat storage capabilities.",
    features: ["RV and boat storage", "Wide driveways", "24/7 security monitoring", "Individual unit alarms"],
    unitSizes: [
      {
        size: "5x10x8",
        sqft: "50 sq ft",
        price: "$60/month",
        description: "Compact storage for personal items.",
        items: ["Personal belongings", "Small furniture", "Seasonal items"],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "nevada-reno",
    region: "us",
    name: "Reno Storage Center",
    address: "789 Storage Blvd, Reno, NV 89501",
    phone: "(775) 555-0456",
    hours: "Monday-Saturday: 8AM-6PM",
    accessHours: "24/7 Access Available",
    description: "Full-service storage facility with 24/7 access and moving supplies.",
    features: [
      "24/7 access available",
      "Moving supplies on-site",
      "Climate-controlled units",
      "Professional security system",
    ],
    unitSizes: [
      {
        size: "10x15x10",
        sqft: "150 sq ft",
        price: "$125/month",
        description: "Perfect for multi-bedroom home contents.",
        items: ["2-3 bedroom contents", "Business storage", "Large equipment"],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "oregon-portland",
    region: "us",
    name: "Portland Storage Hub",
    address: "321 Storage St, Portland, OR 97201",
    phone: "(503) 555-0789",
    hours: "Monday-Friday: 9AM-6PM, Saturday: 9AM-4PM",
    accessHours: "6AM-9PM Daily",
    description: "Modern facility with climate control and business storage solutions.",
    features: [
      "Business storage solutions",
      "Climate-controlled units",
      "Loading dock access",
      "Professional customer service",
    ],
    unitSizes: [
      {
        size: "10x20x10",
        sqft: "200 sq ft",
        price: "$155/month",
        description: "Large storage for household or business contents.",
        items: ["4 bedroom home contents", "Commercial inventory", "Large furniture sets"],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "washington-seattle",
    region: "us",
    name: "Seattle Storage Solutions",
    address: "654 Storage Way, Seattle, WA 98101",
    phone: "(206) 555-0321",
    hours: "Monday-Saturday: 9AM-5PM",
    accessHours: "6AM-8PM Daily",
    description: "Premium storage facility in the heart of Seattle with premium security.",
    features: ["Premium security system", "Downtown location", "Valet storage service", "Climate-controlled units"],
    unitSizes: [
      {
        size: "5x5x8",
        sqft: "25 sq ft",
        price: "$85/month",
        description: "Compact urban storage solution.",
        items: ["Closet contents", "Small furniture", "Document storage"],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  // Canada Locations
  {
    id: "vancouver-storage",
    region: "canada",
    name: "Vancouver Storage Center",
    address: "123 Storage Road, Vancouver, BC V6B 1A1",
    phone: "(604) 555-0147",
    hours: "Monday-Saturday: 9AM-5PM",
    accessHours: "6AM-8PM Daily",
    description: "Premier Canadian location with bilingual staff and climate-controlled units.",
    features: [
      "Bilingual customer service",
      "Climate-controlled units",
      "Mountain view location",
      "24/7 security monitoring",
    ],
    unitSizes: [
      {
        size: "5x10x8",
        sqft: "50 sq ft",
        price: "$85 CAD/month",
        description: "Perfect for apartment contents and personal items.",
        items: ["Apartment furniture", "Personal belongings", "Seasonal items"],
      },
      {
        size: "10x10x10",
        sqft: "100 sq ft",
        price: "$125 CAD/month",
        description: "Ideal for home contents and business storage.",
        items: ["Home furniture", "Business inventory", "Large appliances"],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "toronto-storage",
    region: "canada",
    name: "Toronto Storage Hub",
    address: "456 Storage Drive, Toronto, ON M5V 1A1",
    phone: "(416) 555-0258",
    hours: "Monday-Friday: 9AM-6PM, Saturday: 9AM-4PM",
    accessHours: "6AM-9PM Daily",
    description: "Full-service storage facility serving the Greater Toronto Area.",
    features: ["GTA coverage", "Extended access hours", "Moving truck rental", "Professional packing services"],
    unitSizes: [
      {
        size: "10x15x10",
        sqft: "150 sq ft",
        price: "$165 CAD/month",
        description: "Large storage for multi-bedroom homes.",
        items: ["Multi-bedroom contents", "Commercial storage", "Large furniture"],
      },
      {
        size: "10x20x10",
        sqft: "200 sq ft",
        price: "$195 CAD/month",
        description: "Extra large storage for homes and businesses.",
        items: ["Large home contents", "Business equipment", "Vehicle storage"],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export const getLocationsByRegion = (region: "us" | "canada") => {
  return allStorageLocations.filter((location) => location.region === region)
}

export const getLocationById = (id: string) => {
  return allStorageLocations.find((location) => location.id === id)
}

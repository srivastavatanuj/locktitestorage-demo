import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Shield } from "lucide-react"

const storageLocations = {
  "california-main": {
    name: "California Main Storage",
    address: "123 Storage Lane, Sacramento, CA 95000",
    phone: "(530) 742-2508",
    hours: "Monday-Saturday: 9AM-5PM",
    accessHours: "6AM-8PM Daily",
    description:
      "Our flagship location featuring state-of-the-art security systems, climate-controlled units, and professional customer service. Located in the heart of Sacramento with easy highway access.",
    features: [
      "Individual drive-up units",
      "24-hour digital video surveillance",
      "Personal security passcode access",
      "Resident manager on-site",
      "Climate-controlled units available",
      "Ground level storage units",
      "Professional customer service",
      "Secure and clean facilities",
    ],
    unitSizes: [
      {
        size: "5x10x8",
        sqft: "50 sq ft",
        price: "$65/month",
        description:
          "Perfect for storing contents of a small one-bedroom apartment including appliances, plus some boxes and small furniture.",
        items: ["Beds, couch, chairs, chest of drawers", "Small items and boxes", "Outdoor furniture"],
      },
      {
        size: "7x10x8",
        sqft: "70 sq ft",
        price: "$85/month",
        description:
          "Ideal for apartment contents excluding appliances but including queen size bed, table and chairs, dresser, sofa, chair.",
        items: [
          "Extra office or home furnishings",
          "Large sports equipment",
          "Studio apartment contents",
          "1-2 cargo van loads",
        ],
      },
      {
        size: "10x10x10",
        sqft: "100 sq ft",
        price: "$105/month",
        description:
          "Great for storing contents of a large one or two bedroom apartment including appliances, beds, entertainment center, sofa, table and chairs.",
        items: ["Small to large one bedroom apartment", "Business inventory storage", "Approximately 1 ton truck load"],
      },
      {
        size: "10x15x10",
        sqft: "150 sq ft",
        price: "$135/month",
        description:
          "Perfect for contents of a two to three bedroom home including appliances, garage or storage shed items, regular household furniture.",
        items: [
          "2 bedroom apartment or townhouse",
          "Business inventory and records storage",
          "Large tools and equipment",
          "4-5 ton truck load",
        ],
      },
      {
        size: "10x20x10",
        sqft: "200 sq ft",
        price: "$165/month",
        description:
          "Ideal for contents of a four-bedroom home including appliances, beds, household furniture, garage items, bicycles and 50 boxes.",
        items: [
          "Small business requiring drive-up access",
          "House contents including appliances",
          "Approximately 6 ton truck load",
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  "california-north": {
    name: "North California Storage",
    address: "456 Storage Ave, Redding, CA 96001",
    phone: "(530) 555-0123",
    hours: "Tuesday-Saturday: 9AM-5PM",
    accessHours: "6AM-8PM Daily",
    description:
      "Convenient northern California location with excellent access for RV and boat storage. Features wide driveways and easy maneuvering for large vehicles.",
    features: [
      "RV and boat storage available",
      "Wide driveways for easy access",
      "24/7 security monitoring",
      "Individual unit alarms",
      "On-site management",
      "Moving supplies available",
    ],
    unitSizes: [
      {
        size: "5x10x8",
        sqft: "50 sq ft",
        price: "$60/month",
        description: "Compact storage for personal items and small furniture.",
        items: ["Personal belongings", "Small furniture", "Seasonal items"],
      },
      {
        size: "10x20x10",
        sqft: "200 sq ft",
        price: "$150/month",
        description: "Large storage space perfect for household contents.",
        items: ["Full household contents", "Large furniture", "Multiple room contents"],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // Add other locations as needed...
}

interface PageProps {
  params: {
    locationId: string
  }
}

export default function StorageLocationPage({ params }: PageProps) {
  const location = storageLocations[params.locationId as keyof typeof storageLocations]

  if (!location) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{location.name}</h1>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">{location.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">{location.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p className="text-gray-600">{location.hours}</p>
                <p className="text-sm text-gray-500">Access: {location.accessHours}</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700">{location.description}</p>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Facility Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Facility Tour</h2>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={location.videoUrl}
              title={`${location.name} Virtual Tour`}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>

        {/* Unit Sizes Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Unit Sizes</h2>
          <div className="grid gap-6">
            {location.unitSizes.map((unit, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-blue-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600">{unit.size}</CardTitle>
                      <p className="text-gray-600">{unit.sqft}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800">{unit.price}</div>
                      <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Reserve Now</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">{unit.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Perfect for:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {unit.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-700 mb-6">
            Contact us today to reserve your storage unit or schedule a tour of our facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Call {location.phone}
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

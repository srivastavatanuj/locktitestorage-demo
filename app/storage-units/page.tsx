"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Clock } from "lucide-react"

const storageLocations = {
  us: [
    {
      id: "california-main",
      name: "California Main Storage",
      address: "123 Storage Lane, Sacramento, CA 95000",
      phone: "(530) 742-2508",
      hours: "Mon-Sat: 9AM-5PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Our flagship location with state-of-the-art security and climate-controlled units.",
    },
    {
      id: "california-north",
      name: "North California Storage",
      address: "456 Storage Ave, Redding, CA 96001",
      phone: "(530) 555-0123",
      hours: "Tue-Sat: 9AM-5PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Convenient northern location with drive-up access and RV storage.",
    },
    {
      id: "nevada-reno",
      name: "Reno Storage Center",
      address: "789 Storage Blvd, Reno, NV 89501",
      phone: "(775) 555-0456",
      hours: "Mon-Sat: 8AM-6PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Full-service storage facility with 24/7 access and moving supplies.",
    },
    {
      id: "oregon-portland",
      name: "Portland Storage Hub",
      address: "321 Storage St, Portland, OR 97201",
      phone: "(503) 555-0789",
      hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Modern facility with climate control and business storage solutions.",
    },
    {
      id: "washington-seattle",
      name: "Seattle Storage Solutions",
      address: "654 Storage Way, Seattle, WA 98101",
      phone: "(206) 555-0321",
      hours: "Mon-Sat: 9AM-5PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Premium storage facility in the heart of Seattle with premium security.",
    },
  ],
  canada: [
    {
      id: "vancouver-storage",
      name: "Vancouver Storage Center",
      address: "123 Storage Road, Vancouver, BC V6B 1A1",
      phone: "(604) 555-0147",
      hours: "Mon-Sat: 9AM-5PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Premier Canadian location with bilingual staff and climate-controlled units.",
    },
    {
      id: "toronto-storage",
      name: "Toronto Storage Hub",
      address: "456 Storage Drive, Toronto, ON M5V 1A1",
      phone: "(416) 555-0258",
      hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Full-service storage facility serving the Greater Toronto Area.",
    },
  ],
}

export default function StorageUnitsPage() {
  const [selectedRegion, setSelectedRegion] = useState<"us" | "canada">("us")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Storage Locations</h1>

        <div className="mb-8 flex justify-center">
          <div className="w-64">
            <Select value={selectedRegion} onValueChange={(value: "us" | "canada") => setSelectedRegion(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States ({storageLocations.us.length} locations)</SelectItem>
                <SelectItem value="canada">Canada ({storageLocations.canada.length} locations)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storageLocations[selectedRegion].map((location) => (
            <Link key={location.id} href={`/storage-units/${location.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="p-0">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 text-blue-600">{location.name}</CardTitle>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>{location.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span>{location.hours}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-3 text-sm">{location.description}</p>

                  <div className="mt-4 text-blue-600 font-medium text-sm">View Details & Unit Sizes →</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

"use client";
import { useParams, useRouter } from "next/navigation";
import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Shield } from "lucide-react";
import { storageUnitSizes } from "../data"; // Ensure this path is correct

const storageLocations = {
  "california-main": {
    name: "California Main Storage",
    address: "123 Storage Lane, Sacramento, CA 95000",
    phone: "(530) 742-2508",
    hours: "Monday-Saturday: 9AM-5PM",
    accessHours: "6AM-8PM Daily",
    description:
      "Our flagship location with state-of-the-art security systems, climate-controlled units, and professional customer service. Located in the heart of Sacramento with easy highway access.",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // Other locations...
};

interface PageProps {
  params: {
    locationId: string;
  };
}

export default function StorageLocationPage({ params }: PageProps) {
  const url = useParams();
  const id = url.locationId; // Fetch the ID from the URL query parameters

  const location = storageLocations["california-main"];

  const data = storageUnitSizes.filter((list) => list.id === Number(id))[0];

  if (!location) {
    notFound();
  }

  // Find the unit size data that matches the ID from the URL
  const unitSizeData = storageUnitSizes.find((unit) => unit.size === id);

  return (
    <div className=" mx-auto px-12 py-12">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {location.name}
          </h1>
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
                <p className="text-sm text-gray-500">
                  Access: {location.accessHours}
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-700">{location.description}</p>
        </div>

        {/* Video Section */}
        <div className="container mx-auto px-4 py-12">
          <div className=" mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={data.image}
                  alt={data.size}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-2xl text-gray-800">
                      {data.size}
                    </CardTitle>
                    <p className="text-lg text-gray-600">{data.sqft}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">
                      {data.price}
                    </p>
                    <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                      Reserve Now
                    </Button>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{data.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800">Usage:</h4>
                  <p className="text-gray-600">{data.usage}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800">
                    Perfect for:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {data.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mt-4">
                  <iframe
                    src={data.videolink.replace("watch?v=", "embed/")}
                    title={`${data.size} Video Tour`}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Facility Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {location.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="text-center bg-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-6">
          Contact us today to reserve your storage unit or schedule a tour of
          our facility.
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
  );
}

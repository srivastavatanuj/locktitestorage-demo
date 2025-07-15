"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { storageLocation, storageUnitSizes } from "./data";
import { useRouter } from "next/navigation";
// Sample data for a single location

export default function StorageUnitsPage() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Storage Location
        </h1>
        <Card className="mb-12">
          <CardHeader className="p-0">
            <img
              src={storageLocation.image}
              alt={storageLocation.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl mb-3 text-blue-600">
              {storageLocation.name}
            </CardTitle>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{storageLocation.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{storageLocation.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>{storageLocation.hours}</span>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              {storageLocation.description}
            </p>
          </CardContent>
        </Card>

        <div className="mt-12  mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Storage Unit Sizes
          </h2>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Storage Unit Sizes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {storageUnitSizes.map((unit, index) => (
                <Card
                  key={index}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => {
                    router.push(`/storage-units/${unit.id}`);
                  }}
                >
                  <CardHeader className="p-0">
                    <img
                      src={unit.image}
                      alt={unit.size}
                      className="w-full h-60 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-4">
                      Size: {unit.size}
                    </h3>
                    <p className="font-bold">Recommand for:</p>
                    <p className="text-gray-700 mt">{unit.usage}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

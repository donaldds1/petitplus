"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export function SearchSection() {
  const [activeTab, setActiveTab] = useState("neuf")

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <Button
          variant={activeTab === "neuf" ? "default" : "outline"}
          className={
            activeTab === "neuf"
              ? "bg-gray-800 hover:bg-gray-700 hover:scale-105 text-white px-6 py-2 rounded-lg transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
              : "border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 hover:scale-105 px-6 py-2 rounded-lg bg-transparent transition-all duration-200 ease-in-out hover:shadow-md"
          }
          onClick={() => setActiveTab("neuf")}
        >
          Neuf
        </Button>
        <Button
          variant={activeTab === "venu" ? "default" : "outline"}
          className={
            activeTab === "venu"
              ? "bg-gray-800 hover:bg-gray-700 hover:scale-105 text-white px-6 py-2 rounded-lg transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
              : "border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 hover:scale-105 px-6 py-2 rounded-lg bg-transparent transition-all duration-200 ease-in-out hover:shadow-md"
          }
          onClick={() => setActiveTab("venu")}
        >
          Venu
        </Button>
        <Button
          variant={activeTab === "occasion" ? "default" : "outline"}
          className={
            activeTab === "occasion"
              ? "bg-gray-800 hover:bg-gray-700 hover:scale-105 text-white px-6 py-2 rounded-lg transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
              : "border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 hover:scale-105 px-6 py-2 rounded-lg bg-transparent transition-all duration-200 ease-in-out hover:shadow-md"
          }
          onClick={() => setActiveTab("occasion")}
        >
          Occasion
        </Button>
        <div className="flex-1 relative">
          <Input
            placeholder="Que recherchez-vous ?"
            className="pl-4 pr-12 py-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
          />
          <Button
            size="sm"
            className="absolute right-1 top-1 bg-teal-600 hover:bg-teal-700 hover:scale-105 text-white px-4 py-1 rounded-md transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            <Search className="w-4 h-4 mr-1" />
            Rechercher
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const categories = [
  "Ordinateurs",
  "Téléphones",
  "Électronique",
  "Vêtements",
  "Maison & Jardin",
  "Véhicules",
  "Immobilier",
  "Mode & Beauté",
  "Sport & Loisirs",
  "Livres & Éducation",
  "Santé & Bien-être",
  "Plus",
]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("")

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            className={
              activeCategory === category
                ? "bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                : "border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 px-4 py-2 rounded-full text-sm bg-transparent transition-all duration-200 hover:shadow-md transform hover:scale-105"
            }
            onClick={() => setActiveCategory(activeCategory === category ? "" : category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}

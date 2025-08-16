import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Truck, Store } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    title: "iPhone 14 Pro 128GB - État Neuf",
    image: "/iphone-14-pro.png",
    price: "450,000",
    location: "Cotonou",
    condition: "neuf",
    delivery: "livraison",
    timeAgo: "2 jours",
    categories: ["Téléphones", "Électronique"],
  },
  {
    id: 2,
    title: "Ordinateur Portable Dell Inspiron 15",
    image: "/dell-laptop.png",
    price: "320,000",
    location: "Porto-Novo",
    condition: "occasion",
    delivery: "retrait",
    timeAgo: "16 heures",
    categories: ["Ordinateurs", "Électronique"],
  },
  {
    id: 3,
    title: "Réfrigérateur Samsung 300L - Excellent État",
    image: "/samsung-fridge.png",
    price: "180,000",
    location: "Parakou",
    condition: "occasion",
    delivery: "livraison",
    timeAgo: "1 semaine",
    categories: ["Électronique", "Maison & Jardin"],
  },
  {
    id: 4,
    title: "Vélo Électrique - Batterie Longue Durée",
    image: "/electric-bike.png",
    price: "275,000",
    location: "Abomey-Calavi",
    condition: "neuf",
    delivery: "retrait",
    timeAgo: "3 jours",
    categories: ["Véhicules", "Sport & Loisirs"],
  },
  {
    id: 5,
    title: "Climatiseur LG 1.5CV - Garantie 2 ans",
    image: "/lg-ac.png",
    price: "195,000",
    location: "Bohicon",
    condition: "neuf",
    delivery: "livraison",
    timeAgo: "5 jours",
    categories: ["Électronique", "Maison & Jardin"],
  },
  {
    id: 6,
    title: "Canapé en Cuir 3 Places - Très Bon État",
    image: "/leather-sofa.png",
    price: "125,000",
    location: "Natitingou",
    condition: "occasion",
    delivery: "retrait",
    timeAgo: "1 semaine",
    categories: ["Maison & Jardin", "Mode & Beauté"],
  },
]

export function HelpRequestGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-12">
      {products.map((product) => (
        <Link key={product.id} href={`/produit/${product.id}`}>
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md">
            <div className="relative overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-3 left-3">
                {product.condition === "neuf" && (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-lg">Neuf</Badge>
                )}
                {product.condition === "occasion" && (
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-lg">Occasion</Badge>
                )}
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                  {product.delivery === "livraison" ? (
                    <Truck className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Store className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                <span className="text-sm font-medium text-gray-500">FCFA</span>
              </div>

              <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
                {product.title}
              </h3>

              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{product.location}</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  {product.delivery === "livraison" ? (
                    <>
                      <Truck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-xs font-medium text-emerald-600">Livraison disponible</span>
                    </>
                  ) : (
                    <>
                      <Store className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs font-medium text-blue-600">Retrait en boutique</span>
                    </>
                  )}
                </div>
                <span className="text-xs text-gray-400 font-medium">Immédiatement</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

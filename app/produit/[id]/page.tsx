"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Share2, MapPin, Truck, Store, Play, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Données de démonstration
const productData = {
  id: 1,
  title: "iPhone 14 Pro Max 256GB",
  price: "850,000",
  condition: "Neuf",
  location: "Cotonou, Littoral",
  seller: "TechStore Bénin",
  images: ["/iphone-14-pro.png", "/iphone-14-pro-back.png", "/iphone-14-pro-side.png", "/placeholder-k0h0z.png"],
  videoUrl: "/iphone-14-pro-demo-thumbnail.png",
  description: `iPhone 14 Pro Max flambant neuf, encore sous garantie Apple.

Caractéristiques :
• Écran Super Retina XDR de 6,7 pouces
• Puce A16 Bionic ultra-rapide
• Système de caméra Pro avec téléobjectif 3x
• Capacité de stockage de 256 GB
• Résistance à l'eau IP68
• Compatible 5G

Inclus dans la boîte :
• iPhone 14 Pro Max
• Câble USB-C vers Lightning
• Documentation

Garantie Apple de 1 an incluse. Facture d'achat fournie.`,
  deliveryType: "Livraison disponible",
  whatsappNumber: "+22997123456",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Bonjour, je suis intéressé(e) par votre ${productData.title} à ${productData.price} FCFA.`,
    )
    window.open(`https://wa.me/${productData.whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFavorite(!isFavorite)}
              className="text-gray-600 hover:text-red-500"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images et Vidéo */}
          <div className="space-y-4">
            {/* Image principale */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img
                src={productData.images[selectedImage] || "/placeholder.svg"}
                alt={productData.title}
                className="w-full h-96 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">{productData.condition}</Badge>
            </div>

            {/* Miniatures */}
            <div className="grid grid-cols-4 gap-2">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-amber-500" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Vue ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Section Vidéo */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Vidéo de démonstration</h3>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={productData.videoUrl || "/placeholder.svg"}
                    alt="Aperçu vidéo"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full bg-white/90 text-gray-900 hover:bg-white">
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informations produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{productData.title}</h1>
              <div className="text-3xl font-bold text-amber-600 mb-4">{productData.price} FCFA</div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{productData.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  {productData.deliveryType === "Livraison disponible" ? (
                    <Truck className="w-4 h-4" />
                  ) : (
                    <Store className="w-4 h-4" />
                  )}
                  <span>{productData.deliveryType}</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                Vendu par <span className="font-medium text-gray-900">{productData.seller}</span>
              </div>
            </div>

            {/* Bouton WhatsApp */}
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Continuer sur WhatsApp
            </Button>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Description</h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">{productData.description}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

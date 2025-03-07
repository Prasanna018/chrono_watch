"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWishlist } from "@/components/wishlist-provider"
import { watchData } from "@/lib/product-data"

export default function ProductDetailPage() {
  const params = useParams()
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()
  const [quantity, setQuantity] = useState(1)

  // Find the product by ID
  const product = watchData.find((p) => p.id === params.id)

  // If product not found, show 404
  if (!product) {
    notFound()
  }

  const isWishlisted = isInWishlist(product.id)

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <Link
        href="/products"
        className="flex items-center text-muted-foreground mb-8 hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-md border cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center mt-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          <p className="text-3xl font-bold mb-4">${product.price.toFixed(2)}</p>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="space-y-6">
            {/* Quantity Selector */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" size="lg">
                Add to Cart
              </Button>
              <Button variant={isWishlisted ? "destructive" : "outline"} size="lg" onClick={handleWishlistToggle}>
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>

            {/* Shipping & Returns */}
            <div className="border-t border-b py-4 space-y-3">
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>2 year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-6">
            <div className="prose max-w-none">
              <p>
                {product.longDescription ||
                  `The ${product.name} is a testament to fine craftsmanship and attention to detail. 
                This exquisite timepiece combines traditional watchmaking techniques with modern design elements to create a watch 
                that is both functional and stylish.`}
              </p>
              <p>
                Crafted with precision, this watch features a durable case that houses a reliable movement, ensuring
                accurate timekeeping for years to come. The dial is protected by scratch-resistant crystal, and the
                watch is water-resistant, making it suitable for everyday wear.
              </p>
              <p>
                Whether you're dressing up for a special occasion or going about your daily activities, this watch adds
                a touch of elegance to any outfit. It's more than just a timekeeping device; it's a statement piece that
                reflects your appreciation for quality and style.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-b pb-2">
                <span className="font-medium">Case Material:</span> Stainless Steel
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Movement:</span> Automatic
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Case Diameter:</span> 42mm
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Water Resistance:</span> 100m
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Crystal:</span> Sapphire
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Strap Material:</span> Genuine Leather
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Dial Color:</span> Black
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Warranty:</span> 2 Years
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-6">
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${j < 4 + (i % 2) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">John Doe</span>
                    <span className="text-muted-foreground text-sm ml-2">• 2 months ago</span>
                  </div>
                  <p>
                    {i === 0
                      ? "Absolutely love this watch! The quality is exceptional and it looks even better in person. Highly recommend!"
                      : i === 1
                        ? "Great timepiece with excellent craftsmanship. The attention to detail is impressive and it keeps perfect time."
                        : "This watch exceeded my expectations. The design is elegant and it's very comfortable to wear all day."}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


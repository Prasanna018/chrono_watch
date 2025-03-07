"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "./wishlist-provider"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isHovered, setIsHovered] = useState(false)

  const isWishlisted = isInWishlist(product.id)

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mt-3">
          <h3 className="font-medium text-sm">{product.name}</h3>
          <p className="text-muted-foreground text-sm">{product.category}</p>
          <p className="font-semibold mt-1">${product.price.toFixed(2)}</p>
        </div>
      </Link>

      {/* Wishlist button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 bg-background/80 hover:bg-background/90 z-10"
        onClick={handleWishlistToggle}
      >
        <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
        <span className="sr-only">{isWishlisted ? "Remove from wishlist" : "Add to wishlist"}</span>
      </Button>

      {/* Quick actions */}
      <div
        className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Button variant="secondary" size="sm" className="mx-auto">
          Quick View
        </Button>
      </div>
    </div>
  )
}


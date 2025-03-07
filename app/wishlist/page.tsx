"use client"

import { useWishlist } from "@/components/wishlist-provider"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
  const { wishlist, clearWishlist } = useWishlist()

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      {wishlist.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              {wishlist.length} {wishlist.length === 1 ? "item" : "items"} in your wishlist
            </p>
            <Button variant="outline" onClick={clearWishlist}>
              Clear Wishlist
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">
            Add items you love to your wishlist. Review them anytime and easily move them to your cart.
          </p>
          <Button asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      )}
    </div>
  )
}


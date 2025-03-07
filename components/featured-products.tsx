"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "./product-card"
import { watchData } from "@/lib/product-data"

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProducts, setVisibleProducts] = useState(4)

  // Get featured products
  const featuredProducts = watchData.filter((product) => product.featured).slice(0, 8)

  // Update visible products based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1)
      } else if (window.innerWidth < 768) {
        setVisibleProducts(2)
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(3)
      } else {
        setVisibleProducts(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, featuredProducts.length - visibleProducts)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div></div> {/* Empty div for spacing */}
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={handlePrev} disabled={currentIndex === 0}>
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext} disabled={currentIndex >= maxIndex}>
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 md:px-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


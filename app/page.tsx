import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh]">
        <Image
          src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury watch hero image"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Timeless Elegance</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Discover our collection of premium watches crafted with precision and style
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/products">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              title="Luxury Watches"
              image="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1974&auto=format&fit=crop"
              link="/products?category=luxury"
            />
            <CategoryCard
              title="Smart Watches"
              image="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=1970&auto=format&fit=crop"
              link="/products?category=smart"
            />
            <CategoryCard
              title="Sports Watches"
              image="https://images.unsplash.com/photo-1595923533867-9a5b8353a2b7?q=80&w=1972&auto=format&fit=crop"
              link="/products?category=sports"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Timepieces</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The craftsmanship of my new watch is exceptional. Truly a piece of art on my wrist."
              author="James Wilson"
              role="Watch Enthusiast"
            />
            <TestimonialCard
              quote="I've been collecting watches for years, and the selection here is unmatched. Excellent service too!"
              author="Sarah Johnson"
              role="Collector"
            />
            <TestimonialCard
              quote="My smart watch from Chrono has transformed how I track my fitness. Stylish and functional!"
              author="Michael Chen"
              role="Fitness Trainer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=2070&auto=format&fit=crop"
          alt="Watch collection"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Time Waits for No One</h2>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Explore our exclusive collection and find the perfect timepiece that speaks to you
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/products">View All Watches</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function CategoryCard({ title, image, link }: { title: string; image: string; link: string }) {
  return (
    <Link href={link} className="group relative overflow-hidden rounded-lg h-80">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <span className="text-white/90 group-hover:underline">Explore Collection</span>
        </div>
      </div>
    </Link>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-sm">
      <p className="text-muted-foreground mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}


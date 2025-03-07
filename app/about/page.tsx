import type React from "react"
import Image from "next/image"
import { Clock, Award, Users, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Chrono</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Crafting timeless elegance since 1985. Our watches combine precision engineering with sophisticated design.
        </p>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 1985, Chrono began as a small workshop in Geneva, Switzerland, with a simple mission: to create
              watches that combine exceptional craftsmanship with timeless design.
            </p>
            <p>
              Our founder, Thomas Laurent, was a third-generation watchmaker who believed that a truly great timepiece
              should not only tell time accurately but should also tell a story about its wearer.
            </p>
            <p>
              Over the decades, we've grown from that small workshop to an international brand, but our commitment to
              quality and craftsmanship remains unchanged. Each Chrono watch is still designed with the same attention
              to detail and passion for excellence that defined our very first timepieces.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=2070&auto=format&fit=crop"
            alt="Watchmaker working on a watch"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon={<Clock className="h-10 w-10" />}
            title="Precision"
            description="We believe in the relentless pursuit of perfection in every timepiece we create."
          />
          <ValueCard
            icon={<Award className="h-10 w-10" />}
            title="Quality"
            description="We use only the finest materials and components in our watches, ensuring they stand the test of time."
          />
          <ValueCard
            icon={<Users className="h-10 w-10" />}
            title="Community"
            description="We value the community of watch enthusiasts who share our passion for exceptional timepieces."
          />
          <ValueCard
            icon={<Shield className="h-10 w-10" />}
            title="Integrity"
            description="We conduct our business with honesty, transparency, and respect for our customers and partners."
          />
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember
            name="Sarah Johnson"
            role="CEO & Creative Director"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
          />
          <TeamMember
            name="David Chen"
            role="Head of Design"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
          />
          <TeamMember
            name="Maria Rodriguez"
            role="Master Watchmaker"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Our Workshops */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Workshops</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556597249-cd6a997737df?q=80&w=2071&auto=format&fit=crop"
              alt="Geneva Workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-xl font-semibold text-white">Geneva, Switzerland</h3>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop"
              alt="Tokyo Workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-xl font-semibold text-white">Tokyo, Japan</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-muted p-6 rounded-lg text-center">
      <div className="text-primary mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="text-center">
      <div className="relative h-80 mb-4 rounded-lg overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "general",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions about our products or services? We're here to help. Fill out the form or contact us directly
            using the information below.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">support@chronowatches.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">
                  123 Watchmaker Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-4">Business Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Monday - Friday</div>
              <div>9:00 AM - 6:00 PM</div>
              <div>Saturday</div>
              <div>10:00 AM - 4:00 PM</div>
              <div>Sunday</div>
              <div>Closed</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {isSubmitted ? (
            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Send className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for contacting us. We'll get back to you as soon as possible.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Subject</Label>
                <RadioGroup value={formState.subject} onValueChange={handleRadioChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general">General Inquiry</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="support" id="support" />
                    <Label htmlFor="support">Product Support</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="order" id="order" />
                    <Label htmlFor="order">Order Status</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}


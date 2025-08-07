"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, MapPin, Phone, Mail, Star, CheckCircle } from "lucide-react"

export default function BookingPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [preferences, setPreferences] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name || !email) {
      setError("Please fill in all required fields.")
      return
    }

    try {
      // Using Formspree with your actual form ID
      const res = await fetch("https://formspree.io/f/xqalgqdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: `Booking request with preferences: ${preferences}`,
          subject: "New Booking Inquiry from Sky Yoga Website",
        }),
      })

      if (res.ok) {
        setIsSubmitted(true)
        setName("")
        setEmail("")
        setPreferences("")
      } else {
        setError("Failed to send booking request. Please try again or call directly.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-sage-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif text-sage-800 font-bold">
              Sky Yoga
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">
                Services
              </Link>
              <Link href="/videos" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">
                Videos
              </Link>
              <Link href="/resources" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">
                Resources
              </Link>
              <Link href="/contact" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">
                Contact
              </Link>
            </div>
            <Link href="/booking">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-6 font-medium">
                Book Session
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-serif text-sage-900 mb-6 font-bold">Book Your Session</h1>
            <p className="text-xl text-sage-700 leading-relaxed">
              Ready to begin your wellness journey? Choose from my available services and find a time that works for
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form and Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Client Details Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h2 className="text-3xl font-serif font-bold text-sage-900 mb-4">Thank You!</h2>
                      <p className="text-sage-700">
                        Your booking inquiry has been sent. I will get back to you shortly to confirm the details.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium"
                      >
                        Send Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif font-bold text-sage-900 mb-4">Client Details</h2>
                        <p className="text-sage-700">Please provide your information below.</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="preferences" className="block text-sm font-medium text-sage-700 mb-2">
                            Preferences or Notes
                          </label>
                          <Textarea
                            id="preferences"
                            placeholder="Let me know if you have any injuries, preferences, or goals for our session."
                            value={preferences}
                            onChange={(e) => setPreferences(e.target.value)}
                          />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button
                          type="submit"
                          className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium"
                        >
                          Submit Details
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg mt-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-sage-900 mb-4">Booking Policy</h3>
                  <p className="text-sage-700">A 25% non-refundable deposit is required to secure massage bookings.</p>
                </CardContent>
              </Card>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-sage-900 mb-4">Schedule Your Appointment</h2>
                    <p className="text-sage-700">Choose your preferred date and time from my available slots</p>
                  </div>

                  {/* Calendly Embed - Replace with actual Calendly URL */}
                  <div className="bg-sage-50 rounded-lg p-8 text-center min-h-[500px] flex items-center justify-center">
                    <div>
                      <Calendar className="w-16 h-16 text-sage-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-sage-700 mb-2">Booking Calendar</h3>
                      <p className="text-sage-600 mb-6">To complete your booking, please use one of the methods below:</p>

                      {/* Integration Instructions */}
                      <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
                        <h4 className="font-bold text-sage-900 mb-4">How to Book:</h4>
                        <div className="space-y-3 text-left">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-sage-600 mr-3" />
                            <span className="text-sage-700">Call: +1 925-518-2302</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-sage-600 mr-3" />
                            <span className="text-sage-700">Email: skylarkbembry@gmail.com</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 text-sage-600 mr-3" />
                            <span className="text-sage-700">Online booking coming soon!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Booking Methods */}
                  <div className="mt-8 text-center">
                    <p className="text-sage-600 mb-4">Prefer to book directly?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-serif mb-4 font-bold">Sky Yoga</div>
              <p className="text-sage-200 mb-4">Creating sacred spaces for healing, growth, and inner peace.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sage-200">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Yoga
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Meditation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Massage
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2 text-sage-200">
                <li>
                  <Link href="/videos" className="hover:text-white transition-colors">
                    Video Library
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Connect
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sage-200">
                <li>Phone: +1 925-518-2302</li>
                <li>Email: skylarkbembry@gmail.com</li>
                <li>Available 7 days a week</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sage-800 mt-8 pt-8 text-center text-sage-300">
            <p>&copy; 2024 Sky Yoga, Meditation & Massage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
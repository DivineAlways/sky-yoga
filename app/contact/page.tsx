"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Heart,
  Send,
  Calendar,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [interest, setInterest] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<string>("")

  const safeSetStatus = (message: any) => {
    // Ensure we only set strings to status
    if (typeof message === 'string') {
      setStatus(message)
    } else if (message && typeof message === 'object') {
      // If it's an object, try to extract a meaningful message
      if (message.message) {
        setStatus(String(message.message))
      } else if (message.error) {
        setStatus(String(message.error))
      } else {
        setStatus("An error occurred. Please try again.")
      }
    } else {
      setStatus("An error occurred. Please try again.")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    safeSetStatus("Sending...")

    try {
      // Using Formspree with your actual form ID
      const res = await fetch("https://formspree.io/f/xqalgqdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email: email,
          phone: phone,
          interest: interest,
          message: message,
        }),
      })

      if (res.ok) {
        safeSetStatus("Message sent successfully!")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setInterest("")
        setMessage("")
      } else {
        safeSetStatus("Failed to send message. Please try again or call directly.")
      }
    } catch (error) {
      console.error("Network Error:", error)
      safeSetStatus("Failed to send message. Please check your connection and try again.")
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
              <Link href="/contact" className="text-sage-900 font-bold">
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
      <section className="pt-32 pb-16 lg:pb-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-sage-900 mb-4 lg:mb-6 font-bold">Let's Connect</h1>
            <p className="text-lg lg:text-xl text-sage-700 leading-relaxed">
              I'd love to hear from you. Whether you have questions about my services, want to discuss your wellness
              goals, or simply need guidance on your journey, I'm here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 lg:mb-16">
            {/* Phone */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6 lg:p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-sage-100 rounded-full mb-4 lg:mb-6">
                <Phone className="w-6 h-6 lg:w-8 lg:h-8 text-sage-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif text-sage-900 mb-3 lg:mb-4 font-bold">Call Me</h3>
              <p className="text-sage-700 mb-4 text-sm lg:text-base">
                Ready to book or have questions? Give me a call for immediate assistance.
              </p>
              <div className="text-base lg:text-lg font-bold text-sage-600 mb-4 break-words">+1 925-518-2302</div>
              <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-4 lg:px-6 font-medium text-sm lg:text-base w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </Card>

            {/* Email */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6 lg:p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-sage-100 rounded-full mb-4 lg:mb-6">
                <Mail className="w-6 h-6 lg:w-8 lg:h-8 text-sage-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif text-sage-900 mb-3 lg:mb-4 font-bold">Email Me</h3>
              <p className="text-sage-700 mb-4 text-sm lg:text-base">
                Prefer to write? Send me a detailed message and I'll respond within 24 hours.
              </p>
              <div className="text-base lg:text-lg font-bold text-sage-600 mb-4 break-words">skylarkbembry@gmail.com</div>
              <Button
                variant="outline"
                className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent rounded-full px-4 lg:px-6 font-medium text-sm lg:text-base w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </Card>

            {/* WhatsApp */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6 lg:p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-sage-100 rounded-full mb-4 lg:mb-6">
                <MessageCircle className="w-6 h-6 lg:w-8 lg:h-8 text-sage-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif text-sage-900 mb-3 lg:mb-4 font-bold">WhatsApp</h3>
              <p className="text-sage-700 mb-4 text-sm lg:text-base">
                Send me a message on WhatsApp for a quick response.
              </p>
              <div className="text-base lg:text-lg font-bold text-sage-600 mb-4 break-words">+1 925-518-2032</div>
              <Button
                variant="outline"
                className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent rounded-full px-4 lg:px-6 font-medium text-sm lg:text-base w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Me
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Studio Image */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="w-full">
              <div className="mb-6 lg:mb-8">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <MessageCircle className="w-5 h-5 text-sage-600" />
                  <span className="text-sage-600 font-medium">Send a Message</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-sage-900 mb-4 font-bold">Get in Touch</h2>
                <p className="text-base lg:text-lg text-sage-700">
                  Fill out the form below and I'll get back to you as soon as possible. I look forward to connecting
                  with you!
                </p>
              </div>

              <Card className="border-0 shadow-lg w-full">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-sage-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          className="border-sage-300 focus:border-sage-500 w-full"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-sage-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          className="border-sage-300 focus:border-sage-500 w-full"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-sage-300 focus:border-sage-500 w-full"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="border-sage-300 focus:border-sage-500 w-full"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-sage-700 mb-2">
                        I'm interested in:
                      </label>
                      <select
                        id="interest"
                        className="w-full px-3 py-2 border border-sage-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 text-sm sm:text-base"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                      >
                        <option value="">Select a service</option>
                        <option value="yoga">Yoga Classes</option>
                        <option value="meditation">Meditation Sessions</option>
                        <option value="massage">Massage Therapy</option>
                        <option value="combination">Combination of Services</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your wellness goals, any questions you have, or how I can best support you..."
                        rows={4}
                        className="border-sage-300 focus:border-sage-500 w-full resize-none"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full py-2.5 sm:py-3 font-medium text-sm sm:text-base">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  {status && typeof status === 'string' && status.length > 0 && (
                    <p className="text-xs sm:text-sm text-sage-600 mt-4 text-center">
                      {String(status)}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-sage-600 mt-4 text-center">
                    I typically respond within 24 hours. For urgent matters, please call directly.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Studio Image & Info */}
            <div className="mt-8 lg:mt-0">
              <div className="relative mb-6 lg:mb-8">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Sky's peaceful yoga studio with goddess mural"
                  width={600}
                  height={500}
                  className="rounded-2xl lg:rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-16 h-16 lg:w-24 lg:h-24 bg-sage-200/50 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-20 h-20 lg:w-32 lg:h-32 bg-rose-200/30 rounded-full blur-xl"></div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl lg:text-2xl font-serif text-sage-900 mb-3 lg:mb-4 font-bold">Follow My Journey</h3>
                  <p className="text-sage-700 mb-4 lg:mb-6 text-sm lg:text-base">
                    Stay connected and get daily inspiration on social media. I share practice tips, wellness insights,
                    and behind-the-scenes moments from the studio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent rounded-full text-xs sm:text-sm w-full sm:w-auto"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      @holistic_sky_wellness
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent rounded-full text-xs sm:text-sm w-full sm:w-auto"
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 mb-4 lg:mb-6">
              <Heart className="w-5 h-5 text-rose-500" />
              <span className="text-sage-600 font-medium text-sm lg:text-base">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-sage-900 mb-4 lg:mb-6 font-bold">Frequently Asked Questions</h2>
            <p className="text-lg lg:text-xl text-sage-700">Quick answers to help you get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm bg-sage-50">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base lg:text-lg font-bold text-sage-900 mb-3">Do I need experience to start?</h3>
                <p className="text-sage-700 text-sm lg:text-base">
                  Not at all! I welcome complete beginners and tailor each session to your current level. Everyone
                  starts somewhere, and I'm here to guide you safely on your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-sage-50">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base lg:text-lg font-bold text-sage-900 mb-3">What should I bring to my first session?</h3>
                <p className="text-sage-700 text-sm lg:text-base">
                  Just wear comfortable clothing you can move in. I provide all yoga mats, props, and equipment. For
                  massage sessions, I provide linens and oils.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-sage-50">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base lg:text-lg font-bold text-sage-900 mb-3">Do you offer online sessions?</h3>
                <p className="text-sage-700 text-sm lg:text-base">
                  Yes! I offer virtual yoga and meditation sessions via video call. This is perfect for those who prefer
                  to practice from home or have scheduling constraints.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-sage-50">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base lg:text-lg font-bold text-sage-900 mb-3">What's your cancellation policy?</h3>
                <p className="text-sage-700 text-sm lg:text-base">
                  I ask for 24 hours notice for cancellations. Life happens, and I'm understanding of genuine
                  emergencies. Let's just communicate openly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 lg:mb-6 font-bold">Ready to Begin Your Journey?</h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-sage-100 max-w-2xl mx-auto">
            I'm here to support you every step of the way. Whether you're ready to book or just want to chat about your
            wellness goals, I'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 rounded-full px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-medium w-full sm:w-auto"
              >
                <Calendar className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                Book Your First Session
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-sage-700 rounded-full px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-medium bg-transparent w-full sm:w-auto"
            >
              <Phone className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
              Call Me Now
            </Button>
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
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-sage-300 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-sage-300 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-sage-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sage-200">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Yoga Classes
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Meditation Sessions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Massage Therapy
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
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sage-200">
                <li>Phone: +1 925-518-2302</li>
                <li>Email: skylarkbembry@gmail.com</li>
                <li>123 Wellness Way</li>
                <li>Peaceful Valley, CA 9210</li>
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
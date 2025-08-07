import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, MapPin, Phone, Mail, Star } from "lucide-react"

export default function BookingPage() {
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

      {/* Booking Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Yoga Sessions */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                    <Users className="w-8 h-8 text-sage-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">Yoga Sessions</h3>
                  <p className="text-sage-700">Private and group yoga classes</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Private Session (60 min)</span>
                    <span className="font-bold text-sage-900">$85</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Private Session (90 min)</span>
                    <span className="font-bold text-sage-900">$120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Group Session (2-4 people)</span>
                    <span className="font-bold text-sage-900">$45/person</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-sage-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>60-90 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Studio or your location</span>
                  </div>
                </div>

                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  Book Yoga Session
                </Button>
              </CardContent>
            </Card>

            {/* Meditation Sessions */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                    <Star className="w-8 h-8 text-sage-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">Meditation</h3>
                  <p className="text-sage-700">Guided meditation and breathwork</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Private Session (45 min)</span>
                    <span className="font-bold text-sage-900">$65</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Private Session (60 min)</span>
                    <span className="font-bold text-sage-900">$85</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Group Session</span>
                    <span className="font-bold text-sage-900">$35/person</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-sage-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>45-60 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Studio, online, or your location</span>
                  </div>
                </div>

                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  Book Meditation
                </Button>
              </CardContent>
            </Card>

            {/* Massage Therapy */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                    <Calendar className="w-8 h-8 text-sage-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">Massage Therapy</h3>
                  <p className="text-sage-700">Therapeutic and relaxation massage</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Swedish Massage (60 min)</span>
                    <span className="font-bold text-sage-900">$95</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Deep Tissue (60 min)</span>
                    <span className="font-bold text-sage-900">$105</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Hot Stone (90 min)</span>
                    <span className="font-bold text-sage-900">$145</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-sage-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>60-120 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Studio or mobile service</span>
                  </div>
                </div>

                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  Book Massage
                </Button>
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
                          <span className="text-sage-700">Call: (555) 123-YOGA</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-sage-600 mr-3" />
                          <span className="text-sage-700">Email: hello@skyyoga.com</span>
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
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-sage-900 mb-4">Package Deals</h2>
            <p className="text-xl text-sage-700">Save more with our wellness packages</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Badge className="bg-sage-100 text-sage-800 mb-4">Popular</Badge>
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">Starter Package</h3>
                <div className="text-3xl font-bold text-sage-600 mb-4">$300</div>
                <p className="text-sage-700 mb-6">4 Yoga Sessions</p>
                <ul className="text-sm text-sage-600 space-y-2 mb-6">
                  <li>• Save $40 compared to individual sessions</li>
                  <li>• Valid for 3 months</li>
                  <li>• Mix and match session types</li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  Choose Package
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white">
                Best Value
              </Badge>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">Wellness Package</h3>
                <div className="text-3xl font-bold text-sage-600 mb-4">$280</div>
                <p className="text-sage-700 mb-6">Monthly Unlimited</p>
                <ul className="text-sm text-sage-600 space-y-2 mb-6">
                  <li>• Unlimited yoga and meditation</li>
                  <li>• 2 massage sessions included</li>
                  <li>• Priority booking</li>
                  <li>• 20% off additional services</li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  Choose Package
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Badge className="bg-sage-100 text-sage-800 mb-4">Premium</Badge>
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">Complete Wellness</h3>
                <div className="text-3xl font-bold text-sage-600 mb-4">$450</div>
                <p className="text-sage-700 mb-6">8 Sessions + 2 Massages</p>
                <ul className="text-sm text-sage-600 space-y-2 mb-6">
                  <li>• 6 yoga/meditation sessions</li>
                  <li>• 2 therapeutic massages</li>
                  <li>• Valid for 6 months</li>
                  <li>• Free wellness consultation</li>
                </ul>
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  Choose Package
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Policies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-sage-900 mb-8 text-center">Booking Information</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm bg-sage-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-sage-900 mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-sage-700">
                    <li>• Confirmation email within 24 hours</li>
                    <li>• Pre-session consultation for new clients</li>
                    <li>• All equipment provided for yoga/meditation</li>
                    <li>• Comfortable, private environment</li>
                    <li>• Personalized approach to your needs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-sage-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-sage-900 mb-4">Policies</h3>
                  <ul className="space-y-2 text-sage-700">
                    <li>• 24-hour cancellation policy</li>
                    <li>• Payment due at time of service</li>
                    <li>• Cash, card, and digital payments accepted</li>
                    <li>• Please arrive 10 minutes early</li>
                    <li>• Wear comfortable, breathable clothing</li>
                  </ul>
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
                <li>Phone: (555) 123-YOGA</li>
                <li>Email: hello@skyyoga.com</li>
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

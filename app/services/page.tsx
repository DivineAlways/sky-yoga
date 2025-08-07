import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Heart, Star, CheckCircle, Phone } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ServicesPage() {
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
              <Link href="/services" className="text-sage-900 font-bold">
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
            <h1 className="text-5xl md:text-6xl font-serif text-sage-900 mb-6 font-bold">My Services</h1>
            <p className="text-xl text-sage-700 leading-relaxed">
              Discover the healing practices that will support your journey to wellness, balance, and inner peace.
            </p>
          </div>
        </div>
      </section>

      {/* Yoga Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">
                  Yoga Offerings
                </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center space-x-2 mb-6">
                  <Users className="w-5 h-5 text-sage-600" />
                  <span className="text-sage-600 font-medium">Peru – In-Person Yoga</span>
                </div>
                <p className="text-lg text-sage-700 leading-relaxed mb-8">
                  Whether you're new to yoga or deepening your practice, I offer personalized instruction that honors
                  your body's wisdom and supports your unique journey. Each session is crafted to meet you exactly where
                  you are.
                </p>

                <div className="space-y-4 mb-8">
                  <Select>
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Drop-In Rates</SelectLabel>
                        <SelectItem value="30">30 soles per class</SelectItem>
                        <SelectItem value="50">50 soles per class</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Weekly Pass</SelectLabel>
                        <SelectItem value="400-week">400 soles</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Monthly Packages</SelectLabel>
                        <SelectItem value="400-month">4x/week: 400 soles/month</SelectItem>
                        <SelectItem value="300-month">3x/week: 300 soles/month</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <Link href="/booking">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-3 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Yoga Session
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Sky's yoga studio with beautiful goddess mural"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-200/50 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center space-x-2 mb-6">
                  <Users className="w-5 h-5 text-sage-600" />
                  <span className="text-sage-600 font-medium">US – Virtual Yoga (Only)</span>
                </div>
                <p className="text-lg text-sage-700 leading-relaxed mb-8">
                  Whether you're new to yoga or deepening your practice, I offer personalized instruction that honors
                  your body's wisdom and supports your unique journey. Each session is crafted to meet you exactly where
                  you are.
                </p>

                <div className="space-y-4 mb-8">
                    <Select>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Group Sessions</SelectLabel>
                                <SelectItem value="15">$15/person</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Virtual Private</SelectLabel>
                                <SelectItem value="50">$50/person</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <Link href="/booking">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-3 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Yoga Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Therapy */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">
                        Massage Therapy
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <div className="inline-flex items-center space-x-2 mb-6">
                                <Heart className="w-5 h-5 text-sage-600" />
                                <span className="text-sage-600 font-medium">Peru – In-Person Massage</span>
                            </div>
                            <p className="text-lg text-sage-700 leading-relaxed mb-8">
                                Experience the healing power of therapeutic touch in a sacred, peaceful environment. My massage
                                therapy combines technical skill with intuitive healing, addressing both physical tension and
                                energetic blockages.
                            </p>

                            <div className="space-y-4 mb-8">
                                <Select>
                                    <SelectTrigger className="w-[280px]">
                                        <SelectValue placeholder="Select a plan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Single Sessions</SelectLabel>
                                            <SelectItem value="150">60min: 150 soles</SelectItem>
                                            <SelectItem value="225">90min: 225 soles</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectLabel>Monthly Packages</SelectLabel>
                                            <SelectItem value="226">2x60min/month: 226 soles</SelectItem>
                                            <SelectItem value="338">2x90min/month: 338 soles</SelectItem>
                                            <SelectItem value="452">4x60min/month: 452 soles</SelectItem>
                                            <SelectItem value="675">4x90min/month: 675 soles</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Link href="/booking">
                                <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-3 font-medium">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Book Massage Session
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/studio-goddess-mural.jpg"
                                alt="Serene healing space for massage therapy"
                                width={600}
                                height={500}
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-200/50 rounded-full blur-xl"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">
                        Yoga & Massage Packages (Peru Only)
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <div className="inline-flex items-center space-x-2 mb-6">
                                <Heart className="w-5 h-5 text-sage-600" />
                                <span className="text-sage-600 font-medium">Peru – In-Person Packages</span>
                            </div>
                            <p className="text-lg text-sage-700 leading-relaxed mb-8">
                                Experience the healing power of therapeutic touch in a sacred, peaceful environment. My massage
                                therapy combines technical skill with intuitive healing, addressing both physical tension and
                                energetic blockages.
                            </p>

                            <div className="space-y-4 mb-8">
                                <Select>
                                    <SelectTrigger className="w-[280px]">
                                        <SelectValue placeholder="Select a plan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Packages</SelectLabel>
                                            <SelectItem value="485">Yoga + 60-min Massage: 485 soles</SelectItem>
                                            <SelectItem value="560">3x/week Yoga + 1x90-min Massage/month: 560 soles</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Link href="/booking">
                                <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-3 font-medium">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Book Package
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/studio-goddess-mural.jpg"
                                alt="Serene healing space for massage therapy"
                                width={600}
                                height={500}
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-200/50 rounded-full blur-xl"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 font-bold">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl mb-8 text-sage-100 max-w-2xl mx-auto">
            Choose the service that calls to you, or let's discuss a combination approach that addresses your unique
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 rounded-full px-8 py-4 text-lg font-medium"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Session
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sage-700 rounded-full px-8 py-4 text-lg font-medium bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ask Questions
              </Button>
            </Link>
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
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Leaf,
  Sparkles,
  Star,
  Calendar,
  Play,
  Instagram,
  Facebook,
  Mail,
  ArrowRight,
  Users,
  Clock,
} from "lucide-react"

export default function HomePage() {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-garden.jpg"
            alt="Sky in serene garden setting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/90 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-sage-600" />
              <span className="text-sage-800 font-medium">Find Your Inner Peace</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight font-bold drop-shadow-lg">
              Embrace Your
              <span className="block text-sage-200">Journey Within</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Discover the transformative power of yoga, meditation, and healing massage. Let me guide you on a path to
              wellness, balance, and inner harmony.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Session
                </Button>
              </Link>
              <Link href="/videos">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-sage-800 rounded-full px-8 py-4 text-lg font-medium bg-transparent shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore Videos
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 animate-float">
          <div className="w-16 h-16 bg-sage-200/30 rounded-full blur-sm"></div>
        </div>
        <div className="absolute bottom-32 left-10 animate-float-delayed">
          <div className="w-12 h-12 bg-rose-200/30 rounded-full blur-sm"></div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Heart className="w-5 h-5 text-rose-500" />
              <span className="text-sage-600 font-medium">Welcome to My Practice</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-8 font-bold">
              My Mission
            </h2>

            <p className="text-lg md:text-xl text-sage-700 leading-relaxed mb-8">
              My mission is to help others feel their best and live their healthiest lives—so their souls and spirits can truly thrive. Through compassionate massage therapy and mindful yoga, I empower individuals to reach their highest potential in this lifetime, encouraging them to feel energized, resilient, and ready to embrace life with confidence and purpose.
            </p>

            <Link href="/about">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-3 font-medium">
                Learn More About My Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Leaf className="w-5 h-5 text-sage-600" />
              <span className="text-sage-600 font-medium">My Offerings</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-4 font-bold">
              Services for Your Well-being
            </h2>
            <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto">
              Each service is designed to nurture your unique needs and support your journey toward balance and healing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Yoga */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Sky's yoga studio with beautiful goddess mural"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Yoga</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-sage-900 mb-3 font-bold">Yoga Practice</h3>
                <p className="text-sage-700 mb-4">
                  Flow through Vinyasa, find stillness in Hatha, or restore with gentle sequences. Each class honors
                  your body's wisdom.
                </p>
                <ul className="text-sm text-sage-600 space-y-1 mb-6">
                  <li>• Vinyasa Flow</li>
                  <li>• Hatha Yoga</li>
                  <li>• Restorative Yoga</li>
                  <li>• Private Sessions</li>
                </ul>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Meditation */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Peaceful meditation space with spiritual artwork"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Meditation</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-sage-900 mb-3 font-bold">Meditation</h3>
                <p className="text-sage-700 mb-4">
                  Cultivate inner peace through guided meditation, breathwork, and mindfulness practices tailored to
                  your experience level.
                </p>
                <ul className="text-sm text-sage-600 space-y-1 mb-6">
                  <li>• Guided Meditation</li>
                  <li>• Breathwork Sessions</li>
                  <li>• Mindfulness Training</li>
                  <li>• Group Workshops</li>
                </ul>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Massage */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Serene healing space for massage therapy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Massage</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-sage-900 mb-3 font-bold">Massage Therapy</h3>
                <p className="text-sage-700 mb-4">
                  Release tension and restore balance with therapeutic massage techniques designed to heal both body and
                  spirit.
                </p>
                <ul className="text-sm text-sage-600 space-y-1 mb-6">
                  <li>• Swedish Massage</li>
                  <li>• Deep Tissue</li>
                  <li>• Hot Stone Therapy</li>
                  <li>• Aromatherapy</li>
                </ul>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-8 h-8 mx-auto mb-3 text-sage-200" />
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-sage-200">Active Students</div>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-3 text-sage-200" />
              <div className="text-3xl font-bold mb-1">2000+</div>
              <div className="text-sage-200">Hours Taught</div>
            </div>
            <div>
              <Heart className="w-8 h-8 mx-auto mb-3 text-sage-200" />
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sage-200">Satisfaction Rate</div>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-3 text-sage-200" />
              <div className="text-3xl font-bold mb-1">5.0</div>
              <div className="text-sage-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-sage-600" />
              <span className="text-sage-600 font-medium">Client Love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-4 font-bold">What People Are Saying</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-white p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sage-400 text-sage-400" />
                ))}
              </div>
              <p className="text-sage-700 mb-4 italic text-lg">
                "Sky's yoga classes have transformed my relationship with my body. Her gentle guidance and authentic
                presence create such a safe, healing space."
              </p>
              <div className="font-bold text-sage-900">— Sarah M.</div>
              <div className="text-sm text-sage-600">Regular Student</div>
            </Card>

            <Card className="border-0 bg-white p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sage-400 text-sage-400" />
                ))}
              </div>
              <p className="text-sage-700 mb-4 italic text-lg">
                "The meditation sessions with Sky have been life-changing. I've found a peace I didn't know was
                possible. Truly grateful for her wisdom."
              </p>
              <div className="font-bold text-sage-900">— Michael R.</div>
              <div className="text-sm text-sage-600">Meditation Student</div>
            </Card>

            <Card className="border-0 bg-white p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sage-400 text-sage-400" />
                ))}
              </div>
              <p className="text-sage-700 mb-4 italic text-lg">
                "Sky's massage therapy is incredible. She has healing hands and an intuitive understanding of exactly
                what my body needs. Highly recommend!"
              </p>
              <div className="font-bold text-sage-900">— Emma L.</div>
              <div className="text-sm text-sage-600">Massage Client</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 font-bold">Ready to Begin Your Journey?</h2>
            <p className="text-lg md:text-xl mb-8 text-sage-100">
              Take the first step toward wellness, balance, and inner peace. I'm here to support you every step of the
              way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-white text-sage-700 hover:bg-sage-50 rounded-full px-8 py-4 text-lg font-medium"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your First Session
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-sage-700 rounded-full px-8 py-4 text-lg font-medium bg-transparent"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </Link>
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
              <p className="text-sage-200 mb-4">Guiding you on your journey to wellness, balance, and inner harmony.</p>
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
                <li>
                  <Link href="/booking" className="hover:text-white transition-colors">
                    Private Sessions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sage-200">
                <li>
                  <Link href="/videos" className="hover:text-white transition-colors">
                    Yoga Videos
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Meditation Guides
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Wellness Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sage-200">
                <li>
                  <Link href="/booking" className="hover:text-white transition-colors">
                    Book a Session
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Me
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About My Journey
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
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

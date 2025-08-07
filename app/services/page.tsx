import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Heart, Star, CheckCircle, Phone } from "lucide-react"

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

      {/* Yoga Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center space-x-2 mb-6">
                  <Users className="w-5 h-5 text-sage-600" />
                  <span className="text-sage-600 font-medium">Yoga Practice</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">
                  Yoga Classes & Private Sessions
                </h2>
                <p className="text-lg text-sage-700 leading-relaxed mb-8">
                  Whether you're new to yoga or deepening your practice, I offer personalized instruction that honors
                  your body's wisdom and supports your unique journey. Each session is crafted to meet you exactly where
                  you are.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Vinyasa Flow for dynamic movement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Hatha Yoga for strength and stability</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Restorative Yoga for deep relaxation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Prenatal & Postnatal specialized classes</span>
                  </div>
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

            {/* Yoga Pricing */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Private Session</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$85</div>
                  <p className="text-sage-700 mb-4">60 minutes of personalized instruction</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Customized to your needs</li>
                    <li>• All equipment provided</li>
                    <li>• Studio or your location</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Extended Session</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$120</div>
                  <p className="text-sage-700 mb-4">90 minutes for deeper practice</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Extended meditation time</li>
                    <li>• Deeper asana practice</li>
                    <li>• Breathwork integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Group Session</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$45</div>
                  <p className="text-sage-700 mb-4">Per person (2-4 people)</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Share with friends/family</li>
                    <li>• Build community</li>
                    <li>• Cost-effective option</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meditation Services */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Peaceful meditation space with spiritual artwork"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-200/50 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <Star className="w-5 h-5 text-sage-600" />
                  <span className="text-sage-600 font-medium">Meditation Practice</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">
                  Meditation & Mindfulness
                </h2>
                <p className="text-lg text-sage-700 leading-relaxed mb-8">
                  Learn to cultivate inner peace and presence through guided meditation practices. Whether you're a
                  complete beginner or looking to deepen your existing practice, I'll help you find the techniques that
                  resonate with your unique path.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Guided meditation for beginners</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Breathwork and pranayama techniques</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Mindfulness-based stress reduction</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Walking meditation in nature</span>
                  </div>
                </div>

                <Link href="/booking">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-3 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Meditation Session
                  </Button>
                </Link>
              </div>
            </div>

            {/* Meditation Pricing */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Introduction Session</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$65</div>
                  <p className="text-sage-700 mb-4">45 minutes for beginners</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Learn basic techniques</li>
                    <li>• Personalized guidance</li>
                    <li>• Take-home practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Deep Practice</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$85</div>
                  <p className="text-sage-700 mb-4">60 minutes of guided meditation</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Advanced techniques</li>
                    <li>• Breathwork integration</li>
                    <li>• Spiritual guidance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Group Meditation</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$35</div>
                  <p className="text-sage-700 mb-4">Per person group sessions</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Community practice</li>
                    <li>• Shared energy</li>
                    <li>• Monthly workshops</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center space-x-2 mb-6">
                  <Heart className="w-5 h-5 text-sage-600" />
                  <span className="text-sage-600 font-medium">Healing Touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Therapeutic Massage</h2>
                <p className="text-lg text-sage-700 leading-relaxed mb-8">
                  Experience the healing power of therapeutic touch in a sacred, peaceful environment. My massage
                  therapy combines technical skill with intuitive healing, addressing both physical tension and
                  energetic blockages.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Swedish massage for relaxation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Deep tissue for chronic tension</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Hot stone therapy for deep healing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sage-600 mr-3" />
                    <span className="text-sage-700">Aromatherapy integration</span>
                  </div>
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

            {/* Massage Pricing */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Swedish Massage</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$95</div>
                  <p className="text-sage-700 mb-4">60 minutes of relaxation</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Full body relaxation</li>
                    <li>• Stress relief focus</li>
                    <li>• Gentle, flowing strokes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Deep Tissue</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$105</div>
                  <p className="text-sage-700 mb-4">60 minutes of targeted work</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Chronic tension relief</li>
                    <li>• Muscle knot release</li>
                    <li>• Injury rehabilitation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sage-900 mb-2">Hot Stone Therapy</h3>
                  <div className="text-3xl font-bold text-sage-600 mb-4">$145</div>
                  <p className="text-sage-700 mb-4">90 minutes of deep healing</p>
                  <ul className="text-sm text-sage-600 space-y-2">
                    <li>• Heated stone placement</li>
                    <li>• Deep muscle relaxation</li>
                    <li>• Energy balancing</li>
                  </ul>
                </CardContent>
              </Card>
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

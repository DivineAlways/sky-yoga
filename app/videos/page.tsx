import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Clock, Users, Star, Calendar } from "lucide-react"

export default function VideosPage() {
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
              <Link href="/videos" className="text-sage-900 font-bold">
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
            <h1 className="text-5xl md:text-6xl font-serif text-sage-900 mb-6 font-bold">Video Library</h1>
            <p className="text-xl text-sage-700 leading-relaxed">
              Practice with me anytime, anywhere. Explore guided yoga flows, meditation sessions, and wellness tips to
              support your daily practice.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-sage-100 text-sage-800 mb-4">Featured Practice</Badge>
              <h2 className="text-3xl md:text-4xl font-serif text-sage-900 mb-4 font-bold">
                Morning Flow for Inner Peace
              </h2>
              <p className="text-lg text-sage-700">
                Start your day with this gentle 30-minute flow designed to awaken your body and center your mind.
              </p>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="relative aspect-video bg-sage-100">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Morning yoga flow practice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 text-sage-800 hover:bg-white rounded-full px-8 py-4 text-lg font-medium"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Watch Now
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4 inline mr-1" />
                  30 min
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Practice Categories</h2>
            <p className="text-xl text-sage-700">Find the perfect practice for your mood and schedule</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Yoga Flows */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Yoga flow practices"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent rounded-t-lg"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Yoga Flows</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-sage-900 mb-3 font-bold">Yoga Flows</h3>
                <p className="text-sage-700 mb-4">
                  Dynamic sequences that build strength, flexibility, and mindfulness through flowing movement.
                </p>
                <div className="flex items-center text-sm text-sage-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>15-60 minutes</span>
                  <Users className="w-4 h-4 ml-4 mr-2" />
                  <span>All levels</span>
                </div>
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  <Play className="w-4 h-4 mr-2" />
                  Browse Flows
                </Button>
              </CardContent>
            </Card>

            {/* Meditation */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Guided meditation sessions"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent rounded-t-lg"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Meditation</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-sage-900 mb-3 font-bold">Guided Meditations</h3>
                <p className="text-sage-700 mb-4">
                  Peaceful guided sessions to help you cultivate inner stillness and develop mindfulness.
                </p>
                <div className="flex items-center text-sm text-sage-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5-45 minutes</span>
                  <Users className="w-4 h-4 ml-4 mr-2" />
                  <span>Beginner friendly</span>
                </div>
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  <Play className="w-4 h-4 mr-2" />
                  Start Meditating
                </Button>
              </CardContent>
            </Card>

            {/* Wellness Tips */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Wellness and lifestyle tips"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent rounded-t-lg"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Wellness</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-sage-900 mb-3 font-bold">Wellness Tips</h3>
                <p className="text-sage-700 mb-4">
                  Short videos sharing insights on holistic wellness, self-care practices, and mindful living.
                </p>
                <div className="flex items-center text-sm text-sage-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>3-15 minutes</span>
                  <Users className="w-4 h-4 ml-4 mr-2" />
                  <span>Everyone</span>
                </div>
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Tips
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Videos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Recent Practices</h2>
            <p className="text-xl text-sage-700">New videos added weekly to support your journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Video 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Gentle evening yoga flow"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button className="bg-white/90 text-sage-800 hover:bg-white rounded-full">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">25 min</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sage-900 mb-2">Gentle Evening Flow</h3>
                <p className="text-sm text-sage-700 mb-3">Wind down with this calming sequence perfect for bedtime.</p>
                <div className="flex items-center justify-between text-xs text-sage-600">
                  <span>Beginner</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-sage-400 text-sage-400 mr-1" />
                    <span>4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Breathwork for anxiety"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button className="bg-white/90 text-sage-800 hover:bg-white rounded-full">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">12 min</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sage-900 mb-2">Breathwork for Calm</h3>
                <p className="text-sm text-sage-700 mb-3">Simple breathing techniques to reduce anxiety and stress.</p>
                <div className="flex items-center justify-between text-xs text-sage-600">
                  <span>All Levels</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-sage-400 text-sage-400 mr-1" />
                    <span>5.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Core strengthening yoga"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button className="bg-white/90 text-sage-800 hover:bg-white rounded-full">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">35 min</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sage-900 mb-2">Core Strength Flow</h3>
                <p className="text-sm text-sage-700 mb-3">
                  Build stability and strength with this focused core practice.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600">
                  <span>Intermediate</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-sage-400 text-sage-400 mr-1" />
                    <span>4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Morning meditation"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button className="bg-white/90 text-sage-800 hover:bg-white rounded-full">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">10 min</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sage-900 mb-2">Morning Meditation</h3>
                <p className="text-sm text-sage-700 mb-3">
                  Set positive intentions for your day with this guided practice.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600">
                  <span>Beginner</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-sage-400 text-sage-400 mr-1" />
                    <span>4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Hip opening sequence"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button className="bg-white/90 text-sage-800 hover:bg-white rounded-full">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">40 min</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sage-900 mb-2">Hip Opening Flow</h3>
                <p className="text-sm text-sage-700 mb-3">Release tension and create space with deep hip openers.</p>
                <div className="flex items-center justify-between text-xs text-sage-600">
                  <span>All Levels</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-sage-400 text-sage-400 mr-1" />
                    <span>4.7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video 6 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Self-care Sunday routine"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button className="bg-white/90 text-sage-800 hover:bg-white rounded-full">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">8 min</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sage-900 mb-2">Self-Care Sunday</h3>
                <p className="text-sm text-sage-700 mb-3">
                  Create a nurturing Sunday routine for mind, body, and soul.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600">
                  <span>Lifestyle</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-sage-400 text-sage-400 mr-1" />
                    <span>5.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 font-bold">Ready for Personal Guidance?</h2>
          <p className="text-xl mb-8 text-sage-100 max-w-2xl mx-auto">
            While these videos are a great start, nothing replaces the personalized attention of a private session.
            Let's work together to create a practice that's uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 rounded-full px-8 py-4 text-lg font-medium"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Private Session
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sage-700 rounded-full px-8 py-4 text-lg font-medium bg-transparent"
              >
                Ask About Classes
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

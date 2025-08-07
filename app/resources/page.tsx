import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, Download, Mail, Calendar, Heart, Leaf, Star, Clock, Users, Search } from "lucide-react"

export default function ResourcesPage() {
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
              <Link href="/resources" className="text-sage-900 font-bold">
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
            <h1 className="text-5xl md:text-6xl font-serif text-sage-900 mb-6 font-bold">Wellness Resources</h1>
            <p className="text-xl text-sage-700 leading-relaxed mb-8">
              Deepen your practice with guided meditations, wellness articles, and tools to support your journey toward
              inner peace and holistic health.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400 w-5 h-5" />
              <Input
                placeholder="Search resources..."
                className="pl-10 pr-4 py-3 rounded-full border-sage-300 focus:border-sage-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Explore by Category</h2>
            <p className="text-xl text-sage-700">Find exactly what you need for your wellness journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Meditation Guides */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-2">Meditation Guides</h3>
              <p className="text-sage-700 text-sm mb-4">Step-by-step instructions for various meditation practices</p>
              <Badge className="bg-sage-100 text-sage-800">12 Guides</Badge>
            </Card>

            {/* Wellness Blog */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-2">Wellness Blog</h3>
              <p className="text-sage-700 text-sm mb-4">Articles on holistic health, mindfulness, and self-care</p>
              <Badge className="bg-sage-100 text-sage-800">25 Articles</Badge>
            </Card>

            {/* Downloadables */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                <Download className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-2">Free Downloads</h3>
              <p className="text-sage-700 text-sm mb-4">PDFs, audio guides, and practice schedules</p>
              <Badge className="bg-sage-100 text-sage-800">8 Resources</Badge>
            </Card>

            {/* Newsletter */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-2">Newsletter</h3>
              <p className="text-sage-700 text-sm mb-4">Weekly wellness tips and practice inspiration</p>
              <Badge className="bg-sage-100 text-sage-800">Weekly</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Heart className="w-5 h-5 text-rose-500" />
              <span className="text-sage-600 font-medium">Most Popular</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Featured Resources</h2>
            <p className="text-xl text-sage-700">Our most loved and helpful resources for your practice</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Featured Guide */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Complete beginner's guide to meditation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Free Guide</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">
                  Complete Beginner's Guide to Meditation
                </h3>
                <p className="text-sage-700 mb-6">
                  A comprehensive 20-page guide covering everything you need to start your meditation practice. Includes
                  techniques, common challenges, and a 30-day practice schedule.
                </p>
                <div className="flex items-center text-sm text-sage-600 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>20 min read</span>
                  <Users className="w-4 h-4 ml-4 mr-2" />
                  <span>Beginner</span>
                  <Download className="w-4 h-4 ml-4 mr-2" />
                  <span>PDF Download</span>
                </div>
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free Guide
                </Button>
              </CardContent>
            </Card>

            {/* Featured Article */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Creating sacred space at home"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Blog Post</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">Creating Sacred Space in Your Home</h3>
                <p className="text-sage-700 mb-6">
                  Transform any corner of your home into a peaceful sanctuary for practice. Learn simple,
                  budget-friendly ways to create an environment that supports your meditation and yoga practice.
                </p>
                <div className="flex items-center text-sm text-sage-600 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>8 min read</span>
                  <Users className="w-4 h-4 ml-4 mr-2" />
                  <span>All levels</span>
                  <BookOpen className="w-4 h-4 ml-4 mr-2" />
                  <span>Lifestyle</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium rounded-full"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Leaf className="w-5 h-5 text-sage-600" />
              <span className="text-sage-600 font-medium">Wellness Blog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Latest Articles</h2>
            <p className="text-xl text-sage-700">Insights and inspiration for your wellness journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Article 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Morning rituals for mindful living"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Mindfulness</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-sage-900 mb-3">5 Morning Rituals for Mindful Living</h3>
                <p className="text-sage-700 mb-4 text-sm">
                  Start your day with intention and presence. Discover simple morning practices that set the tone for a
                  mindful, peaceful day.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600 mb-4">
                  <span>5 min read</span>
                  <span>Dec 15, 2024</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium rounded-full"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Yoga for emotional healing"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Healing</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-sage-900 mb-3">Yoga as a Path to Emotional Healing</h3>
                <p className="text-sage-700 mb-4 text-sm">
                  Explore how yoga practice can help process emotions, release trauma, and create space for healing and
                  growth.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600 mb-4">
                  <span>12 min read</span>
                  <span>Dec 8, 2024</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium rounded-full"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Breathwork for stress relief"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Breathwork</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-sage-900 mb-3">The Science of Breathwork for Stress Relief</h3>
                <p className="text-sage-700 mb-4 text-sm">
                  Learn evidence-based breathing techniques that activate your body's natural relaxation response and
                  reduce stress.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600 mb-4">
                  <span>8 min read</span>
                  <span>Dec 1, 2024</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium rounded-full"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Seasonal wellness practices"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Seasonal</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-sage-900 mb-3">Winter Wellness: Staying Balanced in the Cold</h3>
                <p className="text-sage-700 mb-4 text-sm">
                  Adapt your wellness routine for winter with warming practices, nourishing foods, and cozy self-care
                  rituals.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600 mb-4">
                  <span>10 min read</span>
                  <span>Nov 24, 2024</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium rounded-full"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Building a home yoga practice"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Practice</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-sage-900 mb-3">Building a Sustainable Home Yoga Practice</h3>
                <p className="text-sage-700 mb-4 text-sm">
                  Tips for creating consistency in your home practice, overcoming common obstacles, and staying
                  motivated.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600 mb-4">
                  <span>15 min read</span>
                  <span>Nov 17, 2024</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium rounded-full"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/studio-goddess-mural.jpg"
                  alt="Meditation myths debunked"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-sage-800 font-medium">Meditation</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-sage-900 mb-3">5 Meditation Myths That Keep You Stuck</h3>
                <p className="text-sage-700 mb-4 text-sm">
                  Debunking common misconceptions about meditation that prevent people from starting or deepening their
                  practice.
                </p>
                <div className="flex items-center justify-between text-xs text-sage-600 mb-4">
                  <span>7 min read</span>
                  <span>Nov 10, 2024</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent font-medium rounded-full"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Mail className="w-5 h-5 text-sage-600" />
              <span className="text-sage-600 font-medium">Stay Connected</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Weekly Wellness Newsletter</h2>
            <p className="text-xl text-sage-700 mb-8">
              Get weekly inspiration, practice tips, and exclusive resources delivered to your inbox. Join our community
              of mindful practitioners.
            </p>

            <Card className="border-0 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Enter your email address"
                    className="flex-1 border-sage-300 focus:border-sage-500"
                  />
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 font-medium">
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-sage-600 mt-4">
                  No spam, ever. Unsubscribe anytime. Your email is safe with us.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-sage-600 mb-1">500+</div>
                <div className="text-sm text-sage-700">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sage-600 mb-1">Weekly</div>
                <div className="text-sm text-sage-700">Fresh Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sage-600 mb-1">Free</div>
                <div className="text-sm text-sage-700">Always</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 font-bold">Ready to Deepen Your Practice?</h2>
          <p className="text-xl mb-8 text-sage-100 max-w-2xl mx-auto">
            While these resources are valuable, nothing replaces personalized guidance. Let's work together to create a
            practice that truly serves your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 rounded-full px-8 py-4 text-lg font-medium"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Session
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sage-700 rounded-full px-8 py-4 text-lg font-medium bg-transparent"
              >
                Ask a Question
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

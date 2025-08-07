import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Heart, Leaf, Star, Award, BookOpen, Users, ArrowLeft, Calendar } from "lucide-react"

export default function AboutPage() {
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
              <Link href="/about" className="text-sage-900 font-bold">
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

      {/* Hero Section with Personal Photo */}
      <section className="pt-32 pb-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Link
                href="/"
                className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-5xl md:text-6xl font-serif text-sage-900 mb-6 font-bold">My Journey</h1>
              <p className="text-xl text-sage-700 leading-relaxed mb-8">
                From a place of seeking to a space of sharing - discover the path that led me to create healing
                experiences for others.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-600 mb-1">8+</div>
                  <div className="text-sm text-sage-700 font-medium">Years Teaching</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-600 mb-1">500+</div>
                  <div className="text-sm text-sage-700 font-medium">Students Guided</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-600 mb-1">1000+</div>
                  <div className="text-sm text-sage-700 font-medium">Sessions Taught</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-garden.jpg"
                alt="Sky in peaceful garden setting"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-200/50 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 mb-6">
                <Heart className="w-5 h-5 text-rose-500" />
                <span className="text-sage-600 font-medium">My Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">
                A Journey of Healing & Discovery
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-sage-700 leading-relaxed space-y-8">
              <p className="text-xl font-medium text-center mb-12 text-sage-800">
                My health and wellness journey began ten years ago when I moved to California, seeking a fresh start after struggling with health challenges, including rheumatoid arthritis. Immersing myself in a supportive fitness community, I embraced a healthier lifestyle, cleaned up my diet, and gradually transformed my well-being. Encouraged by the gym owner, I became a fitness trainer, sparking my passion for guiding others on their health journeys.
              </p>

              <div className="grid md:grid-cols-1 gap-12 items-start">
                <div className="space-y-6">
                  <p className="text-lg">
                    As my experience grew, I pursued a yoga course in college and instantly fell in love with the practice. For more than a decade, I have been dedicated to teaching Vinyasa Flow—a dynamic style that synchronizes breath with movement, creating a moving meditation. I focus on helping my students reconnect with their inner center through mindful breathwork and asanas, leaving them feeling invigorated, empowered, and ready to meet life’s challenges with grace and ease.
                  </p>

                  <p className="text-lg">
                    My passion for healing goes beyond yoga. During my nursing studies, I discovered a deep calling for holistic health, leading me to specialize in massage therapy. I tailor every session to meet my clients’ unique needs, specializing in deep tissue, full-body relaxation, and trigger point tension release. Through compassionate touch, I support my clients in their healing journey, promoting balance and wellbeing in both body and mind.
                  </p>
                  
                  <p className="text-lg">
                    Whether on the mat or the massage table, my mission is to guide you toward greater health, self-awareness, and lasting vitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Leaf className="w-5 h-5 text-sage-600" />
              <span className="text-sage-600 font-medium">My Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">
              Values That Guide My Practice
            </h2>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto">
              The principles that shape every interaction with my students and inform my approach to healing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-0 shadow-lg bg-white text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-2xl font-serif text-sage-900 mb-4 font-bold">Compassionate Presence</h3>
              <p className="text-sage-700 leading-relaxed">
                I believe healing happens in an atmosphere of unconditional acceptance. Every body, every breath, every
                moment of struggle or triumph is honored in our shared space.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <Leaf className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-2xl font-serif text-sage-900 mb-4 font-bold">Authentic Connection</h3>
              <p className="text-sage-700 leading-relaxed">
                True wellness comes from connecting with our authentic selves. I create safe spaces where you can
                explore, express, and embrace all parts of who you are without judgment.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <Star className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-2xl font-serif text-sage-900 mb-4 font-bold">Holistic Healing</h3>
              <p className="text-sage-700 leading-relaxed">
                Mind, body, and spirit are interconnected. My approach honors this wholeness, addressing not just
                physical symptoms but the deeper patterns that create imbalance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Award className="w-5 h-5 text-sage-600" />
              <span className="text-sage-600 font-medium">Credentials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Training & Certifications</h2>
            <p className="text-xl text-sage-700">Continuous learning to serve you better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-sm bg-sage-50 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sage-900 mb-2">500-Hour Yoga Teacher Training</h3>
                    <p className="text-sage-600 text-sm mb-2 font-medium">Yoga Alliance Certified</p>
                    <p className="text-sage-700 text-sm">
                      Advanced training in anatomy, philosophy, and teaching methodology
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-sm bg-sage-50 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sage-900 mb-2">Mindfulness-Based Stress Reduction</h3>
                    <p className="text-sage-600 text-sm mb-2 font-medium">MBSR Certified Instructor</p>
                    <p className="text-sage-700 text-sm">Evidence-based meditation and mindfulness practices</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-sm bg-sage-50 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sage-900 mb-2">Licensed Massage Therapist</h3>
                    <p className="text-sage-600 text-sm mb-2 font-medium">State Licensed & Insured</p>
                    <p className="text-sage-700 text-sm">
                      Specializing in Swedish, deep tissue, and therapeutic massage
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-sm bg-sage-50 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sage-900 mb-2">Trauma-Informed Yoga</h3>
                    <p className="text-sage-600 text-sm mb-2 font-medium">Specialized Certification</p>
                    <p className="text-sage-700 text-sm">Creating safe, healing spaces for trauma survivors</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-sm bg-sage-50 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sage-900 mb-2">Prenatal & Postnatal Yoga</h3>
                    <p className="text-sage-600 text-sm mb-2 font-medium">Specialized Training</p>
                    <p className="text-sage-700 text-sm">Supporting mothers through pregnancy and beyond</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-sm bg-sage-50 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sage-900 mb-2">Continuing Education</h3>
                    <p className="text-sage-600 text-sm mb-2 font-medium">Ongoing Professional Development</p>
                    <p className="text-sage-700 text-sm">Regular workshops and advanced trainings to stay current</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Photos Gallery */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 font-bold">Moments from the Journey</h2>
            <p className="text-xl text-sage-700">
              Glimpses into my practice and the beautiful spaces we create together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Image
                src="/images/journey/journey-moment-1.jpg"
                alt="Beautiful moment from Sky's yoga journey"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow object-cover"
              />
              <Image
                src="/images/journey/journey-moment-2.jpg"
                alt="Peaceful practice moment"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow object-cover"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/journey/journey-moment-3.jpg"
                alt="Yoga practice in serene setting"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow object-cover"
              />
              <Image
                src="/images/journey/journey-moment-4.jpg"
                alt="Teaching and sharing wellness"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow object-cover"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/journey/journey-moment-5.jpg"
                alt="Meditation and mindfulness practice"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow object-cover"
              />
              <Image
                src="/images/journey/journey-moment-6.jpg"
                alt="Continuing the wellness journey"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 font-bold">Ready to Begin Your Own Journey?</h2>
          <p className="text-xl mb-8 text-sage-100 max-w-2xl mx-auto">
            I would be honored to support you on your path to wellness. Whether you're just beginning or deepening your
            practice, there's a place for you here.
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
                Connect With Me
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
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-sage-200 mb-4">Follow the journey on social media</p>
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

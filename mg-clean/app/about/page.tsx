import Image from "next/image"
import Link from "next/link"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { Star, Lock, Users, Handshake, Clock, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { References } from "@/components/organisms/References"

const values = [
  {
    icon: <Star className="h-10 w-10 text-[#3AA655]" />,
    title: "What makes us special",
    description: "Our strong team is the key to first-class service.",
  },
  {
    icon: <Lock className="h-10 w-10 text-[#3AA655]" />,
    title: "Our Discretion",
    description: "Trust and discretion are our top priority – your privacy is guaranteed.",
  },
  {
    icon: <Users className="h-10 w-10 text-[#3AA655]" />,
    title: "Customer Focus",
    description: "Your needs and preferences guide everything we do.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-[#3AA655]" />,
    title: "Long-term",
    description: "We rely on long-term cooperation and a continuous partnership.",
  },
  {
    icon: <Clock className="h-10 w-10 text-[#3AA655]" />,
    title: "Efficiency",
    description: "We respect your time and work efficiently without sacrificing quality.",
  },
  {
    icon: <Heart className="h-10 w-10 text-[#3AA655]" />,
    title: "Passion",
    description: "We genuinely care about creating clean, healthy spaces for our clients.",
  },
]

export default function AboutUsPage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/about-us.png"
            alt="About Us"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              About <span className="text-[#3AA655]">Us</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              "Quality means doing it right when no one is looking." – Henry Ford
            </p>
          </div>
        </div>
      </div>
        {/* Anyone can clean section */}
        <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block rounded-lg bg-[#3AA655]/10 px-3 py-1 text-sm font-medium text-[#3AA655]">
            Our Values
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Anyone can clean!
          </h2>
          <hr className="border-[#a4ebb7] w-full mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed">
          A good cleaning service isn't just about cleanliness; it's about much more: responsibility, respect, and trust. Our employees enter your private or business premises and are confronted not only with dust and dirt, but also with your privacy. 
          That's why it's especially important to us that you feel safe when we're with you.</p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our story */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/founder-picture.jpg"
                  alt="MG Clean founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-[#3AA655]/10 px-3 text-sm font-medium text-[#3AA655]">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                From Small Beginnings to Trusted Service
              </h2>
              <p className="text-gray-600 text-lg">
                M&G Clean was founded in 2017 with a simple mission: to provide exceptional cleaning services that go
                beyond just appearance. Our founder, Michael Green, started with just a mop and a bucket, cleaning local
                offices on evenings and weekends.
              </p>
              <p className="text-gray-600 text-lg">
                As word spread about our attention to detail and reliable service, we quickly grew from a one-person
                operation to a full team of cleaning professionals. Today, we serve hundreds of residential and commercial
                clients across the region, but we've never lost our commitment to quality and personal service.
              </p>
              <p className="text-gray-600 text-lg">
                Our growth has been built on a foundation of trust, reliability, and excellence in everything we do. We're
                proud of our journey and excited about continuing to serve our community with the highest standards of
                cleaning and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Trust Banner Section - full width */}
       <section className="mt-24 w-full rounded-none bg-gradient-to-r from-green-50 to-green-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-14 gap-8">
            <div className="flex-1 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Become part of our satisfied customers</h2>
              <hr className="border-[#a4ebb7] mb-6" />
              <p className="text-lg text-gray-700 font-medium">Enjoy cleanliness at the highest level reliable, thorough and always to your satisfaction.</p>
              <button className="mt-6 px-6 py-3 bg-[#3AA655] text-white font-medium rounded-lg hover:bg-[#2d8041] transition-colors flex items-center gap-2">
                Make a non-binding enquiry
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex justify-center items-center max-w-xl">
              <Image
                src="/assets/images/client.jpg"
                alt="Satisfied client"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </section>

        <div className="w-full bg-white py-24"></div>

        <References />


    {/* <section className="w-full py-12 md:py-24 bg-gradient-to-r from-[#3AA655]/10 to-[#F97D1C]/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Experience the Difference?
          </h2>
          <p className="max-w-[700px] text-gray-600 text-lg md:text-xl">
            Let us show you why so many homeowners and businesses trust M&G Clean with their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="default" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section> */}
    </MgCleanDefaultLayout>
  )
}

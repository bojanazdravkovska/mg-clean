import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/atoms/Button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container grid gap-6 md:grid-cols-2 md:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-4 pl-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Your partner for house maintenance, cleaning & garden care
            </h1>
            <p className="max-w-[600px] text-gray-600 text-[16px] mt-2 leading-relaxed">
              We offer reliable cleaning services, professional property maintenance, and meticulous garden care for
              residential and commercial properties. With high quality, efficiency, and care, we ensure a clean,
              well-maintained, and inviting environment.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="#contact">
              <Button variant="secondary">Book Now</Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" className="border-[#3AA655] text-[#3AA655] hover:bg-[#3AA655]/10">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end md:items-center relative">
          <Image
            src="/assets/images/clean.jpg"
            width={600}
            height={600}
            alt="Professional cleaning service"
            className="rounded-lg object-cover md:translate-y-4 md:translate-x-4 shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

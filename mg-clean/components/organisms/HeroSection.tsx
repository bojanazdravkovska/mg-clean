import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/atoms/Button"

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
        <Image
          src="/assets/images/window.jpeg"
          alt="Professional cleaning service"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Your partner for house maintenance, cleaning & garden care
          </h1>
          <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
            We offer reliable cleaning services, professional property maintenance, and meticulous garden care for
            residential and commercial properties. With high quality, efficiency, and care, we ensure a clean,
            well-maintained, and inviting environment.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
            <Link href="#contact">
              <Button variant="secondary">Book Now</Button>
            </Link>
            <Link href="#services">
              <Button variant="secondary">Our Services</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

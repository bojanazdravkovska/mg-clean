import Image from "next/image";
import { Button } from "@/components/atoms/Button";

export function LandingPage() {
  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src="/assets/images/dashboard.png"
        alt="MG Clean Services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-start text-white pl-18 pr-4 pt-32">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-lg">
          Your partner for house maintenance, cleaning & garden care
        </h1>
        <p className="text-sm md:text-base lg:text-lg max-w-md text-justify mb-8">
          We offer reliable cleaning services, professional property maintenance, and meticulous garden care for residential and commercial properties. With high quality, efficiency, and care, we ensure a clean, well-maintained, and inviting environment.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Services
          </Button>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Inquiry
          </Button>
        </div>
      </div>
    </div>
  );
} 
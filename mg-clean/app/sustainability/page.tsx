import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"

export default function SustainabilityPage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/sustainbility.jpg"
            alt="Sustainable cleaning"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Sustainable <span className="text-[#3AA655]">cleaning</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              With environmentally friendly cleaning methods for a greener future.
            </p>
          </div>
        </div>
      </div>
      {/* Sustainability Pillars Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Ecologically */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">Ecologically</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] italic">
              Through efficient technologies and conscious waste management, we actively minimize our ecological footprint.
            </p>
          </div>
          {/* Economically */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">Economically</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] italic">
              MG Clean&apos;s economic sustainability is based on long-term thinking and responsible economic management.
            </p>
          </div>
          {/* Social */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">Social</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] italic">
              For us, social sustainability is more than just a buzzword – it is a central component of our corporate philosophy.
            </p>
          </div>
        </div>
      </div>
      {/* Environmentally Friendly Cleaning Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-4">
            Environmentally Friendly<br />
            Cleaning Products
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#3AA655] mb-6" />
          <p className="text-[20px] text-[#5A7D8C] italic max-w-[500px]">
            We rely on environmentally friendly cleaning products that are not only effective but also certified.
          </p>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[500px] h-[340px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/cleaning-products.jpg"
              alt="Environmentally Friendly Cleaning Products"
              width={800}
              height={540}
              className="object-cover w-full h-full rounded-3xl"
              priority={false}
            />
          </div>
        </div>
      </div>
      {/* Resource Use Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[500px] h-[340px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/resource.jpg"
              alt="Resource Use Cleaning"
              width={800}
              height={540}
              className="object-cover w-full h-full rounded-3xl"
              priority={false}
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-4">
            Resource Use
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#3AA655] mb-6" />
          <p className="text-[20px] text-[#5A7D8C] italic max-w-[500px]">
            Through the targeted use of modern cleaning equipment, we strive for a resource-efficient way of working in order to minimize our ecological footprint.
          </p>
        </div>
      </div>
      {/* Social Sustainability Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-4">
            Social Sustainability
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#3AA655] mb-6" />
          <p className="text-[20px] text-[#5A7D8C] italic max-w-[500px]">
            We believe in the power of teamwork and social responsibility to create a positive impact in our communities.
          </p>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[500px] h-[340px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/social-sustainbility.jpg"
              alt="Social Sustainability Teamwork"
              width={800}
              height={540}
              className="object-cover w-full h-full rounded-3xl"
              priority={false}
            />
          </div>
        </div>
      </div>
      {/* Taking Responsibility Together Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Headline Content */}
        <div className="flex-1 min-w-[300px] flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-4">
            Taking responsibility together
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#B5D6C2]" />
        </div>
        {/* Paragraph Content */}
        <div className="flex-1 min-w-[300px] flex items-center">
          <p className="text-[20px] text-[#5A7D8C] italic max-w-[500px]">
            By choosing MG Clean as your cleaning partner, you&apos;re not only choosing a sparkling appearance, but also making a positive impact on the environment. We invite you to join us and contribute together to a sustainable and clean future.
          </p>
        </div>
      </div>
    </MgCleanDefaultLayout>
  )
}

import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import InfoCard from "@/components/atoms/InfoCard"
import { RequestForQuotationForm } from "@/components/organisms/RequestForQuotationForm"

const infoCards = [
  {
    title: "Fair price-performance ratio",
    description: "Our prices are not only transparent but also reflect our commitment to providing excellent cleaning services.",
    tagline: "Quality you can afford."
  },
  {
    title: "Customized service packages",
    description: "HAREGA offers you adaptable packages that meet your individual needs.",
    tagline: "Tailor-made service"
  },
  {
    title: "Quality is paramount",
    description: "We attach great importance to quality and believe that quality cleaning services create their own value.",
    tagline: "Quality sets the tone"
  },
  {
    title: "Transparent pricing",
    description: "We will be happy to explain what services are included and are available to answer any questions you may have.",
    tagline: "Transparency strengthens trust"
  },
  {
    title: "Customer-oriented satisfaction",
    description: "Your satisfaction drives us. Our friendly and professional team is ready to adapt to your specific needs.",
    tagline: "Customer is partner."
  },
  {
    title: "Long-term value retention",
    description: "HAREGA strives not only for short-term customer satisfaction, but also for long-term cost efficiency for your company.",
    tagline: "Long-term cost efficiency."
  },
]

export default function PricesPage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/risk-management-1.jpg"
            alt="Cleaning at a fair price"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Cleaning at a <span className="text-[#3AA655]">fair price</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">We focus on cost-effective cleaning without compromising on quality.</p>
          </div>
        </div>

        {/* Tag section */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tag 1 */}
          <div className="flex flex-col items-start bg-white rounded-xl shadow p-6 border-l-4 border-[#3AA655] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="text-lg font-bold text-[#3AA655] mb-1">Fair</span>
            <span className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">In line with quality</span>
          </div>
          {/* Tag 2 */}
          <div className="flex flex-col items-start bg-white rounded-xl shadow p-6 border-l-4 border-[#3AA655] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="text-lg font-bold text-[#3AA655] mb-1">Transparent</span>
            <span className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">Understand what you are paying for</span>
          </div>
          {/* Tag 3 */}
          <div className="flex flex-col items-start bg-white rounded-xl shadow p-6 border-l-4 border-[#3AA655] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="text-lg font-bold text-[#3AA655] mb-1">Long-term</span>
            <span className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">With competitive prices</span>
          </div>
        </div>

        {/* Price transparency and quality section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-2">Price transparency<br />and quality</h2>
          <hr className="border-[#3AA655] w-24 mb-6" />
          <p className="max-w-2xl text-gray-600 text-lg mb-12">The value of our cleaning services should not only be expressed in numbers, but also in the quality of the services provided and the satisfaction of our customers.</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {infoCards.map((card, idx) => (
              <InfoCard key={idx} {...card} />
            ))}
          </div>
        </section>
      </div>

      {/* Trust Banner Section - full width */}
      <section className="mt-24 w-full rounded-none bg-gradient-to-r from-green-50 to-green-100 relative overflow-visible" style={{ minHeight: '320px' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-14 gap-8 relative">
          <div className="flex-1 max-w-2xl z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">It&apos;s not just about cleanliness,<br />it&apos;about trust!</h2>
            <hr className="border-[#a4ebb7] mb-6" />
            <p className="text-lg text-gray-700 font-medium">Cleanliness alone isn&apos;t enough. We build a foundation of trust with transparent pricing and reliable cleaning.</p>
          </div>
          <div className="flex-1 flex justify-center items-end relative h-[340px]">
            <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[35%] w-[80%] z-20">
              <Image
                src="/assets/images/keys.jpg"
                alt="Handing over keys"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg object-cover w-full h-[340px]"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* White space for image overflow */}
      <div className="w-full bg-white" style={{ height: '120px' }} />

      {/* Why is the right price crucial section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why is the right<br />price crucial?</h2>
          <hr className="border-[#a4ebb7] w-full mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed">
            A fair price allows us to hire qualified and experienced cleaners and pay them appropriately. This guarantees not only thorough cleaning but also professional service. Cleaners often have access to sensitive information on your premises. A company that focuses on the lowest price may not be able to take the necessary security precautions to protect this information.<br /><br />
            Choosing the right cleaning company is crucial to ensuring not only a clean but also a safe and secure environment. We pride ourselves on providing this balance and giving you the best value for your trust.<br /><br />
            Contact us to schedule a consultation. We look forward to meeting you personally and working together to find the best solutions for your cleaning needs.
          </p>
        </div>
      </section>
      <RequestForQuotationForm></RequestForQuotationForm>
    </MgCleanDefaultLayout>
  )
}

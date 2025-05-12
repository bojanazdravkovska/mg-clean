import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import ClientsSection from "@/components/organisms/ClientsSection"
import { References } from "@/components/organisms/References"
import { RequestForQuotation } from "@/components/organisms/RequestForQuotation"

export default function PropertyMaintenancePage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/office-cleaning.jpg"
            alt="Office Cleaning"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Office <span className="text-[#3AA655]">Cleaning</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              Professional office-cleaning services to keep your office in perfect condition
            </p>
          </div>
        </div>
      </div>
      <ClientsSection />
      {/* Quotation Section with Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Text from the image, styled like other sections */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Make a non-binding enquiry now!
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
          <p className="text-gray-600 text-lg text-justify mb-2">
            Do you have a lot to do and little time to take care of the cleanliness of your office? With professional office cleaning from M&G Clean, we want to take the pressure off you. We are happy to carry out office cleaning with carefully selected specialists. Whether during the day, in the evenings, or on weekends – we are happy to work with you to develop a cleaning schedule. Regular and professionally conducted office cleaning contributes to the long-term health of both people and buildings.
          </p>
          <p className="text-gray-600 text-lg text-justify">
            Our many years of experience in the office cleaning industry enable us to offer customized cleaning solutions tailored precisely to the specific needs of your business. From daily maintenance cleaning to specialized services such as carpet and floor cleaning, window cleaning, surface cleaning, and disinfection, we offer a comprehensive service package.
          </p>
        </div>
        {/* Request for Quotation Form */}
        <div className="flex-1 min-w-[320px] flex justify-center">
          <RequestForQuotation />
        </div>
      </div>
      {/* New Image Section with Overlay Texts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid gap-8 md:grid-rows-2">
        <div className="relative w-full h-[200px] md:h-[240px] rounded-xl overflow-hidden">
          <Image
            src="/assets/images/office-cleaning-img.jpg"
            alt="Trustworthy and discreet"
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <span className="absolute top-6 left-6 text-white font-bold text-lg md:text-xl drop-shadow-lg">Trustworthy and discreet</span>
        </div>
        <div className="relative w-full h-[200px] md:h-[240px] rounded-xl overflow-hidden">
          <Image
            src="/assets/images/office-cleaning-checklist.jpeg"
            alt="For a well-maintained working environment"
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <span className="absolute top-6 left-6 text-white font-bold text-lg md:text-xl drop-shadow-lg">For a well-maintained working environment</span>
        </div>
      </div>
      <References />
    </MgCleanDefaultLayout>
  )
}

import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { WrenchScrewdriverIcon, ClockIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import CantonTabs from "@/components/organisms/CantonTabs"

export default function JobsPage() {
  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/jobs.jpg"
            alt="Working at M&G Clean"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Working at <span className="text-[#3AA655]">M&G</span> <span className="text-[#F97D1C]">Clean</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">Join our team and be part of something special.</p>
          </div>
        </div>

        {/* Reasons to Join Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Good reasons to join M&G Clean:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Modern Equipment */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3AA655]/10 rounded-lg flex items-center justify-center mb-6">
                <WrenchScrewdriverIcon className="w-6 h-6 text-[#3AA655]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern techniques and equipment</h3>
              <p className="text-gray-600">We offer state-of-the-art cleaning technologies and high-quality equipment.</p>
            </div>

            {/* Flexible Hours */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3AA655]/10 rounded-lg flex items-center justify-center mb-6">
                <ClockIcon className="w-6 h-6 text-[#3AA655]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible working hours</h3>
              <p className="text-gray-600">We offer flexible working hours to meet the individual needs of our employees.</p>
            </div>

            {/* Diverse Locations */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3AA655]/10 rounded-lg flex items-center justify-center mb-6">
                <MapPinIcon className="w-6 h-6 text-[#3AA655]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diverse locations</h3>
              <p className="text-gray-600">Do you like variety? We offer a variety of jobs at various locations.</p>
            </div>
          </div>
        </div>

        {/* Canton Selection Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">In which canton would you like to work?</h2>
          <CantonTabs />
        </div>

        {/* Application Banner */}
        <div className="mt-16 w-full rounded-2xl bg-gradient-to-r from-green-50 to-green-100 p-8 flex flex-col items-center justify-center shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#3AA655]/10 flex items-center justify-center">
              <EnvelopeIcon className="w-8 h-8 text-[#3AA655]" />
            </div>
            <span className="text-2xl font-bold text-[#1a2a4a] select-all">info@harega.ch</span>
          </div>
          <p className="text-lg text-gray-700 font-semibold text-center max-w-xl">Please send us your application to the above address.<br />
            <span className="text-[#F97D1C] font-bold">Please note that applications will only be accepted via email or letter.</span>
          </p>
        </div>
      </div>
    </MgCleanDefaultLayout>
  )
}

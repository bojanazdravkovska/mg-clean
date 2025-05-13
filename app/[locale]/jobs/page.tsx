"use client"
import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { WrenchScrewdriverIcon, ClockIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import CantonTabs from "@/components/organisms/CantonTabs"
import { useTranslations } from "next-intl"

export default function JobsPage() {
  const t = useTranslations("jobs")

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
              {t("hero.title.part1")} <span className="text-[#3AA655]">{t("hero.title.part2")}</span> <span className="text-[#F97D1C]">{t("hero.title.part3")}</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">{t("hero.subtitle")}</p>
          </div>
        </div>

        {/* Reasons to Join Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">{t("reasons.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Modern Equipment */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3AA655]/10 rounded-lg flex items-center justify-center mb-6">
                <WrenchScrewdriverIcon className="w-6 h-6 text-[#3AA655]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("reasons.items.equipment.title")}</h3>
              <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">{t("reasons.items.equipment.description")}</p>
            </div>

            {/* Flexible Hours */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3AA655]/10 rounded-lg flex items-center justify-center mb-6">
                <ClockIcon className="w-6 h-6 text-[#3AA655]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("reasons.items.hours.title")}</h3>
              <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">{t("reasons.items.hours.description")}</p>
            </div>

            {/* Diverse Locations */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3AA655]/10 rounded-lg flex items-center justify-center mb-6">
                <MapPinIcon className="w-6 h-6 text-[#3AA655]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("reasons.items.locations.title")}</h3>
              <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">{t("reasons.items.locations.description")}</p>
            </div>
          </div>
        </div>

        {/* Canton Selection Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t("canton.title")}</h2>
          <CantonTabs />
        </div>

        {/* Application Banner */}
        <div className="mt-16 w-full rounded-2xl bg-gradient-to-r from-green-50 to-green-100 p-8 flex flex-col items-center justify-center shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#3AA655]/10 flex items-center justify-center">
              <EnvelopeIcon className="w-8 h-8 text-[#3AA655]" />
            </div>
            <span className="text-2xl font-bold text-[#1a2a4a] select-all">{t("application.email")}</span>
          </div>
          <p className="text-lg text-gray-700 font-semibold text-center max-w-xl">
            {t("application.description")}<br />
            <span className="text-[#F97D1C] font-bold">{t("application.note")}</span>
          </p>
        </div>
      </div>
    </MgCleanDefaultLayout>
  )
}

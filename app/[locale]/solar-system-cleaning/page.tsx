"use client"

import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { useTranslations } from "next-intl"

export default function SolarSystemCleaningPage() {
  const t = useTranslations()

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/solar-system-cleaning.webp"
            alt={t("solarSystemCleaning.hero.title")}
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {t("solarSystemCleaning.hero.title")}
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              {t("solarSystemCleaning.hero.subtitle")}
            </p>
          </div>
        </div>
      </div>

       {/* Sustainability Pillars Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Ecologically */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">{t("solarSystemCleaning.pillars.sustainable.title")}</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] text-justify">
              {t("solarSystemCleaning.pillars.sustainable.description")}
            </p>
          </div>
          {/* Economically */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">{t("solarSystemCleaning.pillars.efficient.title")}</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] text-justify">
              {t("solarSystemCleaning.pillars.efficient.description")}
            </p>
          </div>
          {/* Social */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">{t("solarSystemCleaning.pillars.secure.title")}</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] text-justify">
              {t("solarSystemCleaning.pillars.secure.description")}
            </p>
          </div>
        </div>
      </div>

        {/* Well Maintained All Around Section */}
        <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {t("solarSystemCleaning.importance.title")}
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
                {t("solarSystemCleaning.importance.description")}
              </p>
            </div>
            <div className="order-2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/garden-care.jpg"
                  alt={t("solarSystemCleaning.importance.title")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Trust & Comprehensive Services Section */}
            <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Image on the left */}
            <div className="order-1 lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/property-maintenance.jpg"
                  alt={t("solarSystemCleaning.efficiency.title")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
            {/* Text on the right */}
            <div className="space-y-4 order-2 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {t("solarSystemCleaning.efficiency.title")}
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
                {t("solarSystemCleaning.efficiency.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Quotation Section with Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Text from the image, styled like other sections */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 mt-16">
            {t("solarSystemCleaning.faq.title")}
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
        </div>
        {/* FAQ List */}
        <div className="flex-1 min-w-[320px] space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#3AA655] mb-2">{t("solarSystemCleaning.faq.questions.frequency.question")}</h3>
            <p className="text-gray-600 text-lg text-justify">{t("solarSystemCleaning.faq.questions.frequency.answer")}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#3AA655] mb-2">{t("solarSystemCleaning.faq.questions.selfCleaning.question")}</h3>
            <p className="text-gray-600 text-lg text-justify">{t("solarSystemCleaning.faq.questions.selfCleaning.answer")}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#3AA655] mb-2">{t("solarSystemCleaning.faq.questions.methods.question")}</h3>
            <p className="text-gray-600 text-lg text-justify">{t("solarSystemCleaning.faq.questions.methods.answer")}</p>
          </div>
        </div>
      </div>
    </MgCleanDefaultLayout>
  )
}

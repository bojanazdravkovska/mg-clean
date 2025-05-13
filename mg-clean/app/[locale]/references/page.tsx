"use client"

import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import ClientsSection from "@/components/organisms/ClientsSection"
import { References } from "@/components/organisms/References"
import { useTranslations } from "next-intl"

export default function ReferencesPage() {
  const t = useTranslations("references")

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/references-image.jpg"
            alt={t("title")}
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {t("title")}
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
      <ClientsSection />
      <References />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-2">
            {t("clients.title")}
          </h2>
          <hr className="border-[#3AA655] w-24 mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Public administrations */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.publicAdministrations")}</span>
            </div>

            {/* Restaurants */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.restaurants")}</span>
            </div>

            {/* Practices */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.practices")}</span>
            </div>

            {/* Schools */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.schools")}</span>
            </div>

            {/* Industrial companies */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.industrialCompanies")}</span>
            </div>

            {/* Retail */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.retail")}</span>
            </div>

            {/* Fitness center */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.fitnessCenter")}</span>
            </div>

            {/* Hotels */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.hotels")}</span>
            </div>

            {/* Public institutions */}
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#3AA655] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3AA655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-lg font-medium">{t("clientTypes.publicInstitutions")}</span>
            </div>
          </div>
        </section>
      </div>
    </MgCleanDefaultLayout>
  )
}

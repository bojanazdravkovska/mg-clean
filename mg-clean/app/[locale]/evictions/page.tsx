'use client'

import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { RequestForQuotation } from "@/components/organisms/RequestForQuotation"
import { useTranslations } from "next-intl"

export default function EvictionsPage() {
  const t = useTranslations("evictions")

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/evictions.webp"
            alt="Evictions"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {t("hero.title")}
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-0">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">{t("section1.title")}</h2>
        <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-4" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 text-base leading-relaxed text-gray-800">
          <p>{t("section1.description")}</p>
          <p className="mt-4">{t("section1.subDescription")}</p>
        </div>
        <div className="md:w-1/2 text-base leading-relaxed text-gray-800">
          <p className="font-semibold">{t("section2.title")}</p>
          <p>{t("section2.description")}</p>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-200 hover:scale-105 relative">
            <Image src="/assets/images/img1.jpg" alt="Gallery 1" fill className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-200 hover:scale-105 relative">
            <Image src="/assets/images/img2.jpg" alt="Gallery 2" fill className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-200 hover:scale-105 relative">
            <Image src="/assets/images/img3.jpg" alt="Gallery 3" fill className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-200 hover:scale-105 relative">
            <Image src="/assets/images/img4.jpg" alt="Gallery 4" fill className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/* Partner Section */}
      <section className="w-full py-12 md:py-24 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-white">{t("partner.title")}</h3>
            <p className="text-gray-300 text-lg">{t("partner.subtitle")}</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#2D3748] p-4 rounded-lg flex items-center justify-center h-24 w-40">
              <Image src="/assets/images/references/benu.png" alt="Partner Logo" width={160} height={64} className="max-h-16 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* Quotation Section with Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Text from the image, styled like other sections */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 mt-8">
            {t("services.title")}
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.houseClearances")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.evictions")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.cellarClearances")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.largeScaleClearances")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.companyDissolutions")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.householdClearances")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.clearances")}</span></li>
          </ul>
          <p className="text-[13px] text-gray-700" style={{ fontStyle: "italic" }}>
            {t("services.description")}
          </p>
        </div>
        {/* Request for Quotation Form */}
        <div className="flex-1 min-w-[280px] flex justify-center">
          <RequestForQuotation />
        </div>
      </div>
    </MgCleanDefaultLayout>
  )
}

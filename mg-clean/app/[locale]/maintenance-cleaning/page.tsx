"use client"

import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import ClientsSection from "@/components/organisms/ClientsSection"
import { References } from "@/components/organisms/References"
import { RequestForQuotation } from "@/components/organisms/RequestForQuotation"
import { useTranslations } from "next-intl"

export default function MaintenanceCleaningPage() {
  const t = useTranslations("maintenanceCleaning")

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/maintenace-cleaning.jpg"
            alt="Maintenance Cleaning"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {t("hero.title.part1")} <span className="text-[#3AA655]">{t("hero.title.part2")} </span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </div>
      {/* New Section: Maintenance Cleaning for Every Requirement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10">
          <div className="flex-1 text-base text-gray-800 leading-relaxed space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              {t("section1.title")}
            </h2>
            <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
            <p className="text-gray-600 text-lg text-justify">
              {t("section1.description")}
            </p>
            <p className="text-gray-600 text-lg text-justify">
              {t("section1.subDescription")}
            </p>
          </div>
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <div className="w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/assets/images/stairs.jpg"
                alt="Maintenance Cleaning Example"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 320px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
      <ClientsSection />

      {/* Quotation Section with Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Text from the image, styled like other sections */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 mt-8">
            {t("services.title")}
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.restaurant")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.office")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.kindergarten")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.shop")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.house")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.practice")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.cinema")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.hotel")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.shoppingCenter")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.industrial")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.event")}</span></li>
            <li className="flex items-center gap-2"><span role="img" aria-label="bed">🛏️</span> <span className="italic">{t("services.items.publicInstitutes")}</span></li>
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
      <References />
    </MgCleanDefaultLayout>
  )
}

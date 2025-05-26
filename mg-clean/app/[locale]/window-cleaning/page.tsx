'use client'
import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import ClientsSection from "@/components/organisms/ClientsSection"
import { RequestForQuotation } from "@/components/organisms/RequestForQuotation"
import { useTranslations } from "next-intl"

export default function WindowCleaningPage() {
  const t = useTranslations("windowCleaning")

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/cleaning-window.jpg"
            alt={t("hero.title")}
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

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {t("mainSection.title")}
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
                {t("mainSection.description")}
              </p>
            </div>
            <div className="order-2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/windows.jpg"
                  alt={t("mainSection.title")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/proffesionals.jpg"
                  alt={t("professionalSection.title")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
            <div className="space-y-4 order-2 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {t("professionalSection.title")}
              </h2>
              <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
              <p className="text-gray-600 text-lg text-justify mb-4">
                {t("professionalSection.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              {t("beforeAfterSection.title")}
            </h2>
            <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mx-auto mb-6" />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">{t("beforeAfterSection.before")}</h3>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/img4.jpg"
                  alt={t("beforeAfterSection.before")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">{t("beforeAfterSection.after")}</h3>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/img6.jpg"
                  alt={t("beforeAfterSection.after")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 min-w-[320px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            {t("quoteSection.title")}
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#5A7D8C] mb-6" />
        </div>
        <div className="flex-1 min-w-[320px] flex justify-center">
          <RequestForQuotation />
        </div>
      </div>
    </MgCleanDefaultLayout>
  )
}

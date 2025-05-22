"use client"
import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import InfoCard from "@/components/atoms/InfoCard"
import { RequestForQuotationForm } from "@/components/organisms/RequestForQuotationForm"
import { useTranslations } from 'next-intl'

const infoCards = [
  {
    title: "prices.infoCards.fairPrice.title",
    description: "prices.infoCards.fairPrice.description",
    tagline: "prices.infoCards.fairPrice.tagline"
  },
  {
    title: "prices.infoCards.customized.title",
    description: "prices.infoCards.customized.description",
    tagline: "prices.infoCards.customized.tagline"
  },
  {
    title: "prices.infoCards.quality.title",
    description: "prices.infoCards.quality.description",
    tagline: "prices.infoCards.quality.tagline"
  },
  {
    title: "prices.infoCards.transparent.title",
    description: "prices.infoCards.transparent.description",
    tagline: "prices.infoCards.transparent.tagline"
  },
  {
    title: "prices.infoCards.satisfaction.title",
    description: "prices.infoCards.satisfaction.description",
    tagline: "prices.infoCards.satisfaction.tagline"
  },
  {
    title: "prices.infoCards.value.title",
    description: "prices.infoCards.value.description",
    tagline: "prices.infoCards.value.tagline"
  },
]

export default function PricesPage() {
  const t = useTranslations()

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/strategy.webp"
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
              {t('prices.hero.title')}
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">{t('prices.hero.subtitle')}</p>
          </div>
        </div>

        {/* Tag section */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tag 1 */}
          <div className="flex flex-col items-start bg-white rounded-xl shadow p-6 border-l-4 border-[#3AA655] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="text-lg font-bold text-[#3AA655] mb-1">{t('prices.tags.fair.title')}</span>
            <span className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">{t('prices.tags.fair.description')}</span>
          </div>
          {/* Tag 2 */}
          <div className="flex flex-col items-start bg-white rounded-xl shadow p-6 border-l-4 border-[#3AA655] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="text-lg font-bold text-[#3AA655] mb-1">{t('prices.tags.transparent.title')}</span>
            <span className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">{t('prices.tags.transparent.description')}</span>
          </div>
          {/* Tag 3 */}
          <div className="flex flex-col items-start bg-white rounded-xl shadow p-6 border-l-4 border-[#3AA655] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="text-lg font-bold text-[#3AA655] mb-1">{t('prices.tags.longTerm.title')}</span>
            <span className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">{t('prices.tags.longTerm.description')}</span>
          </div>
        </div>

        {/* Price transparency and quality section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-2">{t('prices.priceTransparency.title')}</h2>
          <hr className="border-[#3AA655] w-24 mb-6" />
          <p className="max-w-2xl text-gray-600 text-lg mb-12">{t('prices.priceTransparency.description')}</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {infoCards.map((card, idx) => (
              <InfoCard 
                key={idx} 
                title={t(card.title)}
                description={t(card.description)}
                tagline={t(card.tagline)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Trust Banner Section - full width */}
      <section className="mt-24 w-full rounded-none bg-gradient-to-r from-green-50 to-green-100 relative overflow-visible" style={{ minHeight: '320px' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-14 gap-8 relative">
          <div className="flex-1 max-w-2xl z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t('prices.trustBanner.title')}</h2>
            <hr className="border-[#a4ebb7] mb-6" />
            <p className="text-lg text-gray-700 font-medium">{t('prices.trustBanner.description')}</p>
          </div>
          <div className="flex-1 flex justify-center items-end relative h-[340px]">
            <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[35%] w-[80%] z-20">
              <Image
                src="/assets/images/key.webp"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('prices.whyPrice.title')}</h2>
          <hr className="border-[#a4ebb7] w-full mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('prices.whyPrice.description')}<br /><br />
            {t('prices.whyPrice.conclusion')}<br /><br />
            {t('prices.whyPrice.cta')}
          </p>
        </div>
      </section>
      <RequestForQuotationForm></RequestForQuotationForm>
    </MgCleanDefaultLayout>
  )
}

'use client'
import Image from "next/image"
import MgCleanDefaultLayout from "@/components/templates/MgCleanDefaultLayout"
import { useTranslations } from 'next-intl'

export default function SustainabilityPage() {
  const t = useTranslations()

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/sustainable-cleaning-products.jpg"
            alt={t('sustainability.hero.imageAlt')}
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {t('sustainability.hero.title.part1')} <span className="text-[#3AA655]">{t('sustainability.hero.title.part2')}</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">
              {t('sustainability.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
      {/* Sustainability Pillars Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Ecologically */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">{t('sustainability.pillars.ecological.title')}</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] italic">
              {t('sustainability.pillars.ecological.description')}
            </p>
          </div>
          {/* Economically */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">{t('sustainability.pillars.economic.title')}</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] italic">
              {t('sustainability.pillars.economic.description')}
            </p>
          </div>
          {/* Social */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-semibold mb-2 border-b border-[#3AA655] pb-2">{t('sustainability.pillars.social.title')}</h2>
            <p className="mt-4 text-[18px] text-[#5A7D8C] italic">
              {t('sustainability.pillars.social.description')}
            </p>
          </div>
        </div>
      </div>
      {/* Environmentally Friendly Cleaning Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-4">
            {t('sustainability.products.title')}
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#3AA655] mb-6" />
          <p className="text-[20px] text-[#5A7D8C] italic max-w-[500px]">
            {t('sustainability.products.description')}
          </p>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[500px] h-[340px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/cleaning-products.jpg"
              alt={t('sustainability.products.imageAlt')}
              width={800}
              height={540}
              className="object-cover w-full h-full rounded-3xl"
              priority={false}
            />
          </div>
        </div>
      </div>
      {/* Resource Use Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[500px] h-[340px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/resources.webp"
              alt={t('sustainability.resources.imageAlt')}
              width={800}
              height={540}
              className="object-cover w-full h-full rounded-3xl"
              priority={false}
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-4">
            {t('sustainability.resources.title')}
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#3AA655] mb-6" />
          <p className="text-[20px] text-[#5A7D8C] italic max-w-[500px]">
            {t('sustainability.resources.description')}
          </p>
        </div>
      </div>
      {/* Social Sustainability Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-4">
            {t('sustainability.social.title')}
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#3AA655] mb-6" />
          <p className="text-[20px] text-[#5A7D8C] italic max-w-[500px]">
            {t('sustainability.social.description')}
          </p>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[500px] h-[340px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/social-sustainbility.webp"
              alt={t('sustainability.social.imageAlt')}
              width={800}
              height={540}
              className="object-cover w-full h-full rounded-3xl"
              priority={false}
            />
          </div>
        </div>
      </div>
      {/* Taking Responsibility Together Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-12">
        {/* Headline Content */}
        <div className="flex-1 min-w-[300px] flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-4">
            {t('sustainability.responsibility.title')}
          </h2>
          <div className="w-full max-w-[500px] h-[2px] bg-[#B5D6C2]" />
        </div>
        {/* Paragraph Content */}
        <div className="flex-1 min-w-[300px] flex items-center">
          <p className="text-[20px] text-[#5A7D8C] italic max-w-[500px]">
            {t('sustainability.responsibility.description')}
          </p>
        </div>
      </div>
    </MgCleanDefaultLayout>
  )
}

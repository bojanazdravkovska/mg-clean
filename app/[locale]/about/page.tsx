'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import MgCleanDefaultLayout from '@/components/templates/MgCleanDefaultLayout';
import { Star, Lock, Users, Handshake, Clock, Heart, ArrowRight } from 'lucide-react';
import { References } from '@/components/organisms/References';

export default function AboutUsPage() {
  const t = useTranslations('about');

  const values = [
    {
      icon: <Star className="h-10 w-10 text-[#3AA655]" />,
      title: t('values.special.title'),
      description: t('values.special.description'),
    },
    {
      icon: <Lock className="h-10 w-10 text-[#3AA655]" />,
      title: t('values.discretion.title'),
      description: t('values.discretion.description'),
    },
    {
      icon: <Users className="h-10 w-10 text-[#3AA655]" />,
      title: t('values.customerFocus.title'),
      description: t('values.customerFocus.description'),
    },
    {
      icon: <Handshake className="h-10 w-10 text-[#3AA655]" />,
      title: t('values.longTerm.title'),
      description: t('values.longTerm.description'),
    },
    {
      icon: <Clock className="h-10 w-10 text-[#3AA655]" />,
      title: t('values.efficiency.title'),
      description: t('values.efficiency.description'),
    },
    {
      icon: <Heart className="h-10 w-10 text-[#3AA655]" />,
      title: t('values.passion.title'),
      description: t('values.passion.description'),
    },
  ];

  return (
    <MgCleanDefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/about-us.png"
            alt="About Us"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {t('hero.title.part1')} <span className="text-[#3AA655]">{t('hero.title.part2')}</span>
            </h1>
            <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white">{t('hero.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block rounded-lg bg-[#3AA655]/10 px-3 py-1 text-sm font-medium text-[#3AA655]">
            {t('sectionTitle')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('sectionHeader')}</h2>
          <hr className="border-[#a4ebb7] w-full mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed">{t('sectionDescription')}</p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/founder-picture.jpg"
                  alt="MG Clean founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-[#3AA655]/10 px-3 text-sm font-medium text-[#3AA655]">
                {t('story.sectionTitle')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t('story.title')}</h2>
              <p className="text-gray-600 text-lg">{t('story.p1')}</p>
              <p className="text-gray-600 text-lg">{t('story.p2')}</p>
              <p className="text-gray-600 text-lg">{t('story.p3')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 w-full rounded-none bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-14 gap-8">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t('cta.title')}</h2>
            <hr className="border-[#a4ebb7] mb-6" />
            <p className="text-lg text-gray-700 font-medium">{t('cta.subtitle')}</p>
            <button className="mt-6 px-6 py-3 bg-[#3AA655] text-white font-medium rounded-lg hover:bg-[#2d8041] transition-colors flex items-center gap-2">
              {t('cta.button')} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center max-w-xl">
            <Image
              src="/assets/images/client.jpg"
              alt="Satisfied client"
              width={800}
              height={500}
              className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>

      <div className="w-full bg-white py-24"></div>

      <References />
    </MgCleanDefaultLayout>
  );
}

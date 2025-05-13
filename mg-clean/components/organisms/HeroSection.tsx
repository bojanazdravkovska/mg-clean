'use client';

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/atoms/Button"
import { useTranslations } from "next-intl"

export default function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <section className="w-full">
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden group">
        <Image
          src="/assets/images/window.jpeg"
          alt="Professional cleaning service"
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 flex flex-col justify-center items-start pl-28 pr-8 pt-16 z-20">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="max-w-[600px] text-[16px] mt-2 leading-relaxed text-white/90 drop-shadow-md">
            {t('subtitle')}
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
            <Link href="contact">
              <Button variant="success">{t('cta')}</Button>
            </Link>
            <Link href="services">
              <Button variant="success">{t('services')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

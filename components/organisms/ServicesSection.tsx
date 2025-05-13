'use client';

import Card from "../atoms/Card"
import { useTranslations } from "next-intl"
import { useParams } from 'next/navigation'

interface ServicesSectionProps {
  dashboard?: boolean
}

export default function ServicesSection({ dashboard = false }: ServicesSectionProps) {
  const t = useTranslations("home.services")
  const params = useParams()
  const locale = params.locale as string

  const services = [
    {
      title: t("items.propertyMaintenance.title"),
      description: t("items.propertyMaintenance.description"),
      image: "/assets/images/property-maintenance.jpg",
      link: `/${locale}/property-maintenance`,
    },
    {
      title: t("items.officeCleaning.title"),
      description: t("items.officeCleaning.description"),
      image: "/assets/images/office-cleaning.jpg",
      link: `/${locale}/office-cleaning`,
    },
    {
      title: t("items.windowCleaning.title"),
      description: t("items.windowCleaning.description"),
      image: "/assets/images/window-cleaning.png",
      link: `/${locale}/window-cleaning`,
    },
    {
      title: t("items.constructionCleaning.title"),
      description: t("items.constructionCleaning.description"),
      image: "/assets/images/construction-cleaning.jpg",
      link: `/${locale}/construction-cleaning`,
    },
    {
      title: t("items.solarSystemCleaning.title"),
      description: t("items.solarSystemCleaning.description"),
      image: "/assets/images/solar-system-cleaning.webp",
      link: `/${locale}/solar-system-cleaning`,
    },
    {
      title: t("items.gardenCare.title"),
      description: t("items.gardenCare.description"),
      image: "/assets/images/garden-care.jpg",
      link: `/${locale}/garden-care`,
    },
    {
      title: t("items.evictions.title"),
      description: t("items.evictions.description"),
      image: "/assets/images/evictions.png",
      link: `/${locale}/evictions`,
    },
    {
      title: t("items.maintenanceCleaning.title"),
      description: t("items.maintenanceCleaning.description"),
      image: "/assets/images/maintenance-cleaning.jpg",
      link: `/${locale}/maintenance-cleaning`,
    },
  ]

  return (
    <section id="services" className="w-full py-6 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 space-y-6">
        {dashboard ? (
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("title")}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("subtitle")}
              </p>
            </div>
          </div>
        ) : (
          <h2 className="text-3xl font-bold">{t("title")}</h2>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

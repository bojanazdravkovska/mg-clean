'use client'
import Image from "next/image"
import { useTranslations } from "next-intl"

interface ReferencesProps {
  logos?: {
    src: string
    alt: string
    href?: string
  }[]
}

const defaultLogos = [
  {
    src: "/assets/images/logo1.png",
    alt: "Roth Gerüste",
    href: "https://rothgerueste.ch/",
  },
  {
    src: "/assets/images/logo2.jpg",
    alt: "Schaeppi",
    href: "https://www.schaeppi.ch/de.html",
  },
  {
    src: "/assets/images/logo3.jpg",
    alt: "Franchi AG",
    href: "https://www.google.com/maps/place/Franchi+AG/data=!4m2!3m1!1s0x0:0x982d89fb8a7ff05a?sa=X&ved=1t%3A2428&ictx=111",
  },
]

export function References({
  logos = defaultLogos
}: ReferencesProps) {
  const t = useTranslations("references")

  return (
    <section className="w-full py-12 md:py-24 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-white">
            {t("title")}
          </h2>
          <p className="text-gray-300 text-lg">
            {t("description")}
          </p>
          <p className="text-gray-300 text-lg">
            {t("subDescription")}
          </p>
        </div>
       
        <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
          {logos.map((client, index) => (
            <a key={index} href={client.href} target="_blank" rel="noopener noreferrer">
              <div className="bg-[#2D3748] p-4 rounded-lg flex items-center justify-center h-24 w-48">
                <Image
                  src={client.src || "/placeholder.svg"}
                  alt={`${client.alt} logo`}
                  width={160}
                  height={64}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 
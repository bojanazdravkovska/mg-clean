import Image from "next/image"

interface ReferencesProps {
  title?: string
  description?: string
  subDescription?: string
  logos?: {
    src: string
    alt: string
  }[]
}

const defaultLogos = [
  {
    src: "/assets/images/references/benu.png",
    alt: "Reference Company 1"
  },
  {
    src: "/assets/images/references/globus.png",
    alt: "Reference Company 2"
  },
  {
    src: "/assets/images/references/itris.png",
    alt: "Reference Company 3"
  },
  {
    src: "/assets/images/references/rosta.png",
    alt: "Reference Company 4"
  },
  {
    src: "/assets/images/references/sacac.png",
    alt: "Reference Company 5"
  },
  {
    src: "/assets/images/references/zebra.png",
    alt: "Reference Company 6"
  }
]

export function References({
  title = "Our references",
  description = "A selection of our references.",
  subDescription = "We would be happy to show you further references upon request.",
  logos = defaultLogos
}: ReferencesProps) {
  return (
    <section className="w-full py-12 md:py-24 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-white">
            {title}
          </h2>
          <p className="text-gray-300 text-lg">
            {description}
          </p>
          <p className="text-gray-300 text-lg">
            {subDescription}
          </p>
        </div>
       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((client, index) => (
            <div key={index} className="bg-[#2D3748] p-4 rounded-lg flex items-center justify-center h-24 w-full">
              <Image
                src={client.src || "/placeholder.svg"}
                alt={`${client.alt} logo`}
                width={160}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
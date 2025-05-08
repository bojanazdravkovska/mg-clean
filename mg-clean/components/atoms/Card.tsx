import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CardProps {
  title: string
  description: string
  image: string
  link: string
  className?: string
}

export default function Card({ title, description, image, link, className = "" }: CardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-white transition-all hover:shadow-md border border-gray-100 flex flex-col h-full ${className}`}>
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#3AA655]">{title}</h3>
        <p className="text-gray-500 flex-grow">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-[#3AA655] font-medium hover:underline mt-4"
        >
          More about this <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
} 
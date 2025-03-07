import Image from "next/image"
import Link from "next/link"

interface RelatedCardProps {
  image: string
  title: string
  description: string
}

export default function RelatedCard({ image, title, description }: RelatedCardProps) {
  return (
    <Link href="#" className="group block">
      <div className="relative h-[160px] mb-4 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-base font-medium mb-1 group-hover:underline">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  )
}


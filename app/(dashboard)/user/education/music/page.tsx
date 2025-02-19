'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

interface LearningOption {
  id: string
  title: string
  image: string
  href: string
}

const learningOptions: LearningOption[] = [
  {
    id: "guitar-1",
    title: "Guitar",
    image: "/images/lessons/lesson.png",
    href: "/user/education/music/proficiency",
  },
  {
    id: "piano",
    title: "Piano",
    image: "/images/lessons/lesson.png",
    href: "/user/education/music/proficiency",
  },
  {
    id: "singing",
    title: "Singing",
    image: "/images/lessons/lesson.png",
    href: "/user/education/music/proficiency",
  },
  {
    id: "bass",
    title: "Bass",
    image: "/images/lessons/lesson.png",
    href: "/user/education/music/proficiency",
  },
  {
    id: "drums",
    title: "Drums",
    image: "/images/lessons/lesson.png",
    href: "/user/education/music/proficiency",
  },
  {
    id: "ukulele",
    title: "Ukulele",
    image: "/images/lessons/lesson.png",
    href: "/user/education/music/proficiency",
  },
  {
    id: "painting",
    title: "Painting",
    image: "/images/lessons/lesson.png",
    href: "/user/education/music/proficiency",
  },
  {
    id: "guitar-2",
    title: "Guitar",
    image: "/images/lessons/lesson.png",
    href: "/user/education/music/proficiency",
  },
]

export default function LearnPage() {

    const pathName = usePathname()
    const router = useRouter()

    
  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/user/education" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group">
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="sr-only">Go back</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">I want to learn...</h1>
          <p className="text-gray-600">You can always switch later</p>
        </div>

        {/* Grid of Learning Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-1/2 mx-auto">
          {learningOptions.map((option) => (
            <Link key={option.id} href={option.href} className="group flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-3 transition-transform group-hover:scale-105">
                <Image
                  src={option.image || "/placeholder.svg"}
                  alt={`Learn ${option.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <span className="text-gray-900 font-medium">{option.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


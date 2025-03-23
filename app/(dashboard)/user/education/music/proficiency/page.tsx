"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProficiencyLevel {
  id: string
  label: string
  value: string
}

const proficiencyLevels: ProficiencyLevel[] = [
  {
    id: "first-timer",
    label: "First timer",
    value: "first-timer",
  },
  {
    id: "beginner",
    label: "Beginner",
    value: "beginner",
  },
  {
    id: "intermediate",
    label: "Intermediate",
    value: "intermediate",
  },
  {
    id: "advanced",
    label: "Advanced",
    value: "advanced",
  },
]

export default function ProficiencyPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="max-w-xl mx-auto">
        {/* Back Button */}
        <Link href="/user/education/music" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group">
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="sr-only">Go back</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">What&apos;s your proficiency level?</h1>
        </div>

        {/* Proficiency Level Selection */}
        <div className="space-y-4">
          {proficiencyLevels.map((level) => (
            <Link href={`/user/education/music/${level.value}`} key={level.id}>
            <Button
              key={level.id}
              variant="default"
              className={`w-full h-14 text-base font-normal rounded-full border-2 transition-colors ${
                selectedLevel === level.value
                  ? "border-[#00E5C9] bg-[#00E5C9]/5 text-[#00E5C9]"
                  : "border-gray-200 hover:border-[#00E5C9] hover:bg-[#00E5C9]/5 hover:text-[#00E5C9]"
              }`}
              onClick={() => setSelectedLevel(level.value)}
            >
              {level.label}
            </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


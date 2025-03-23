'use client'

import RightSidebar from "@/components/custom/courses/right-sidebar"
import { CourseSidebar } from "@/components/custom/courses/left-sidebar"
import { LessonContent } from "@/components/custom/courses/lesson-content"
import type { LessonItem } from "@/types/lesson"
import { useEffect } from 'react'
import { useSidebar } from "@/components/ui/sidebar"
// import AdsHeader from "@/components/custom/ads/header"


const lessons: LessonItem[] = [
  {
    id: 1,
    title: "Overview and history of algebra",
    duration: "5m",
    type: "lesson",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Origin of algebra",
    duration: "10m 34s",
    type: "video",
  },
  {
    id: 3,
    title: "Abstract tests",
    duration: "15m",
    type: "quiz",
    isLocked: true,
  },
  {
    id: 4,
    title: "The beauty of algebra",
    duration: "8m",
    type: "lesson",
    isLocked: true,
  },
  {
    id: 5,
    title: "Intro to the coordinate plane",
    duration: "12m",
    type: "video",
    isLocked: true,
  },
]

export default function Page() {
  const { setOpen } = useSidebar()

  useEffect(() => {
    setOpen(false)
  }, [setOpen])
  
  return (
    <div className="flex h-screen bg-background">
      <CourseSidebar lessons={lessons} />
      <LessonContent />
      <RightSidebar/>
    </div>
  )
}


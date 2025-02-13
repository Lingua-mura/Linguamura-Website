import { Lock, PlayCircle, FileText, CheckCircle, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LessonItem } from "@/types/lesson"
import { QuizCard } from "./quiz-card"
import { usePathname, useRouter } from "next/navigation"

interface CourseSidebarProps {
  lessons: LessonItem[]
}

export function CourseSidebar({ lessons }: CourseSidebarProps) {

  const urlPath = usePathname()
  const router = useRouter()
  return (
    <div className="w-64 border-r bg-gray-50/40 h-screen overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-sm font-medium flex items-center gap-2">
          <span>Contents</span>
          <button className="ml-auto rounded-full p-1 hover:bg-gray-100">
            <ChevronDown className="h-4 w-4" />
          </button>
        </h2>
      </div>
      <nav className="p-2">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            className={cn(
              "w-full flex items-start gap-3 p-2 text-sm rounded-lg hover:bg-gray-100 transition-colors",
              lesson.isCompleted && "text-muted-foreground",
            )}
          >
            {lesson.type === "video" && <PlayCircle className="h-4 w-4 mt-0.5" />}
            {lesson.type === "lesson" && <FileText className="h-4 w-4 mt-0.5" />}
            {lesson.type === "quiz" && <FileText className="h-4 w-4 mt-0.5" />}
            <div className="flex-1 text-left">
              <div className="font-medium">{lesson.title}</div>
              <div className="text-xs text-muted-foreground">{lesson.duration}</div>
            </div>
            {lesson.isLocked && <Lock className="h-4 w-4" />}
            {lesson.isCompleted && <CheckCircle className="h-4 w-4 text-primary" />}
          </button>
        ))}
        <button className="w-full flex item-start gap-3 p-2 text-sm rounded-lg" onClick={() => router.push(urlPath + '/quiz')}>
          <Lock />
          <div className="font-medium">Quiz</div>
        </button>
      </nav>
    </div>
  )
}


export interface LessonItem {
    id: number
    title: string
    duration?: string
    isCompleted?: boolean
    isLocked?: boolean
    icon?: string
    description?: string
    type?: "lesson" | "quiz" | "video"
  }
  
  export interface Tab {
    id: string
    label: string
  }
  
  
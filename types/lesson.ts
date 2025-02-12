export interface LessonItem {
    id: string
    title: string
    duration: string
    isCompleted?: boolean
    isLocked?: boolean
    type: "lesson" | "quiz" | "video"
  }
  
  export interface Tab {
    id: string
    label: string
  }
  
  
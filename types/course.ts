export interface Course {
    id: string
    title: string
    description: string
    imageUrl: string
  }
  
  export interface CourseCategory {
    id: string
    title: string
    courses: Course[]
    totalCount: number
  }
  
  
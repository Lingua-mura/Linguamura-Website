import { cn } from "@/lib/utils"

type DayStatus = {
  day: string
  completed: boolean
}

interface WeekProgressProps {
  days: DayStatus[]
}

export function WeekProgress({ days }: WeekProgressProps) {
  return (
    <div className="flex justify-between px-4 py-6">
      {days.map((day) => (
        <div key={day.day} className="flex flex-col items-center gap-1">
          <div className={cn("w-4 h-4 rounded-full", day.completed ? "bg-cyan-400" : "bg-gray-200")} />
          <span className="text-xs text-gray-600">{day.day}</span>
        </div>
      ))}
    </div>
  )
}


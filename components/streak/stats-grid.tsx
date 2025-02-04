import type { StreakStats } from "@/types/streak"

interface StatsGridProps {
  stats: StreakStats
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4 px-4 py-2">
      <div className="text-center">
        <div className="font-bold">{stats.days}</div>
        <div className="text-xs text-gray-600">Days</div>
      </div>
      <div className="text-center">
        <div className="font-bold">{stats.lessons}</div>
        <div className="text-xs text-gray-600">Lessons</div>
      </div>
      <div className="text-center">
        <div className="font-bold">{stats.quizzes}</div>
        <div className="text-xs text-gray-600">Quizzes</div>
      </div>
      <div className="text-center">
        <div className="font-bold">{stats.minutes}</div>
        <div className="text-xs text-gray-600">Minutes</div>
      </div>
    </div>
  )
}


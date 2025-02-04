import { Flame } from "lucide-react"

interface StreakIconProps {
  streak: number
}

export function StreakIcon({ streak }: StreakIconProps) {
  return (
    <div className="relative w-24 h-24 mx-auto">
      <div className="absolute inset-0 border-2 border-cyan-400 rounded-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Flame className="w-8 h-8 text-yellow-400" />
        <span className="text-2xl font-bold mt-1">{streak}</span>
      </div>
    </div>
  )
}


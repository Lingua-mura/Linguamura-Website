'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRightFromLine, ChevronLeft } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

const daysOfWeek = [
  { id: 'Mon', label: 'Mon' },
  { id: 'Tue', label: 'Tue' },
  { id: 'Wed', label: 'Wed' },
  { id: 'Thur', label: 'Thur' },
  { id: 'Fri', label: 'Fri' },
  { id: 'Sat', label: 'Sat' },
  { id: 'Sun', label: 'Sun' },
]

const hours = Array.from({ length: 24 }, (_, i) => ({
  value: i.toString().padStart(2, '0'),
  label: i.toString().padStart(2, '0')
}))

const minutes = Array.from({ length: 60 }, (_, i) => ({
  value: i.toString().padStart(2, '0'),
  label: i.toString().padStart(2, '0')
}))

export default function StudyPlanSetup() {
  const router = useRouter()
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [hour, setHour] = useState('10')
  const [minute, setMinute] = useState('00')
  const [reminders, setReminders] = useState(false)

  const handleDayToggle = (dayId: string) => {
    setSelectedDays(prev => 
      prev.includes(dayId)
        ? prev.filter(d => d !== dayId)
        : [...prev, dayId]
    )
  }

  const handleContinue = () => {
    // Save study plan preferences
    const studyPlan = {
      days: selectedDays,
      time: `${hour}:${minute}`,
      reminders
    }
    localStorage.setItem('studyPlan', JSON.stringify(studyPlan))
    router.push('/user/education/study-plan/course')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="mr-4"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Start Study Plan</h1>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Select the days of the week you want to learn</h2>
          <div className="flex gap-2 flex-wrap">
            {daysOfWeek.map((day) => (
              <div key={day.id} className="flex flex-col items-center gap-2">
                <div className="text-sm font-medium">{day.label}</div>
                <button
                  onClick={() => handleDayToggle(day.id)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-colors
                    ${selectedDays.includes(day.id)
                      ? 'border-teal-400 bg-teal-400 text-white'
                      : 'border-gray-200 hover:border-teal-400'
                    }`}
                >
                  {day.label[0]}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Select time you want to learn</h2>
          <div className="flex gap-2">
            <Select value={hour} onValueChange={setHour}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Hour" />
              </SelectTrigger>
              <SelectContent>
                {hours.map((h) => (
                  <SelectItem key={h.value} value={h.value}>
                    {h.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={minute} onValueChange={setMinute}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Minute" />
              </SelectTrigger>
              <SelectContent>
                {minutes.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Set a reminder</h2>
            <p className="text-sm text-gray-500">Let&apos;s notify you when it&apos;s time to study.</p>
          </div>
          <Switch
            checked={reminders}
            onCheckedChange={setReminders}
          />
        </div>

        <Button
          onClick={handleContinue}
          className="w-[345px] bg-teal-400 hover:bg-teal-500 text-white rounded-full py-6 "
        >
          Continue <ArrowRightFromLine/>
        </Button>
      </div>
    </div>
  )
}

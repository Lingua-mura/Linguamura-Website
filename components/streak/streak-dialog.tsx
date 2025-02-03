"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { StreakIcon } from "./streak-icon"
import { WeekProgress } from "./week-progress"
import { StatsGrid } from "./stats-grid"
import { useState } from "react"

const MOCK_DAYS = [
    { day: "Mon", completed: true },
    { day: "Tue", completed: true },
    { day: "Wed", completed: true },
    { day: "Thu", completed: true },
    { day: "Fri", completed: true },
    { day: "Sat", completed: false },
    { day: "Sun", completed: false },
]

const MOCK_STATS = {
    days: 1,
    lessons: 36,
    quizzes: 3,
    minutes: 36,
}

export function StreakDialog() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <span className="text-lg">0</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center">
                        Day Streak
                        <div className="text-sm font-normal text-gray-600">You&apos;re doing great, Darlington!</div>
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <StreakIcon streak={1} />
                    <WeekProgress days={MOCK_DAYS} />
                    <div className="px-4">
                        <div className="text-sm font-semibold mb-2">Your Stats</div>
                        <StatsGrid stats={MOCK_STATS} />
                    </div>
                    <div className="px-4 pb-4">
                        <Button className="w-full border-primary text-primary" size="lg">
                            Take lesson
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}


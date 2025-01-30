'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import type { UserLanguagePreferences } from '@/components/custom/catalogue/eduQuestionnaire'

interface Lesson {
    id: number
    title: string
    description: string
    icon: string
    completed?: boolean
}

interface Chapter {
    id: number
    title: string
    progress: number
    lessons: Lesson[]
}

const chapters: Chapter[] = [
    {
        id: 1,
        title: 'Foundations',
        progress: 35,
        lessons: [
            {
                id: 1,
                title: 'Bonjour!',
                description: 'Start with greetings and introductions.',
                icon: '/images/lessons/paris.png'
            },
            {
                id: 2,
                title: 'Say Hello!',
                description: 'Learn basic greetings and farewells.',
                icon: '/images/lessons/take-oath.png'
            },
            {
                id: 3,
                title: "What's Your Name?",
                description: 'Introduce yourself and ask for names.',
                icon: '/images/lessons/girl-happy.png'
            },
            {
                id: 4,
                title: 'Nice to Meet You',
                description: 'Common phrases for initial conversations.',
                icon: '/images/lessons/handshake.png'
            },
            {
                id: 5,
                title: 'Chapter Review',
                description: 'Test your knowledge to unlock the next chapter.',
                icon: '/images/lessons/star.png'
            }
        ]
    }
]

export default function CoursePage() {
    const router = useRouter()
    const [preferences, setPreferences] = useState<UserLanguagePreferences | null>(null)

    useEffect(() => {
        const storedPreferences = localStorage.getItem('languagePreferences')
        if (storedPreferences) {
            setPreferences(JSON.parse(storedPreferences))
        }
    }, [])

    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 w-3/4 px-4 py-6">
                <div className="flex items-center mb-6">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => router.back()}
                        className="mr-4"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm">
                            {preferences?.proficiency}
                        </div>
                    </div>
                </div>

                {chapters.map((chapter) => (
                    <div key={chapter.id} className="mb-8 border border-t-0 rounded-2xl">
                        <div className="flex items-center justify-between mb-4 bg-primary py-4 px-2 rounded-t-2xl">
                            <h2 className="text-xl font-semibold">Chapter {chapter.id}: {chapter.title}</h2>
                            <Progress
                                value={chapter.progress}
                                className="w-2/3 bg-white"
                                indicatorClassName="bg-yellow-400"
                            />
                        </div>

                        <div className="space-y-4">
                            {chapter.lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className="flex items-center gap-4 p-4 rounded-lg hover:border-teal-400 cursor-pointer transition-colors"
                                    onClick={() => router.push(`/user/education/study-plan/lesson/${lesson.id}`)}
                                >
                                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border-8">
                                        <Image
                                            src={lesson.icon}
                                            alt={lesson.title}
                                            width={64}
                                            height={64}
                                            className='rounded-full m-2'
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{lesson.title}</h3>
                                        <p className="text-sm text-gray-500">{lesson.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Sidebar */}
            <div className="w-1/4 min-h-screen border-l p-6 sticky top-0">
                <div className="space-y-6 flex my-4 justify-between items-center">
                    {/* Language Selection */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${preferences?.language}.svg`}
                            alt={preferences?.languageName || ''}
                            width={30}
                            height={30}
                            className="rounded border"
                        />
                        <ChevronDown />
                    </div>

                    {/* Progress Icons */}
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-lg">🎯</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-lg">0</span>
                    </div>

                </div>
                {/* Tutor Button */}
                <div
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-2xl px-6 py-3"
                    onClick={() => {/* Handle tutor action */ }}
                >
                    <h3 className='font-bold'>Start learning with a professional tutor</h3>
                    <span>Learn with certified tutors that fit your budget</span>
                    <span className="ml-2">→</span>
                </div>
            </div>
        </div>
    )
}
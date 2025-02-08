'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronLeft, Lock, Plus, Trophy } from 'lucide-react'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import type { UserLanguagePreferences } from '@/components/custom/catalogue/eduQuestionnaire'
import { StreakDialog } from '@/components/streak/streak-dialog'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import LearningModule from '@/components/modules/learning'

interface Lesson {
    id: number
    title: string
    description: string
    icon: string
    locked: boolean
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
                icon: '/images/lessons/paris.png',
                locked: false
            },
            {
                id: 2,
                title: 'Say Hello!',
                description: 'Learn basic greetings and farewells.',
                icon: '/images/lessons/take-oath.png',
                locked: true
            },
            {
                id: 3,
                title: "What's Your Name?",
                description: 'Introduce yourself and ask for names.',
                icon: '/images/lessons/girl-happy.png',
                locked: true
            },
            {
                id: 4,
                title: 'Nice to Meet You',
                description: 'Common phrases for initial conversations.',
                icon: '/images/lessons/handshake.png',
                locked: true
            },
            {
                id: 5,
                title: 'Chapter Review',
                description: 'Test your knowledge to unlock the next chapter.',
                icon: '/images/lessons/star.png',
                locked: true
            }
        ]
    }
]

const questions = [
    {
        id: 1,
        heading: 'Listen carefully',
        description: 'Listen to the audio and answer the question.',
        question: 'What is the French word for "hello"?',
        options: ['Bonjour', 'Au revoir', 'Merci', 'Oui'],
        correctAnswer: 'Bonjour'
    },
    {
        id: 2,
        question: 'What is the French word for "thank you"?',
        options: ['Merci', 'Au revoir', 'Bonjour', 'Oui'],
        correctAnswer: 'Merci'
    },
    {
        id: 3,
        question: 'What is the French word for "yes"?',
        options: ['Oui', 'Non', 'Merci', 'Bonjour'],
        correctAnswer: 'Oui'
    },
    {
        id: 4,
        question: 'What is the French word for "goodbye"?',
        options: ['Au revoir', 'Bonjour', 'Merci', 'Oui'],
        correctAnswer: 'Au revoir'
    },
    {
        id: 5,
        question: 'What is the French word for "please"?',
        options: ['S\'il vous plaît', 'Merci', 'Bonjour', 'Oui'],
        correctAnswer: 'S\'il vous plaît'
    },
    {
        id: 6,
        question: 'What is the French word for "no"?',
        options: ['Non', 'Oui', 'Merci', 'Bonjour'],
        correctAnswer: 'Non'
    },
    {
        id: 7,
        question: 'What is the French word for "excuse me"?',
        options: ['Excusez-moi', 'Merci', 'Bonjour', 'Oui'],
        correctAnswer: 'Excusez-moi'
    },
    {
        id: 8,
        question: 'What is the French word for "good night"?',
        options: ['Bonne nuit', 'Merci', 'Bonjour', 'Oui'],
        correctAnswer: 'Bonne nuit'
    },
    {
        id: 9,
        question: 'What is the French word for "good morning"?',
        options: ['Bonjour', 'Merci', 'Au revoir', 'Oui'],
        correctAnswer: 'Bonjour'
    },
    {
        id: 10,
        question: 'What is the French word for "good evening"?',
        options: ['Bonsoir', 'Merci', 'Au revoir', 'Oui'],
        correctAnswer: 'Bonsoir'
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
                                <Dialog key={lesson.id}>
                                    <DialogTrigger asChild>
                                        <div
                                            key={lesson.id}
                                            className={`flex items-center gap-4 p-4 rounded-lg ${lesson.locked ? 'opacity-50 cursor-not-allowed' : 'hover:border-teal-400 cursor-pointer'} transition-colors`}
                                        >
                                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border-8 relative">
                                                <Image
                                                    src={lesson.icon}
                                                    alt={lesson.title}
                                                    width={64}
                                                    height={64}
                                                    className='rounded-full m-2'
                                                />
                                                {lesson.locked && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                                                        <Lock />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-black-500">{lesson.title}</h3>
                                                <p className="text-sm text-gray-500">{lesson.description}</p>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    {!lesson.locked ? (
                                        <DialogContent className="w-[350px] bg-primary">
                                            <div className="flex flex-col items-center pt-6 pb-8 px-6">
                                                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white mb-4">
                                                    <Image
                                                        src="/images/eiffel-tower.png"
                                                        alt="Eiffel Tower"
                                                        width={64}
                                                        height={64}
                                                        className="object-cover"
                                                    />
                                                </div>

                                                <h2 className="text-2xl font-semibold mb-2">Bonjour!</h2>

                                                <p className="text-center text-black/90 mb-1">Start with greetings and introductions.</p>

                                                <p className="text-sm text-black/80 mb-6">(2mins)</p>

                                                <Button className="w-full bg-white text-primary rounded-3xl hover:bg-white/90 transition-colors">
                                                    Start learning
                                                </Button>
                                            </div>
                                        </DialogContent>
                                    ) : (
                                        <DialogContent className="w-full rounded-2xl bg-primary">
                                            <div>
                                                <h3 className='text-3xl font-bold'>Unlock Expert Guidiance! <Trophy /></h3>
                                                <p>
                                                To connect with professional tutors and get personalized learning support, upgrade to Premium. Master your subjects with one-on-one help and boost your learning journey! 🚀
                                                </p>
                                                <div className="flex mt-12 justify-between">
                                                    <h3 className='font-bold text-2xl'>Go Premium & Level Up!</h3>
                                                    <Button variant='default' className='border-0 rounded-3xl text-primary hover:bg-white/90'>Go Premium</Button>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    )}
                                </Dialog>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Sidebar */}
            <div className="w-1/4 min-h-screen border-l p-6 sticky top-0">
                <div className="space-y-6 flex my-4 justify-between items-center">
                    {/* Language Selection */}
                    <Dialog>
                        <DialogTrigger>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Image
                                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${preferences?.language}.svg`}
                                    alt={preferences?.languageName || ''}
                                    width={30}
                                    height={30}
                                    className="rounded border"
                                />
                                <ChevronDown />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <div className="flex flex-col items-center gap-4 p-6">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${preferences?.language}.svg`}
                                        alt={preferences?.languageName || ''}
                                        width={40}
                                        height={40}
                                        className="rounded border"
                                    />
                                    <span className="text-xl font-medium">You are learning {preferences?.languageName}</span>
                                </div>
                                <Button
                                    variant="default"
                                    className="w-full text-primary border-primary"
                                    onClick={() => router.push('#')}
                                >
                                    <Plus /> Add More Languages
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>


                    {/* Progress Icons */}
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
                        <Dialog>
                            <DialogTrigger>
                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
                                    <span className="text-lg">🎯</span>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <div className="flex flex-col items-center gap-4 p-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl font-bold">You have <span className='text-primary'>250</span> coins</span>
                                    </div>
                                    <Button
                                        variant="default"
                                        className="w-full border-primary text-primary"
                                        onClick={() => router.push('#')}
                                    >
                                        Buy More
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
                        <StreakDialog />
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
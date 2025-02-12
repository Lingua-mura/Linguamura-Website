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
import RightSidebar from './right-sidebar'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { log } from 'console'

export default function CoursePage({ chapters }: { chapters: any }) {
    const pathname = usePathname()
    console.log(pathname);
    
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

                {chapters.map((chapter: any) => (
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
                            {chapter.lessons.map((lesson: any) => (
                                <Dialog key={lesson.id}>
                                    <DialogTrigger asChild>
                                        <div
                                            key={lesson.id}
                                            className={`flex items-center gap-4 p-4 rounded-lg ${lesson.locked ? 'opacity-50 cursor-not-allowed' : 'hover:border-teal-400 cursor-pointer'} transition-colors`}
                                        >
                                            {lesson.icon ? (
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
                                            ) : ""}
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

                                                <Link href={pathname + `/${lesson.id}`} >
                                                    <Button className="w-full bg-white text-primary rounded-3xl hover:bg-white/90 transition-colors">
                                                        Start learning
                                                    </Button>
                                                </Link>
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

            <RightSidebar />
        </div>
    )
}
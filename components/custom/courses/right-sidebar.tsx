'use client'
import { StreakDialog } from '@/components/streak/streak-dialog'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown, Plus } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { UserLanguagePreferences } from '../catalogue/eduQuestionnaire'
import { useRouter } from 'next/navigation'

export default function RightSidebar() {

    const router = useRouter()

    const [preferences, setPreferences] = useState<UserLanguagePreferences | null>(null)
    
        useEffect(() => {
            const storedPreferences = localStorage.getItem('languagePreferences')
            if (storedPreferences) {
                setPreferences(JSON.parse(storedPreferences))
            }
        }, [])

    return (
        <>
            {/* Right Sidebar */}
            < div className="w-1/4 min-h-screen border-l p-6 sticky top-0" >
                <div className="space-y-6 flex my-4 justify-between items-center">
                    {/* Language Selection */}
                    <Dialog>
                        <DialogTrigger>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <div>Math</div>
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
            </div >
        </>
    )
}
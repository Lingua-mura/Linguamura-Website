'use client'
import CoursePage from "@/components/custom/courses/course-page";
import Questionnaire from "@/components/custom/courses/study-plan";
import { usePathname } from "next/navigation";

interface Lesson {
    id: number
    title: string
    description: string
    icon?: string
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
                locked: false
            },
            {
                id: 2,
                title: 'Say Hello!',
                description: 'Learn basic greetings and farewells.',
                locked: true
            },
            {
                id: 3,
                title: "What's Your Name?",
                description: 'Introduce yourself and ask for names.',
                locked: true
            },
            {
                id: 4,
                title: 'Nice to Meet You',
                description: 'Common phrases for initial conversations.',
                locked: true
            },
            {
                id: 5,
                title: 'Chapter Review',
                description: 'Test your knowledge to unlock the next chapter.',
                locked: true
            }
        ]
    },
    {
        id: 2,
        title: 'Foundations',
        progress: 35,
        lessons: [
            {
                id: 1,
                title: 'Bonjour!',
                description: 'Start with greetings and introductions.',
                locked: false
            },
            {
                id: 2,
                title: 'Say Hello!',
                description: 'Learn basic greetings and farewells.',
                locked: true
            },
            {
                id: 3,
                title: "What's Your Name?",
                description: 'Introduce yourself and ask for names.',
                locked: true
            },
            {
                id: 4,
                title: 'Nice to Meet You',
                description: 'Common phrases for initial conversations.',
                locked: true
            },
            {
                id: 5,
                title: 'Chapter Review',
                description: 'Test your knowledge to unlock the next chapter.',
                locked: true
            }
        ]
    }
]

export default function Page() {

    const studyPlan = localStorage.getItem('studyPlan');
    const url = usePathname();
    return (
        <>
        {studyPlan ? (
            <CoursePage chapters={chapters} />
        ) : (<Questionnaire url={url} />)}
        </>
    )
}
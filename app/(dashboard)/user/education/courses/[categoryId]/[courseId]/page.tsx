'use client'
import CoursePage from "@/components/custom/courses/course-page";
import Questionnaire from "@/components/custom/courses/study-plan";
import { usePathname } from "next/navigation";
// import { LessonItem } from "@/types/lesson";
import { Chapter } from "@/types/chapter";

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
                isLocked: false
            },
            {
                id: 2,
                title: 'Say Hello!',
                description: 'Learn basic greetings and farewells.',
                isLocked: true
            },
            {
                id: 3,
                title: "What's Your Name?",
                description: 'Introduce yourself and ask for names.',
                isLocked: true
            },
            {
                id: 4,
                title: 'Nice to Meet You',
                description: 'Common phrases for initial conversations.',
                isLocked: true
            },
            {
                id: 5,
                title: 'Chapter Review',
                description: 'Test your knowledge to unlock the next chapter.',
                isLocked: true
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
                isLocked: false
            },
            {
                id: 2,
                title: 'Say Hello!',
                description: 'Learn basic greetings and farewells.',
                isLocked: true
            },
            {
                id: 3,
                title: "What's Your Name?",
                description: 'Introduce yourself and ask for names.',
                isLocked: true
            },
            {
                id: 4,
                title: 'Nice to Meet You',
                description: 'Common phrases for initial conversations.',
                isLocked: true
            },
            {
                id: 5,
                title: 'Chapter Review',
                description: 'Test your knowledge to unlock the next chapter.',
                isLocked: true
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
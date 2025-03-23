import { QuizCard } from "@/components/custom/courses/quiz-card";
import RightSidebar from "@/components/custom/courses/right-sidebar";

export default function Page() {
    return (
        <div className="flex">
            <QuizCard />
            <RightSidebar />
        </div>
    )
}
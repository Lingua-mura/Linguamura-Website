import AdsHeader from "@/components/custom/ads/header";
import CourseListing from "@/components/custom/courses/course-listing";
import { CourseCategory } from "@/types/course";


export default function Page() {
    const courseCategories: CourseCategory[] = [
        {
            id: "sciences",
            title: "Sciences",
            totalCount: 3,
            courses: [
                {
                    id: "biology",
                    title: "High School Biology",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/dna.png",
                },
                {
                    id: "chemistry",
                    title: "High School Chemistry",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/molecule.png",
                },
                {
                    id: "physics",
                    title: "High School Physics",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/physics.png",
                },
            ],
        },
    ]

    return (
        <>
        <AdsHeader  />
        <CourseListing courseCategories={courseCategories} />
        </>
    )
}
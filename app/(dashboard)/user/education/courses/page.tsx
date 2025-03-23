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
        {
            id: "maths",
            title: "Maths",
            totalCount: 3,
            courses: [
                {
                    id: "pre-algebra",
                    title: "Pre-Algebra",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/dna.png",
                },
                {
                    id: "algebra",
                    title: "Algebra",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/molecule.png",
                },
                {
                    id: "geometry",
                    title: "High School Geometry",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/physics.png",
                },
            ],
        },
        {
            id: "economics",
            title: "Economics",
            totalCount: 3,
            courses: [
                {
                    id: "microeconomics",
                    title: "Microeconomics",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/dna.png",
                },
                {
                    id: "macroeconomics",
                    title: "Macroeconomics",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/molecule.png",
                },
                {
                    id: "college-macroeconomics",
                    title: "College Macroeconomics",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/physics.png",
                },
            ],
        },
        {
            id: "humanities",
            title: "Humanities",
            totalCount: 3,
            courses: [
                {
                    id: "art-history",
                    title: "Art History",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/dna.png",
                },
                {
                    id: "college-art-history",
                    title: "College Art History",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/molecule.png",
                },
                {
                    id: "world-history",
                    title: "World History",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/physics.png",
                },
            ],
        },
        {
            id: "computing",
            title: "Computing",
            totalCount: 3,
            courses: [
                {
                    id: "hs-biology",
                    title: "High School Biology",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/dna.png",
                },
                {
                    id: "hs-chemistry",
                    title: "High School Chemistry",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/molecule.png",
                },
                {
                    id: "hs-physics",
                    title: "High School Physics",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/physics.png",
                },
            ],
        },
        {
            id: "test-prep",
            title: "Test Prep",
            totalCount: 3,
            courses: [
                {
                    id: "test-biology",
                    title: "High School Biology",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/dna.png",
                },
                {
                    id: "test-chemistry",
                    title: "High School Chemistry",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/molecule.png",
                },
                {
                    id: "test-physics",
                    title: "High School Physics",
                    description: "Plan your next trip or commute with our transportation features",
                    imageUrl: "/images/courses/physics.png",
                },
            ],
        }
    ]

    return (
        <>
        <AdsHeader  />
        <CourseListing courseCategories={courseCategories} />
        </>
    )
}
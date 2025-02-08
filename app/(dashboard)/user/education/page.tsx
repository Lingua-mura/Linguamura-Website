import AdsHeader from "@/components/custom/ads/header";
import { CategoryCard } from "@/components/custom/catalogue/edu-catalogue-card";
import { Button } from "@/components/ui/button";

const categories = [
    {
        title: "Languages",
        description: "Plan your next trip or commute with our transportation features",
        imageSrc: "/images/books.png",
        href: "/user/education/languages",
    },
    {
        title: "Courses",
        description: "Plan your next trip or commute with our transportation features",
        imageSrc: "/images/people-learning.png",
        href: "/user/education/courses",
    },
    {
        title: "Music & Arts",
        description: "Plan your next trip or commute with our transportation features",
        imageSrc: "/images/piano.png",
        href: "/music-arts",
    },
]

export default function Page() {
    return (
        <>
            <AdsHeader />

            <div className="w-11/12 mx-auto">
                <div className="my-8 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <CategoryCard key={category.title} {...category} />
                        ))}
                    </div>
                </div>

                <div className="w-full mx-auto my-4 px-6 py-12 bg-[#f7deac] rounded-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold">
                            Connect with others in our<br />
                            chat room and community<br />
                            forums
                        </h2>
                        <Button
                            variant="default"
                            className="object-right-bottom bg-white text-black hover:bg-white/90 rounded-full px-8 border-2 border-black w-[240px]"
                        >
                            Join Forum
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
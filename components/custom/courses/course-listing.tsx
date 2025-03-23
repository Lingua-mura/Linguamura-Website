"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { CourseCategory } from "@/types/course"

export default function CourseListing({ courseCategories }: { courseCategories: CourseCategory[] }) {
    return (
        <div className="container mx-auto px-4 py-6">
            <header className="flex items-center gap-4 mb-8">
                <Link href="/user/education" className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="shrink-0">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div className="flex-1 flex items-right justify-end gap-4">
                    <Input type="search" placeholder="Search courses, topics" className="w-full max-w-md" />
                    <Button variant="primary" className="w-[140px]">Filter</Button>
                </div>
            </header>

            <main className="space-y-8">
                {courseCategories.map((category) => (
                    <section key={category.id}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold">{category.title}</h2>
                            <Link href={`/user/education/courses/${category.id}`} className="text-primary hover:underline">
                                Show all({category.totalCount})
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.courses.map((course) => (
                                <Link key={course.id} href={`/user/education/courses/${category.id}/${course.id}`}>
                                    <Card key={course.id} className="overflow-hidden">
                                        <div className="relative aspect-[2/1]">
                                            <Image
                                                src={course.imageUrl || "/placeholder.svg"}
                                                alt={course.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-semibold mb-2">{course.title}</h3>
                                            <p className="text-sm text-muted-foreground">{course.description}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    )
}


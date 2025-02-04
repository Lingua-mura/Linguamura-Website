import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CategoryCardProps {
    title: string
    description: string
    imageSrc: string
    href: string
}

export function CategoryCard({ title, description, imageSrc, href }: CategoryCardProps) {
    return (
        <Card className="group overflow-hidden bg-white hover:shadow-lg transition-shadow rounded-3xl">
            <div className="relative h-48">
                <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <CardHeader>
                <h3 className="text-lg font-semibold">{title}</h3>
            </CardHeader>
            <CardContent className="space-y-4 flex">
                <p className="text-sm text-gray-600">{description}</p>
                <a href={href} className="inline-flex items-center text-[#00E5BE] hover:text-[#00E5BE]/90 transition-colors">
                    <Button variant="primary" className="text-sm w-[44px] ">
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </a>
            </CardContent>
        </Card>
    )
}


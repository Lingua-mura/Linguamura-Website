"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
    title: string
    description: string
    imageSrc: string
    buttonText: string
    href: string
}

export function FeatureCard({ title, description, imageSrc, buttonText, href }: FeatureCardProps) {
    return (
        <Card className="group relative overflow-hidden border-0 w-[311px] px-2 pt-1 min-h-[486px]">
            <div className="relative h-[306px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 rounded-3xl" />
                <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={title}
                    width={311}
                    height={306}
                    className="object-cover h-full w-full rounded-3xl"
                />
                <h2 className="absolute bottom-2 left-6 text-2xl font-bold text-white z-20">
                    {title}
                </h2>
            </div>
            <CardContent className="px-3 py-2 space-y-5">
                <p className="text-sm text-gray-600">{description}</p>
                <Button 
                    asChild 
                    className="min-w-1/2 bg-btnPrimary hover:bg-btnPrimary/90 text-black font-medium rounded-full"
                >
                    <a href={href} className="flex items-center justify-center gap-2">
                        {buttonText}
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">, {title}</span>
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}


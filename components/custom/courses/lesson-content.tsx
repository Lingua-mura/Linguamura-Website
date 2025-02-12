"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Tab } from "@/types/lesson"

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "transcript", label: "Transcript" },
  { id: "questions", label: "Questions" },
]

export function LessonContent() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Origin of algebra</h1>

        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-6">
          <Image
            src="/images/lessons/lesson.png"
            alt="Algebra concept illustration"
            fill
            className="object-cover"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <p className="text-muted-foreground leading-relaxed">
              Algebra, one of the fundamental branches of mathematics, has a rich and fascinating history that dates
              back thousands of years. Its development was driven by the need to solve practical problems related to
              commerce, engineering, and architecture. Over time, algebra evolved into a formalized system of thinking
              that is foundational to modern mathematics and science.
            </p>
          </TabsContent>
          <TabsContent value="transcript">
            <p className="text-muted-foreground">Transcript content goes here...</p>
          </TabsContent>
          <TabsContent value="questions">
            <p className="text-muted-foreground">Questions content goes here...</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


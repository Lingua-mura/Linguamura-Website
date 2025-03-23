"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Tab } from "@/types/lesson"
import { QuestionsTab } from "./question-tab"

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "transcript", label: "Transcript" },
  { id: "questions", label: "Questions" },
]

const comments = [
  {
    id: '1',
    author: {
      name: 'Tolumi Kanthe',
      avatar: '/placeholder.svg'
    },
    content: 'There is no "proper" way. True understanding of the concept (doing by decimals) means you can look at the problem in more than one way and select the most appropriate. Rhadion is not suggesting his way is "better". It\'s different. It\'s worth considering. I would also be interested to see a video where this alternative way of tackling the problem was explored. I echo Rhadion\'s question - is there one?',
    timestamp: '3 months ago',
    likes: 4,
    commentCount: 4
  },
  {
    id: '2',
    author: {
      name: 'Jennifer Blaise',
      avatar: '/placeholder.svg'
    },
    content: 'There is no "proper" way. True understanding of the concept (doing by decimals) means you can look at the problem in more than one way and select the most appropriate. Rhadion is not suggesting his way is "better". It\'s different. It\'s worth considering. I would also be interested to see a video where this alternative way of tackling the problem was explored. I echo Rhadion\'s question - is there one?',
    timestamp: '4 months ago',
    likes: 4,
    commentCount: 4
  }
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
            <QuestionsTab comments={comments} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


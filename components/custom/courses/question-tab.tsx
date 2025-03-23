'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart } from 'lucide-react'


interface Comment {
    id: string
    author: {
      name: string
      avatar?: string
    }
    content: string
    timestamp: string
    likes: number
    commentCount: number
  }

interface QuestionsTabProps {
    comments: Comment[];
}

export function QuestionsTab({ comments }: QuestionsTabProps) {
    const [question, setQuestion] = useState('')

    return (
        <div className="space-y-6">
            <div className="space-y-4 border">
                <Textarea
                    placeholder="Ask a question or share your opinions with other learners..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="min-h-[100px] p-4 border-0"
                />
                <div className="flex justify-end p-2">
                    <Button variant="primary">Ask question</Button>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-medium text-lg">Other Learners&apos; Responses</h3>
                
                {comments.map((comment) => (
                    <div key={comment.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={comment.author.avatar} />
                                <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">{comment.author.name}</div>
                                <div className="text-sm text-muted-foreground">{comment.timestamp}</div>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{comment.content}</p>
                        <div className="flex items-center gap-4 text-sm">
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                                <Heart className="h-4 w-4" />
                                <span>Likes</span>
                                <span className="text-foreground">({comment.likes})</span>
                            </button>
                            <button className="text-muted-foreground hover:text-primary transition-colors">
                                {comment.commentCount} comments
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function QuizCard() {
    return (
        <div className="mx-auto my-3">
            <Card className="border-2 border-primary/10 h-[212px] w-[689px] ">
                <CardContent className="p-4 space-y-2 text-center">
                    <h3 className="font-semibold">Are you ready to practice?</h3>
                    <p className="text-sm text-muted-foreground">10 questions</p>
                    <Button variant="primary" className="mt-2">
                        <Link href="/user/premium">Let's go!</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}


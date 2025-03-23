'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingTier {
  name: string
  description: string
  price: number
  features: PricingFeature[]
  ctaText: string
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annually">("monthly")
  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      description: "Just for trying things out",
      price: 0,
      features: [
        { text: "Access to all educators", included: true },
        { text: "Limited lesson resources", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
      ],
      ctaText: "Get started",
    },
    {
      name: "Premium",
      description: "Best if you want to get features mainly at your fingertips",
      price: 250,
      features: [
        { text: "Access to all educators", included: true },
        { text: "No ads", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
      ],
      ctaText: "Subscribe now",
    },
    {
      name: "Custom",
      description:
        "If business feel more right, let's craft a plan that works for you. Ask us about a personalized for your needs, whether 10 more or less!",
      price: 0,
      features: [
        { text: "Access to all educators", included: true },
        { text: "No ads", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
        { text: "Access to all educators", included: true },
      ],
      ctaText: "Let's talk",
    },
  ]

  return (
    <div className="min-h-screen bg-[#00E5C9] py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-white">What LinguaMura Offers You</h1>
            <p className="text-white/90">
              Choose the plan that suits you best. Want to check it? Use your subscription or upgrade now!
            </p>
          </div>

          <div className="flex rounded-full bg-white p-1 w-fit">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2 rounded-full transition-colors ${
                billingCycle === "monthly" ? "bg-[#00E5C9] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-8 py-2 rounded-full transition-colors ${
                billingCycle === "annually" ? "bg-[#00E5C9] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Annually (Save 40%)
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="relative flex flex-col">
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  {tier.price !== null ? (
                    <div className="mb-4">
                      <span className="text-3xl font-bold">${tier.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  ) : null}
                  <ul className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-[#00E5C9] mr-2" />
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#00E5C9] hover:bg-[#00E5C9]/90">{tier.ctaText}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


import { FeatureCard } from "@/components/custom/catalogue/feature-card"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "Education",
    description:
      "With LinguaMura, you can learn new languages and expand your knowledge with our educational resources and explore scholarship opportunities.",
    image: "/images/education-landing.png",
    action: "Learn",
    href: "/user/education",
  },
  {
    title: "Health",
    description:
      "With LinguaMura, you can take control of your health and wellness with personalized advice and tools.",
    image: "/images/health-landing.png",
    action: "Control your health",
    href: "/health",
  },
  {
    title: "Marketplace",
    description: "With LinguaMura, discover new products and services in our marketplace.",
    image: "/images/shopping-landing.png",
    action: "Shop",
    href: "/shop",
  },
  {
    title: "Transport",
    description: "Plan your next trip or commute with our transportation features.",
    image: "/images/cheerful-people.png",
    action: "Transport",
    href: "/transport",
  },
  {
    title: "Housing",
    description: "Find your dream home with our real estate services.",
    image: "/images/housing-highview.png",
    action: "Housing",
    href: "/housing",
  },
  {
    title: "Entertainment",
    description: "Enjoy your favorite movies, music, and games in our entertainment section.",
    image: "/images/entertainment.png",
    action: "Entertainment",
    href: "/entertainment",
  },
]

export default function Page() {
  return (
    <div className="">
      <div className="w-full h-[119px] bg-[#fff9e5] flex justify-center items-center">
        No Ads yet..
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4 max-w-7xl mx-auto">
        {categories.map((category) => (
          <FeatureCard
            key={category.title}
            title={category.title}
            description={category.description}
            imageSrc={category.image}
            buttonText={category.action}
            href={category.href}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto my-4 px-6 py-12 bg-[#f7deac] rounded-lg">
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
  )
}

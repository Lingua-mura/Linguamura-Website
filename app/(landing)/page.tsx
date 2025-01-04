import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[88px] min-h-screen flex flex-col">
      <section className="bg-hero-section-gradient text-white h-screen flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-5xl font-bold mb-4">Your Journey Simplified</h1>
          <p className="text-xl mb-6">
            Education, Health, Travel, and Entertainment in
            <span className="block font-bold text-3xl">One Place</span>
          </p>
          <Button variant="secondary" size="lg">Sign up for free</Button>
        </div>
      </section>
      <section className="min-h-80">
        &nbsp;
        Intro Section
      </section>
    </div>
  );
}

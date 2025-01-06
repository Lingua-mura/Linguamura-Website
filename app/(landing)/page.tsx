import Slider from "@/components/custom/slider";
import TestimonialCard from "@/components/custom/testimonial-card";
import VideoCard from "@/components/custom/video-card";
import CommunitySection from "@/components/landing/communities-section";
import FAQSection from "@/components/landing/faq-section";
import PricingSection from "@/components/landing/pricing-section";
import ServiceSection from "@/components/landing/service-section";
import { Button } from "@/components/ui/button";

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
          <Button variant="secondary" size="lg">
            Sign up for free
          </Button>
        </div>
      </section>

      <section className="sm:px-6 md:px-16">
        <div className="px-6 min-h-screen relative md:max-w-[1272px] mx-auto">
          <div className="mb-[3rem] mt-20 max-md:mt-10">
            <h2 className="text-gray-900 font-bold text-xl lg:text-4xl mb-3">
              What's LinguaMura?
            </h2>
            <p className="text-sm md:text-md">
              Linguamura simplifies your life by providing a wide range of
              features and services in one place.
            </p>
          </div>

          <div>
            <ServiceSection
              serviceTitle="Education"
              title="Mastering Your Life"
              description="With Linguamura, you can learn new languages and expand your knowledge with our educational resources."
              buttonText="Learn More"
              imageSrc="/images/education-landing.png"
              imageAlt="Dark guy holding a book in the library"
              imageWidth={200}
              imageHeight={400}
              direction="right"
              redirectLink="#"
            />
          </div>

          <div>
            <ServiceSection
              serviceTitle="Health"
              title="Unlocking New Opportunities"
              description="With Linguamura, you can take control of your health and wellness with personalized advice and tools."
              buttonText="Control your health"
              imageSrc="/images/health-landing.png"
              imageAlt="Doctor working on clinic"
              imageWidth={200}
              imageHeight={400}
              direction="left"
              redirectLink="#"
            />
          </div>

          <div>
            <ServiceSection
              serviceTitle="Marketplace"
              title="Redefining Your Experiences"
              description="With Linguamura, discover new products and services in our marketplace."
              buttonText="Shop now"
              imageSrc="/images/shopping-landing.png"
              imageAlt="Shopping cart with shopping bags"
              imageWidth={200}
              imageHeight={400}
              direction="right"
              redirectLink="#"
            />
          </div>
        </div>
      </section>

      <section className="sm:px-6 md:px-16 mb-5">
        <div className="px-6 relative md:max-w-[1272px] mx-auto">
          <div className="mb-[1.5rem] mt-8 max-md:mt-8">
            <h2 className="text-gray-900 font-bold text-lg md:text-2xl lg:text-4xl mb-3">
              LinguaMura is so much <span className="text-primary">More!!</span>
            </h2>
            <p className="text-sm md:text-md">
              Our goal is to empower you with the tools and resources you need
              to succeed in various aspects of your life.{" "}
            </p>
          </div>
        </div>
        <div className="px-6">
          <CommunitySection
            title="Communities"
            description="Connect with others in our chat room and community forums"
            imageUrl="/images/communities-landing.png"
          />
        </div>
      </section>

      <section className="sm:px-6 md:px-16 mb-14">
        <div className="px-6 relative md:max-w-[1272px] mx-auto">
          <div className="mb-[1.5rem] mt-8 max-md:mt-8 text-center">
            <h2 className="text-gray-900 font-bold text-lg md:text-2xl lg:text-4xl mb-3">
              What Lingua Mura Offers You
            </h2>
            <p className="text-sm md:text-md">
              Choose the plan that suits you best. Want to adjust it? Tailor
              your subscription for a perfect match!
            </p>
          </div>
          <PricingSection />
        </div>
      </section>

      <section className="bg-hero-section-gradient sm:px-6 md:px-16 mb-14">
        <div className="px-6 relative md:max-w-[1272px] mx-auto">
          <div className="mb-[1.5rem] mt-8 max-md:mt-8 text-center">
            <h2 className="text-gray-900 font-bold text-lg md:text-2xl lg:text-4xl mb-3">
              What Our Subscribers are Saying
            </h2>
            <p className="text-sm md:text-md">
              Hear what our subscribed users are saying about our products
            </p>
          </div>

          <Slider
          scrollInterval={5000} 
          noArrows={true}
          breakpoints={{
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2.5,
            },
            900: {
                slidesPerView: 4.5,
            },
            1300: {
                slidesPerView: 5.5,
            },
          }}>
            <VideoCard
              title="Video Card Image 1"
              thumbnail="/images/education-landing.png"
              onClick={() => {}}
            />
            <VideoCard
              title="Video Card Image 1"
              thumbnail="/images/education-landing.png"
              onClick={() => {}}
            />
            <VideoCard
              title="Video Card Image 1"
              thumbnail="/images/education-landing.png"
              onClick={() => {}}
            />
            <VideoCard
              title="Video Card Image 1"
              thumbnail="/images/education-landing.png"
              onClick={() => {}}
            />
            <VideoCard
              title="Video Card Image 1"
              thumbnail="/images/education-landing.png"
              onClick={() => {}}
            />
            <VideoCard
              title="Video Card Image 1"
              thumbnail="/images/education-landing.png"
              onClick={() => {}}
            />
            <VideoCard
              title="Video Card Image 1"
              thumbnail="/images/education-landing.png"
              onClick={() => {}}
            />
            <VideoCard
              title="Video Card Image 1"
              thumbnail="/images/education-landing.png"
              onClick={() => {}}
            />
          </Slider>

          <div className="mb-[1.5rem] mt-4 max-md:mt-4">
            <h2 className="text-gray-900 font-bold text-lg md:text-2xl lg:text-4xl mb-3">
              More Reviews
            </h2>
          </div>

          <Slider 
          scrollInterval={5000}
          noArrows={true}
          noPagination={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            900: {
              slidesPerView: 2.5,
            },
            1300: {
              slidesPerView: 4.5,
            },
          }}>
            <TestimonialCard
              testimonial="As someone who’s tried various language learning platforms, LinguaMura stands out for its comprehensive approach to mastering French. The lessons are perfectly structured, guiding you from the basics to advanced levels with ease. I especially love the customizable subscription options—they make it easy to find a plan that fits my learning pace. The vocabulary-building tools are incredibly intuitive, and the platform’s design is sleek and user-friendly."
              avatar="/images/education-landing.png"
              name="Peter"
              location="Calabar, Nigeria"
              rating={5}
            />
            <TestimonialCard
              testimonial="As someone who’s tried various language learning platforms, LinguaMura stands out for its comprehensive approach to mastering French. The lessons are perfectly structured, guiding you from the basics to advanced levels with ease. I especially love the customizable subscription options—they make it easy to find a plan that fits my learning pace. The vocabulary-building tools are incredibly intuitive, and the platform’s design is sleek and user-friendly."
              avatar="/images/education-landing.png"
              name="Peter"
              location="Calabar, Nigeria"
              rating={5}
            />
            <TestimonialCard
              testimonial="As someone who’s tried various language learning platforms, LinguaMura stands out for its comprehensive approach to mastering French. The lessons are perfectly structured, guiding you from the basics to advanced levels with ease. I especially love the customizable subscription options—they make it easy to find a plan that fits my learning pace. The vocabulary-building tools are incredibly intuitive, and the platform’s design is sleek and user-friendly."
              avatar="/images/education-landing.png"
              name="Peter"
              location="Calabar, Nigeria"
              rating={5}
            />
            <TestimonialCard
              testimonial="As someone who’s tried various language learning platforms, LinguaMura stands out for its comprehensive approach to mastering French. The lessons are perfectly structured, guiding you from the basics to advanced levels with ease. I especially love the customizable subscription options—they make it easy to find a plan that fits my learning pace. The vocabulary-building tools are incredibly intuitive, and the platform’s design is sleek and user-friendly."
              avatar="/images/education-landing.png"
              name="Peter"
              location="Calabar, Nigeria"
              rating={5}
            />
            <TestimonialCard
              testimonial="As someone who’s tried various language learning platforms, LinguaMura stands out for its comprehensive approach to mastering French. The lessons are perfectly structured, guiding you from the basics to advanced levels with ease. I especially love the customizable subscription options—they make it easy to find a plan that fits my learning pace. The vocabulary-building tools are incredibly intuitive, and the platform’s design is sleek and user-friendly."
              avatar="/images/education-landing.png"
              name="Peter"
              location="Calabar, Nigeria"
              rating={5}
            />
            <TestimonialCard
              testimonial="As someone who’s tried various language learning platforms, LinguaMura stands out for its comprehensive approach to mastering French. The lessons are perfectly structured, guiding you from the basics to advanced levels with ease. I especially love the customizable subscription options—they make it easy to find a plan that fits my learning pace. The vocabulary-building tools are incredibly intuitive, and the platform’s design is sleek and user-friendly."
              avatar="/images/education-landing.png"
              name="Peter"
              location="Calabar, Nigeria"
              rating={5}
            />
            <TestimonialCard
              testimonial="As someone who’s tried various language learning platforms, LinguaMura stands out for its comprehensive approach to mastering French. The lessons are perfectly structured, guiding you from the basics to advanced levels with ease. I especially love the customizable subscription options—they make it easy to find a plan that fits my learning pace. The vocabulary-building tools are incredibly intuitive, and the platform’s design is sleek and user-friendly."
              avatar="/images/education-landing.png"
              name="Peter"
              location="Calabar, Nigeria"
              rating={5}
            />
          </Slider>
        </div>
      </section>

      <section className="sm:px-6 md:px-16 mb-14">
        <div className="px-6 relative md:max-w-[1272px] mx-auto">
          <div className="mb-[1.5rem] mt-8 max-md:mt-8 text-center">
            <h2 className="text-gray-900 font-bold text-lg md:text-2xl lg:text-4xl mb-3">
              FAQs
            </h2>
            <p className="text-sm md:text-md">
            Quick answers to questions you may have about <span className="text-primary">LinguaMura</span> and billing. Can’t find what you're looking? Chat us up
            </p>
          </div>
          <FAQSection />
        </div>
      </section>
    </div>
  );
}

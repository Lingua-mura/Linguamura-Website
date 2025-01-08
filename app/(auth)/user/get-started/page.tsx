// (auth)/user/get-started.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const GetStarted = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1800);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // total time for the fade-out + delay

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        // Pre-loader animation (Splash Screen)
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col items-center justify-center bg-hero-section-gradient"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold"
          >
            <div className="flex items-center">
              <Image
                src="/linguamura_white.svg"
                alt="LinguaMura Logo"
                width={40}
                height={40}
              />
              <span className="font-bold text-lg">LinguaMura</span>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        // Content after loading
        <div className="h-screen w-full flex bg-white">
          {/* Left Column: Gradient Box */}
          <div className="hidden sm:block sm:w-2/5 bg-hero-section-gradient relative">
            <div className="absolute top-10 left-10 flex items-center space-x-4">
              <Image
                src="/linguamura_white.svg"
                alt="LinguaMura Logo"
                width={40}
                height={40}
              />
              <span className="font-bold text-lg">LinguaMura</span>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="w-full sm:w-3/5 pt-24 p-10 sm:pt-32 sm:pe-16 sm:ps-8 flex flex-col">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Welcome to <span className="text-primary">LinguaMura</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Your gateway to learning, entertainment, shopping, and
              connection—all in one place.
            </p>
            <div className="py-5 mb-10">
                <ul className="text-left space-y-3">
                    <li className="flex space-x-3 items-center">
                        <span className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full text-white border-primarybuttonborder border-b-2 bg-primary">
                            <Check 
                                size={15}
                                className="text-white"
                             />
                        </span>
                        <span>
                            <span className="font-semibold">Discover New Skills:</span> Dive into courses on languages, music, arts, and more
                        </span>
                    </li>
                    <li className="flex space-x-3 items-center">
                        <span className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full text-white border-primarybuttonborder border-b-2 bg-primary">
                            <Check 
                                size={15}
                                className="text-white"
                             />
                        </span>
                        <span>
                            <span className="font-semibold">Shop & Explore:</span> Find everything from products to book your next apartment, flight, or car with ease in our marketplace.
                        </span>
                    </li>
                    <li className="flex space-x-3 items-center">
                        <span className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full text-white border-primarybuttonborder border-b-2 bg-primary">
                            <Check 
                                size={15}
                                className="text-white"
                             />
                        </span>
                        <span>
                            <span className="font-semibold">Entertainment at Your Fingertips:</span> From movies to music and gaming, enjoy a world of entertainment whenever you want.
                        </span>
                    </li>
                    <li className="flex space-x-3 items-center">
                        <span className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full text-white border-primarybuttonborder border-b-2 bg-primary">
                            <Check 
                                size={15}
                                className="text-white"
                             />
                        </span>
                        <span>
                            <span className="font-semibold">Connect and Grow:</span> Meet like-minded people, exchange ideas, and create meaningful connections with others on the same journey.
                        </span>
                    </li>
                </ul>
            </div>

            <Link
              href="/user/signup"
              className={`${buttonVariants({
                variant: "primary",
                size: "lg",
              })} w-full md:w-3/4 text-lg`}
            >
              Get Started <ArrowRight size={30} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default GetStarted;

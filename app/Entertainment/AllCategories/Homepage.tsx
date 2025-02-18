"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Homepage = () => {
  const router = useRouter();

  const sections = [
    {
      title: "Movies",
      image: "/movies_img.svg",
      route: "/Entertainment/AllCategories/Subcategories/movies",
    },
    {
      title: "Music",
      image: "/music_img.svg",
      route: "/Entertainment/AllCategories/Subcategories/music",
    },
    {
      title: "Games",
      image: "/games_img.svg",
      route: "/Entertainment/AllCategories/Subcategories/games",
    },
  ];

  return (
    <section className="w-full mx-auto">
      {/* Ad Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#FFF9E5] text-center py-12 text-gray-700 text-sm rounded-md"
      >
        No Ads yet...
      </motion.div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-left pl-8 text-xl font-semibold mt-4"
      >
        Your ultimate hub for Movies, Games, Music, Blogs, and more
      </motion.h2>

      {/* Sections */}
      <div className="p-4 md:p-8 m-2 md:m-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
            className="mt-8 cursor-pointer transform hover:scale-[1.02] transition-transform duration-200"
            onClick={() => section.route && router.push(section.route)}
          >
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={section.image}
                alt={`${section.title} Banner`}
                width={1032}
                height={398}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Homepage;

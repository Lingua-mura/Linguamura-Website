"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BackButton from "@/components/ui/backbutton";

interface Game {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  rating: number;
  price?: number;
  isNew?: boolean;
}

const categories = [
  "All",
  "Action",
  "Multiplayer",
  "Shooter",
  "Adventure",
  "Sports & Racing",
  "Puzzle",
];

const featuredGames: Game[] = [
  {
    id: 1,
    title: "Star Wars: Battlefront",
    category: "Shooter",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.5,
    isNew: true,
  },
  {
    id: 2,
    title: "FIFA 24",
    category: "Sports & Racing",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.2,
  },
  {
    id: 3,
    title: "Portal 3",
    category: "Puzzle",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 4,
    title: "Call of Duty: Modern Warfare",
    category: "Shooter",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.3,
  },
  {
    id: 5,
    title: "Minecraft",
    category: "Adventure",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Among Us",
    category: "Multiplayer",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.1,
  },
  {
    id: 7,
    title: "God of War",
    category: "Action",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.7,
  },
];

const popularGames: Game[] = [
  {
    id: 1,
    title: "Red Dead Redemption 2",
    category: "Action",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Fortnite",
    category: "Shooter",
    imageUrl: "/api/placeholder/200/200",
    rating: 4.2,
  },
  // Add more varied games here - truncated for brevity
].concat(
  Array.from({ length: 26 }, (_, index) => ({
    id: index + 3,
    title: `Game ${index + 3}`,
    category:
      categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    imageUrl: "/api/placeholder/200/200",
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
  }))
);

const GamesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filterGames = (games: Game[]) => {
    return games.filter((game) => {
      const matchesCategory =
        activeCategory === "All" || game.category === activeCategory;
      const matchesSearch = game.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const filteredFeatured = filterGames(featuredGames);
  const filteredPopular = filterGames(popularGames);

  return (
    <div>
      {/* <section className="w-full mb-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFF9E5] text-center py-12 text-gray-700 text-sm rounded-md"
        >
          No Ads yet...
        </motion.div>
      </section> */}

      <div>
        <BackButton />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start p-6 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">More Games, More Fun!</h1>
          <p className="text-gray-500">
            Level up your gaming experience with endless opportunities at your
            fingertips.
          </p>
        </div>

        <div className="relative w-full md:w-1/3 mt-4 md:mt-0">
          <input
            type="search"
            placeholder="Search your favorite games..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto p-6">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
              ${
                activeCategory === category
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-12 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Featured</h2>
          <Link
            href="/featured-games"
            className="text-blue-600 text-sm hover:underline"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 p-4 gap-4">
          {filteredFeatured.map((game) => (
            <div key={game.id} className="group cursor-pointer">
              <div className="relative mb-3 aspect-square rounded-lg overflow-hidden bg-gray-100">
                {game.isNew && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs z-10">
                    New
                  </div>
                )}
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  layout="fill"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-medium text-sm truncate">{game.title}</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm truncate">
                  {game.category}
                </p>
                <div className="flex items-center gap-1">
                  <Icon icon="mdi:star" className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600">{game.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Popular Games</h2>
          <Link
            href="/popular-games"
            className="text-blue-600 text-sm hover:underline"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {filteredPopular.map((game) => (
            <div key={game.id} className="group cursor-pointer">
              <div className="relative mb-3 aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  layout="fill"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-medium text-sm truncate">{game.title}</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm truncate">
                  {game.category}
                </p>
                <div className="flex items-center gap-1">
                  <Icon icon="mdi:star" className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600">{game.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;

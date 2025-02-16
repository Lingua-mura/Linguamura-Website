"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  imageUrl: string;
}

const categories: string[] = [
  "All categories",
  "Action",
  "Anime",
  "British",
  "Classic",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Horror",
  "Series",
];

const movies: Movie[] = [
  ...Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    title: "Black Panther",
    year: "2023",
    genre: "Action",
    imageUrl: "/movies_image.svg",
  })),
  {
    id: 3,
    title: "Spirited Away",
    year: "2001",
    genre: "Anime",
    imageUrl: "/movies_image.svg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    year: "2005",
    genre: "Classic",
    imageUrl: "/movies_image.svg",
  },
  ...Array.from({ length: 5 }, (_, index) => ({
    id: index + 5,
    title: "Children of the Corn",
    year: "2023",
    genre: "Horror",
    imageUrl: "/movies_image.svg",
  })),
];

const MoviesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("All categories");

  const filteredMovies =
    activeCategory === "All categories"
      ? movies
      : movies.filter((movie) => movie.genre === activeCategory);

  return (
    <div>
      <section className="w-full mb-4 mx-auto">
        {/* Ad Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFF9E5] text-center py-12 text-gray-700 text-sm rounded-md"
        >
          No Ads yet...
        </motion.div>
      </section>

      <div className="bg-white text-black p-6">
        <div className="flex justify-between items-start gap-4">
          {/* Left side content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">
              Experience Cinema like never before
            </h1>
            <p className="text-gray-400">
              Stream the Best Blockbusters, Timeless classics, and Latest Gems
              anytime, anywhere
            </p>
          </div>

          {/* Right side search */}
          <div className="w-1/3 relative">
            <Icon
              icon="mdi:magnify"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search your favorite movies..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-400 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex overflow-x-auto mb-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ${
              activeCategory === category ? "bg-[#A0EBEB]" : "bg-white"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Filtered Movies Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{activeCategory}</h2>
          <button type="button" className="text-teal-500 text-sm">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.map((movie) => (
            <Link key={movie.id} href={`Subcategories/movies/${movie.id}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative bg-white rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  width={230}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-4 bg-gray-300 rounded-sm right-4">
                  <Icon
                    icon="mdi:heart-outline"
                    className="text-white text-xl"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-medium">{movie.title}</h4>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{movie.year}</span>
                    <span className="mx-2">|</span>
                    <span>{movie.genre}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;

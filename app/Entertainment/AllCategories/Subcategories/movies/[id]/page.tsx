"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import BackButton from "@/components/ui/backbutton";
import Layout from "@/app/Entertainment/Layout";
import Link from "next/link";

// Sample movie data (Replace with API or context later)
const movies = [
  {
    id: 1,
    title: "Black Panther",
    year: "2023",
    genre: "Action",
    imageUrl: "/movies_image.svg",
    duration: "2:30",
  },
  {
    id: 2,
    title: "Children of the Corn",
    year: "2023",
    genre: "Horror",
    imageUrl: "/movies_image.svg",
  },
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
  {
    id: 5,
    title: "Children of the Corn",
    year: "2023",
    genre: "Horror",
    imageUrl: "/movies_image.svg",
  },
  {
    id: 6,
    title: "Children of the Corn",
    year: "2023",
    genre: "Horror",
    imageUrl: "/movies_image.svg",
  },
  {
    id: 7,
    title: "Children of the Corn",
    year: "2023",
    genre: "Horror",
    imageUrl: "/movies_image.svg",
  },
  {
    id: 8,
    title: "Children of the Corn",
    year: "2023",
    genre: "Horror",
    imageUrl: "/movies_image.svg",
  },
  {
    id: 9,
    title: "Children of the Corn",
    year: "2023",
    genre: "Horror",
    imageUrl: "/movies_image.svg",
  },
  {
    id: 10,
    title: "Children of the Corn",
    year: "2023",
    genre: "Horror",
    imageUrl: "/movies_image.svg",
  },
];

const MoviePreview = () => {
  const params = useParams();
  const movieId = Number(params.id);

  // Find movie by ID
  const movie = movies.find((m) => m.id === movieId);
  const relatedMovies = movies.filter((m) => m.id !== movieId).slice(0, 8);

  if (!movie) {
    return <div className="text-center text-red-500">Movie not found</div>;
  }

  return (
    <Layout>
      <div className="p-3 sm:p-4 md:p-6 bg-white min-h-screen text-white">
        <div className="mb-4">
          <BackButton color="black" />
        </div>

        {/* Main Video Player Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full bg-gray-900 rounded-lg overflow-hidden mb-8"
        >
          <Image
            src={movie.imageUrl}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />

          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between mb-3">
              {/* Progress Bar */}
              <div className="w-full bg-gray-600 h-1 rounded-full">
                <div className="bg-teal-400 h-1 w-1/3 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Icon
                  icon="mdi:play"
                  className="w-8 h-8 cursor-pointer hover:text-teal-500 transition-colors"
                />
                <Icon
                  icon="mdi:volume-high"
                  className="w-6 h-6 cursor-pointer"
                />
                <span className="text-sm">1:05 / {movie.duration}</span>
              </div>

              <div className="flex items-center gap-4">
                <Icon
                  icon="mdi:closed-caption"
                  className="w-6 h-6 cursor-pointer"
                />
                <Icon icon="mdi:cog" className="w-6 h-6 cursor-pointer" />
                <Icon
                  icon="mdi:fullscreen"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* More Action Movies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">More action movies</h2>
            <Link href="/movies" className="text-teal-500 text-sm">
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {relatedMovies.slice(0, 4).map((movie) => (
              <Link
                href={``}
                key={movie.id}
                className="no-underline"
              >
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2">
                    <Image
                      src={movie.imageUrl}
                      alt={movie.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium">{movie.title}</h3>
                  <p className="text-xs text-gray-400">
                    {movie.year} | {movie.genre}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Recommended Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recommended for you</h2>
            <Link href="/movies" className="text-teal-500 text-sm no-underline">
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedMovies.slice(4, 8).map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2">
                    <Image
                      src={movie.imageUrl}
                      alt={movie.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium">{movie.title}</h3>
                  <p className="text-xs text-gray-400">
                    {movie.year} | {movie.genre}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default MoviePreview;
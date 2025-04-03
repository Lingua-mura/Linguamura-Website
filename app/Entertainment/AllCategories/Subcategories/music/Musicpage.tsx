"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";
import BackButton from "@/components/ui/backbutton";
// import Layout from "@/app/Entertainment/Layout";

interface Artist {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  genre?: string;
  followers?: number;
  isVerified?: boolean;
}

interface Track {
  id: number;
  title: string;
  artist: string;
  type: string;
  imageUrl: string;
  duration?: string;
  genre?: string;
  isExplicit?: boolean;
  plays?: number;
}

const categories = ["All", "Music", "Podcasts", "Live", "Charts"];

const recentlyPlayed: Track[] = [
  {
    id: 1,
    title: "Timeless",
    artist: "Davido",
    type: "Music",
    imageUrl: "/davido_timeless.svg",
    duration: "3:45",
    genre: "Afrobeats",
    plays: 1500000,
  },
  {
    id: 2,
    title: "Last Last",
    artist: "Burna Boy",
    type: "Music",
    imageUrl: "/davido_timeless.svg",
    duration: "2:55",
    genre: "Afrobeats",
    isExplicit: true,
  },
  {
    id: 3,
    title: "Rush",
    artist: "Ayra Starr",
    type: "Music",
    imageUrl: "/davido_timeless.svg",
    duration: "3:05",
    genre: "Afropop",
  },
  {
    id: 4,
    title: "Calm Down",
    artist: "Rema",
    type: "Music",
    imageUrl: "/davido_timeless.svg",
    duration: "3:40",
    genre: "Afrobeatss",
  },
  {
    id: 5,
    title: "Who's Your Guy",
    artist: "Spyro",
    type: "Music",
    imageUrl: "/davido_timeless.svg",
    duration: "2:50",
    genre: "Afrobeats",
  },
  {
    id: 6,
    title: "Asiwaju",
    artist: "Ruger",
    type: "Music",
    imageUrl: "/davido_timeless.svg",
    duration: "3:15",
    genre: "Afrobeats",
  },
  {
    id: 7,
    title: "Terminator",
    artist: "Asake",
    type: "Music",
    imageUrl: "/davido_timeless.svg",
    duration: "2:45",
    genre: "Afrobeats",
  },
];

const favoriteArtists: Artist[] = [
  {
    id: 1,
    name: "Davido",
    type: "Artist",
    imageUrl: "/davido_timeless.svg",
    genre: "Afrobeats",
    followers: 12000000,
    isVerified: true,
  },
  {
    id: 2,
    name: "Burna Boy",
    type: "Artist",
    imageUrl: "/davido_timeless.svg",
    genre: "Afrobeats",
    followers: 15000000,
    isVerified: true,
  },
  {
    id: 3,
    name: "Wizkid",
    type: "Artist",
    imageUrl: "/davido_timeless.svg",
    genre: "Afrobeats",
    followers: 14000000,
    isVerified: true,
  },
  {
    id: 4,
    name: "Ayra Starr",
    type: "Artist",
    imageUrl: "/davido_timeless.svg",
    genre: "Afropop",
    followers: 5000000,
    isVerified: true,
  },
  {
    id: 5,
    name: "Asake",
    type: "Artist",
    imageUrl: "/davido_timeless.svg",
    genre: "Afrobeats",
    followers: 4000000,
    isVerified: true,
  },
  {
    id: 6,
    name: "Rema",
    type: "Artist",
    imageUrl: "/davido_timeless.svg",
    genre: "Afrobeats",
    followers: 6000000,
    isVerified: true,
  },
  {
    id: 7,
    name: "Tems",
    type: "Artist",
    imageUrl: "/davido_timeless.svg",
    genre: "Alternative",
    followers: 7000000,
    isVerified: true,
  },
];

const podcasts: Track[] = [
  {
    id: 1,
    title: "I Said What I Said",
    artist: "FK & Jollz",
    type: "Podcast",
    imageUrl: "/davido_timeless.svg",
    duration: "1:25:00",
    genre: "Entertainment",
  },
  {
    id: 2,
    title: "Tea With Tay",
    artist: "Taymesan",
    type: "Podcast",
    imageUrl: "/davido_timeless.svg",
    duration: "55:00",
    genre: "Lifestyle",
  },
];

const MusicPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filterContent = (items: (Track | Artist)[], type: string) => {
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        (activeCategory === "Music" && item.type === "Music") ||
        (activeCategory === "Podcasts" && item.type === "Podcast");

      const searchTerm = searchQuery.toLowerCase();
      const matchesSearch =
        type === "track"
          ? (item as Track).title.toLowerCase().includes(searchTerm) ||
            (item as Track).artist.toLowerCase().includes(searchTerm)
          : (item as Artist).name.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  };

  const filteredTracks = filterContent(recentlyPlayed, "track");
  const filteredArtists = filterContent(favoriteArtists, "artist");
  const filteredPodcasts = filterContent(podcasts, "track");

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

      <div className="bg-white text-black p-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h1 className="text-2xl font-bold mb-2">
              Experience Music like never before
            </h1>
            <p className="text-gray-400">
              Stream the Best Hits, Timeless classics, and Latest Releases
              anytime, anywhere
            </p>
          </div>
          <div className="w-full md:w-1/3 relative">
            <Icon
              icon="mdi:magnify"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search tracks, artists, or podcasts..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-400 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 p-4 mb-8">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${
                activeCategory === category
                  ? "bg-teal-100 text-teal-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Section */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="w-full md:w-[70%] relative rounded-2xl overflow-hidden bg-[url('/davido_timeless.svg')] bg-cover shadow-2xl bg-center h-72">
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10 bg-gradient-to-t from-black/50 to-transparent">
              <h2 className="text-4xl font-bold mb-4">Timeless</h2>
              <p className="text-teal-100 mb-6">Featured Artist - Davido</p>
              <button
                type="button"
                className="bg-teal-500 hover:bg-teal-600 text-white px-10 border-b-4 border-teal-700 py-2 rounded-full"
              >
                Listen now
              </button>
            </div>
          </div>
          <div className="w-full md:w-[25%] relative rounded-2xl shadow-2xl overflow-hidden h-72">
            <Image
              src="/davido_timeless.svg"
              alt="Featured Album"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

      {/* Recently Played Section */}
      <div className="mb-12 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="3text-xl font-semibold">Recently played</h2>
          <Link
            href="/all-tracks"
            className="text-teal-600 text-md no-underline"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {filteredTracks.map((track) => (
          <Link href={`/Entertainment/AllCategories/Subcategories/music/${track.id}`} key={track.id}>
            <div className="group cursor-pointer">
              <div className="relative mb-3 aspect-square rounded-md overflow-hidden bg-gray-100">
                {"isExplicit" in track && track.isExplicit && (
                  <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-sm text-xs z-10">
                    E
                  </div>
                )}
                <Image
                  src={track.imageUrl}
                  alt={"title" in track ? track.title : track.name}
                  layout="fill"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-medium text-sm truncate">
                {"title" in track ? track.title : track.name}
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm truncate">
                  {"artist" in track ? track.artist : ""}
                </p>
                <span className="text-gray-400 text-xs">
                  {"duration" in track ? track.duration : ""}
                </span>
              </div>
            </div>
          </Link>
          ))}
        </div>
            </div>

            {/* Your Favorite Artists Section */}
            <div className="mb-12 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your favorite artists</h2>
          <Link href="/artists" className="text-teal-600 text-md no-underline">
            See all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {filteredArtists.map((artist) => (
            <Link href={`/Entertainment/AllCategories/Subcategories/music/${artist.id}`} key={artist.id}>
              <div className="group cursor-pointer">
          <div className="relative mb-3 aspect-square rounded-full overflow-hidden bg-gray-100">
            {"isVerified" in artist && artist.isVerified && (
              <div className="absolute bottom-2 right-2 bg-teal-500 text-white p-1 rounded-full z-10">
                <Icon icon="mdi:check" className="w-4 h-4" />
              </div>
            )}
            <Image
              src={artist.imageUrl}
              alt={"name" in artist ? artist.name : ""}
              layout="fill"
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <h3 className="font-medium text-sm truncate text-center">
            {"name" in artist ? artist.name : ""}
          </h3>
          <p className="text-gray-500 text-sm truncate text-center">
            {artist.genre}
          </p>
              </div>
            </Link>
          ))}
        </div>
            </div>

            {/* Podcasts Section */}
            {activeCategory !== "Music" && (
        <div className="mb-12 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Popular Podcasts</h2>
            <Link
              href="/podcasts"
              className="text-teal-600 text-md no-underline"
            >
              See all
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
            {filteredPodcasts.map((podcast) => (
              <Link href={`/Entertainment/AllCategories/Subcategories/music/${podcast.id}`} key={podcast.id}>
          <div className="group cursor-pointer">
            <div className="relative mb-3 aspect-square rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={podcast.imageUrl}
                alt={"title" in podcast ? podcast.title : podcast.name}
                layout="fill"
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="font-medium text-sm truncate">
              {"title" in podcast ? podcast.title : podcast.name}
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm truncate">
                {"artist" in podcast ? podcast.artist : ""}
              </p>
              <span className="text-gray-400 text-xs">
                {"duration" in podcast ? podcast.duration : ""}
              </span>
            </div>
          </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  
  );
};

export default MusicPage;

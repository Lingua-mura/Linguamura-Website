'use client'
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample movie data (Replace with API or context later)
const movies = [
  {
    id: 1,
    title: "Black Panther",
    year: "2023",
    genre: "Action",
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
];

const MoviePreview = () => {
  const params = useParams();
  const movieId = Number(params.id);

  // Find movie by ID
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return <div className="text-center text-red-500">Movie not found</div>;
  }

  return (
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-md"
        >
          <Image
            src={movie.imageUrl}
            alt={movie.title}
            width={400}
            height={500}
            className="w-full h-auto object-cover rounded-md"
          />
          <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
          <p className="text-gray-500">
            {movie.year} | {movie.genre}
          </p>
        </motion.div>
      </div>
  );
};

export default MoviePreview;

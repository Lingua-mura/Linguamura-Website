'use client'

import React from "react";
import Image from "next/image";
import BackButton from "@/components/ui/backbutton";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  MoreVertical,
  Volume2
} from "lucide-react";
import Layout from "../../Layout";

const tracks = [
  { id: 1, title: "Song One", artist: "Artist One", duration: "3:45" },
  { id: 2, title: "Song Two", artist: "Artist Two", duration: "3:43" },
  { id: 3, title: "Song Three", artist: "Artist Three", duration: "3:45" },
  { id: 4, title: "Song Four", artist: "Artist Four", duration: "3:43" },
  { id: 5, title: "Song Five", artist: "Artist Five", duration: "3:45" },
  { id: 6, title: "Song Six", artist: "Artist Six", duration: "3:43" },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTrack, setCurrentTrack] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('upNext');

  const filteredTracks = React.useMemo(() => {
    switch (activeTab) {
      case 'lyrics':
        return tracks.filter(track => track.id <= 2);
      case 'related':
        return tracks.filter(track => track.id > 4);
      default:
        return tracks.filter(track => track.id <= 4);
    }
  }, [activeTab]);

  return (
    <Layout>
      <div>
        <BackButton />
      </div>
      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className=" flex items-center justify-between"></div>
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-12">
            <div className="w-[400px] flex-shrink-0">
              <div className="aspect-square relative rounded-lg overflow-y-hidden">
                <Image
                  src="/music_photo album.svg"
                  alt="Album artwork"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className=" space-x-4 mb-4 hidden md:block">
                <button
                  type="button"
                  className={`${
                    activeTab === "upNext" ? "text-gray-600" : "text-gray-400"
                  } hover:text-gray-600`}
                  onClick={() => setActiveTab("upNext")}
                >
                  Up Next
                </button>
                <button
                  type="button"
                  className={`${
                    activeTab === "lyrics" ? "text-gray-600" : "text-gray-400"
                  } hover:text-gray-600`}
                  onClick={() => setActiveTab("lyrics")}
                >
                  Lyrics
                </button>
                <button
                  type="button"
                  title="Show related songs"
                  className={`${
                    activeTab === "related" ? "text-gray-600" : "text-gray-400"
                  } hover:text-gray-600`}
                  onClick={() => setActiveTab("related")}
                ></button>
              </div>
              {/* Track List */}
              <div className="h-[400px] overflow-y-auto space-y-2 text-sm mt-4 hidden md:block">
                <div className="h-[400px] overflow-y-auto space-y-2 text-sm">
                  {filteredTracks.map((track, index) => (
                    <div
                      key={track.id}
                      className={`flex items-center justify-between p-3 rounded-lg
                ${currentTrack === index ? "bg-gray-50" : ""}`}
                      onClick={() => setCurrentTrack(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-100 rounded"></div>
                        <div>
                          <h3 className="font-medium">{track.title}</h3>
                          <p className="text-sm text-gray-500">
                            {track.artist}
                          </p>
                        </div>
                      </div>
                      <span className="text-gray-500">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Player Controls */}
            <div className="fixed bottom-[8.7%] left-[39.9%] transform -translate-x-1/2 translate-y-1/2 bg-white border p-4 rounded-r-lg ">
              <div className="w-[520px]">
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-1 rounded-full mb-4">
                  <div className="bg-teal-500 h-1 rounded-full w-1/3"></div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center gap-8">
                    <Shuffle
                      className="text-gray-400 cursor-pointer"
                      size={20}
                    />
                    <SkipBack
                      className="text-gray-600 cursor-pointer"
                      size={20}
                    />
                    <button
                      className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <SkipForward
                      className="text-gray-600 cursor-pointer"
                      size={20}
                    />
                    <Repeat
                      className="text-gray-400 cursor-pointer"
                      size={20}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Volume2 className="text-gray-400" size={20} />
                    <MoreVertical className="text-gray-400" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MusicPlayer;
"use client";

import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

const reels = [
  {
    id: 1,
    title: "Royal Wedding Highlights",
    duration: "2:34",
    thumbnail: "/videos/reel-1-thumb.jpg",
    video: "/videos/reel-1.mp4",
  },
  {
    id: 2,
    title: "Pre-Wedding Cinematic",
    duration: "1:45",
    thumbnail: "/videos/reel-2-thumb.jpg",
    video: "/videos/reel-2.mp4",
  },
  {
    id: 3,
    title: "Drone Wedding Film",
    duration: "3:12",
    thumbnail: "/videos/reel-3-thumb.jpg",
    video: "/videos/reel-3.mp4",
  },
  {
    id: 4,
    title: "Traditional Rituals",
    duration: "2:08",
    thumbnail: "/videos/reel-4-thumb.jpg",
    video: "/videos/reel-4.mp4",
  },
  {
    id: 5,
    title: "Fashion Portfolio",
    duration: "1:30",
    thumbnail: "/videos/reel-5-thumb.jpg",
    video: "/videos/reel-5.mp4",
  },
];

export default function VideoReel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="reels" className="py-20 bg-deep-black relative overflow-hidden">
      <div className="container-luxury mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-cinematic-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">
              Cinematic Reels
            </p>
            <h2 className="font-display text-h2 md:text-h1 text-white">
              Watch Our <span className="text-cinematic-red italic">Films</span>
            </h2>
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            <span className="text-sm">{isMuted ? "Unmute All" : "Mute All"}</span>
          </button>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Reels */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 xl:px-12 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reels.map((reel, index) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex-shrink-0 w-[300px] md:w-[400px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-charcoal">
              {/* Video thumbnail with hover play */}
              <div className="absolute inset-0 bg-[url('/images/reels/fallback.jpg')] bg-cover bg-center" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-cinematic-red/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </motion.div>
              </div>

              {/* Duration badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-matte-black/70 backdrop-blur-sm rounded-full text-xs text-white">
                {reel.duration}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl text-white group-hover:text-cinematic-gold transition-colors">
                  {reel.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

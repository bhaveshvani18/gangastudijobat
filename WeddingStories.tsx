"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const stories = [
  {
    id: 1,
    couple: "Aditi & Sameer",
    location: "Udaipur, Rajasthan",
    date: "December 2025",
    duration: "3 Days Coverage",
    thumbnail: "/images/stories/story-1.jpg",
    teaser: "/videos/story-1-teaser.mp4",
    description: "A royal palace wedding with 500 guests, featuring traditional Rajasthani rituals and a grand sangeet under the stars.",
    highlights: ["Haldi Ceremony", "Royal Procession", "Sangeet Night", "Vidaai"],
  },
  {
    id: 2,
    couple: "Riya & Karan",
    location: "Goa Beach Resort",
    date: "February 2026",
    duration: "2 Days Coverage",
    thumbnail: "/images/stories/story-2.jpg",
    teaser: "/videos/story-2-teaser.mp4",
    description: "An intimate beachside wedding with sunset vows and barefoot celebrations. Pure magic by the Arabian Sea.",
    highlights: ["Beach Mehndi", "Sunset Vows", "Beach Party", "Fireworks"],
  },
  {
    id: 3,
    couple: "Priya & Vikram",
    location: "Jobat, MP",
    date: "January 2026",
    duration: "4 Days Coverage",
    thumbnail: "/images/stories/story-3.jpg",
    teaser: "/videos/story-3-teaser.mp4",
    description: "A traditional Madhya Pradesh wedding celebrating rich cultural heritage with modern cinematic touches.",
    highlights: ["Tilak Ceremony", "Baraat", "Jaimala", "Reception"],
  },
];

export default function WeddingStories() {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);

  return (
    <section id="stories" className="section-padding bg-deep-black relative">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cinematic-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Wedding Stories
          </p>
          <h2 className="font-display text-h2 md:text-h1 text-white mb-6">
            Love Stories in <span className="text-cinematic-red italic">Motion</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Experience weddings like never before — cinematic narratives that unfold like your favorite film
          </p>
        </motion.div>

        {/* Stories Grid - Netflix Style */}
        <div className="space-y-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative bg-charcoal rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredStory(story.id)}
              onMouseLeave={() => setHoveredStory(null)}
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Thumbnail / Video */}
                <div className="md:col-span-2 relative aspect-video md:aspect-auto md:h-full overflow-hidden">
                  <Image
                    src={story.thumbnail}
                    alt={story.couple}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent md:hidden" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-cinematic-red/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-cinematic-red/30"
                    >
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cinematic-red" />
                      {story.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-cinematic-red" />
                      {story.duration}
                    </span>
                    <span className="text-cinematic-gold">{story.date}</span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl text-white mb-4 group-hover:text-cinematic-red transition-colors duration-300">
                    {story.couple}
                  </h3>

                  <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {story.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-text-secondary hover:bg-cinematic-red/20 hover:border-cinematic-red/30 transition-all duration-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-8 inline-flex items-center text-cinematic-gold font-medium group/btn"
                  >
                    Watch Full Story
                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

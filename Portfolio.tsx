"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const categories = [
  { id: "all", label: "All Stories" },
  { id: "weddings", label: "Weddings" },
  { id: "pre-wedding", label: "Pre-Wedding" },
  { id: "fashion", label: "Fashion" },
  { id: "baby", label: "Baby Shoots" },
  { id: "drone", label: "Drone" },
  { id: "couple", label: "Couple Stories" },
];

const portfolioItems = [
  {
    id: 1,
    category: "weddings",
    title: "Royal Rajasthan Wedding",
    couple: "Priya & Raj",
    image: "/images/portfolio/wedding-1.jpg",
    size: "large",
  },
  {
    id: 2,
    category: "pre-wedding",
    title: "Sunset Romance",
    couple: "Ananya & Vikram",
    image: "/images/portfolio/prewedding-1.jpg",
    size: "tall",
  },
  {
    id: 3,
    category: "fashion",
    title: "Bridal Couture",
    client: "Designer Studio",
    image: "/images/portfolio/fashion-1.jpg",
    size: "normal",
  },
  {
    id: 4,
    category: "weddings",
    title: "Traditional Ceremony",
    couple: "Meera & Arjun",
    image: "/images/portfolio/wedding-2.jpg",
    size: "normal",
  },
  {
    id: 5,
    category: "baby",
    title: "Newborn Magic",
    couple: "Baby Aarav",
    image: "/images/portfolio/baby-1.jpg",
    size: "tall",
  },
  {
    id: 6,
    category: "drone",
    title: "Aerial Mandap View",
    couple: "Destination Wedding",
    image: "/images/portfolio/drone-1.jpg",
    size: "large",
  },
  {
    id: 7,
    category: "couple",
    title: "Lake Side Love",
    couple: "Shreya & Karan",
    image: "/images/portfolio/couple-1.jpg",
    size: "normal",
  },
  {
    id: 8,
    category: "weddings",
    title: "Sangeet Night",
    couple: "Divya & Rohan",
    image: "/images/portfolio/wedding-3.jpg",
    size: "normal",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-deep-black relative">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cinematic-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Our Portfolio
          </p>
          <h2 className="font-display text-h2 md:text-h1 text-white mb-6">
            Captured <span className="text-cinematic-red italic">Moments</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A curated collection of our finest work, each frame telling a unique love story
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-body transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-cinematic-red text-white shadow-lg shadow-cinematic-red/25"
                  : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  item.size === "large"
                    ? "md:col-span-2 md:row-span-2"
                    : item.size === "tall"
                    ? "md:row-span-2"
                    : ""
                }`}
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-cinematic-gold text-xs tracking-widest uppercase mb-2">
                    {categories.find((c) => c.id === item.category)?.label}
                  </p>
                  <h3 className="font-display text-xl text-white mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm">
                    {item.couple || item.client}
                  </p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-matte-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full aspect-[3/2] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-matte-black to-transparent">
                <h3 className="font-display text-2xl text-white mb-2">{selectedImage.title}</h3>
                <p className="text-cinematic-gold">{selectedImage.couple || selectedImage.client}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

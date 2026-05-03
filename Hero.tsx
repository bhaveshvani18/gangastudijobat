"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play, Calendar } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-matte-black">
      {/* Background Video/Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/60 via-transparent to-matte-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black/80 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-cinematic-red/10 z-10 mix-blend-overlay" />

        {/* Placeholder for hero background - replace with actual video */}
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />

        {/* Film grain overlay */}
        <div className="film-grain" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Brand tagline */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-cinematic-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Ganga Studio by Kuldeep Vani
          </motion.p>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-hero text-white leading-tight mb-6">
            Every Wedding Has a{" "}
            <span className="text-cinematic-red italic">Story</span>
            <br />
            We Capture It{" "}
            <span className="text-gradient-gold">Cinematically</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed"
          >
            Luxury wedding photography & cinematic films that transform your precious moments into timeless visual poetry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#booking" className="btn-primary group">
              <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Book Your Shoot
            </a>
            <a href="#portfolio" className="btn-outline group">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Explore Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-cinematic-gold" />
        </motion.div>
      </motion.div>

      {/* Logo watermark */}
      <div className="absolute bottom-10 right-10 z-20 opacity-30 hidden lg:block">
        <Image
          src="/images/logo-watermark.png"
          alt="Ganga Studio"
          width={120}
          height={120}
          className="w-24 h-auto"
        />
      </div>
    </section>
  );
}

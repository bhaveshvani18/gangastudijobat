"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Camera, Film, Award } from "lucide-react";

const stats = [
  { icon: Camera, value: "500+", label: "Weddings Captured" },
  { icon: Heart, value: "1000+", label: "Happy Couples" },
  { icon: Film, value: "10+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Awards Won" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cinematic-red/5 to-transparent pointer-events-none" />

      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/kuldeep-vani.jpg"
                alt="Kuldeep Vani - Founder of Ganga Studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/50 to-transparent" />
            </div>

            {/* Floating accent image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-64 rounded-xl overflow-hidden border-4 border-matte-black shadow-2xl hidden md:block"
            >
              <Image
                src="/images/about/behind-scenes.jpg"
                alt="Behind the scenes"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Experience badge */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cinematic-red rounded-full flex items-center justify-center shadow-xl shadow-cinematic-red/30 hidden md:flex">
              <div className="text-center text-white">
                <span className="block text-3xl font-display font-bold">10+</span>
                <span className="text-xs uppercase tracking-wider">Years</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="text-cinematic-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">
              Our Story
            </p>
            <h2 className="font-display text-h2 md:text-h1 text-white mb-8">
              Crafting Visual <span className="text-cinematic-red italic">Poetry</span> Since 2014
            </h2>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Welcome to <span className="text-white font-medium">Ganga Studio</span>, where every click is a heartbeat and every frame tells an eternal story. Founded by <span className="text-white font-medium">Kuldeep Vani</span>, we are not just photographers — we are visual storytellers dedicated to preserving the most precious moments of your life.
              </p>
              <p>
                Based in the heart of <span className="text-white">Jobat</span>, we specialize in luxury Indian wedding photography that blends traditional emotions with cinematic artistry. From the sacred rituals to the stolen glances, from grand celebrations to intimate moments — we capture it all with an eye for detail and a heart for emotion.
              </p>
              <p>
                Our approach is simple: <span className="text-cinematic-gold italic">"Don't just document weddings; create timeless cinematic experiences."</span> Every couple deserves a love story that looks like a masterpiece.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-cinematic-red mx-auto mb-3" />
                  <span className="block text-2xl md:text-3xl font-display text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-text-muted text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

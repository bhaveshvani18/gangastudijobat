"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rajesh Sharma",
    location: "Indore, MP",
    image: "/images/testimonials/couple-1.jpg",
    rating: 5,
    text: "Kuldeep and his team didn't just photograph our wedding — they created a cinematic masterpiece. Every time we watch our wedding film, we cry happy tears. The attention to detail, the emotional captures, the drone shots of our venue — everything was beyond perfection.",
    event: "Royal Wedding",
    date: "November 2025",
  },
  {
    id: 2,
    name: "Ananya Gupta",
    location: "Mumbai",
    image: "/images/testimonials/couple-2.jpg",
    rating: 5,
    text: "We flew Kuldeep to Goa for our pre-wedding shoot, and it was the best decision ever. He made us feel so comfortable, and the photos look like they're from a Bollywood movie. Our families were amazed by the quality and creativity.",
    event: "Pre-Wedding & Wedding",
    date: "January 2026",
  },
  {
    id: 3,
    name: "Vikram & Meera Patel",
    location: "Jobat, MP",
    image: "/images/testimonials/couple-3.jpg",
    rating: 5,
    text: "Being from Jobat itself, we knew Ganga Studio's reputation. But experiencing their work firsthand was something else. They captured our traditional MP wedding with such grace and modern cinematic style. Highly recommended!",
    event: "Traditional Wedding",
    date: "December 2025",
  },
  {
    id: 4,
    name: "Riya Malhotra",
    location: "Delhi",
    image: "/images/testimonials/client-1.jpg",
    rating: 5,
    text: "I hired Ganga Studio for my fashion portfolio, and the results were stunning. Kuldeep has an incredible eye for lighting and composition. The photos got me signed with a top modeling agency. Thank you for making me look like a star!",
    event: "Fashion Portfolio",
    date: "March 2026",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Background quote */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-64 h-64 text-cinematic-red" />
      </div>

      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cinematic-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Client Love
          </p>
          <h2 className="font-display text-h2 md:text-h1 text-white mb-6">
            Words From <span className="text-cinematic-red italic">Hearts</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-b from-charcoal/80 to-charcoal/40 rounded-3xl p-8 md:p-12 border border-white/5">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-cinematic-gold fill-cinematic-gold" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
              "{testimonials[activeIndex].text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cinematic-gold/30">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-display text-lg text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-text-muted text-sm">
                  {testimonials[activeIndex].event} • {testimonials[activeIndex].location}
                </p>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute top-0 left-12 w-24 h-1 bg-gradient-to-r from-cinematic-red to-cinematic-gold rounded-full" />
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-cinematic-red w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Client logos / trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <p className="text-center text-text-muted text-sm mb-8 tracking-widest uppercase">
            Trusted by families across India
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
            {["Indore", "Bhopal", "Ujjain", "Gwalior", "Mumbai", "Delhi", "Goa"].map((city) => (
              <span key={city} className="text-text-secondary font-display text-lg">
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

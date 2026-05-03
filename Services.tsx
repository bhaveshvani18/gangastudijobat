"use client";

import { motion } from "framer-motion";
import { 
  Camera, 
  Film, 
  Heart, 
  Sparkles, 
  Baby, 
  Plane,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Complete coverage of your special day with artistic precision. From morning rituals to grand reception, every emotion preserved.",
    features: ["Full Day Coverage", "2 Photographers", "500+ Edited Photos", "Premium Album"],
    price: "Starting ₹75,000",
    popular: true,
  },
  {
    icon: Film,
    title: "Cinematic Films",
    description: "Hollywood-style wedding films with drone shots, slow-motion captures, and emotional storytelling that gives you goosebumps.",
    features: ["4K Recording", "Drone Shots", "Same-Day Edit", "Cinematic Color Grade"],
    price: "Starting ₹1,25,000",
    popular: false,
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoots",
    description: "Create magical memories before the big day. Destination shoots, themed concepts, and romantic storytelling.",
    features: ["Location Scouting", "Styling Guide", "Drone Coverage", "Social Media Reels"],
    price: "Starting ₹35,000",
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Fashion Photography",
    description: "Editorial-grade fashion and portfolio shoots with professional lighting, styling, and creative direction.",
    features: ["Studio Lighting", "Wardrobe Consult", "Retouching", "Portfolio Design"],
    price: "Starting ₹25,000",
    popular: false,
  },
  {
    icon: Baby,
    title: "Baby & Maternity",
    description: "Delicate, heartwarming captures of your little ones. Safe, comfortable, and creatively styled baby photography.",
    features: ["Props & Setup", "Home Sessions", "Themed Shoots", "Family Portraits"],
    price: "Starting ₹15,000",
    popular: false,
  },
  {
    icon: Plane,
    title: "Drone Coverage",
    description: "Breathtaking aerial perspectives of your venue, baraat, and celebrations. Cinematic drone films that add grandeur.",
    features: ["4K Aerial", "FPV Shots", "Venue Showcase", "Highlight Reel"],
    price: "Starting ₹20,000",
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-matte-black relative">
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
            What We Offer
          </p>
          <h2 className="font-display text-h2 md:text-h1 text-white mb-6">
            Premium <span className="text-cinematic-red italic">Services</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Tailored photography packages designed to capture your unique story with luxury and precision
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl border transition-all duration-500 group ${
                service.popular
                  ? "bg-gradient-to-b from-cinematic-red/20 to-charcoal border-cinematic-red/30 shadow-xl shadow-cinematic-red/10"
                  : "bg-charcoal/50 border-white/5 hover:border-white/20 hover:bg-charcoal"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cinematic-red text-white text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.popular ? "bg-cinematic-red" : "bg-white/5 group-hover:bg-cinematic-red/20"
              } transition-colors duration-300`}>
                <service.icon className={`w-7 h-7 ${service.popular ? "text-white" : "text-cinematic-red"}`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-white mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 bg-cinematic-gold rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-cinematic-gold font-display text-lg">{service.price}</span>
                <motion.button
                  whileHover={{ x: 3 }}
                  className="flex items-center text-sm text-white hover:text-cinematic-red transition-colors"
                >
                  Book Now <ArrowRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

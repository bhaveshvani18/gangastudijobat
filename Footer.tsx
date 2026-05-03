"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail,
  ArrowUpRight
} from "lucide-react";

const quickLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Stories", href: "#stories" },
  { label: "About Us", href: "#about" },
  { label: "Book Now", href: "#booking" },
];

const services = [
  "Wedding Photography",
  "Cinematic Films",
  "Pre-Wedding",
  "Fashion Shoots",
  "Baby Photography",
  "Drone Coverage",
];

export default function Footer() {
  return (
    <footer className="bg-matte-black border-t border-white/5">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Ganga Studio"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Luxury wedding photography & cinematic films by Kuldeep Vani. Capturing emotions, preserving memories since 2014.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/gangastudiojobat/" },
                { icon: Facebook, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-text-secondary hover:bg-cinematic-red hover:text-white hover:border-cinematic-red transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-cinematic-gold transition-colors text-sm flex items-center group"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-text-secondary text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cinematic-red mt-0.5 flex-shrink-0" />
                <p className="text-text-secondary text-sm">
                  Ganga Studio, Main Road,<br />
                  Jobat, Madhya Pradesh,<br />
                  India - 457770
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cinematic-red flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-text-secondary hover:text-white text-sm transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cinematic-red flex-shrink-0" />
                <a href="mailto:hello@gangastudiojobat.com" className="text-text-secondary hover:text-white text-sm transition-colors">
                  hello@gangastudiojobat.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2026 Ganga Studio by Kuldeep Vani. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

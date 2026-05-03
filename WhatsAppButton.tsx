"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/91XXXXXXXXXX?text=Hi%20Ganga%20Studio,%20I'm%20interested%20in%20your%20photography%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-cinematic-red rounded-full border-2 border-matte-black" />
    </motion.a>
  );
}

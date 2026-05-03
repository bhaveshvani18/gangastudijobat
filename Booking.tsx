"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send,
  CheckCircle,
  ChevronDown
} from "lucide-react";

const eventTypes = [
  "Wedding Photography",
  "Pre-Wedding Shoot",
  "Cinematic Film",
  "Fashion Shoot",
  "Baby/Maternity",
  "Other Event",
];

const budgetRanges = [
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,00,000",
  "₹2,00,000+",
  "Custom Quote",
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="section-padding bg-deep-black relative">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cinematic-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">
              Start Your Journey
            </p>
            <h2 className="font-display text-h2 md:text-h1 text-white mb-6">
              Let's Create <span className="text-cinematic-red italic">Magic</span> Together
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Every great story begins with a conversation. Tell us about your dream wedding or special moment, and we'll craft a bespoke photography experience just for you.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-charcoal/50 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-cinematic-red/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cinematic-red" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Call Us</p>
                  <p className="text-white font-medium">+91-XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-charcoal/50 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-cinematic-red/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cinematic-red" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Email Us</p>
                  <p className="text-white font-medium">hello@gangastudiojobat.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-charcoal/50 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-cinematic-red/20 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-cinematic-red" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">WhatsApp</p>
                  <p className="text-white font-medium">Quick Response Guaranteed</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20Ganga%20Studio,%20I'm%20interested%20in%20booking%20a%20photography%20session."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-medium shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-charcoal/30 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/5">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-cinematic-gold mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-white mb-2">Thank You!</h3>
                  <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-2xl text-white mb-8">Book Your Session</h3>

                  <div className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-cinematic-red/50 focus:bg-white/10 transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-cinematic-red/50 focus:bg-white/10 transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-cinematic-red/50 focus:bg-white/10 transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Event Type & Date */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <select
                          required
                          className="w-full pl-4 pr-10 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-cinematic-red/50 focus:bg-white/10 transition-all"
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        >
                          <option value="" className="bg-charcoal">Select Event Type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type} className="bg-charcoal">{type}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                        <input
                          type="date"
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-cinematic-red/50 focus:bg-white/10 transition-all"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="relative">
                      <select
                        className="w-full pl-4 pr-10 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-cinematic-red/50 focus:bg-white/10 transition-all"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="" className="bg-charcoal">Budget Range (Optional)</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-charcoal">{range}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
                    </div>

                    {/* Message */}
                    <textarea
                      placeholder="Tell us about your vision..."
                      rows={4}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-cinematic-red/50 focus:bg-white/10 transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-cinematic-red to-cinematic-red-dark text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cinematic-red/25 hover:shadow-cinematic-red/40 transition-all"
                    >
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </motion.button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

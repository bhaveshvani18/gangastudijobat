import Navigation from "@/app/components/Navigation";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Hero from "@/app/sections/Hero";
import Portfolio from "@/app/sections/Portfolio";
import About from "@/app/sections/About";
import WeddingStories from "@/app/sections/WeddingStories";
import Services from "@/app/sections/Services";
import VideoReel from "@/app/sections/VideoReel";
import Testimonials from "@/app/sections/Testimonials";
import Booking from "@/app/sections/Booking";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <WeddingStories />
      <Services />
      <VideoReel />
      <Testimonials />
      <Booking />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

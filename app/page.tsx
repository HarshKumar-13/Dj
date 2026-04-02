"use client";

import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Marquee from "@/components/Marquee";
import Collections from "@/components/Collections";
import Craftsmanship from "@/components/Craftsmanship";
import Apparel from "@/components/Apparel";
import BespokeProcess from "@/components/BespokeProcess";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navigation />
        <Hero />
        <Heritage />
        <Marquee />
        <Collections />
        <Craftsmanship />
        <Apparel />
        <BespokeProcess />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

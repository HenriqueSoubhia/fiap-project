'use client'

import AboutSection from "./components/AboutSection";
import HeaderBanner from "./components/HeaderBanner";
import Navbar from "./components/Navbar";
import ParallaxSection from "./components/ParallaxSection";


export default function Home() {


  return (
    <div >
      <Navbar />
      <main>
        <HeaderBanner />
        <AboutSection />
        <ParallaxSection />
        <AboutSection />
      </main>

    </div>
  );
}

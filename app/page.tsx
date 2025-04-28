'use client'

import AboutSection from "./components/AboutSection";
import HeaderBanner from "./components/HeaderBanner";
import Navbar from "./components/Navbar";


export default function Home() {


  return (
    <div >
      <Navbar />
      <main>
        <HeaderBanner />
        <AboutSection />
      </main>

    </div>
  );
}

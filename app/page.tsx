'use client'

import AboutSection from "@/app/components/AboutSection";
import AccordionSection from "@/app/components/AccordionSection";
import FooterCallToAction from "@/app/components/FooterCallToAction";
import HeaderBanner from "@/app/components/HeaderBanner";
import Navbar from "@/app/components/Navbar";
import ParallaxSection from "@/app/components/ParallaxSection";


export default function Home() {


  return (
    <div >
      <Navbar />
      <main>
        <HeaderBanner />
        <AboutSection />
        <ParallaxSection />
        <AccordionSection />
        <FooterCallToAction/>
      </main>
      

    </div>
  );
}

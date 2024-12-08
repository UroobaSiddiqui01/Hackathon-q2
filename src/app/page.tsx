import HeroSection from "@/components/hero";
import React from "react";
import ProductPage from "@/components/product";
import FeaturedSection from "@/components/Featured";
import GearUpSection from "@/components/gearUp";
import DontMissSection from "@/components/dontMiss";
import FlightEssentials from "@/components/FlightEssentials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductPage />
      <FeaturedSection/>
      <GearUpSection/>
      <DontMissSection/>
      <FlightEssentials/>
    </div>
  );
}

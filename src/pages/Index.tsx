import { useState, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuerySection from "@/components/QuerySection";

const Index = () => {
  const querySectionRef = useRef<HTMLDivElement>(null);

  const scrollToQuery = () => {
    querySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection onGetStarted={scrollToQuery} />
      <div ref={querySectionRef}>
        <QuerySection />
      </div>
    </div>
  );
};

export default Index;

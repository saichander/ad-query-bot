import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuerySection from "@/components/QuerySection";
import AILoader from "@/components/AILoader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const querySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show loader for 2 seconds, then fade in content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToQuery = () => {
    querySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <AILoader />
      </div>
    );
  }

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

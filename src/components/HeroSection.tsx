import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const placeholderPrompts = [
  "How are my Q4 campaigns performing across all channels?",
  "Show me the top 5 campaigns by ROI this month",
  "What's the conversion rate trend for mobile traffic?",
  "Compare campaign performance: Display vs Video",
  "Which demographics are driving the most conversions?",
];

const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromptIndex((prev) => (prev + 1) % placeholderPrompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-8 relative">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Title - animates in first */}
        <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary-glow via-accent to-accent-glow bg-clip-text text-transparent leading-tight">
            Chartificial Intelligence
          </h1>
        </div>

        {/* Subtitle - animates in second */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <p className="text-2xl font-semibold text-foreground/90">AI-Powered Insights</p>
        </div>

        {/* Description - animates in third */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ask questions about your campaigns in plain English and get instant insights with text, tables, and visualizations.
          </p>
        </div>

        {/* Interactive card - animates in fourth */}
        <div className="glass-strong rounded-2xl p-8 space-y-6 animate-glow opacity-0 animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          <div className="space-y-4">
            <div className="text-left text-muted-foreground text-sm mb-3">Try these questions:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {placeholderPrompts.slice(0, 4).map((prompt, index) => (
                <button
                  key={index}
                  onClick={onGetStarted}
                  className="glass rounded-lg p-4 text-left text-sm text-foreground/80 hover:glass-strong hover:text-foreground transition-all hover:scale-105 opacity-0 animate-fade-in"
                  style={{ 
                    animationDelay: `${0.9 + index * 0.1}s`,
                    animationFillMode: "forwards"
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}>
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full md:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

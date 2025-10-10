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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up relative z-10">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary-glow via-accent to-accent-glow bg-clip-text text-transparent leading-tight">
            Chartificial Intelligence — AI-Powered Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ask questions about your campaigns in plain English and get instant insights with text, tables, and visualizations.
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-8 space-y-6 animate-glow">
          <div className="relative">
            <div className="text-left text-muted-foreground text-sm mb-2">Try asking:</div>
            <div className="h-16 overflow-hidden">
              {placeholderPrompts.map((prompt, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentPromptIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute"
                  }`}
                >
                  <p className="text-lg text-foreground/80 italic">"{prompt}"</p>
                </div>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            onClick={onGetStarted}
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

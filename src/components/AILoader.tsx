import { useEffect, useState } from "react";
import { Brain, Database, TrendingUp, Sparkles } from "lucide-react";

const AILoader = () => {
  const [progress, setProgress] = useState(0);

  const stages = [
    { 
      title: "Analyzing Campaign Data",
      subtitle: "Scanning performance metrics across channels",
      icon: Database 
    },
    { 
      title: "Processing Attribution", 
      subtitle: "Mapping customer touchpoints and conversions",
      icon: TrendingUp 
    },
    { 
      title: "Identifying Opportunities",
      subtitle: "Detecting optimization patterns",
      icon: Sparkles 
    },
    { 
      title: "Generating Insights",
      subtitle: "Compiling recommendations",
      icon: Brain 
    },
  ];

  const currentStageIndex = Math.min(Math.floor(progress / 25), stages.length - 1);
  const currentStage = stages[currentStageIndex];
  const CurrentIcon = currentStage.icon;

  useEffect(() => {
    const duration = 30000;
    const interval = 50;
    const steps = duration / interval;
    let step = 0;

    const progressInterval = setInterval(() => {
      step++;
      const newProgress = (step / steps) * 100;
      setProgress(newProgress);

      if (step >= steps) clearInterval(progressInterval);
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl px-8">
        <div className="flex flex-col items-center space-y-12">
          
          {/* Central Orbital Loader */}
          <div className="relative w-48 h-48">
            {/* Outer rotating ring */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary"
              style={{
                animation: 'spin 3s linear infinite',
              }}
            />
            
            {/* Middle rotating ring - opposite direction */}
            <div 
              className="absolute inset-4 rounded-full border-4 border-transparent border-b-accent border-l-accent"
              style={{
                animation: 'spin 2s linear infinite reverse',
              }}
            />
            
            {/* Inner glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl" />
            
            {/* Center icon with pulsing effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative bg-white rounded-full p-8 border-2 border-gray-100 shadow-lg">
                <CurrentIcon 
                  className="w-12 h-12 text-primary transition-all duration-500" 
                  key={currentStageIndex}
                />
              </div>
            </div>

            {/* Orbiting progress indicator */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50"
              style={{
                transformOrigin: '50% calc(50% + 96px)',
                animation: `spin ${30 / (progress / 100 || 0.01)}s linear infinite`,
              }}
            />
          </div>

          {/* Stage Information */}
          <div className="text-center space-y-3 min-h-[80px] transition-all duration-500">
            <h3 
              className="text-2xl font-semibold text-gray-900 tracking-wide"
              key={`title-${currentStageIndex}`}
            >
              {currentStage.title}
            </h3>
            <p 
              className="text-base text-gray-600"
              key={`subtitle-${currentStageIndex}`}
            >
              {currentStage.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILoader;

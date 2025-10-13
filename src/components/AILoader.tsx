import { useEffect, useState } from "react";
import { Brain, Database, TrendingUp, Sparkles } from "lucide-react";

const AILoader = () => {
  const [progress, setProgress] = useState(0);

  const stages = [
    { 
      title: "Analyzing Campaign Data",
      icon: Database 
    },
    { 
      title: "Processing Attribution", 
      icon: TrendingUp 
    },
    { 
      title: "Identifying Opportunities",
      icon: Sparkles 
    },
    { 
      title: "Generating Insights",
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
      {/* Hexagonal Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating AI Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${(i * 12 + 10)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl px-8">
        <div className="flex flex-col items-center space-y-12">
          
          {/* Enhanced Futuristic Orbital Loader */}
          <div className="relative w-64 h-64">
            {/* Outermost ring with glow */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              style={{
                animation: 'spin 8s linear infinite',
                filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.3))',
              }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
            </div>
            
            {/* Outer rotating ring with gradient */}
            <div 
              className="absolute inset-4 rounded-full border-[6px] border-transparent border-t-primary border-r-primary"
              style={{
                animation: 'spin 4s linear infinite',
                filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.5))',
              }}
            />
            
            {/* Middle rotating ring - opposite direction */}
            <div 
              className="absolute inset-12 rounded-full border-[5px] border-transparent border-b-accent border-l-accent"
              style={{
                animation: 'spin 3s linear infinite reverse',
                filter: 'drop-shadow(0 0 6px hsl(var(--accent) / 0.5))',
              }}
            />

            {/* Inner ring with particles */}
            <div 
              className="absolute inset-16 rounded-full border-[4px] border-transparent border-t-primary/50 border-r-accent/50"
              style={{
                animation: 'spin 2s linear infinite',
              }}
            />
            
            {/* AI Neural Network Lines */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-20 h-[2px] bg-gradient-to-r from-primary/40 to-transparent origin-left"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle + progress}deg)`,
                  animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
            
            {/* Central AI Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulsing glow behind icon */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl rounded-full animate-pulse" 
                  style={{ width: '120px', height: '120px', margin: '-24px' }}
                />
                
                {/* Icon container with glass effect */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-10 border-2 border-gray-100 shadow-xl">
                  <CurrentIcon 
                    className="w-16 h-16 text-primary transition-all duration-500" 
                    key={currentStageIndex}
                    style={{
                      filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.3))',
                    }}
                  />
                </div>

                {/* Corner accents */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 border-t-2 border-l-2 border-accent/50"
                    style={{
                      top: angle === 0 || angle === 90 ? '-8px' : 'auto',
                      bottom: angle === 180 || angle === 270 ? '-8px' : 'auto',
                      left: angle === 0 || angle === 270 ? '-8px' : 'auto',
                      right: angle === 90 || angle === 180 ? '-8px' : 'auto',
                      transform: `rotate(${angle}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Orbiting data nodes */}
            {[0, 120, 240].map((angle, i) => (
              <div
                key={i}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg"
                style={{
                  transformOrigin: '50% calc(50% + 128px)',
                  animation: `spin ${4 + i}s linear infinite`,
                  animationDelay: `${i * 0.3}s`,
                  filter: 'drop-shadow(0 0 4px hsl(var(--accent) / 0.6))',
                }}
              />
            ))}
          </div>

          {/* Stage Information */}
          <div className="text-center min-h-[40px] transition-all duration-500">
            <h3 
              className="text-2xl font-semibold text-gray-900 tracking-wide"
              key={`title-${currentStageIndex}`}
            >
              {currentStage.title}
            </h3>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default AILoader;

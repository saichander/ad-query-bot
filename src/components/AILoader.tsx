import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const AILoader = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  const stages = [
    "Initializing neural pathways",
    "Processing semantic layers",
    "Extracting insights",
    "Synthesizing patterns",
    "Generating response",
    "Finalizing analysis"
  ];

  const currentStage = Math.min(Math.floor(progress / 16.67), stages.length - 1);

  useEffect(() => {
    // Generate enhanced particle system
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    }));
    setDots(particles);

    // Smooth progress animation
    const duration = 30000;
    const interval = 50;
    const steps = duration / interval;
    let step = 0;

    const progressInterval = setInterval(() => {
      step++;
      setProgress((step / steps) * 100);
      if (step >= steps) clearInterval(progressInterval);
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-primary/20 to-accent/20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Enhanced particle system */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-gradient-to-br from-primary to-accent opacity-60 animate-float blur-[1px]"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}

      {/* Rotating geometric rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 rounded-full animate-spin"
              style={{
                borderColor: i % 2 === 0 ? 'hsl(var(--primary) / 0.3)' : 'hsl(var(--accent) / 0.3)',
                animationDuration: `${20 - i * 3}s`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                transform: `scale(${1 - i * 0.15})`,
              }}
            >
              <div
                className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50"
                style={{
                  top: '50%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Central orb with pulsing glow */}
      <div className="absolute">
        <div className="relative">
          {/* Outer glow rings */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-ping"
              style={{
                width: `${120 + i * 40}px`,
                height: `${120 + i * 40}px`,
                left: `${-60 - i * 20}px`,
                top: `${-60 - i * 20}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '3s',
              }}
            />
          ))}
          
          {/* Central sphere */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-glow shadow-2xl">
            <div className="absolute inset-2 rounded-full bg-gradient-to-tl from-primary/50 to-accent/50 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
            </div>
            
            {/* Rotating inner ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin" style={{ animationDuration: '4s' }}>
              <div className="absolute w-2 h-2 rounded-full bg-white shadow-lg shadow-white/50" style={{ top: '-1px', left: '50%', transform: 'translateX(-50%)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Data stream visualization */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-full h-full opacity-40" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="stream-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const x1 = 400 + Math.cos(angle) * 150;
            const y1 = 300 + Math.sin(angle) * 150;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2="400"
                y2="300"
                stroke="url(#stream-gradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s',
                }}
              />
            );
          })}
          
          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const x = 400 + Math.cos(angle) * 150;
            const y = 300 + Math.sin(angle) * 150;
            return (
              <circle
                key={`node-${i}`}
                cx={x}
                cy={y}
                r="6"
                fill="hsl(var(--accent))"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s',
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Text content with enhanced styling */}
      <div className="absolute bottom-20 left-0 right-0 z-20">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          {/* Stage indicator */}
          <div className="text-center space-y-3 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
              <span className="text-white font-medium text-sm tracking-wide">
                {stages[currentStage]}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/50 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse" />
            </div>
            
            {/* Progress glow */}
            <div
              className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse blur-sm"
              style={{ left: `${Math.max(0, progress - 10)}%` }}
            />
          </div>

          {/* Percentage */}
          <div className="text-center">
            <span className="text-2xl font-bold text-white tracking-wider tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILoader;

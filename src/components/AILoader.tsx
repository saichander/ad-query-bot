import { useEffect, useState } from "react";
import { Sparkles, Brain, Zap, TrendingUp, BarChart3, Database } from "lucide-react";

const AILoader = () => {
  const [stage, setStage] = useState(0);
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  const stages = [
    { text: "Analyzing your query", icon: Brain },
    { text: "Processing campaign data", icon: Database },
    { text: "Computing insights", icon: Zap },
    { text: "Generating visualizations", icon: BarChart3 },
    { text: "Preparing recommendations", icon: TrendingUp },
    { text: "Finalizing response", icon: Sparkles },
  ];

  useEffect(() => {
    // Generate floating particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setDots(particles);

    // Cycle through stages
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % stages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = stages[stage].icon;

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 animate-pulse" />
      
      {/* Floating Particles */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Main Icon with Pulse Effect */}
        <div className="relative">
          {/* Outer Rings */}
          <div className="absolute inset-0 -m-8">
            <div className="w-32 h-32 rounded-full border-2 border-primary/20 animate-ping" />
          </div>
          <div className="absolute inset-0 -m-12">
            <div className="w-40 h-40 rounded-full border border-accent/20 animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Icon Container */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
            <CurrentIcon className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>

        {/* Neural Network Visualization */}
        <div className="relative w-64 h-24">
          <svg className="w-full h-full" viewBox="0 0 200 80">
            {/* Connecting Lines */}
            <line x1="20" y1="40" x2="60" y2="20" stroke="url(#gradient1)" strokeWidth="1" className="animate-pulse" />
            <line x1="20" y1="40" x2="60" y2="40" stroke="url(#gradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            <line x1="20" y1="40" x2="60" y2="60" stroke="url(#gradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            
            <line x1="60" y1="20" x2="100" y2="30" stroke="url(#gradient2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <line x1="60" y1="40" x2="100" y2="30" stroke="url(#gradient2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="60" y1="60" x2="100" y2="50" stroke="url(#gradient2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
            <line x1="60" y1="40" x2="100" y2="50" stroke="url(#gradient2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
            
            <line x1="100" y1="30" x2="140" y2="40" stroke="url(#gradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            <line x1="100" y1="50" x2="140" y2="40" stroke="url(#gradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            
            <line x1="140" y1="40" x2="180" y2="40" stroke="url(#gradient2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            
            {/* Nodes */}
            <circle cx="20" cy="40" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
            
            <circle cx="60" cy="20" r="3" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            <circle cx="60" cy="40" r="3" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            <circle cx="60" cy="60" r="3" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            
            <circle cx="100" cy="30" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="100" cy="50" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <circle cx="140" cy="40" r="3" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
            
            <circle cx="180" cy="40" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Stage Text */}
        <div className="text-center space-y-2 animate-fade-in">
          <p className="text-lg font-medium text-gray-900">{stages[stage].text}</p>
          <div className="flex items-center justify-center gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  );
};

export default AILoader;

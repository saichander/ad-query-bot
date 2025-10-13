import { useEffect, useState } from "react";
import { Brain, Sparkles } from "lucide-react";

const AILoader = () => {
  const [progress, setProgress] = useState(0);

  const stages = [
    "Analyzing campaign performance",
    "Processing attribution data",
    "Identifying optimization opportunities",
    "Generating insights",
  ];

  const currentStage = Math.min(Math.floor(progress / 25), stages.length - 1);

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

  // Generate flowing data particles
  const dataPoints = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    duration: 3 + Math.random() * 2,
    offset: Math.random() * 100,
  }));

  // Generate animated waveform
  const wavePoints = Array.from({ length: 50 }, (_, i) => {
    const x = (i / 49) * 100;
    const baseY = 50;
    const wave1 = Math.sin((i + progress * 0.5) * 0.3) * 15;
    const wave2 = Math.sin((i + progress * 0.3) * 0.5) * 10;
    const y = baseY + wave1 + wave2;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating Data Particles */}
      <svg className="absolute inset-0 w-full h-full">
        {dataPoints.map((point) => (
          <circle
            key={point.id}
            r="2"
            fill="hsl(var(--primary))"
            opacity="0.4"
            style={{
              animation: `float ${point.duration}s ease-in-out infinite`,
              animationDelay: `${point.delay}s`,
            }}
          >
            <animateMotion
              dur={`${point.duration}s`}
              repeatCount="indefinite"
              path={`M ${point.offset},500 Q ${point.offset + 100},250 ${point.offset + 50},0`}
            />
          </circle>
        ))}
      </svg>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-3xl px-8">
        <div className="flex flex-col items-center space-y-12">
          
          {/* Central AI Brain Icon */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary to-accent opacity-30 animate-pulse" />
            <div className="relative glass-strong rounded-3xl p-8 border border-white/10">
              <div className="relative">
                {/* Orbiting sparkles */}
                <div className="absolute inset-0">
                  {[0, 120, 240].map((rotation) => (
                    <div
                      key={rotation}
                      className="absolute inset-0"
                      style={{
                        animation: 'spin 4s linear infinite',
                        animationDelay: `${rotation / 120}s`,
                      }}
                    >
                      <Sparkles 
                        className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 text-accent"
                        style={{ transformOrigin: 'center 50px' }}
                      />
                    </div>
                  ))}
                </div>
                
                <Brain className="w-16 h-16 text-primary relative animate-pulse" />
              </div>
            </div>
          </div>

          {/* Dynamic Waveform Visualization */}
          <div className="w-full glass-strong rounded-2xl p-8 border border-white/10">
            <svg viewBox="0 0 100 100" className="w-full h-32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset={`${progress}%`} stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              <polyline
                points={wavePoints}
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Progress indicator on wave */}
              <circle
                cx={progress}
                cy={50 + Math.sin((progress / 49 * 50 + progress * 0.5) * 0.3) * 15 + Math.sin((progress / 49 * 50 + progress * 0.3) * 0.5) * 10}
                r="4"
                fill="hsl(var(--accent))"
                className="drop-shadow-[0_0_8px_hsl(var(--accent))]"
              />
            </svg>
          </div>

          {/* Status */}
          <div className="w-full space-y-6">
            {/* Stage Text */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg text-white/90 font-medium tracking-wide">
                {stages[currentStage]}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/50 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>

            {/* Progress Percentage */}
            <div className="text-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default AILoader;

import { useEffect, useState } from "react";
import { TrendingUp, BarChart3, Target, Zap } from "lucide-react";

const AILoader = () => {
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState({ impressions: 0, ctr: 0, conversions: 0, roi: 0 });

  const stages = [
    { text: "Scanning campaign data", icon: Target },
    { text: "Analyzing performance metrics", icon: BarChart3 },
    { text: "Computing insights", icon: Zap },
    { text: "Generating recommendations", icon: TrendingUp },
  ];

  const currentStage = Math.min(Math.floor(progress / 25), stages.length - 1);
  const CurrentIcon = stages[currentStage].icon;

  useEffect(() => {
    const duration = 30000;
    const interval = 50;
    const steps = duration / interval;
    let step = 0;

    const progressInterval = setInterval(() => {
      step++;
      const newProgress = (step / steps) * 100;
      setProgress(newProgress);
      
      // Animate metrics
      setMetrics({
        impressions: Math.floor((newProgress / 100) * 847293),
        ctr: parseFloat(((newProgress / 100) * 4.67).toFixed(2)),
        conversions: Math.floor((newProgress / 100) * 12847),
        roi: Math.floor((newProgress / 100) * 287),
      });

      if (step >= steps) clearInterval(progressInterval);
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  // Generate random bar heights for animated chart
  const bars = Array.from({ length: 12 }, (_, i) => ({
    height: Math.sin(i * 0.5 + progress * 0.05) * 30 + 40,
    delay: i * 0.1,
  }));

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Animated scan lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
          style={{
            top: `${progress}%`,
            transition: 'top 0.05s linear',
            boxShadow: '0 0 20px hsl(var(--primary))',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-8">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-4 gap-4 w-full">
            {[
              { label: 'Impressions', value: metrics.impressions.toLocaleString(), color: 'from-blue-500 to-cyan-500' },
              { label: 'CTR', value: `${metrics.ctr}%`, color: 'from-purple-500 to-pink-500' },
              { label: 'Conversions', value: metrics.conversions.toLocaleString(), color: 'from-green-500 to-emerald-500' },
              { label: 'ROI', value: `${metrics.roi}%`, color: 'from-orange-500 to-red-500' },
            ].map((metric, i) => (
              <div 
                key={i}
                className="glass-strong rounded-xl p-4 border border-white/10 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`text-xs text-gray-400 mb-1`}>{metric.label}</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent tabular-nums`}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Central Analytics Visualization */}
          <div className="relative w-full">
            {/* Animated Bar Chart */}
            <div className="glass-strong rounded-2xl p-6 border border-white/10">
              <div className="flex items-end justify-between h-40 gap-2">
                {bars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full rounded-t-lg bg-gradient-to-t from-primary via-accent to-primary relative overflow-hidden transition-all duration-300"
                      style={{ 
                        height: `${bar.height}%`,
                        animationDelay: `${bar.delay}s`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/30 to-transparent"
                        style={{
                          animation: `shimmer 2s infinite`,
                          animationDelay: `${bar.delay}s`,
                        }}
                      />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                  </div>
                ))}
              </div>
              
              {/* Chart Labels */}
              <div className="flex justify-between mt-4 text-xs text-gray-500">
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
              </div>
            </div>

            {/* Floating Data Nodes */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2">
              <div className="relative w-24 h-24">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s',
                    }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/50 animate-glow">
                    <CurrentIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status and Progress */}
          <div className="w-full space-y-4">
            {/* Stage Indicator */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
              <span className="text-white/80 font-medium text-sm tracking-wide">
                {stages[currentStage].text}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/50 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                <div 
                  className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"
                />
              </div>
            </div>

            {/* Progress Percentage */}
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { transform: translateY(100%); }
          50% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  );
};

export default AILoader;

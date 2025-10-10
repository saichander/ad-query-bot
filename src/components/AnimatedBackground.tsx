import { useEffect, useState } from "react";
import { TrendingUp, BarChart3, PieChart, Sparkles } from "lucide-react";

const AnimatedBackground = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Mini Chart 1 - Top Left */}
      <div
        className={`absolute top-20 left-10 glass-strong rounded-xl p-4 transition-all duration-1000 animate-float ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        style={{ animationDelay: "0s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Campaign ROI</span>
          <Sparkles className="w-3 h-3 text-accent animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="flex items-end gap-1 h-16">
            <div className="w-6 bg-primary/60 rounded-t" style={{ height: "45%" }}></div>
            <div className="w-6 bg-primary/70 rounded-t" style={{ height: "70%" }}></div>
            <div className="w-6 bg-primary/80 rounded-t" style={{ height: "55%" }}></div>
            <div className="w-6 bg-primary rounded-t" style={{ height: "90%" }}></div>
          </div>
        </div>
      </div>

      {/* Floating Metrics Card - Top Right */}
      <div
        className={`absolute top-32 right-16 glass-strong rounded-xl p-4 transition-all duration-1000 animate-float ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        style={{ animationDelay: "0.3s" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold text-foreground">AI Insights</span>
          <Sparkles className="w-3 h-3 text-primary animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">CTR</span>
            <span className="text-sm font-bold text-accent">+23%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Conv.</span>
            <span className="text-sm font-bold text-primary">+45%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">ROI</span>
            <span className="text-sm font-bold text-accent-glow">+67%</span>
          </div>
        </div>
      </div>

      {/* Floating Mini Table - Bottom Left */}
      <div
        className={`absolute bottom-4 left-16 glass-strong rounded-xl p-4 transition-all duration-1000 animate-float ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ animationDelay: "0.6s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-foreground">Top Campaigns</span>
          <Sparkles className="w-3 h-3 text-accent-glow animate-pulse" />
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between gap-6">
            <span className="text-muted-foreground">Summer Travel</span>
            <span className="text-primary font-semibold">203%</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-muted-foreground">Weekend Deals</span>
            <span className="text-accent font-semibold">189%</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-muted-foreground">Business Class</span>
            <span className="text-accent-glow font-semibold">167%</span>
          </div>
        </div>
      </div>

      {/* Floating Pie Chart - Bottom Right */}
      <div
        className={`absolute bottom-4 right-20 glass-strong rounded-xl p-4 transition-all duration-1000 animate-float ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ animationDelay: "0.9s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <PieChart className="w-4 h-4 text-accent-glow" />
          <span className="text-xs font-semibold text-foreground">Channel Mix</span>
          <Sparkles className="w-3 h-3 text-primary animate-pulse" />
        </div>
        <div className="relative w-20 h-20 mx-auto">
          <svg viewBox="0 0 100 100" className="transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="20"
              strokeDasharray="75 251"
              className="opacity-80"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="20"
              strokeDasharray="50 251"
              strokeDashoffset="-75"
              className="opacity-80"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--accent-glow))"
              strokeWidth="20"
              strokeDasharray="100 251"
              strokeDashoffset="-125"
              className="opacity-80"
            />
          </svg>
        </div>
      </div>

      {/* AI Sparkle Effects */}
      <div className="absolute top-1/4 left-1/4 animate-pulse">
        <Sparkles className="w-6 h-6 text-primary/40" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-pulse" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-5 h-5 text-accent/40" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-pulse" style={{ animationDelay: "1.5s" }}>
        <Sparkles className="w-4 h-4 text-accent-glow/40" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-5 h-5 text-primary-glow/40" />
      </div>
    </div>
  );
};

export default AnimatedBackground;

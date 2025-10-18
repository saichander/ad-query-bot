import { useEffect, useState } from "react";
import { TrendingUp, BarChart3, PieChart, Satellite, Radio } from "lucide-react";

const AnimatedBackground = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Satellite Panel Component
  const SatellitePanel = ({ 
    children, 
    className = "", 
    delay = "0s",
    position = "top"
  }: { 
    children: React.ReactNode; 
    className?: string; 
    delay?: string;
    position?: "top" | "bottom";
  }) => {
    const slideClass = position === "top" 
      ? (visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10")
      : (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10");
    
    return (
      <div
        className={`relative rounded-lg transition-all duration-1000 ${slideClass} ${className}`}
        style={{ animationDelay: delay }}
      >
        {/* Satellite Panel Border */}
        <div className="absolute inset-0 rounded-lg border-2 border-cyan-500/40 bg-slate-900/80 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>
          
          {/* Top LED strip */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-400 rounded-full blur-[2px] animate-pulse"></div>
        </div>
        
        {/* Content */}
        <div className="relative p-4">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      {/* Satellite Panel 1 - Campaign ROI */}
      <SatellitePanel 
        className="absolute top-20 left-10 animate-float" 
        delay="0s"
        position="top"
      >
        <div className="flex items-center gap-2 mb-2">
          <Satellite className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-cyan-100 font-mono">SAT-01: CAMPAIGN ROI</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="flex items-end gap-1 h-16">
            <div className="w-6 bg-gradient-to-t from-cyan-500 to-cyan-400/60 rounded-t shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ height: "45%" }}></div>
            <div className="w-6 bg-gradient-to-t from-cyan-500 to-cyan-400/70 rounded-t shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ height: "70%" }}></div>
            <div className="w-6 bg-gradient-to-t from-cyan-500 to-cyan-400/80 rounded-t shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ height: "55%" }}></div>
            <div className="w-6 bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-t shadow-[0_0_15px_rgba(6,182,212,0.7)]" style={{ height: "90%" }}></div>
          </div>
        </div>
      </SatellitePanel>

      {/* Satellite Panel 2 - AI Insights */}
      <SatellitePanel 
        className="absolute top-32 right-16 animate-float" 
        delay="0.3s"
        position="top"
      >
        <div className="flex items-center gap-2 mb-3">
          <Radio className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-cyan-100 font-mono">SAT-02: AI INSIGHTS</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-cyan-400/70 font-mono">CTR</span>
            <span className="text-sm font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">+23%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-cyan-400/70 font-mono">CONV.</span>
            <span className="text-sm font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">+45%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-cyan-400/70 font-mono">ROI</span>
            <span className="text-sm font-bold text-emerald-300 drop-shadow-[0_0_10px_rgba(110,231,183,0.6)]">+67%</span>
          </div>
        </div>
      </SatellitePanel>

      {/* Satellite Panel 3 - Top Campaigns */}
      <SatellitePanel 
        className="absolute bottom-4 left-16 animate-float" 
        delay="0.6s"
        position="bottom"
      >
        <div className="flex items-center gap-2 mb-2">
          <Satellite className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-cyan-100 font-mono">SAT-03: TOP ADS</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between gap-6">
            <span className="text-cyan-400/70">SUMMER_TRAVEL</span>
            <span className="text-emerald-400 font-semibold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">203%</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-cyan-400/70">WEEKEND_DEALS</span>
            <span className="text-emerald-400 font-semibold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">189%</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-cyan-400/70">BUSINESS_CLASS</span>
            <span className="text-emerald-300 font-semibold drop-shadow-[0_0_10px_rgba(110,231,183,0.6)]">167%</span>
          </div>
        </div>
      </SatellitePanel>

      {/* Satellite Panel 4 - Channel Mix */}
      <SatellitePanel 
        className="absolute bottom-4 right-20 animate-float" 
        delay="0.9s"
        position="bottom"
      >
        <div className="flex items-center gap-2 mb-2">
          <PieChart className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-cyan-100 font-mono">SAT-04: CHANNELS</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="relative w-20 h-20 mx-auto">
          <svg viewBox="0 0 100 100" className="transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgb(34, 211, 238)"
              strokeWidth="20"
              strokeDasharray="75 251"
              className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgb(52, 211, 153)"
              strokeWidth="20"
              strokeDasharray="50 251"
              strokeDashoffset="-75"
              className="drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgb(110, 231, 183)"
              strokeWidth="20"
              strokeDasharray="100 251"
              strokeDashoffset="-125"
              className="drop-shadow-[0_0_10px_rgba(110,231,183,0.6)]"
            />
          </svg>
        </div>
      </SatellitePanel>

      {/* Orbital Satellites */}
      <div className="absolute top-1/4 left-1/4 animate-pulse">
        <Satellite className="w-6 h-6 text-cyan-400/40" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-pulse" style={{ animationDelay: "1s" }}>
        <Satellite className="w-5 h-5 text-cyan-400/30" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-pulse" style={{ animationDelay: "1.5s" }}>
        <Radio className="w-4 h-4 text-emerald-400/40" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: "2s" }}>
        <Radio className="w-5 h-5 text-cyan-300/40" />
      </div>
    </div>
  );
};

export default AnimatedBackground;

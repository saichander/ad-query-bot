import { AlertCircle, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface ErrorScreenProps {
  onRetry: () => void;
}

const ErrorScreen = ({ onRetry }: ErrorScreenProps) => {
  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-white rounded-lg border border-gray-200">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/20"
            style={{
              left: `${(i * 15 + 10)}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl px-8">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Broken Satellite Illustration */}
          <div className="relative w-48 h-48">
            {/* Orbital rings - broken/glitchy effect */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-dashed border-destructive/40"
              style={{
                animation: 'spin 6s linear infinite',
              }}
            />
            
            <div 
              className="absolute inset-4 rounded-full border-[4px] border-transparent border-t-destructive/60 border-r-destructive/60"
              style={{
                animation: 'spin 4s linear infinite reverse',
              }}
            />
            
            {/* Central broken satellite */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Glitch effect behind */}
                <div className="absolute inset-0 bg-destructive/10 blur-xl rounded-full animate-pulse" 
                  style={{ width: '100px', height: '100px', margin: '-16px' }}
                />
                
                {/* Icon container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-8 border-2 border-destructive/30 shadow-xl">
                  <AlertCircle 
                    className="w-12 h-12 text-destructive" 
                    style={{
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                  
                  {/* Spark effects */}
                  {[0, 45, 90, 135].map((angle, i) => (
                    <Sparkles
                      key={i}
                      className="absolute w-4 h-4 text-accent"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-40px)`,
                        animation: `pulse ${1.5 + i * 0.2}s ease-in-out infinite`,
                        animationDelay: `${i * 0.15}s`,
                        opacity: 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating debris */}
            {[0, 60, 180].map((angle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-sm bg-gradient-to-br from-destructive/60 to-accent/60"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${60 + i * 10}px)`,
                  animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Error Message */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Oops! Lost in Space
            </h2>
            <p className="text-lg text-gray-600 max-w-md">
              Our AI satellite hit a cosmic hiccup. But don't worry—every great explorer faces setbacks!
            </p>
          </div>

          {/* Retry Button */}
          <Button 
            onClick={onRetry}
            size="lg"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Launch Again
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" 
              style={{
                opacity: 0.2,
              }}
            />
          </Button>

          {/* Encouraging message */}
          <p className="text-sm text-gray-500 italic">
            "The only way to discover the limits is to go beyond them." ✨
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(-50%, -50%) rotate(var(--angle, 0deg)) translateX(var(--distance, 60px)) translateY(0px);
          }
          50% { 
            transform: translate(-50%, -50%) rotate(var(--angle, 0deg)) translateX(var(--distance, 60px)) translateY(-15px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ErrorScreen;

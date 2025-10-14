import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";
import ResponseChart from "./ResponseChart";
import ResponseTable from "./ResponseTable";
import AILoader from "./AILoader";
import ErrorScreen from "./ErrorScreen";

const QuerySection = () => {
  const [query, setQuery] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setCurrentQuery(query);
    setResponse("");
    setHasError(false);
    
    // Check if query is "error" to trigger error screen
    if (query.toLowerCase().trim() === "error") {
      setTimeout(() => {
        setHasError(true);
        setIsLoading(false);
      }, 2000);
      return;
    }
    
    // Simulate AI response with 30 second delay
    setTimeout(() => {
      const mockResponse = `Based on your query about "${query}", here's what I found:\n\n• Campaign performance is trending upward with a 23% increase in CTR\n• Top performing segment: 25-34 age group\n• Recommended optimization: Increase budget allocation to mobile platforms\n\nWould you like more detailed metrics or specific recommendations?`;
      
      setResponse(mockResponse);
      setQuery("");
      setIsLoading(false);
    }, 30000);
  };

  const handleRetry = () => {
    setHasError(false);
    setCurrentQuery("");
    setResponse("");
  };

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Combined Input and Response Area */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Input Area */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex gap-3 items-start">
              <Textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about campaign performance, metrics, trends..."
                className="flex-1 min-h-[80px] bg-gray-50 border-gray-200 resize-none focus:ring-2 focus:ring-primary"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <Button
                onClick={handleSubmit}
                disabled={!query.trim() || isLoading}
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 w-10 flex-shrink-0"
              >
                {isLoading ? (
                  <Sparkles className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Response Area */}
          {(currentQuery || response || isLoading || hasError) && (
            <div className="animate-slide-up">
              {currentQuery && !hasError && (
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-gray-200">
                  <p className="text-gray-900 font-medium text-lg">{currentQuery}</p>
                </div>
              )}
              {isLoading && (
                <div className="p-8">
                  <AILoader />
                </div>
              )}
              {hasError && !isLoading && (
                <div className="p-8">
                  <ErrorScreen onRetry={handleRetry} />
                </div>
              )}
              {response && !isLoading && !hasError && (
                <div className="p-8 space-y-8">
                  {/* Text Response */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{response}</p>
                    </div>
                  </div>
                  
                  {/* Chart and Table */}
                  <div className="space-y-6">
                    <ResponseChart />
                    <ResponseTable />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuerySection;

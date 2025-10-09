import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";
import ResponseChart from "./ResponseChart";
import ResponseTable from "./ResponseTable";

const QuerySection = () => {
  const [query, setQuery] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setCurrentQuery(query);
    setResponse("");
    
    // Simulate AI response
    setTimeout(() => {
      const mockResponse = `Based on your query about "${query}", here's what I found:\n\n• Campaign performance is trending upward with a 23% increase in CTR\n• Top performing segment: 25-34 age group\n• Recommended optimization: Increase budget allocation to mobile platforms\n\nWould you like more detailed metrics or specific recommendations?`;
      
      setResponse(mockResponse);
      setQuery("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">Ask Anything About Your Campaigns</h2>
          <p className="text-muted-foreground">Get instant insights powered by AI</p>
        </div>

        {/* Input Area - Now at the top */}
        <div className="glass-strong rounded-2xl p-6 space-y-4">
          <Textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about campaign performance, metrics, trends..."
            className="min-h-[120px] bg-background/50 border-white/10 resize-none focus:ring-2 focus:ring-primary"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={!query.trim() || isLoading}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isLoading ? (
                <>Processing...</>
              ) : (
                <>
                  Send
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Output Area - Shows single response */}
        {(currentQuery || response) && (
          <div className="animate-slide-up">
            {/* White content container */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {currentQuery && (
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-gray-200">
                  <p className="text-gray-900 font-medium text-lg">{currentQuery}</p>
                </div>
              )}
              {response && (
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
          </div>
        )}
      </div>
    </section>
  );
};

export default QuerySection;

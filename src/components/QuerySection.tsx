import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";

const QuerySection = () => {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState<Array<{ query: string; response: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const mockResponse = `Based on your query about "${query}", here's what I found:\n\n• Campaign performance is trending upward with a 23% increase in CTR\n• Top performing segment: 25-34 age group\n• Recommended optimization: Increase budget allocation to mobile platforms\n\nWould you like more detailed metrics or specific recommendations?`;
      
      setResponses([...responses, { query, response: mockResponse }]);
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

        {/* Output Area */}
        <div className="space-y-4">
          {responses.map((item, index) => (
            <div key={index} className="space-y-3 animate-slide-up">
              <div className="glass rounded-xl p-4 ml-auto max-w-[80%]">
                <p className="text-foreground">{item.query}</p>
              </div>
              <div className="glass-strong rounded-xl p-6 mr-auto max-w-[80%]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground whitespace-pre-line">{item.response}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="glass-strong rounded-2xl p-6 space-y-4 sticky bottom-6">
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
      </div>
    </section>
  );
};

export default QuerySection;

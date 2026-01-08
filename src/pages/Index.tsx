import { useState } from "react";
import NoButton from "@/components/NoButton";
import ResponseCard from "@/components/ResponseCard";
import NoCounter from "@/components/NoCounter";

const Index = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [showResponse, setShowResponse] = useState(false);

  const fetchNo = async () => {
    setIsLoading(true);
    setShowResponse(false);
    
    try {
      const res = await fetch("https://naas.isalman.dev/no");
      const data = await res.json();
      
      // Small delay for dramatic effect
      setTimeout(() => {
        setResponse(data.reason || data.message || "Just... NO.");
        setNoCount((prev) => prev + 1);
        setShowResponse(true);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      setResponse("Even the API said NO to your request!");
      setNoCount((prev) => prev + 1);
      setShowResponse(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-4xl">
        {/* Header */}
        <header className="text-center">
          <h1 className="font-display text-6xl md:text-8xl text-gradient-fire tracking-wide mb-4">
          NOPIFY
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-md mx-auto">
            Press the button to see if I can fulfill your request
          </p>
        </header>

        {/* Main Button */}
        <NoButton onPress={fetchNo} isLoading={isLoading} />

        {/* Response */}
        <div className="w-full min-h-[200px] flex items-center justify-center">
          <ResponseCard response={response || ""} isVisible={showResponse} />
        </div>

        {/* Counter */}
        {noCount > 0 && <NoCounter count={noCount} />}

        {/* Footer */}
        <footer className="text-center mt-8">
          <p className="font-body text-muted-foreground text-sm">
            Powered by{" "}
            <a
              href="https://github.com/hotheadhacker/no-as-a-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              No-as-a-Service API
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

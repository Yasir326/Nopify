import { useState } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

interface NoButtonProps {
  onPress: () => void;
  isLoading: boolean;
}

const NoButton = ({ onPress, isLoading }: NoButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    
    // Fire confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ef4444", "#f97316", "#eab308", "#ffffff"],
    });
    
    onPress();
    
    setTimeout(() => setIsPressed(false), 300);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className={`
        relative w-64 h-64 rounded-full 
        bg-gradient-fire
        text-primary-foreground font-display text-4xl
        shadow-glow hover:shadow-intense
        transition-all duration-300
        hover:scale-105 active:scale-95
        border-4 border-secondary
        disabled:opacity-70 disabled:cursor-not-allowed
        ${isPressed ? "animate-shake" : "animate-pulse-glow"}
      `}
    >
      {isLoading ? (
        <span className="text-3xl">🤔</span>
      ) : (
        <>
          <span className="text-5xl tracking-wider">Yes or</span>
          <br />
          <span className="text-7xl">No!</span>
        </>
      )}
    </Button>
  );
};

export default NoButton;

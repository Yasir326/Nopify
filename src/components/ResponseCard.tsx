import { Card } from "@/components/ui/card";

interface ResponseCardProps {
  response: string;
  isVisible: boolean;
}

const ResponseCard = ({ response, isVisible }: ResponseCardProps) => {
  if (!isVisible) return null;

  return (
    <Card
      className={`
        max-w-2xl mx-auto p-8 
        bg-card border-2 border-primary
        shadow-card
        animate-bounce-in
      `}
    >
      <div className="text-center">
        <h2 className="font-display text-8xl text-gradient-fire mb-6 tracking-wide">
          NO!
        </h2>
        <p className="font-body text-xl text-foreground leading-relaxed">
          {response}
        </p>
      </div>
    </Card>
  );
};

export default ResponseCard;

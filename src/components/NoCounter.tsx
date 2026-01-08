interface NoCounterProps {
  count: number;
}

const NoCounter = ({ count }: NoCounterProps) => {
  return (
    <div className="text-center">
      <p className="font-body text-muted-foreground text-sm uppercase tracking-widest mb-1">
        Total Rejections
      </p>
      <p className="font-display text-5xl text-gradient-fire">
        {count}
      </p>
    </div>
  );
};

export default NoCounter;

import { useEffect, useState } from "react";

const phrases = [
  "Identificando padrões...",
  "Comparando comportamento...",
  "Analisando respostas...",
  "Gerando resultado personalizado...",
];

interface TransitionScreenProps {
  onComplete: () => void;
}

const TransitionScreen = ({ onComplete }: TransitionScreenProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => {
        if (prev >= phrases.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-surface-blue px-4">
      <div className="text-center space-y-8">
        {/* Spinner */}
        <div className="w-16 h-16 mx-auto border-4 border-muted border-t-primary rounded-full animate-spin" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Analisando respostas...
        </h2>
        <p className="text-lg text-muted-foreground animate-fade-in-up" key={phraseIndex}>
          {phrases[phraseIndex]}
        </p>
      </div>
    </section>
  );
};

export default TransitionScreen;

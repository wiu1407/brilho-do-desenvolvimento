import { useState, useRef } from "react";
import HeroSection from "@/components/quiz/HeroSection";
import QuizSection from "@/components/quiz/QuizSection";
import TransitionScreen from "@/components/quiz/TransitionScreen";
import ResultSection from "@/components/quiz/ResultSection";
import PatternBreak from "@/components/quiz/PatternBreak";
import ProductSection from "@/components/quiz/ProductSection";
import VSLSection from "@/components/quiz/VSLSection";
import ProductPresentation from "@/components/quiz/ProductPresentation";
import ProofSection from "@/components/quiz/ProofSection";
import ObjectionsSection from "@/components/quiz/ObjectionsSection";
import CTASection from "@/components/quiz/CTASection";

type Stage = "hero" | "quiz" | "transition" | "result";

const Index = () => {
  const [stage, setStage] = useState<Stage>("hero");
  const quizRef = useRef<HTMLDivElement>(null);

  const scrollToQuiz = () => {
    setStage("quiz");
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {stage === "hero" && <HeroSection onStart={scrollToQuiz} />}

      {stage === "quiz" && (
        <div ref={quizRef}>
          <QuizSection onComplete={() => setStage("transition")} />
        </div>
      )}

      {stage === "transition" && (
        <TransitionScreen onComplete={() => setStage("result")} />
      )}

      {stage === "result" && (
        <>
          <ResultSection />
          <PatternBreak />
          <ProductSection />
          <VSLSection />
          <ProductPresentation />
          <ProofSection />
          <ObjectionsSection />
          <CTASection />
        </>
      )}
    </div>
  );
};

export default Index;

import { useState, useRef, useEffect } from "react";
import HeroSection from "@/components/quiz/HeroSection";
import QuizSection from "@/components/quiz/QuizSection";
import TransitionScreen from "@/components/quiz/TransitionScreen";
import ResultSection from "@/components/quiz/ResultSection";
import ProductDemonstration from "@/components/quiz/ProductDemonstration";
import VSLSection from "@/components/quiz/VSLSection";
import ProductPresentation from "@/components/quiz/ProductPresentation";
import BonusSection from "@/components/quiz/BonusSection";
import ProofSection from "@/components/quiz/ProofSection";
import ObjectionsSection from "@/components/quiz/ObjectionsSection";
import CTASection from "@/components/quiz/CTASection";

type Stage = "hero" | "quiz" | "transition" | "result";

const PromoBar = () => (
  <div className="w-full overflow-hidden bg-white py-3 border-y border-yellow-400 relative z-[9999] shadow-sm">
    <div className="whitespace-nowrap inline-block animate-[scroll_20s_linear_infinite] text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 font-black tracking-widest text-sm sm:text-base">
      CUPOM DE 70% DE DESCONTO APLICADO • CUPOM DE 70% DE DESCONTO APLICADO • CUPOM DE 70% DE DESCONTO APLICADO • CUPOM DE 70% DE DESCONTO APLICADO •
    </div>
  </div>
);

const Index = () => {
  const [stage, setStage] = useState<Stage>("hero");
  const quizRef = useRef<HTMLDivElement>(null);
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    if (stage !== "result") return;
    
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, [stage]);

  const scrollToQuiz = () => {
    setStage("quiz");
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen relative">
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
          <PromoBar />
          <ResultSection />
          <ProductDemonstration />
          <VSLSection />
          <ProductPresentation />
          <BonusSection />
          <ProofSection />
          <ObjectionsSection />
          <CTASection />

          {/* Exit Intent Popup */}
          {showExitIntent && (
            <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4">
              <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in-up">
                <h3 className="text-2xl font-black text-foreground mb-4">Você realmente quer desistir da alfabetização da sua criança?</h3>
                <p className="text-muted-foreground mb-6">
                  Seu desconto de <strong className="text-foreground">70% ainda está ativo</strong> para garantir o Método NeuroOctoMusical™ e começar hoje de forma leve e musical.
                </p>
                <div className="space-y-3">
                  <button onClick={() => setShowExitIntent(false)} className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
                    Quero aproveitar os 70% de desconto
                  </button>
                  <button onClick={() => setShowExitIntent(false)} className="w-full text-sm font-bold text-muted-foreground py-2 hover:text-foreground">
                    Não, vou sair
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Index;

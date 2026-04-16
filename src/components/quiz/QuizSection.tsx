import { useState } from "react";
import quizCommunication from "@/assets/quiz-communication.jpg";
import quizFrustration from "@/assets/quiz-frustration.jpg";
import quizRoutine from "@/assets/quiz-routine.jpg";
import quizAttention from "@/assets/quiz-attention.jpg";
import quizLearning from "@/assets/quiz-learning.jpg";
import quizAutonomy from "@/assets/quiz-autonomy.jpg";
import quizBehavior from "@/assets/quiz-behavior.jpg";

type OptionType = {
  label: string;
  image?: string;
};

type QuestionType = {
  question: string;
  image?: string;
  alt?: string;
  options: OptionType[];
};

const questions: QuestionType[] = [
  {
    question: "Seu filho é menino ou menina?",
    options: [
      { label: "Menino", image: "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?w=400&q=80" },
      { label: "Menina", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=400&q=80" },
    ],
  },
  {
    question: "Qual a idade do seu filho?",
    image: "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?w=800&q=80",
    alt: "Criança brincando",
    options: [
      { label: "2 a 4 anos" },
      { label: "5 a 7 anos" },
      { label: "8 a 10 anos" },
    ],
  },
  {
    question: "Ele consegue expressar o que quer com facilidade?",
    image: quizCommunication,
    alt: "Criança tentando se comunicar",
    options: [{ label: "Sim" }, { label: "Às vezes" }, { label: "Tem dificuldade" }, { label: "Não consegue" }],
  },
  {
    question: "Ele se irrita quando não é entendido?",
    image: quizFrustration,
    alt: "Criança frustrada",
    options: [{ label: "Raramente" }, { label: "Às vezes" }, { label: "Com frequência" }, { label: "Sempre" }],
  },
  {
    question: "Ele tem dificuldade em seguir uma rotina?",
    image: quizRoutine,
    alt: "Criança desorganizada",
    options: [{ label: "Nenhuma dificuldade" }, { label: "Um pouco" }, { label: "Muita dificuldade" }, { label: "Extrema dificuldade" }],
  },
  {
    question: "Ele consegue manter foco em atividades?",
    image: quizAttention,
    alt: "Criança distraída",
    options: [{ label: "Sim, foca bem" }, { label: "Por pouco tempo" }, { label: "Se distrai fácil" }, { label: "Não foca" }],
  },
  {
    question: "Ele tem dificuldade para aprender coisas simples?",
    image: quizLearning,
    alt: "Criança confusa com tarefa",
    options: [{ label: "Aprende fácil" }, { label: "Com alguma repetição" }, { label: "Muita dificuldade" }, { label: "Depende de ajuda" }],
  },
  {
    question: "Ele depende muito de ajuda?",
    image: quizAutonomy,
    alt: "Mãe ajudando",
    options: [{ label: "Quase independente" }, { label: "Ajuda moderada" }, { label: "Muita ajuda" }, { label: "Dependência total" }],
  },
  {
    question: "Você sente dificuldade em lidar com o comportamento dele?",
    image: quizBehavior,
    alt: "Mãe sobrecarregada",
    options: [{ label: "Lido bem" }, { label: "Às vezes é desafiador" }, { label: "Frequentemente difícil" }, { label: "Me sinto exausta" }],
  },
];

interface QuizSectionProps {
  onComplete: () => void;
}

const QuizSection = ({ onComplete }: QuizSectionProps) => {
  const [current, setCurrent] = useState(0);

  const progress = ((current + 1) / questions.length) * 100;
  const q = questions[current];

  const handleAnswer = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete();
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-surface-cyan/20 px-4 py-8">
      <div className="container mx-auto max-w-lg">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-3 font-bold">
            <span>Pergunta {current + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-card rounded-3xl shadow-xl p-6 sm:p-10 animate-fade-in-up border border-border" key={current}>
          {q.image && !q.options[0].image && (
            <img
              src={q.image}
              alt={q.alt || "Quiz Image"}
              className="w-full h-48 object-cover rounded-2xl mb-6 shadow-sm border border-border/50"
            />
          )}

          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground text-center mb-8 leading-tight">
            {q.question}
          </h2>

          {q.options[0].image ? (
            <div className="grid grid-cols-2 gap-4">
              {q.options.map((option, i) => (
                <button
                  key={i}
                  onClick={handleAnswer}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-surface-blue hover:border-primary hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <img src={option.image} alt={option.label} className="w-full aspect-square object-cover rounded-xl shadow-sm" />
                  <span className="font-bold text-foreground text-lg">{option.label}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {q.options.map((option, i) => (
                <button
                  key={i}
                  onClick={handleAnswer}
                  className="w-full text-left px-6 py-5 rounded-2xl border-2 border-border bg-card hover:border-primary hover:bg-surface-blue transition-all duration-200 text-foreground font-bold text-lg active:scale-[0.98] flex items-center justify-between group"
                >
                  <span>{option.label}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary group-hover:bg-primary/20 transition-colors" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;

import { useState } from "react";
import quizCommunication from "@/assets/quiz-communication.jpg";
import quizFrustration from "@/assets/quiz-frustration.jpg";
import quizRoutine from "@/assets/quiz-routine.jpg";
import quizAttention from "@/assets/quiz-attention.jpg";
import quizLearning from "@/assets/quiz-learning.jpg";
import quizAutonomy from "@/assets/quiz-autonomy.jpg";
import quizBehavior from "@/assets/quiz-behavior.jpg";

const questions = [
  {
    question: "Seu filho consegue expressar o que quer com facilidade?",
    image: quizCommunication,
    alt: "Criança tentando se comunicar",
    options: ["Sim, sem dificuldade", "Às vezes consegue", "Tem muita dificuldade", "Quase não consegue"],
  },
  {
    question: "Ele se irrita quando não é entendido?",
    image: quizFrustration,
    alt: "Criança frustrada",
    options: ["Raramente", "Às vezes", "Com frequência", "Sempre"],
  },
  {
    question: "Ele tem dificuldade em seguir uma rotina?",
    image: quizRoutine,
    alt: "Criança sem rotina organizada",
    options: ["Segue bem a rotina", "Tem um pouco de dificuldade", "Tem bastante dificuldade", "Não consegue seguir"],
  },
  {
    question: "Ele consegue manter atenção em atividades?",
    image: quizAttention,
    alt: "Criança distraída",
    options: ["Sim, por bastante tempo", "Por pouco tempo", "Se distrai facilmente", "Quase não mantém"],
  },
  {
    question: "Ele tem dificuldade para aprender coisas simples?",
    image: quizLearning,
    alt: "Criança com dificuldade de aprendizado",
    options: ["Aprende rápido", "Aprende com repetição", "Tem dificuldade", "Muita dificuldade"],
  },
  {
    question: "Ele depende muito de ajuda para tarefas do dia a dia?",
    image: quizAutonomy,
    alt: "Mãe ajudando criança",
    options: ["É bem independente", "Precisa de pouca ajuda", "Precisa de bastante ajuda", "Depende totalmente"],
  },
  {
    question: "Você sente dificuldade em lidar com o comportamento dele?",
    image: quizBehavior,
    alt: "Mãe sobrecarregada",
    options: ["Não, consigo lidar", "Às vezes é difícil", "Frequentemente é difícil", "É muito difícil"],
  },
];

interface QuizSectionProps {
  onComplete: () => void;
}

const QuizSection = ({ onComplete }: QuizSectionProps) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const progress = ((current) / questions.length) * 100;
  const q = questions[current];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete();
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-card px-4 py-12">
      <div className="container mx-auto max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
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
        <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 animate-fade-in-up" key={current}>
          <img
            src={q.image}
            alt={q.alt}
            loading="lazy"
            width={640}
            height={512}
            className="w-full max-w-sm mx-auto rounded-xl mb-6"
          />
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
            {q.question}
          </h2>
          <div className="space-y-3">
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full text-left px-5 py-4 rounded-xl border-2 border-border bg-surface-blue hover:border-primary hover:bg-primary/5 transition-all duration-200 text-foreground font-semibold text-base"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;

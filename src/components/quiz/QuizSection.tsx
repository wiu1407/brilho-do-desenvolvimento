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
    question: "Como ele se sai na hora de pedir o que quer ou contar algo?",
    image: quizCommunication,
    alt: "Criança tentando se comunicar",
    options: ["Fala tudo de boa!", "Até tenta, mas às vezes trava", "É uma luta para a gente entender", "Quase não fala o que quer"],
    color: "from-primary/10 to-accent/10",
  },
  {
    question: "Quando alguém não entende o que ele quer, o tempo fecha?",
    image: quizFrustration,
    alt: "Criança frustrada",
    options: ["Que nada, ele é bem de boa", "Até que sim, de vez em quando", "Vira e mexe ele fica bravo", "Nossa, é choro e frustração na certa!"],
    color: "from-accent/10 to-surface-cyan/50",
  },
  {
    question: "E a rotina em casa? Como é a hora de dormir, comer ou ir pra escola?",
    image: quizRoutine,
    alt: "Criança sem rotina organizada",
    options: ["Tudo nos trilhos", "Tem dias que é um pouco difícil", "É bem complicado manter a ordem", "Um verdadeiro caos, ele sofre muito"],
    color: "from-secondary/30 to-surface-blue/50",
  },
  {
    question: "Na hora de brincar ou fazer uma tarefinha, ele foca ou voa longe?",
    image: quizAttention,
    alt: "Criança distraída",
    options: ["Fica concentradão!", "Perde o foco logo logo", "Qualquer mosquinha já distrai", "Não para quieto em nada"],
    color: "from-primary/10 to-secondary/20",
  },
  {
    question: "Aprender coisas novas do dia a dia é um desafio para ele?",
    image: quizLearning,
    alt: "Criança com dificuldade de aprendizado",
    options: ["Ele pega as coisas super rápido", "Precisa que eu repita algumas vezes", "É um pouquinho de sufoco", "Sim, leva muito mais tempo que o esperado"],
    color: "from-accent/10 to-primary/10",
  },
  {
    question: "E nas coisinhas dele (comer, vestir, tomar banho), precisa de você pra tudo?",
    image: quizAutonomy,
    alt: "Mãe ajudando criança",
    options: ["Já faz de tudo sozinho!", "Me chama só de vez em quando", "Ainda preciso dar uma boa mãozinha", "Depende de mim o tempo todo"],
    color: "from-secondary/20 to-accent/10",
  },
  {
    question: "Mãe, de coração: tem dias em que lidar com o comportamento é exaustivo?",
    image: quizBehavior,
    alt: "Mãe sobrecarregada",
    options: ["Lido super bem de boas", "Sinto um cansaço vez ou outra", "Acabo me sentindo bem sobrecarregada", "Sim, muitas vezes eu nem sei o que fazer"],
    color: "from-primary/10 to-surface-cyan/30",
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
    <section className="min-h-screen flex items-center bg-transparent px-4 py-8">
      <div className="container mx-auto max-w-lg">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-muted-foreground mb-2 font-bold">
            <span>Pergunta {current + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out gradient-cool"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className={`bg-card rounded-3xl shadow-vivid p-5 sm:p-8 animate-fade-in-up border-2 border-primary/15`} key={current}>
          <img
            src={q.image}
            alt={q.alt}
            loading="lazy"
            width={640}
            height={512}
            className="w-full max-w-xs mx-auto rounded-2xl mb-5 border-2 border-accent/20"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-foreground text-center mb-5">
            {q.question}
          </h2>
          <div className="space-y-3">
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full text-left px-5 py-4 rounded-2xl border-2 border-primary/15 bg-surface-blue hover:border-primary hover:bg-primary/10 hover:shadow-soft transition-all duration-200 text-foreground font-semibold text-base active:scale-[0.98]"
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

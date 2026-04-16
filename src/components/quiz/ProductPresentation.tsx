const items = [
  { icon: "🗣️", title: "Cartões de Comunicação (CAA)", desc: "Para seu filho expressar necessidades mesmo sem fala", featured: true },
  { icon: "📋", title: "Rotina Visual Estruturada", desc: "Quadros de manhã, tarde e noite que reduzem crises", featured: false },
  { icon: "🧠", title: "Atividades Cognitivas", desc: "Exercícios que estimulam raciocínio e aprendizado", featured: false },
  { icon: "🎯", title: "Exercícios de Atenção (TDAH)", desc: "Atividades específicas para melhorar o foco", featured: false },
  { icon: "💛", title: "Regulação Emocional", desc: "Materiais para ajudar a criança a lidar com emoções", featured: false },
  { icon: "📖", title: "Guias para Pais", desc: "Passo a passo simples para aplicar em casa", featured: false },
];

import { CheckCircle } from "lucide-react";

const deliverables = [
  "Cartões de comunicação",
  "Rotina visual estruturada",
  "Atividades cognitivas",
  "Exercícios para foco (TDAH)",
  "Regulação emocional",
  "Guias práticos para pais",
];

const ProductPresentation = () => {
  return (
    <section className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            O que está incluso no material completo:
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa para estimular o seu filho de forma estruturada.
          </p>
        </div>

        <div className="space-y-3">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="font-bold text-foreground text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;

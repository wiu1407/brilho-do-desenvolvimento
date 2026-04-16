const items = [
  { icon: "🗣️", title: "Cartões de Comunicação (CAA)", desc: "Para seu filho expressar necessidades mesmo sem fala", featured: true },
  { icon: "📋", title: "Rotina Visual Estruturada", desc: "Quadros de manhã, tarde e noite que reduzem crises", featured: false },
  { icon: "🧠", title: "Atividades Cognitivas", desc: "Exercícios que estimulam raciocínio e aprendizado", featured: false },
  { icon: "🎯", title: "Exercícios de Atenção (TDAH)", desc: "Atividades específicas para melhorar o foco", featured: false },
  { icon: "💛", title: "Regulação Emocional", desc: "Materiais para ajudar a criança a lidar com emoções", featured: false },
  { icon: "📖", title: "Guias para Pais", desc: "Passo a passo simples para aplicar em casa", featured: false },
];

import { CheckCircle2 } from "lucide-react";

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
          Tudo que você precisa para começar a estimular seu filho em casa
        </p>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 rounded-2xl p-5 shadow-card border-2 transition-all ${
                item.featured
                  ? 'bg-primary/5 border-primary/25 shadow-vivid'
                  : 'bg-surface-blue border-border'
              }`}
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className={`font-extrabold ${item.featured ? 'text-primary' : 'text-foreground'}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;

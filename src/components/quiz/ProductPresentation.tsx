const items = [
  { icon: "🗣️", title: "Cartões de Comunicação (CAA)", desc: "Para seu filho expressar necessidades mesmo sem fala" },
  { icon: "📋", title: "Rotina Visual Estruturada", desc: "Quadros de manhã, tarde e noite que reduzem crises" },
  { icon: "🧠", title: "Atividades Cognitivas", desc: "Exercícios que estimulam raciocínio e aprendizado" },
  { icon: "🎯", title: "Exercícios de Atenção (TDAH)", desc: "Atividades específicas para melhorar o foco" },
  { icon: "💛", title: "Regulação Emocional", desc: "Materiais para ajudar a criança a lidar com emoções" },
  { icon: "📖", title: "Guias para Pais", desc: "Passo a passo simples para aplicar em casa" },
];

const ProductPresentation = () => {
  return (
    <section className="bg-card px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-4">
          🧩 O que você recebe
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-lg">
          Tudo que você precisa para começar a estimular seu filho em casa
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-surface-blue rounded-xl p-5 shadow-card border border-border">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
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

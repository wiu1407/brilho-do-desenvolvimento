const objections = [
  {
    question: '"Não tenho experiência com isso"',
    answer: "O material vem com guia passo a passo. Qualquer pai ou mãe consegue aplicar, mesmo sem formação.",
    icon: "📖",
  },
  {
    question: '"Não tenho tempo"',
    answer: "As atividades são curtas — de 5 a 15 minutos. Dá para encaixar na rotina do dia a dia.",
    icon: "⏰",
  },
  {
    question: '"Meu filho não vai aceitar"',
    answer: "O método é visual e lúdico. Crianças se conectam naturalmente com imagens e cores.",
    icon: "🎨",
  },
];

const ObjectionsSection = () => {
  return (
    <section className="bg-card px-4 py-14">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground text-center mb-8">
          🧠 Talvez você esteja pensando...
        </h2>

        <div className="space-y-3">
          {objections.map((obj, i) => (
            <div key={i} className="bg-surface-blue rounded-2xl p-5 shadow-card border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{obj.icon}</span>
                <div>
                  <p className="font-bold text-foreground mb-1">{obj.question}</p>
                  <p className="text-muted-foreground text-sm">{obj.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;

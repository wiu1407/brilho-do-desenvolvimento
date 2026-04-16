import { Gift } from "lucide-react";

const bonuses = [
  "Treinamento Cognitivo e Percepção Visual",
  "Caderno de Alfabetização Adaptada",
  "Atividades para Foco (TDAH)",
  "Jogos Educativos",
  "Desenvolvimento Emocional",
  "Guias para Pais (ABA e comportamento)",
];

const BonusSection = () => {
  return (
    <section className="bg-primary/5 px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-xl border-4 border-primary/20">
          <div className="text-center space-y-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 text-primary mx-auto rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Você também recebe <span className="text-primary">gratuitamente:</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {bonuses.map((bonus, i) => (
              <div key={i} className="flex items-center gap-3 bg-background p-4 rounded-2xl border border-border">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                  🎁
                </div>
                <p className="font-semibold text-sm md:text-base text-foreground leading-tight">{bonus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;

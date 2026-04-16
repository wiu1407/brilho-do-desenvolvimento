import { Gift } from "lucide-react";

const BonusSection = () => {
  return (
    <section className="bg-surface-green px-4 py-16">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
          Além do cupom de desconto de <span className="bg-yellow-200 px-2 rounded">70%</span>, hoje você leva mais <span className="text-primary">2 super bônus!</span>
        </h2>
        <p className="text-muted-foreground mb-10">Tudo pensado para somar na rotina de vocês.</p>

        <div className="space-y-6">
          {/* Bonus 1 */}
          <div className="bg-card w-full rounded-3xl p-6 shadow-lg border border-border flex flex-col md:flex-row items-center md:items-start gap-6 text-left hover:shadow-xl transition-all">
            <div className="w-full md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80" 
                alt="Planners visuais" 
                className="w-full h-auto aspect-[3/4] object-cover rounded-2xl shadow-sm border border-border"
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                <Gift className="w-4 h-4" /> Bônus 1
              </div>
              <h3 className="text-xl font-bold text-foreground">Planners Visuais de Rotina</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ver seu filho entender a própria rotina (mesmo sem saber ler) é emocionante. Esses planners visuais facilitam as transições, reduzem o estresse das trocas de atividade diária, e tornam os dias mais leves e cheios de conquistas infantis.
              </p>
              <div className="pt-2">
                <p className="text-red-500 font-bold">De R$ 19,00 <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded ml-2">por R$ 0,00</span></p>
              </div>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-card w-full rounded-3xl p-6 shadow-lg border border-border flex flex-col md:flex-row items-center md:items-start gap-6 text-left hover:shadow-xl transition-all">
            <div className="w-full md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80" 
                alt="O superpoder do foco" 
                className="w-full h-auto aspect-[3/4] object-cover rounded-2xl shadow-sm border border-border"
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                <Gift className="w-4 h-4" /> Bônus 2
              </div>
              <h3 className="text-xl font-bold text-foreground">O Superpoder do Foco</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Um guia digital estruturado com 31 dicas práticas diretas para ajudar seu filho a se concentrar mais nas tarefas do dia, evitar distrações constantes, tolerar melhor as frustrações e ser gradualmente mais confiante.
              </p>
              <div className="pt-2">
                <p className="text-red-500 font-bold">De R$ 29,00 <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded ml-2">por R$ 0,00</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BonusSection;

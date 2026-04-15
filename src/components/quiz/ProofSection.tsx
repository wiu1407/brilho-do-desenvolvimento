import proofCommunication from "@/assets/proof-communication.jpg";
import proofRoutine from "@/assets/proof-routine.jpg";
import proofFocus from "@/assets/proof-focus.jpg";

const proofs = [
  {
    image: proofCommunication,
    before: "Criança não conseguia pedir o que queria",
    after: "Agora usa cartões para se comunicar com a família",
  },
  {
    image: proofRoutine,
    before: "Manhãs caóticas com crises e choro",
    after: "Rotina visual trouxe organização e calma",
  },
  {
    image: proofFocus,
    before: "Não conseguia focar em nenhuma atividade",
    after: "Com exercícios visuais, mantém atenção por mais tempo",
  },
];

const ProofSection = () => {
  return (
    <section className="bg-surface-green px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
          📸 Como funciona na prática
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {proofs.map((proof, i) => (
            <div key={i} className="bg-card rounded-2xl shadow-card overflow-hidden">
              <img
                src={proof.image}
                alt={proof.after}
                loading="lazy"
                width={640}
                height={512}
                className="w-full aspect-square object-cover"
              />
              <div className="p-5 space-y-2">
                <p className="text-sm text-destructive font-semibold">❌ Antes: {proof.before}</p>
                <p className="text-sm text-secondary-foreground font-semibold">✅ Depois: {proof.after}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini testimonials */}
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {[
            { name: "Maria S.", text: "Meu filho começou a usar os cartões e em 3 dias já pedia água sozinho!" },
            { name: "Ana P.", text: "A rotina visual mudou nossas manhãs. Menos crises, menos estresse." },
            { name: "Carla R.", text: "Nunca imaginei que algo tão simples faria tanta diferença." },
            { name: "Juliana M.", text: "Meu filho com TDAH está muito mais focado com as atividades do kit." },
          ].map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-4 shadow-card border border-border">
              <p className="text-foreground text-sm italic">"{t.text}"</p>
              <p className="text-muted-foreground text-xs mt-2 font-bold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

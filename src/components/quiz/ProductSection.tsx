import { useState } from "react";
import productCards from "@/assets/product-cards.jpg";
import productRoutine from "@/assets/product-routine.jpg";
import productActivities from "@/assets/product-activities.jpg";
import proofCommunication from "@/assets/proof-communication.jpg";
import proofFocus from "@/assets/proof-focus.jpg";

const slides = [
  { image: productCards, label: "🗣️ Comunicação mesmo sem fala", caption: "Cartões de comunicação alternativa (CAA)", highlight: true },
  { image: productRoutine, label: "📋 Rotina estruturada", caption: "Quadro visual de rotina manhã/tarde/noite", highlight: false },
  { image: productActivities, label: "🎯 Mais foco e atenção", caption: "Atividades cognitivas e exercícios de foco", highlight: false },
  { image: proofCommunication, label: "💬 Redução de crises", caption: "Criança usando cartões para se expressar", highlight: true },
  { image: proofFocus, label: "📖 Aprendizado prático", caption: "Atividades que estimulam o desenvolvimento", highlight: false },
];

const ProductSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-surface-blue px-4 py-14">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">
          📦 Conheça o Kit Completo
        </h2>
        <p className="text-muted-foreground text-center mb-8 text-base sm:text-lg">
          Materiais visuais e práticos para usar em casa, hoje mesmo
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className={`overflow-hidden rounded-3xl shadow-vivid ${slides[current].highlight ? 'border-4 border-primary/30' : 'border-2 border-border'}`}>
            <div className="relative" key={current}>
              <img
                src={slides[current].image}
                alt={slides[current].caption}
                loading="lazy"
                width={640}
                height={512}
                className="w-full object-cover aspect-[4/3] animate-fade-in-up"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-5">
                <span className={`text-sm font-bold px-3 py-1.5 rounded-full ${slides[current].highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  {slides[current].label}
                </span>
                <p className="text-primary-foreground mt-2 font-semibold text-sm sm:text-base">
                  {slides[current].caption}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-5">
            <button onClick={prev} className="w-11 h-11 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center font-bold text-primary text-lg active:scale-95">
              ←
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-primary scale-125' : 'bg-muted'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center font-bold text-primary text-lg active:scale-95">
              →
            </button>
          </div>
        </div>

        {/* Dialog cards emphasis */}
        <div className="mt-8 bg-card rounded-3xl border-2 border-primary/20 shadow-vivid p-5 space-y-3">
          <h3 className="text-lg font-extrabold text-primary text-center">🗣️ Cartões de Comunicação (CAA)</h3>
          <p className="text-muted-foreground text-center text-sm">
            O método mais eficaz para crianças que ainda não falam. Seu filho aprende a expressar necessidades, sentimentos e desejos usando imagens.
          </p>
          <div className="grid grid-cols-3 gap-2 pt-2">
            {["😊 Feliz", "🍎 Comer", "💧 Água"].map((card) => (
              <div key={card} className="bg-surface-cyan rounded-xl py-3 px-2 text-center border border-primary/15">
                <span className="text-2xl block">{card.split(" ")[0]}</span>
                <span className="text-xs font-bold text-foreground mt-1 block">{card.split(" ")[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

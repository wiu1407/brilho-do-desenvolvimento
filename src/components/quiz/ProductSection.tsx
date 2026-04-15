import { useState } from "react";
import productCards from "@/assets/product-cards.jpg";
import productRoutine from "@/assets/product-routine.jpg";
import productActivities from "@/assets/product-activities.jpg";
import proofCommunication from "@/assets/proof-communication.jpg";
import proofFocus from "@/assets/proof-focus.jpg";

const slides = [
  { image: productCards, label: "Comunicação mesmo sem fala", caption: "Cartões de comunicação alternativa (CAA)" },
  { image: productRoutine, label: "Rotina estruturada", caption: "Quadro visual de rotina manhã/tarde/noite" },
  { image: productActivities, label: "Mais foco e atenção", caption: "Atividades cognitivas e exercícios de foco" },
  { image: proofCommunication, label: "Redução de crises", caption: "Criança usando cartões para se expressar" },
  { image: proofFocus, label: "Aprendizado prático", caption: "Atividades que estimulam o desenvolvimento" },
];

const ProductSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-card px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-4">
          📦 Conheça o Kit Completo de Desenvolvimento
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-lg">
          Materiais visuais e práticos para usar em casa, hoje mesmo
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <div className="relative" key={current}>
              <img
                src={slides[current].image}
                alt={slides[current].caption}
                loading="lazy"
                width={640}
                height={512}
                className="w-full object-cover aspect-[5/4] animate-fade-in-up"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <span className="bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {slides[current].label}
                </span>
                <p className="text-primary-foreground mt-2 font-semibold">
                  {slides[current].caption}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center font-bold">
              ←
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-muted'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center font-bold">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

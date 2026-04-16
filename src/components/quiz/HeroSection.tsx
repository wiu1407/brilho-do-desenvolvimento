import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center bg-transparent px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-4 border-white/50 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold">
            🧩 Quiz rapidinho: só 2 minutos!
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl mx-auto">
            Seu pequeno está com dificuldade para <span className="text-primary">se expressar</span>, <span className="text-highlight">prestar atenção</span> ou seguir a <span className="text-primary">rotina</span>?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Vamos investigar juntos o que pode estar atrapalhando o dia a dia dele — e descobrir como você pode ajudar de um jeito super prático em casa!
          </p>
          <div className="w-full flex justify-center mt-4 mb-4">
            <img
              src={heroImage}
              alt="Mãe ajudando criança a se comunicar"
              width={800}
              height={800}
              className="rounded-3xl shadow-vivid w-full max-w-sm border-4 border-primary/20 aspect-square object-cover"
            />
          </div>
          <button
            onClick={onStart}
            className="w-full max-w-md mx-auto sm:w-auto inline-flex items-center justify-center gap-2 gradient-cta text-cta-foreground font-bold text-lg px-8 py-5 rounded-2xl shadow-vivid transition-all duration-300 animate-pulse-gentle hover:scale-105"
          >
            ✨ Começar o Quiz gratuito
          </button>
          <p className="text-sm text-muted-foreground font-bold">✅ Gratuito • Leva apenas 2 minutinhos</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

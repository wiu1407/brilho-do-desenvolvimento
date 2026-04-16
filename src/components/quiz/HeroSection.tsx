import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center bg-transparent px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex-1 text-center md:text-left space-y-5">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold">
              🧩 Quiz rapidinho: só 2 minutos!
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Seu pequeno está com dificuldade para <span className="text-primary">se expressar</span>, <span className="text-highlight">prestar atenção</span> ou seguir a <span className="text-primary">rotina</span>?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Vamos investigar juntos o que pode estar atrapalhando o dia a dia dele — e descobrir como você pode ajudar de um jeito super prático em casa!
            </p>
            <button
              onClick={onStart}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-cta text-cta-foreground font-bold text-lg px-8 py-5 rounded-2xl shadow-vivid transition-all duration-300 animate-pulse-gentle"
            >
              ✨ Começar o Quiz gratuito
            </button>
            <p className="text-sm text-muted-foreground">✅ Gratuito • Leva apenas 2 minutinhos</p>
          </div>
          <div className="flex-1">
            <img
              src={heroImage}
              alt="Mãe ajudando criança a se comunicar"
              width={800}
              height={800}
              className="rounded-3xl shadow-vivid w-full max-w-sm mx-auto border-4 border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center bg-surface-blue px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Seu filho tem dificuldade para se comunicar, focar ou lidar com rotina?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Descubra em 2 minutos o que pode estar travando o desenvolvimento dele — e veja uma forma prática de ajudar em casa
            </p>
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-cta-foreground font-bold text-lg px-8 py-4 rounded-full shadow-soft transition-all duration-300 animate-pulse-gentle"
            >
              🧠 Começar diagnóstico gratuito
            </button>
            <p className="text-sm text-muted-foreground">✅ Gratuito • Leva apenas 2 minutos</p>
          </div>
          <div className="flex-1">
            <img
              src={heroImage}
              alt="Mãe ajudando criança a se comunicar"
              width={800}
              height={800}
              className="rounded-2xl shadow-card w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

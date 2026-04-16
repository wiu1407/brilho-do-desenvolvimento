import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center bg-background px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Seu filho pode estar com dificuldades no desenvolvimento — <span className="text-primary">e você ainda não percebeu?</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Responda algumas perguntas rápidas e veja exatamente o que pode estar acontecendo e como ajudar na prática
            </p>
            <button
              onClick={onStart}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-cta text-cta-foreground font-bold text-xl px-10 py-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Começar diagnóstico
            </button>
          </div>
          <div className="flex-1 w-full max-w-md mx-auto">
            <img
              src={heroImage}
              alt="Mãe com criança"
              width={800}
              height={800}
              className="rounded-[2.5rem] shadow-2xl w-full object-cover border-[6px] border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

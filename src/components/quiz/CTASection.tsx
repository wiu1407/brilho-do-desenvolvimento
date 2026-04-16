import { Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-surface-blue px-4 py-20 border-t border-primary/10">
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
          O desenvolvimento do seu filho começa dentro de casa.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          Tome a atitude que ele precisa hoje.
        </p>
        
        <button className="w-full sm:w-auto inline-flex items-center justify-center gradient-cta text-cta-foreground font-bold text-xl px-10 py-6 rounded-2xl shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
          Quero ajudar meu filho agora
        </button>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-medium pt-2">
          <Shield className="w-5 h-5 text-green-600" />
          <span>Acesso imediato + Garantia total de 7 dias</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

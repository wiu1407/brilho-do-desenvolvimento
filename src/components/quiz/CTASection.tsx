const CTASection = () => {
  return (
    <section className="gradient-cool px-4 py-16">
      <div className="container mx-auto max-w-lg text-center space-y-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary-foreground">
          💛 Você pode começar a ajudar seu filho hoje
        </h2>
        <p className="text-primary-foreground/80 text-base sm:text-lg">
          Acesse todos os materiais imediatamente e comece a aplicar em casa
        </p>

        <button className="w-full sm:w-auto gradient-cta text-cta-foreground font-extrabold text-lg sm:text-xl px-10 py-5 rounded-2xl shadow-vivid transition-all duration-300 animate-pulse-gentle active:scale-95">
          Quero ajudar meu filho agora →
        </button>

        <div className="flex flex-wrap justify-center gap-3 text-primary-foreground/80 text-sm">
          <span>✅ Acesso imediato</span>
          <span>✅ Garantia de 7 dias</span>
          <span>✅ Suporte incluso</span>
        </div>

        <div className="bg-primary-foreground/10 rounded-2xl p-4 mt-4">
          <p className="text-primary-foreground text-sm">
            🔒 Pagamento 100% seguro • Satisfação garantida ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

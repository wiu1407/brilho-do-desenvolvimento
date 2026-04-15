const CTASection = () => {
  return (
    <section className="bg-primary px-4 py-16">
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground">
          💛 Você pode começar a ajudar seu filho hoje
        </h2>
        <p className="text-primary-foreground/80 text-lg">
          Acesse todos os materiais imediatamente e comece a aplicar em casa
        </p>

        <button className="bg-cta hover:bg-cta-hover text-cta-foreground font-extrabold text-xl px-10 py-5 rounded-full shadow-soft transition-all duration-300 animate-pulse-gentle">
          Quero ajudar meu filho agora →
        </button>

        <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/70 text-sm">
          <span>✅ Acesso imediato</span>
          <span>✅ Garantia de 7 dias</span>
          <span>✅ Suporte incluso</span>
        </div>

        <div className="bg-primary-foreground/10 rounded-xl p-4 mt-4">
          <p className="text-primary-foreground text-sm">
            🔒 Pagamento 100% seguro • Satisfação garantida ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

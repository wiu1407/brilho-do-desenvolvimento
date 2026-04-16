const VSLSection = () => {
  return (
    <section className="bg-white/20 backdrop-blur-lg px-4 py-14">
      <div className="container mx-auto max-w-lg text-center space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground">
          🎥 Veja como funciona na prática
        </h2>

        <div className="aspect-video bg-foreground/5 rounded-3xl shadow-vivid overflow-hidden border-2 border-primary/20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto gradient-cta rounded-full flex items-center justify-center shadow-vivid cursor-pointer hover:scale-110 transition-transform active:scale-95">
                <span className="text-cta-foreground text-3xl ml-1">▶</span>
              </div>
              <p className="text-muted-foreground font-semibold text-sm">Assista ao vídeo explicativo</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-3xl shadow-card p-5 text-left space-y-3 border border-border">
          <div className="flex items-start gap-3">
            <span className="text-2xl">😔</span>
            <p className="text-foreground text-sm sm:text-base">"Se seu filho não consegue se comunicar ou focar, você sabe o quanto isso pesa"</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <p className="text-foreground text-sm sm:text-base">"O problema não é seu filho — é a falta de um método correto"</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🧩</span>
            <p className="text-foreground text-sm sm:text-base">"Um sistema visual + cognitivo + rotina estruturada que qualquer família pode usar"</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌟</span>
            <p className="text-foreground font-bold text-sm sm:text-base">"Seu filho começa a entender, se comunicar e se organizar melhor"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;

const VSLSection = () => {
  return (
    <section className="bg-surface-blue px-4 py-16">
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
          🎥 Veja como funciona na prática
        </h2>

        {/* Video placeholder */}
        <div className="aspect-video bg-foreground/5 rounded-2xl shadow-card overflow-hidden border-2 border-border relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-cta rounded-full flex items-center justify-center shadow-soft cursor-pointer hover:scale-110 transition-transform">
                <span className="text-cta-foreground text-3xl ml-1">▶</span>
              </div>
              <p className="text-muted-foreground font-semibold">Assista ao vídeo explicativo</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-6 text-left space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">😔</span>
            <p className="text-foreground">"Se seu filho não consegue se comunicar ou focar, você sabe o quanto isso pesa"</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <p className="text-foreground">"O problema não é seu filho — é a falta de um método correto"</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🧩</span>
            <p className="text-foreground">"Um sistema visual + cognitivo + rotina estruturada que qualquer família pode usar"</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌟</span>
            <p className="text-foreground font-bold">"Seu filho começa a entender, se comunicar e se organizar melhor"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;

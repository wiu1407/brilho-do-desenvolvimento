const ResultSection = () => {
  return (
    <section className="bg-surface-warm px-4 py-16">
      <div className="container mx-auto max-w-3xl text-center space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold">
          ⚠️ Atenção necessária
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
          Seu filho apresenta sinais de dificuldade em comunicação, atenção e organização de rotina
        </h2>
        <p className="text-lg text-muted-foreground">
          💛 Isso <strong>não é culpa sua</strong> — muitos pais passam por isso e não sabem como ajudar.
        </p>
        <div className="bg-card rounded-2xl shadow-card p-6 border border-border">
          <p className="text-foreground font-semibold">
            ⏳ Sem o estímulo correto, isso pode gerar mais frustração, atraso no desenvolvimento e sobrecarga para toda a família.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;

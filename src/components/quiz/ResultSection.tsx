const ResultSection = () => {
  return (
    <section className="bg-surface-warm px-4 py-14">
      <div className="container mx-auto max-w-lg text-center space-y-5 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold">
          ⚠️ Atenção necessária
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground">
          Seu filho apresenta sinais de dificuldade em <span className="text-primary">comunicação</span>, <span className="text-highlight">atenção</span> e <span className="text-primary">organização de rotina</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          💛 Isso <strong>não é culpa sua</strong> — muitos pais passam por isso e não sabem como ajudar.
        </p>
        <div className="bg-card rounded-2xl shadow-vivid p-5 border-2 border-highlight/20">
          <p className="text-foreground font-semibold">
            ⏳ Sem o estímulo correto, isso pode gerar mais frustração, atraso no desenvolvimento e sobrecarga para toda a família.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;

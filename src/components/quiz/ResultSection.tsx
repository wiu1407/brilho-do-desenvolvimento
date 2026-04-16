const ResultSection = () => {
  return (
    <section className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-2xl text-center space-y-8 animate-fade-in-up">
        {/* Diagnóstico */}
        <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 md:p-8 shadow-lg">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
            Com base nas suas respostas, seu filho apresenta sinais de dificuldade em <span className="text-primary">comunicação, atenção e organização de rotina</span>
          </h2>
          {/* Emoção */}
          <p className="text-lg text-muted-foreground font-medium mb-4">
            Isso não é culpa sua — a maioria dos pais não recebe orientação prática.
          </p>
          {/* Consequência */}
          <p className="text-destructive font-bold text-lg bg-destructive/10 inline-block px-4 py-2 rounded-xl">
            Sem estímulo correto, isso tende a piorar com o tempo.
          </p>
        </div>

        {/* Entrada da Solução */}
        <div className="pt-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Mas existe uma forma simples de começar a mudar isso ainda hoje, <span className="text-primary">dentro da sua casa</span>
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;

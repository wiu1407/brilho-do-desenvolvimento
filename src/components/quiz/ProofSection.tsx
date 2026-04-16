const ProofSection = () => {
  return (
    <section className="bg-surface-green px-4 py-16">
      <div className="container mx-auto max-w-3xl text-center space-y-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
          Veja como funciona na prática
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-3xl p-4 shadow-lg border border-border">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80" 
              alt="Criança brincando focada" 
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <p className="font-bold text-foreground">Interação com o material</p>
            <p className="text-sm text-muted-foreground">O visual lúdico prende a atenção</p>
          </div>
          <div className="bg-card rounded-3xl p-4 shadow-lg border border-border">
            <img 
              src="https://images.unsplash.com/photo-1501686637-b7dd9c4cb19d?w=600&q=80" 
              alt="Resultado antes e depois" 
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <p className="font-bold text-foreground">Antes / Depois</p>
            <p className="text-sm text-muted-foreground">De frustração para autonomia e sorrisos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

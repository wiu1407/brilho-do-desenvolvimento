import { CheckCircle, Music, Video, Brain, PlayCircle, HardDriveDownload } from "lucide-react";

const deliverables = [
  { text: "Aulinhas guiadas com o Professor Pipo", icon: <Video className="w-5 h-5 text-primary" /> },
  { text: "Desenhos animados com personagens do alfabeto", icon: <PlayCircle className="w-5 h-5 text-primary" /> },
  { text: "Alfabetização musical estruturada", icon: <Music className="w-5 h-5 text-primary" /> },
  { text: "Materiais complementares de apoio (PDF)", icon: <HardDriveDownload className="w-5 h-5 text-primary" /> },
  { text: "Tarefas para exercitar memorização", icon: <Brain className="w-5 h-5 text-primary" /> },
];

const ProductPresentation = () => {
  return (
    <section className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            O que é o <span className="text-primary">Método NeuroOctoMusical™?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um método que ativa simultaneamente até <strong className="text-foreground">8 estímulos do cérebro infantil</strong> usando som, ritmo e imagem em conjunto para facilitar a leitura e escrita.
          </p>
        </div>

        <div className="bg-surface-blue p-6 rounded-[2rem] border border-border shadow-soft mb-8 text-center">
          <h3 className="text-xl font-bold mb-4">Tudo o que você recebe por dentro:</h3>
          <div className="space-y-3 flex flex-col items-center">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-full sm:w-11/12 bg-white/60 p-4 rounded-xl">
                {item.icon}
                <p className="font-bold text-foreground text-left flex-1">{item.text}</p>
                <CheckCircle className="w-5 h-5 text-green-500 opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;

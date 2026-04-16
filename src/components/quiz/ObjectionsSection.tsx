import { ShieldCheck, Clock, Smile } from "lucide-react";

const ObjectionsSection = () => {
  return (
    <section className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
          Feito para pais reais como você
        </h2>
        
        <div className="space-y-6">
          <div className="bg-surface-blue p-6 rounded-3xl flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg">"Não tenho experiência na área"</h4>
              <p className="text-muted-foreground">Tudo é 100% guiado. O material foi feito para mães e pais, não profissionais. Você pega e aplica na hora.</p>
            </div>
          </div>
          
          <div className="bg-surface-green p-6 rounded-3xl flex items-start gap-4">
            <Clock className="w-8 h-8 text-accent-foreground flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg">"Não tenho muito tempo livre"</h4>
              <p className="text-muted-foreground">Requer apenas de 10 a 15 minutos por dia de aplicação prática para já notar diferença no comportamento e rotina.</p>
            </div>
          </div>
          
          <div className="bg-surface-cyan/30 p-6 rounded-3xl flex items-start gap-4">
            <Smile className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg">"Meu filho pode não aceitar"</h4>
              <p className="text-muted-foreground">O design é extremamente lúdico e construído em parceria visual. Para eles, será mais como uma brincadeira.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;

import { Shield, CreditCard, TicketPercent, Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-surface-blue px-4 py-20 border-t border-primary/10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-2xl text-center space-y-6 relative z-10">
        <div className="inline-flex items-center justify-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full font-bold text-sm mb-4 border border-yellow-200">
          <TicketPercent className="w-4 h-4" />
          <span>CUPOM ÚNICO DE 70% APLICADO</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
          OFERTA DO DIA
        </h2>
        
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-primary/20 max-w-md mx-auto">
          <p className="text-muted-foreground font-medium line-through decoration-red-500/50 decoration-2 mb-2">De R$ 130,00</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg font-bold text-muted-foreground">por apenas</span>
          </div>
          <div className="text-6xl font-black text-primary mb-2">
            <span className="text-3xl relative top--4">R$</span>39<span className="text-3xl">,00</span>
          </div>
          <p className="text-green-600 font-bold mb-8">ou em até 6x de R$ 7,32</p>

          <div className="space-y-3 text-sm text-left font-medium text-muted-foreground mb-8">
            <div className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 flex-shrink-0"/> Acesso Vitalício (para sempre seu)</div>
            <div className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 flex-shrink-0"/> Acesso imediato à plataforma</div>
            <div className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 flex-shrink-0"/> Assista em celular, TV ou tablet</div>
            <div className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 flex-shrink-0"/> Suporte direto aos pais inclusos</div>
          </div>

          <button className="w-full inline-flex items-center justify-center gap-2 gradient-cta text-cta-foreground font-black text-xl px-8 py-5 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
            ADQUIRIR COM DESCONTO
          </button>
          
          <div className="flex items-center justify-center gap-4 text-xs font-medium text-muted-foreground mt-4 opacity-80">
            <div className="flex items-center gap-1"><CreditCard className="w-4 h-4"/> Pix, Cartão ou Boleto</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 bg-green-50/80 border border-green-200 text-green-800 p-4 rounded-2xl max-w-md mx-auto mt-6 shadow-sm">
          <Shield className="w-8 h-8 flex-shrink-0" />
          <p className="text-sm font-bold text-left">
            GARANTIA DE SATISFAÇÃO.<br/><span className="font-normal opacity-90">Risco ZERO, você tem 7 dias para testar todo o método!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

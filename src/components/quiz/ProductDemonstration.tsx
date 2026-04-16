import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  { img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80", title: "Comunicação imediata", subtitle: "Cartões de comunicação" },
  { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", title: "Rotina estruturada", subtitle: "Rotina visual" },
  { img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80", title: "Menos crises", subtitle: "Atividades cognitivas" },
  { img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", title: "Mais foco", subtitle: "Exercícios de foco" },
  { img: "https://images.unsplash.com/photo-1508847157337-79147eb886cc?w=600&q=80", title: "Aprendizado prático", subtitle: "Materiais impressos" },
];

const ProductDemonstration = () => {
  return (
    <section className="bg-surface-blue px-4 py-16">
      <div className="container mx-auto max-w-2xl text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
          Veja o que você vai receber para aplicar em casa:
        </h2>
        
        <div className="px-6 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
                      <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                      <div className="p-4 bg-white">
                        <p className="font-extrabold text-lg text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductDemonstration;

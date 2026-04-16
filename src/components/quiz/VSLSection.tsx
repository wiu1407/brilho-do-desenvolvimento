import { useState, useRef, useEffect } from "react";
import { VolumeX, Volume2 } from "lucide-react";

const VSLSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video autoplay failed", e));
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <div className="relative aspect-video bg-black rounded-3xl shadow-2xl overflow-hidden border-4 border-border">
          {/* Simulated Video Element */}
          <video 
            ref={videoRef}
            className="w-full h-full object-cover opacity-80"
            src="https://www.w3schools.com/html/mov_bbb.mp4" 
            autoPlay 
            loop 
            muted={isMuted} 
            playsInline
          />
          
          {isMuted && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
              <p className="text-white font-bold text-lg md:text-2xl mb-4 text-center px-4 drop-shadow-md">
                Seu vídeo já começou. <br/> Clique para ouvir com áudio.
              </p>
              <button 
                onClick={toggleMute}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                <VolumeX className="w-6 h-6" />
                ATIVAR SOM
              </button>
            </div>
          )}
          
          {!isMuted && (
            <button 
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VSLSection;

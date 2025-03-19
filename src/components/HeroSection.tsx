
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/0b42301d-fbc5-43d9-bc63-b6b30fee47d7.png"
          alt="Fortnite Battle Royale"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fortnite-black/80 via-fortnite-black/60 to-fortnite-black"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              GET UP TO <span className="text-fortnite-yellow">13,500</span><br />
              <span className="text-fortnite-blue">V-BUCKS!</span>
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Unlock premium skins, emotes and battle passes with our secure V-Bucks generator.
            </p>
            
            <button
              onClick={onStart}
              className="v-bucks-btn"
            >
              START <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 rounded-full bg-fortnite-blue/30 filter blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <img
                src="/photos/28442a6c-12eb-49f2-86b9-fecceee8f2aa.png"
                alt="V-Bucks"
                className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

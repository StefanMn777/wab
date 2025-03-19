
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface VBucksCardProps {
  amount: number;
  popular: boolean;
  image: string;
}

const VBucksCard = ({ amount, popular, image }: VBucksCardProps) => {
  return (
    <motion.div 
      className={`v-bucks-card relative overflow-hidden ${popular ? 'glowing-border scale-105 z-10' : ''}`}
      whileHover={{ scale: popular ? 1.05 : 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-fortnite-yellow text-fortnite-black text-xs font-bold py-1 px-3 rounded-bl-lg">
            MOST POPULAR
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-center mb-4">
        <img src={image} alt="V-Bucks" className="w-24 h-24 object-contain" />
      </div>
      
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white">{amount.toLocaleString()}</h3>
        <p className="text-fortnite-yellow font-semibold">V-BUCKS</p>
      </div>
      
      <ul className="space-y-2 mb-6">
        <li className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Instant delivery</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">Works on all platforms</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-sm">No password required</span>
        </li>
      </ul>
      
      <button className="w-full py-2 bg-fortnite-blue hover:bg-fortnite-blue/80 text-white font-semibold rounded transition-colors">
        SELECT
      </button>
    </motion.div>
  );
};

export default VBucksCard;

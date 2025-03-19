import { X } from "lucide-react";
import { useEffect } from "react";

interface IframeModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export const IframeModal: React.FC<IframeModalProps> = ({ url, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
      <div className="relative w-full max-w-4xl h-[90%] bg-white rounded-lg overflow-hidden shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-black/60 text-white rounded-full hover:bg-black/80"
        >
          <X className="h-6 w-6" />
        </button>

        <iframe
          src={url}
          className="w-full h-full border-none"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};


import { Smartphone, Laptop, Gamepad } from "lucide-react";

const DeviceSupport = () => {
  return (
    <div className="mt-4 pt-4 border-t border-white/10">
      <p className="text-xs text-white/70 mb-2 text-center">SUPPORTED DEVICES</p>
      <div className="flex justify-center gap-6">
        <div className="flex flex-col items-center">
          <Laptop className="h-5 w-5 text-white/70 mb-1" />
          <span className="text-xs text-white/70">PC/Mac</span>
        </div>
        <div className="flex flex-col items-center">
          <Gamepad className="h-5 w-5 text-white/70 mb-1" />
          <span className="text-xs text-white/70">Xbox</span>
        </div>
        <div className="flex flex-col items-center">
          <Smartphone className="h-5 w-5 text-white/70 mb-1" />
          <span className="text-xs text-white/70">iOS/Android</span>
        </div>
      </div>
      <p className="text-xs text-white/50 text-center mt-2">PlayStation not supported</p>
    </div>
  );
};

export default DeviceSupport;

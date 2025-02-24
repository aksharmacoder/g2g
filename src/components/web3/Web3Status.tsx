
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Wifi, WifiOff } from "lucide-react";

const Web3Status = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [networkName, setNetworkName] = useState<string>("Unknown Network");

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum === "undefined") {
        setIsConnected(false);
        return;
      }

      try {
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        setIsConnected(true);
        
        // Map chain IDs to network names
        const networks: { [key: string]: string } = {
          "0x1": "Ethereum Mainnet",
          "0x89": "Polygon",
          "0x38": "BSC",
        };
        
        setNetworkName(networks[chainId] || "Unknown Network");

        // Listen for network changes
        window.ethereum.on("chainChanged", (newChainId: string) => {
          setNetworkName(networks[newChainId] || "Unknown Network");
        });
      } catch (error) {
        console.error("Error checking Web3 connection:", error);
        setIsConnected(false);
      }
    };

    checkConnection();

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners("chainChanged");
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      {isConnected ? (
        <>
          <Wifi className="h-4 w-4 text-green-500" />
          <Badge variant="secondary">{networkName}</Badge>
        </>
      ) : (
        <>
          <WifiOff className="h-4 w-4 text-red-500" />
          <Badge variant="secondary">Not Connected</Badge>
        </>
      )}
    </div>
  );
};

export default Web3Status;

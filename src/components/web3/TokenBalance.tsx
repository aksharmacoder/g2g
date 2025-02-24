
import { useState, useEffect } from "react";
import { CircleDollarSign, Coins } from "lucide-react";

interface TokenBalanceProps {
  walletAddress: string | null;
  type: "G2G" | "E-WASTE";
}

const TokenBalance = ({ walletAddress, type }: TokenBalanceProps) => {
  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    const fetchBalance = async () => {
      if (!walletAddress) return;

      // Placeholder for actual Web3 token balance fetch
      // This would normally use ethers.js or web3.js to interact with the smart contract
      setBalance(type === "G2G" ? "1,000.00" : "500.00");
    };

    fetchBalance();
  }, [walletAddress, type]);

  return (
    <div className="flex items-center gap-2 text-sm">
      {type === "G2G" ? (
        <CircleDollarSign className="h-4 w-4 text-g2g-gold" />
      ) : (
        <Coins className="h-4 w-4 text-g2g-sage" />
      )}
      <span className="text-g2g-charcoal">
        {balance} {type}
      </span>
    </div>
  );
};

export default TokenBalance;


import HeroSection from "@/components/hero/HeroSection";
import ProjectOverview from "@/components/overview/ProjectOverview";
import TokenomicsSection from "@/components/tokenomics/TokenomicsSection";
import RoadmapSection from "@/components/roadmap/RoadmapSection";
import WalletConnect from "@/components/web3/WalletConnect";
import TokenBalance from "@/components/web3/TokenBalance";
import Web3Status from "@/components/web3/Web3Status";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { useState } from "react";

const Index = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  return (
    <>
      <CustomCursor />
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
        <div className="hidden sm:flex flex-col items-end gap-1">
          {walletAddress && (
            <>
              <TokenBalance walletAddress={walletAddress} type="G2G" />
              <TokenBalance walletAddress={walletAddress} type="E-WASTE" />
            </>
          )}
        </div>
        <WalletConnect />
        <Web3Status />
      </div>
      
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectOverview />
        <TokenomicsSection />
        <RoadmapSection />
      </main>
    </>
  );
};

export default Index;

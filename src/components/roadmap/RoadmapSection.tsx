
import { useState } from "react";
import {
  Milestone,
  Rocket,
  Box,
  Network,
  Brain,
  Globe,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RoadmapPhase {
  id: number;
  title: string;
  description: string;
  icon: any;
  date: string;
  status: "completed" | "in-progress" | "upcoming";
  details: {
    description: string;
    deliverables: string[];
  };
}

const phases: RoadmapPhase[] = [
  {
    id: 1,
    title: "Foundation and Token Launch",
    description: "Establishing the core infrastructure and token ecosystem",
    icon: Rocket,
    date: "Q1 2024",
    status: "completed",
    details: {
      description:
        "Launch of the G2G platform and token ecosystem, establishing the foundation for future growth.",
      deliverables: [
        "Smart contract development and audit",
        "Token generation event",
        "Initial exchange listings",
        "Community building initiatives",
      ],
    },
  },
  {
    id: 2,
    title: "DRU Development and Asset NFTs",
    description: "Creating the decentralized recycling infrastructure",
    icon: Box,
    date: "Q2 2024",
    status: "in-progress",
    details: {
      description:
        "Development and deployment of Decentralized Recycling Units and the Asset NFT system.",
      deliverables: [
        "DRU prototype development",
        "Asset NFT smart contracts",
        "Initial DRU deployment",
        "NFT marketplace launch",
      ],
    },
  },
  {
    id: 3,
    title: "Ecosystem Expansion and Governance",
    description: "Implementing community governance and expanding operations",
    icon: Network,
    date: "Q3 2024",
    status: "upcoming",
    details: {
      description:
        "Expanding the G2G ecosystem and implementing decentralized governance mechanisms.",
      deliverables: [
        "DAO structure implementation",
        "Governance portal launch",
        "Partnership expansion",
        "Regional hub establishment",
      ],
    },
  },
  {
    id: 4,
    title: "Data Analytics and AI Integration",
    description: "Enhancing operations with AI and data analytics",
    icon: Brain,
    date: "Q4 2024",
    status: "upcoming",
    details: {
      description:
        "Integration of advanced analytics and AI systems to optimize recycling operations.",
      deliverables: [
        "AI-powered sorting system",
        "Predictive maintenance",
        "Data analytics dashboard",
        "Machine learning models",
      ],
    },
  },
  {
    id: 5,
    title: "Global Scalability and Circular Economy",
    description: "Achieving global reach and circular economy implementation",
    icon: Globe,
    date: "Q1 2025",
    status: "upcoming",
    details: {
      description:
        "Scaling the G2G ecosystem globally and establishing a true circular economy.",
      deliverables: [
        "Global expansion strategy",
        "Cross-border partnerships",
        "Circular economy framework",
        "Impact measurement system",
      ],
    },
  },
];

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<RoadmapPhase | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePhaseClick = (phase: RoadmapPhase) => {
    setSelectedPhase(phase);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      setCurrentIndex(Math.min(phases.length - 3, currentIndex + 1));
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-g2g-sage/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-g2g-gold mb-3">Roadmap</h2>
          <h3 className="text-3xl md:text-4xl font-medium text-g2g-charcoal mb-4">
            Building a Sustainable Future, Step by Step
          </h3>
          <p className="text-g2g-charcoal/80">
            Our journey towards revolutionizing e-waste management and creating a
            circular economy.
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-g2g-gold via-g2g-sage to-g2g-charcoal transform -translate-y-1/2" />
          
          <div className="relative grid grid-cols-5 gap-8">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className={`relative pt-12 ${
                  activePhase === phase.id ? "scale-105" : ""
                } transition-transform duration-300`}
                onMouseEnter={() => setActivePhase(phase.id)}
                onMouseLeave={() => setActivePhase(null)}
                onClick={() => handlePhaseClick(phase)}
              >
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 
                    ${
                      phase.status === "completed"
                        ? "bg-g2g-gold border-g2g-gold"
                        : phase.status === "in-progress"
                        ? "bg-g2g-sage border-g2g-sage"
                        : "bg-white border-g2g-charcoal"
                    }`}
                />
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/70 transition-colors cursor-pointer">
                  <phase.icon className="w-8 h-8 mb-4 text-g2g-gold" />
                  <h4 className="font-medium text-g2g-charcoal mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-g2g-charcoal/70 mb-3">
                    {phase.description}
                  </p>
                  <span className="text-xs font-medium text-g2g-gold">
                    {phase.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Roadmap */}
        <div className="lg:hidden relative">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleScroll("left")}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleScroll("right")}
              disabled={currentIndex >= phases.length - 3}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 33.33}%)`,
              }}
            >
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className="min-w-[300px] flex-shrink-0"
                  onClick={() => handlePhaseClick(phase)}
                >
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <phase.icon className="w-8 h-8 mb-4 text-g2g-gold" />
                    <h4 className="font-medium text-g2g-charcoal mb-2">
                      {phase.title}
                    </h4>
                    <p className="text-sm text-g2g-charcoal/70 mb-3">
                      {phase.description}
                    </p>
                    <span className="text-xs font-medium text-g2g-gold">
                      {phase.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase Details Dialog */}
        <Dialog open={!!selectedPhase} onOpenChange={() => setSelectedPhase(null)}>
          <DialogContent className="sm:max-w-[600px]">
            {selectedPhase && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <selectedPhase.icon className="w-6 h-6 text-g2g-gold" />
                    <span>{selectedPhase.title}</span>
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-medium text-g2g-charcoal mb-2">Overview</h4>
                    <p className="text-g2g-charcoal/80">
                      {selectedPhase.details.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-g2g-charcoal mb-2">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {selectedPhase.details.deliverables.map((deliverable, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-g2g-charcoal/80"
                        >
                          <Milestone className="w-4 h-4 text-g2g-gold mt-1" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm font-medium text-g2g-gold">
                      {selectedPhase.date}
                    </span>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        selectedPhase.status === "completed"
                          ? "bg-g2g-gold/10 text-g2g-gold"
                          : selectedPhase.status === "in-progress"
                          ? "bg-g2g-sage/10 text-g2g-sage"
                          : "bg-g2g-charcoal/10 text-g2g-charcoal"
                      }`}
                    >
                      {selectedPhase.status.charAt(0).toUpperCase() +
                        selectedPhase.status.slice(1)}
                    </span>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default RoadmapSection;

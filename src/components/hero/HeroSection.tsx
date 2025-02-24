
import { ArrowRight, Globe, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      <div className="container relative z-10">
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          {/* Chip */}
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full bg-g2g-sage/10 px-4 py-1 text-sm font-medium text-g2g-sage ring-1 ring-inset ring-g2g-sage/20">
              <Globe className="mr-1.5 h-4 w-4" />
              Revolutionizing E-Waste Management
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-g2g-charcoal">
            Transforming E-Waste into{" "}
            <span className="relative">
              <span className="relative z-10">Digital Gold</span>
              <span className="absolute inset-x-0 bottom-0 h-3 bg-g2g-gold/20 z-0" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-g2g-charcoal/80 max-w-2xl mx-auto">
            Join the G2G ecosystem and participate in a decentralized network that
            converts electronic waste into valuable resources.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-g2g-gold hover:bg-g2g-gold/90 text-white font-medium"
            >
              Explore the Ecosystem
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-g2g-gold text-g2g-gold hover:bg-g2g-gold/10"
            >
              Buy E-WASTE Tokens
              <Recycle className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { label: "E-Waste Processed", value: "1,234 tons" },
              { label: "Active DRUs", value: "25+" },
              { label: "Community Members", value: "10k+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl font-medium text-g2g-charcoal mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-g2g-charcoal/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-20 h-20 rounded-lg bg-g2g-gold/10 backdrop-blur-sm" />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float [animation-delay:2s]">
        <div className="w-16 h-16 rounded-full bg-g2g-sage/10 backdrop-blur-sm" />
      </div>
    </section>
  );
};

export default HeroSection;


import { ChevronRight, Globe, Recycle, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectOverview = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Addressing the worldwide e-waste crisis through decentralized solutions",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description:
        "Creating a sustainable ecosystem for electronic waste management",
    },
    {
      icon: Cpu,
      title: "Smart Technology",
      description: "Leveraging blockchain and AI for efficient recycling processes",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-g2g-sage/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-base font-semibold text-g2g-gold mb-3">
                Overview
              </h2>
              <h3 className="text-3xl md:text-4xl font-medium text-g2g-charcoal mb-4">
                The E-Waste Challenge and G2G's Solution
              </h3>
              <p className="text-g2g-charcoal/80 leading-relaxed">
                We're revolutionizing e-waste management through blockchain
                technology and sustainable practices, creating a circular economy
                that benefits both the environment and stakeholders.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-g2g-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-g2g-charcoal mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-g2g-charcoal/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              variant="ghost"
              className="text-g2g-charcoal hover:text-g2g-gold hover:bg-g2g-gold/10"
            >
              Learn more about G2G
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-g2g-gold/20 to-g2g-sage/20 p-8">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
              <div className="relative h-full rounded-xl bg-white/50 backdrop-blur-sm p-6 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-medium text-g2g-charcoal">
                    Environmental Impact
                  </h4>
                  <div className="text-5xl font-bold text-g2g-gold">57M+</div>
                  <p className="text-g2g-charcoal/70">
                    Tons of e-waste generated globally each year
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-g2g-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-g2g-sage/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

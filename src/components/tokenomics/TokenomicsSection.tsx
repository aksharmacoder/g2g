
import { Coins, CircleDollarSign, Wallet } from "lucide-react";

const TokenomicsSection = () => {
  const tokenDistribution = [
    { name: "Public Exchange", percentage: 25, color: "bg-g2g-gold" },
    { name: "Early Contributors", percentage: 25, color: "bg-g2g-sage" },
    { name: "E-WASTE Staking", percentage: 25, color: "bg-blue-400" },
    { name: "Liquidity Reserve", percentage: 25, color: "bg-purple-400" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-g2g-sage/5 to-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-g2g-gold mb-3">
            Tokenomics
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-g2g-charcoal mb-4">
            G2G and E-WASTE Tokens
          </h3>
          <p className="text-g2g-charcoal/80">
            Our dual-token system powers the G2G ecosystem, providing both
            governance rights and utility value for participants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* G2G Token */}
          <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-g2g-gold/10 to-transparent rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <CircleDollarSign className="h-8 w-8 text-g2g-gold" />
                <h4 className="text-2xl font-medium text-g2g-charcoal">
                  G2G Token
                </h4>
              </div>

              <div className="space-y-6">
                <p className="text-g2g-charcoal/80">
                  The governance token that gives holders voting rights and access
                  to platform rewards.
                </p>

                {/* Distribution Chart */}
                <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden flex">
                  {tokenDistribution.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.color} h-full`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  ))}
                </div>

                {/* Distribution Legend */}
                <div className="grid grid-cols-2 gap-4">
                  {tokenDistribution.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${item.color}`}
                      />
                      <span className="text-sm text-g2g-charcoal/70">
                        {item.name} ({item.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* E-WASTE Token */}
          <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-g2g-sage/10 to-transparent rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Coins className="h-8 w-8 text-g2g-sage" />
                <h4 className="text-2xl font-medium text-g2g-charcoal">
                  E-WASTE Token
                </h4>
              </div>

              <div className="space-y-6">
                <p className="text-g2g-charcoal/80">
                  The utility token used for transactions within the G2G ecosystem
                  and staking rewards.
                </p>

                {/* Key Features */}
                <div className="grid gap-4">
                  {[
                    {
                      icon: Wallet,
                      title: "Staking Rewards",
                      description:
                        "Stake E-WASTE tokens to earn G2G governance tokens",
                    },
                    {
                      icon: CircleDollarSign,
                      title: "Transaction Currency",
                      description:
                        "Used for all ecosystem transactions and DRU operations",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/30"
                    >
                      <feature.icon className="h-5 w-5 text-g2g-sage mt-1" />
                      <div>
                        <h5 className="font-medium text-g2g-charcoal mb-1">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-g2g-charcoal/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { label: "Total G2G Supply", value: "100M" },
            { label: "Circulating Supply", value: "45M" },
            { label: "Current Price", value: "$0.85" },
            { label: "Market Cap", value: "$85M" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/30 backdrop-blur-sm text-center"
            >
              <div className="text-2xl font-medium text-g2g-charcoal mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-g2g-charcoal/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;

import { motion } from "framer-motion";
import { Zap, Plug, TrendingUp, DollarSign, BarChart3, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const benefits = [
  { icon: Zap, title: "Boosts Productivity", body: "Replace hours of manual research and writing with one autonomous agent that runs in the background." },
  { icon: Plug, title: "Seamless Integrations", body: "Plug into Gmail, Outlook, LinkedIn, HubSpot and Salesforce in two clicks. No engineering required." },
  { icon: TrendingUp, title: "Higher Reply Rates", body: "Personalization grounded in memory consistently outperforms templates by 3–5×." },
  { icon: DollarSign, title: "Reduce CAC", body: "Fewer SDRs, more meetings. Outbound replaces the grunt work, not the strategy." },
  { icon: BarChart3, title: "Actionable Insights", body: "Weekly AI reflections show you exactly which angles, times and personas are winning." },
  { icon: ShieldCheck, title: "Enterprise Security", body: "SOC 2 ready. SSO, audit logs, and granular role permissions out of the box." },
];

export const BenefitsGrid = () => (
  <section className="relative z-10 py-24 lg:py-28">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="Why Outbound"
        title={<>Unlock the benefits of <span className="gradient-text-primary">smarter outreach</span></>}
        subtitle="Everything you need to make outbound feel like inbound — without hiring a 10-person SDR team."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mt-14">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative card-premium p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_right,hsl(230_90%_50%/0.15),transparent_60%)]" />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-tight mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

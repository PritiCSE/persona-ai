import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: 29,
    blurb: "For founders running outbound themselves.",
    features: [
      "1 user seat",
      "200 prospects / month",
      "Gmail + Outlook integration",
      "Basic AI personalization",
      "Reply tracking",
    ],
  },
  {
    name: "Professional",
    price: 79,
    popular: true,
    blurb: "For teams scaling outbound with AI.",
    features: [
      "5 user seats",
      "2,000 prospects / month",
      "Multi-channel: Email + LinkedIn",
      "AI Brain memory engine",
      "Persona analytics & heatmaps",
      "A/B campaign testing",
    ],
  },
  {
    name: "Enterprise",
    price: 159,
    blurb: "For revenue teams that need control.",
    features: [
      "Unlimited seats",
      "Unlimited prospects",
      "Dedicated AI training",
      "SSO + audit logs",
      "Custom integrations",
      "Priority onboarding",
    ],
  },
];

export const Pricing = () => (
  <section id="pricing" className="relative z-10 py-24 lg:py-32">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="Pricing"
        title={<>Choose the perfect plan <br className="hidden sm:block" /> for your <span className="gradient-text-primary">outbound motion</span></>}
        subtitle="Start free for 14 days. No credit card. Cancel any time."
      />
      <div className="grid lg:grid-cols-3 gap-5 mt-14">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={cn(
              "relative rounded-3xl p-7 flex flex-col",
              t.popular
                ? "bg-gradient-to-br from-primary/20 via-accent/15 to-surface border-2 border-primary/40 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.4)]"
                : "card-premium"
            )}
          >
            {t.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-wider shadow-lg">
                <Sparkles className="h-3 w-3" /> Most Popular
              </div>
            )}
            <h3 className="font-display font-semibold text-xl mb-1">{t.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t.blurb}</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display font-semibold text-5xl tracking-tight">${t.price}</span>
              <span className="text-muted-foreground text-sm">/ month</span>
            </div>
            <Link
              to="/app"
              className={cn(
                "inline-flex items-center justify-center h-11 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-0.5",
                t.popular
                  ? "gradient-primary text-primary-foreground shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.7)]"
                  : "bg-surface border border-border-strong text-foreground hover:bg-surface-elevated"
              )}
            >
              Get Started
            </Link>
            <div className="h-px bg-border/60 my-6" />
            <ul className="space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary-glow" />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

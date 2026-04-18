import { motion } from "framer-motion";
import { Brain, Network, Sparkles, LineChart, MessagesSquare, Workflow, Check, ArrowUpRight } from "lucide-react";

/* Hero block — large alternating feature, Saazy "Marketing Automation" style */
const PersonaLearningMock = () => (
  <div className="relative h-full w-full p-6 flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(265_85%_50%/0.25),transparent_60%)]" />
    <div className="relative w-full max-w-md space-y-3">
      {[
        { name: "CTOs", angle: "ROI + technical proof", score: 86, color: "bg-primary" },
        { name: "Founders", angle: "Vision messaging", score: 71, color: "bg-accent" },
        { name: "Recruiters", angle: "Speed + volume", score: 64, color: "bg-secondary" },
        { name: "VPs Sales", angle: "Pipeline outcomes", score: 58, color: "bg-warning" },
      ].map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="rounded-2xl p-3 glass-strong flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-xl bg-surface border border-border/60 flex items-center justify-center font-display font-semibold text-sm">
            {p.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">{p.name}</span>
              <span className="text-[10px] text-primary-glow font-mono">{p.score}% reply</span>
            </div>
            <div className="text-[11px] text-muted-foreground truncate">{p.angle}</div>
            <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                className={`h-full ${p.color} rounded-full`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const MultiChannelMock = () => (
  <div className="relative h-full w-full p-6 flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(180_65%_45%/0.25),transparent_60%)]" />
    <div className="relative grid grid-cols-2 gap-3 w-full max-w-md">
      {[
        { ch: "Email", v: "1,240 sent", c: "from-primary/30 to-primary/5" },
        { ch: "LinkedIn", v: "682 sent", c: "from-accent/30 to-accent/5" },
        { ch: "X DMs", v: "210 sent", c: "from-secondary/30 to-secondary/5" },
        { ch: "Follow-ups", v: "Auto", c: "from-warning/30 to-warning/5" },
      ].map((c, i) => (
        <motion.div
          key={c.ch}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className={`rounded-2xl p-4 bg-gradient-to-br ${c.c} border border-white/10`}
        >
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.ch}</div>
          <div className="font-display font-semibold text-lg mt-1">{c.v}</div>
          <div className="mt-3 h-1 rounded-full bg-white/10">
            <div className="h-full w-2/3 gradient-primary rounded-full" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const AnalyticsMock = () => (
  <div className="relative h-full w-full p-6 flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(230_90%_50%/0.25),transparent_60%)]" />
    <div className="relative w-full max-w-md rounded-2xl glass-strong p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-[11px] text-muted-foreground">Reply rate growth</div>
          <div className="font-display font-semibold text-2xl">+38%</div>
        </div>
        <div className="text-[10px] text-success">Last 30 days</div>
      </div>
      <svg viewBox="0 0 300 100" className="w-full h-24">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="hsl(230 90% 66%)" stopOpacity="0.5" />
            <stop offset="1" stopColor="hsl(230 90% 66%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 80 L40 70 L80 75 L120 55 L160 60 L200 35 L240 40 L300 18 L300 100 L0 100 Z" fill="url(#lg)" />
        <path d="M0 80 L40 70 L80 75 L120 55 L160 60 L200 35 L240 40 L300 18" fill="none" stroke="hsl(230 90% 66%)" strokeWidth="2" />
      </svg>
      <div className="grid grid-cols-3 gap-2 mt-3 text-center">
        {[{ l: "Open", v: "62%" }, { l: "Reply", v: "28%" }, { l: "Booked", v: "9%" }].map((s) => (
          <div key={s.l} className="rounded-lg bg-white/5 py-2">
            <div className="text-[9px] text-muted-foreground">{s.l}</div>
            <div className="font-semibold text-sm">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

type Block = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  icon: typeof Brain;
  visual: React.ReactNode;
  reverse?: boolean;
};

const blocks: Block[] = [
  {
    eyebrow: "Persona Learning",
    title: "Learns which messaging angles convert each persona",
    body: "Outbound watches every reply, every ignore, every meeting booked — and continuously updates its model of what makes each persona type respond.",
    bullets: [
      "Detects winning angles per role automatically",
      "Adapts tone, length, and CTA per industry",
      "Surfaces patterns you'd never spot manually",
    ],
    icon: Brain,
    visual: <PersonaLearningMock />,
  },
  {
    eyebrow: "Multi-Channel Outreach",
    title: "One agent. Email, LinkedIn, follow-ups — orchestrated.",
    body: "Stop juggling tools. Outbound coordinates touchpoints across channels, pacing sequences based on what each prospect responds to.",
    bullets: [
      "Native Gmail, Outlook, LinkedIn integrations",
      "Smart pacing — never spammy, always human",
      "Unified inbox with reply intent classification",
    ],
    icon: MessagesSquare,
    visual: <MultiChannelMock />,
    reverse: true,
  },
  {
    eyebrow: "Live Analytics",
    title: "Reply rate that actually grows. Week over week.",
    body: "Every campaign feeds the brain. The brain rewrites your next campaign. You watch your reply curve climb from your dashboard.",
    bullets: [
      "Real-time persona heatmaps and funnels",
      "Weekly AI reflections and recommendations",
      "Forecasted pipeline impact per template",
    ],
    icon: LineChart,
    visual: <AnalyticsMock />,
  },
];

export const FeatureBlocks = () => (
  <section id="features" className="relative z-10 py-24 lg:py-32">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
      <div className="space-y-24 lg:space-y-32">
        {blocks.map((b, i) => {
          const Icon = b.icon;
          return (
            <div key={b.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${b.reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-semibold uppercase tracking-wider text-primary-glow mb-5">
                  <Icon className="h-3.5 w-3.5" />
                  {b.eyebrow}
                </div>
                <h3 className="font-display font-semibold text-3xl lg:text-4xl tracking-tight leading-[1.1] mb-4 text-balance">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
                  {b.body}
                </p>
                <ul className="space-y-2.5 mb-7">
                  {b.bullets.map((bl) => (
                    <li key={bl} className="flex items-start gap-2.5 text-sm">
                      <span className="h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-primary-glow" />
                      </span>
                      <span className="text-foreground/90">{bl}</span>
                    </li>
                  ))}
                </ul>
                <a href="#pricing" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow hover:gap-2.5 transition-all">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-3xl card-premium overflow-hidden"
              >
                {b.visual}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

import { motion } from "framer-motion";
import { Brain, Sparkles, Network, Target, ArrowRight, Zap } from "lucide-react";
import { memories, nextActions, reflections } from "@/lib/mock-data";

const AIBrain = () => (
  <div className="space-y-6">
    {/* Hero */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="card-elevated p-8 relative overflow-hidden border border-border-strong">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="relative grid lg:grid-cols-[1fr_320px] gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary-glow mb-4">
            <Brain className="h-3.5 w-3.5" /> Memory engine v2 · Online
          </div>
          <h2 className="font-display font-semibold text-3xl lg:text-4xl tracking-tight leading-tight mb-3">
            See how the agent <span className="gradient-text-primary">thinks.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Every reply, open and ignore is stored, retrieved, and reflected upon. The agent rewrites its own playbook in real time.
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { l: "Stored memories", v: "1,284" },
              { l: "Patterns retrieved", v: "342" },
              { l: "Reflections this week", v: "87" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
                <p className="font-display text-2xl font-semibold gradient-text-primary">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-64">
          <NeuralGraph />
        </div>
      </div>
    </motion.div>

    {/* Sections */}
    <div className="grid lg:grid-cols-2 gap-4">
      <Section title="Stored Memories" subtitle="Learned facts the agent uses to choose angles" icon={Sparkles} delay={0.2}>
        <div className="grid sm:grid-cols-2 gap-3">
          {memories.map((m) => (
            <div key={m.text} className="rounded-xl border border-border bg-surface/40 p-3.5 hover:border-primary/40 hover:bg-surface-elevated/40 transition">
              <span className="inline-block text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-primary/15 text-primary-glow mb-2">{m.tag}</span>
              <p className="text-sm leading-snug">{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Reflections" subtitle="Real-time meta-cognition" icon={Brain} delay={0.3}>
        <ul className="space-y-3">
          {reflections.map((r, i) => (
            <li key={i} className="flex gap-3">
              <div className="relative shrink-0">
                <span className="block h-2 w-2 rounded-full bg-primary-glow mt-1.5" />
                {i < reflections.length - 1 && <span className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-full bg-border" />}
              </div>
              <div className="pb-3">
                <p className="text-sm leading-snug">{r.text}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{r.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>

    <Section title="Retrieved Similar Prospects" subtitle="Nodes the agent linked when generating today's outreach" icon={Network} delay={0.4}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { name: "Devon Pierce", role: "CTO · Quantica", sim: 0.94 },
          { name: "Jonas Weber", role: "Founder · Nimbus", sim: 0.81 },
          { name: "Lina Park", role: "CMO · Brightwave", sim: 0.77 },
          { name: "Maya Chen", role: "VP Sales · Northwind", sim: 0.72 },
        ].map((p) => (
          <div key={p.name} className="rounded-xl border border-border bg-surface/40 p-3 text-center">
            <div className="h-10 w-10 mx-auto rounded-xl gradient-primary p-[1.5px] mb-2">
              <div className="h-full w-full rounded-[10px] bg-card flex items-center justify-center text-[11px] font-semibold">
                {p.name.split(" ").map(n => n[0]).join("")}
              </div>
            </div>
            <p className="text-sm font-medium">{p.name}</p>
            <p className="text-[11px] text-muted-foreground mb-2">{p.role}</p>
            <div className="text-[10px] font-mono text-primary-glow">similarity {p.sim.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Next Best Actions" subtitle="Ranked by projected impact" icon={Target} delay={0.5}>
      <div className="space-y-2.5">
        {nextActions.map((a) => (
          <button key={a.title}
            className="w-full flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/40 hover:border-primary/40 hover:bg-surface-elevated/40 transition group text-left">
            <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium">{a.title}</p>
              <p className="text-xs text-muted-foreground">{a.reason}</p>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-success/15 text-success">{a.impact}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-glow group-hover:translate-x-0.5 transition" />
          </button>
        ))}
      </div>
    </Section>
  </div>
);

const Section = ({ title, subtitle, icon: Icon, children, delay = 0 }: any) => (
  <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
    className="card-premium p-6">
    <div className="flex items-center gap-3 mb-5">
      <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Icon className="h-4 w-4 text-primary-glow" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-base">{title}</h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
    {children}
  </motion.section>
);

const NeuralGraph = () => (
  <svg viewBox="0 0 320 260" className="w-full h-full">
    <defs>
      <radialGradient id="ng-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(265 85% 68%)" stopOpacity="0.4" />
        <stop offset="100%" stopColor="hsl(230 90% 66%)" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="ng-line" x1="0" x2="1">
        <stop offset="0%" stopColor="hsl(230 90% 66%)" stopOpacity="0.7" />
        <stop offset="100%" stopColor="hsl(265 85% 68%)" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    <circle cx="160" cy="130" r="120" fill="url(#ng-bg)" />
    {[
      [60, 60], [260, 60], [40, 160], [280, 160], [100, 230], [220, 230], [160, 30],
    ].map(([x, y], i) => (
      <line key={i} x1={x} y1={y} x2="160" y2="130" stroke="url(#ng-line)" strokeWidth="1.2" />
    ))}
    {[[60,60],[260,60],[40,160],[280,160],[100,230],[220,230],[160,30]].map(([x,y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="8" fill="hsl(230 90% 66%)" opacity="0.25" />
        <circle cx={x} cy={y} r="4.5" fill="hsl(230 90% 80%)" />
      </g>
    ))}
    <circle cx="160" cy="130" r="32" fill="hsl(265 85% 68%)" opacity="0.2" />
    <circle cx="160" cy="130" r="22" fill="url(#ng-line)" />
    <circle cx="160" cy="130" r="10" fill="hsl(210 40% 98%)" />
  </svg>
);

export default AIBrain;

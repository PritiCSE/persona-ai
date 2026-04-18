import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, Target, Zap, Network, MessagesSquare,
  PlayCircle, Check, TrendingUp, ShieldCheck,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/CountUp";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-gradient-glow opacity-70" />

      {/* Nav */}
      <header className="relative z-10 px-6 lg:px-10 h-20 flex items-center justify-between max-w-[1400px] mx-auto">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#brain" className="hover:text-foreground transition">AI Brain</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link to="/app">Sign in</Link>
          </Button>
          <Button asChild className="gradient-primary text-primary-foreground hover:opacity-90 shadow-[0_0_24px_-4px_hsl(var(--primary)/0.6)]">
            <Link to="/app">Start free trial <ArrowRight className="h-4 w-4 ml-1.5" /></Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto pt-12 lg:pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            <span className="text-muted-foreground">Now in private beta —</span>
            <span className="text-foreground font-medium">Memory engine v2 shipped</span>
          </div>
          <h1 className="font-display font-semibold text-5xl lg:text-7xl tracking-tight leading-[1.05] text-balance">
            Your AI sales agent that{" "}
            <span className="gradient-text-primary">learns what gets replies.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">
            Outbound personalizes every message, remembers what worked for each persona,
            and rewrites itself after every campaign. The result: reply rates that compound.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button size="lg" asChild className="h-12 px-6 gradient-primary text-primary-foreground hover:opacity-90 shadow-[0_0_32px_-4px_hsl(var(--primary)/0.7)]">
              <Link to="/app">Start free trial <ArrowRight className="h-4 w-4 ml-1.5" /></Link>
            </Button>
            <Button size="lg" variant="ghost" className="h-12 px-5 glass">
              <PlayCircle className="h-4 w-4 mr-2" /> Watch 90s demo
            </Button>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground pt-3">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> 50 free prospects</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> SOC 2 compliant</span>
          </div>
        </motion.div>

        {/* Hero dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-16 lg:mt-20"
        >
          <div className="absolute -inset-x-12 -top-12 -bottom-12 bg-gradient-glow opacity-60 blur-3xl pointer-events-none" />
          <div className="relative card-elevated overflow-hidden border border-border-strong">
            <div className="px-4 h-10 border-b border-border flex items-center gap-2 bg-surface/60">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-3 text-[11px] font-mono text-muted-foreground">app.outbound.ai/dashboard</span>
              <div className="ml-auto flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                Learning Active
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 p-5 bg-surface">
              {/* Mini KPIs */}
              {[
                { l: "Prospects", v: 1240, c: "primary" },
                { l: "Reply Rate", v: 28, suffix: "%", c: "accent" },
                { l: "Meetings", v: 97, c: "secondary" },
                { l: "Revenue", v: 42, prefix: "$", suffix: "k", c: "primary" },
              ].map((k) => (
                <div key={k.l} className="col-span-3 card-premium p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{k.l}</p>
                  <p className="font-display text-2xl font-semibold">
                    <CountUp value={k.v} prefix={k.prefix} suffix={k.suffix} />
                  </p>
                  <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
                    <div className="h-full gradient-primary animate-shimmer bg-[length:200%_100%]" style={{ width: "70%" }} />
                  </div>
                </div>
              ))}

              {/* AI insight */}
              <div className="col-span-8 card-premium p-5 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
                <div className="flex items-start gap-4 relative">
                  <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center glow-primary shrink-0">
                    <Brain className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-primary-glow mb-1">AI Insight · just now</p>
                    <p className="font-display text-lg font-semibold leading-snug">
                      CTOs respond <span className="text-primary-glow">43% better</span> to ROI messaging on Tuesday mornings.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1.5">Detected across 412 sends · confidence 0.92</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-1.5 h-12">
                  {[8,12,16,14,22,28,34].map((h, i) => (
                    <div key={i} className="rounded-sm gradient-primary opacity-80" style={{ height: `${h*2.5}%`, alignSelf: "end" }} />
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="col-span-4 card-premium p-4">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Live activity</p>
                <ul className="space-y-2.5 text-xs">
                  {[
                    { who: "Rahul", what: "replied", color: "success" },
                    { who: "AI", what: "updated template", color: "primary" },
                    { who: "Maya", what: "booked meeting", color: "accent" },
                  ].map((a, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full bg-${a.color}`} />
                      <span className="font-medium">{a.who}</span>
                      <span className="text-muted-foreground">{a.what}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo strip */}
        <div className="mt-20 text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Trusted by sales teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-60">
            {["Northwind", "ScaleFlow", "Loopline", "Quantica", "Brightwave", "Nimbus"].map((n) => (
              <span key={n} className="font-display text-lg font-semibold text-muted-foreground">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-primary-glow mb-3">Built for autonomous outbound</p>
          <h2 className="font-display font-semibold text-4xl lg:text-5xl tracking-tight">
            Six engines.{" "}
            <span className="gradient-text-primary">One agent.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Brain, title: "Persona Behavior Engine", desc: "Learns which angles convert each persona — CTOs, founders, recruiters, VPs.", c: "primary" },
            { icon: Sparkles, title: "Personalized Generation", desc: "Every email, DM and follow-up tailored from real signal, not templates.", c: "accent" },
            { icon: Target, title: "Outcome Tracking", desc: "Opens, replies, meetings — attributed to angle, channel and timing.", c: "secondary" },
            { icon: TrendingUp, title: "Self-Improvement Loop", desc: "Templates rewrite themselves after each batch. Reply rates compound.", c: "primary" },
            { icon: Network, title: "Memory Engine", desc: "Remembers what was sent to whom and what worked. Forever.", c: "accent" },
            { icon: MessagesSquare, title: "Multi-Channel", desc: "Email, LinkedIn, follow-ups — orchestrated from one brain.", c: "secondary" },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="card-premium p-6 relative overflow-hidden group"
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-${f.c} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500`} />
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 bg-${f.c}/10 border border-${f.c}/20`}>
                  <Icon className={`h-5 w-5 text-${f.c}`} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-primary-glow mb-3">How it works</p>
          <h2 className="font-display font-semibold text-4xl lg:text-5xl tracking-tight">
            Set it up once. <span className="gradient-text-primary">It improves forever.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
          {[
            { step: "01", title: "Add prospects", desc: "Import or paste a list. Outbound enriches each profile." },
            { step: "02", title: "AI generates outreach", desc: "Persona-aware messages, ready to ship in seconds." },
            { step: "03", title: "Tracks every reply", desc: "Opens, replies, meetings — attributed to angle and timing." },
            { step: "04", title: "Learns & optimizes", desc: "Templates rewrite themselves. Next batch performs better." },
          ].map((s) => (
            <div key={s.step} className="card-premium p-6 relative">
              <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center mb-4 font-display font-semibold relative z-10">
                {s.step}
              </div>
              <h3 className="font-display font-semibold text-lg mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Brain teaser */}
      <section id="brain" className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto py-24">
        <div className="card-elevated p-10 lg:p-14 relative overflow-hidden border border-border-strong">
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary-glow mb-5">
                <Brain className="h-3.5 w-3.5" /> AI Brain
              </div>
              <h2 className="font-display font-semibold text-4xl lg:text-5xl tracking-tight mb-4 leading-tight">
                See how the agent <span className="gradient-text-primary">thinks.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Outbound exposes its memory, retrieved patterns, and reflections.
                You stay in control while the agent gets smarter.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Stored memories from every replied conversation",
                  "Retrieved patterns from similar past prospects",
                  "Reflections that adjust messaging in real time",
                  "Next-best actions ranked by projected impact",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="gradient-primary text-primary-foreground">
                <Link to="/app/brain">Explore the AI Brain <ArrowRight className="h-4 w-4 ml-1.5" /></Link>
              </Button>
            </div>
            <div className="relative h-80">
              <BrainGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto py-24 text-center">
        <h2 className="font-display font-semibold text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
          Scale outreach with{" "}
          <span className="gradient-text-primary">intelligence.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Stop blasting templates. Start compounding replies.
        </p>
        <Button size="lg" asChild className="h-12 px-7 gradient-primary text-primary-foreground hover:opacity-90 shadow-[0_0_32px_-4px_hsl(var(--primary)/0.7)]">
          <Link to="/app">Start free trial <ArrowRight className="h-4 w-4 ml-1.5" /></Link>
        </Button>
        <div className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5" /> Enterprise-grade security · SOC 2 Type II
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/60 px-6 lg:px-10 py-8 mt-12">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <Logo />
          <p>© 2025 Outbound. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const BrainGraphic = () => (
  <svg viewBox="0 0 400 320" className="w-full h-full">
    <defs>
      <radialGradient id="bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(230 90% 66%)" stopOpacity="0.4" />
        <stop offset="100%" stopColor="hsl(230 90% 66%)" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="line" x1="0" x2="1">
        <stop offset="0%" stopColor="hsl(230 90% 66%)" stopOpacity="0.6" />
        <stop offset="100%" stopColor="hsl(265 85% 68%)" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="160" r="140" fill="url(#bg)" />
    {/* Edges */}
    {[
      [200, 160, 80, 80], [200, 160, 320, 80], [200, 160, 60, 200], [200, 160, 340, 220],
      [200, 160, 130, 280], [200, 160, 270, 280], [200, 160, 200, 40],
      [80, 80, 60, 200], [320, 80, 340, 220], [130, 280, 270, 280],
    ].map(([x1,y1,x2,y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#line)" strokeWidth="1" />
    ))}
    {/* Nodes */}
    {[
      [80,80,8],[320,80,8],[60,200,7],[340,220,7],[130,280,6],[270,280,6],[200,40,6],
    ].map(([x,y,r], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r={r as number + 4} fill="hsl(230 90% 66%)" opacity="0.2" />
        <circle cx={x} cy={y} r={r as number} fill="hsl(230 90% 66%)" />
      </g>
    ))}
    {/* Center */}
    <circle cx="200" cy="160" r="32" fill="hsl(265 85% 68%)" opacity="0.15" />
    <circle cx="200" cy="160" r="22" fill="url(#line)" />
    <circle cx="200" cy="160" r="12" fill="hsl(210 40% 98%)" />
  </svg>
);

export default Landing;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, RefreshCw, Sparkles, Mail, Linkedin, MessageCircle, Wand2, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "email", label: "Cold Email", icon: Mail },
  { id: "linkedin", label: "LinkedIn DM", icon: Linkedin },
  { id: "fu1", label: "Follow-up 1", icon: MessageCircle },
  { id: "fu2", label: "Follow-up 2", icon: MessageCircle },
];

const messages: Record<string, string> = {
  email: `Hi Rahul,

Noticed ScaleFlow is moving from Series A toward enterprise customers — that infra cost curve gets brutal fast.

We help CTOs cut wasted SDR hours and lift qualified replies 2.4× by letting an AI agent learn what messaging works for each persona.

Worth a 15-min look? I can share what we found across 1,240 SaaS sends.

— Aman`,
  linkedin: `Hey Rahul — saw the ScaleFlow infra post. We've been working with CTOs on AI-driven outbound that learns per-persona. Mind if I share a quick teardown?`,
  fu1: `Hi Rahul, bumping this up — the Tuesday data point made me think of ScaleFlow. 5 mins this week?`,
  fu2: `Last nudge from me, promise. If outbound experimentation isn't a Q1 priority, I'll close the loop. Otherwise, here's a 2-line teardown.`,
};

const TypingMessage = ({ text }: { text: string }) => {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 4;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 14);
    return () => clearInterval(id);
  }, [text]);
  return (
    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/90">
      {shown}
      <span className="inline-block w-[2px] h-4 align-middle bg-primary-glow animate-blink ml-0.5" />
    </pre>
  );
};

const OutreachGenerator = () => {
  const [active, setActive] = useState("email");
  const [tone, setTone] = useState("Direct");
  const [cta, setCta] = useState("15-min call");

  return (
    <div className="grid lg:grid-cols-[340px_1fr] gap-6">
      {/* Prospect summary */}
      <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        className="card-premium p-6 h-fit sticky top-24">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-12 w-12 rounded-xl gradient-primary p-[1.5px]">
            <div className="h-full w-full rounded-[10px] bg-card flex items-center justify-center font-semibold">RM</div>
          </div>
          <div>
            <p className="font-display font-semibold">Rahul Mehta</p>
            <p className="text-xs text-muted-foreground">CTO · ScaleFlow</p>
          </div>
        </div>
        <dl className="space-y-3 text-sm">
          {[
            ["Industry", "B2B SaaS"],
            ["Size", "51–200"],
            ["Region", "North America"],
            ["Stage", "Series A → B"],
            ["Last touched", "Never"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0">
              <dt className="text-muted-foreground text-xs uppercase tracking-wider">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 pt-5 border-t border-border">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Controls</p>
          <div className="space-y-2.5">
            <Selector label="Tone" value={tone} options={["Direct", "Warm", "Bold", "Curious"]} onChange={setTone} />
            <Selector label="CTA" value={cta} options={["15-min call", "Reply yes/no", "Demo invite", "Soft intro"]} onChange={setCta} />
          </div>
        </div>
      </motion.aside>

      <div className="space-y-4 min-w-0">
        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1 p-1 rounded-xl glass w-fit">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.id;
            return (
              <button key={t.id} onClick={() => setActive(t.id)}
                className={cn("inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition",
                  isActive ? "gradient-primary text-primary-foreground shadow-[0_0_16px_-4px_hsl(var(--primary)/0.6)]"
                           : "text-muted-foreground hover:text-foreground")}>
                <Icon className="h-3.5 w-3.5" /> {t.label}
              </button>
            );
          })}
        </motion.div>

        {/* Generated message */}
        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="card-elevated p-6 lg:p-8 relative overflow-hidden border border-border-strong">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">Generated outreach</p>
                <p className="text-[11px] text-muted-foreground">Tone: {tone} · CTA: {cta}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="h-9 px-3 rounded-lg glass text-xs font-medium inline-flex items-center gap-1.5 hover:bg-surface-elevated">
                <RefreshCw className="h-3.5 w-3.5" /> Regenerate
              </button>
              <button className="h-9 px-3 rounded-lg glass text-xs font-medium inline-flex items-center gap-1.5 hover:bg-surface-elevated">
                <Copy className="h-3.5 w-3.5" /> Copy
              </button>
            </div>
          </div>

          {active === "email" && (
            <div className="text-xs text-muted-foreground border-b border-border pb-3 mb-4 space-y-1">
              <div><span className="text-foreground/70">To:</span> rahul@scaleflow.io</div>
              <div><span className="text-foreground/70">Subject:</span> Cutting wasted SDR hours at ScaleFlow</div>
            </div>
          )}

          <TypingMessage text={messages[active]} />

          {/* Explanation */}
          <div className="mt-6 pt-5 border-t border-border flex items-start gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Brain className="h-4 w-4 text-primary-glow" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-primary-glow font-semibold mb-1">Why this message</p>
              <p className="text-sm text-foreground/80">
                Generated using patterns from <span className="text-foreground font-medium">83 similar CTO prospects</span>.
                ROI angle outperformed feature-led by <span className="text-foreground font-medium">43%</span> in this cohort.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Variants */}
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { label: "Curiosity hook", score: 0.84 },
            { label: "Social proof", score: 0.78 },
            { label: "Pain point", score: 0.72 },
          ].map((v) => (
            <button key={v.label} className="card-premium p-4 text-left hover:-translate-y-0.5 transition group">
              <div className="flex items-center justify-between mb-1.5">
                <Wand2 className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary-glow transition" />
                <span className="text-[11px] font-mono text-muted-foreground">{v.score.toFixed(2)}</span>
              </div>
              <p className="text-sm font-medium">{v.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Try alternative angle</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Selector = ({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) => (
  <div>
    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">{label}</p>
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button key={o} onClick={() => onChange(o)}
          className={cn("text-[11px] px-2.5 py-1 rounded-lg border transition",
            value === o ? "gradient-primary text-primary-foreground border-transparent" : "border-border text-muted-foreground hover:text-foreground hover:border-border-strong")}>
          {o}
        </button>
      ))}
    </div>
  </div>
);

export default OutreachGenerator;

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Settings = () => {
  const [learning, setLearning] = useState(true);
  const [autoApply, setAutoApply] = useState(false);
  return (
    <div className="space-y-4 max-w-3xl">
      <Section title="Workspace" desc="Team-wide preferences">
        <Row label="Workspace name">
          <input className="h-10 w-72 rounded-lg bg-input/60 border border-border px-3 text-sm" defaultValue="Outbound Demo" />
        </Row>
        <Row label="Brand voice" desc="Style guide the agent will follow">
          <select className="h-10 w-72 rounded-lg bg-input/60 border border-border px-3 text-sm">
            <option>Crisp & professional</option><option>Warm & casual</option><option>Bold & contrarian</option>
          </select>
        </Row>
        <Row label="Daily send limit" desc="Per connected mailbox">
          <input className="h-10 w-32 rounded-lg bg-input/60 border border-border px-3 text-sm" defaultValue="80" />
        </Row>
      </Section>

      <Section title="AI Brain" desc="Control how the agent learns">
        <Row label="Learning mode" desc="Improve templates from outcomes">
          <Toggle value={learning} onChange={setLearning} />
        </Row>
        <Row label="Auto-apply optimizations" desc="Ship rewrites without review">
          <Toggle value={autoApply} onChange={setAutoApply} />
        </Row>
      </Section>

      <Section title="API & access" desc="Programmatic and team access">
        <Row label="API key">
          <code className="text-xs font-mono px-3 py-2 rounded-lg bg-muted text-muted-foreground">sk_live_••••••••••••az28</code>
        </Row>
        <Row label="Team members" desc="3 invited">
          <button className="h-10 px-4 rounded-lg gradient-primary text-primary-foreground text-sm font-medium">Invite</button>
        </Row>
      </Section>
    </div>
  );
};

const Section = ({ title, desc, children }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className="card-premium p-6">
    <div className="mb-5">
      <h3 className="font-display font-semibold text-base">{title}</h3>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
    <div className="divide-y divide-border">{children}</div>
  </motion.div>
);

const Row = ({ label, desc, children }: any) => (
  <div className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
    <div>
      <p className="text-sm font-medium">{label}</p>
      {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
    </div>
    <div>{children}</div>
  </div>
);

const Toggle = ({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) => (
  <button onClick={() => onChange(!value)}
    className={cn("relative h-6 w-11 rounded-full transition", value ? "gradient-primary" : "bg-muted")}>
    <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-foreground shadow-md transition-all",
      value ? "left-[22px]" : "left-0.5")} />
  </button>
);

export default Settings;

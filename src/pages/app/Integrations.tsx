import { motion } from "framer-motion";
import { Mail, Linkedin, MessagesSquare, Database, Briefcase, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const integrations = [
  { name: "Gmail", icon: Mail, connected: true, desc: "Send and track replies" },
  { name: "Outlook", icon: Mail, connected: false, desc: "Microsoft 365 integration" },
  { name: "LinkedIn", icon: Linkedin, connected: true, desc: "DMs and InMail" },
  { name: "Slack", icon: MessagesSquare, connected: true, desc: "Reply alerts in channel" },
  { name: "HubSpot", icon: Database, connected: false, desc: "Sync contacts and deals" },
  { name: "Salesforce", icon: Briefcase, connected: false, desc: "Enterprise CRM sync" },
  { name: "Zapier", icon: Zap, connected: true, desc: "5,000+ app connections" },
];

const Integrations = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {integrations.map((it, i) => {
      const Icon = it.icon;
      return (
        <motion.div key={it.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
          className="card-premium p-5 group hover:-translate-y-0.5 transition">
          <div className="flex items-start justify-between mb-4">
            <div className="h-11 w-11 rounded-xl bg-surface-elevated border border-border flex items-center justify-center">
              <Icon className="h-5 w-5 text-foreground" />
            </div>
            {it.connected ? (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-md bg-success/15 text-success border border-success/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                Connected
              </span>
            ) : (
              <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                Not connected
              </span>
            )}
          </div>
          <h3 className="font-display font-semibold text-base">{it.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{it.desc}</p>
          <button className={cn("w-full h-9 rounded-lg text-xs font-medium transition",
            it.connected ? "glass hover:bg-surface-elevated" : "gradient-primary text-primary-foreground hover:opacity-90")}>
            {it.connected ? "Manage" : "Connect"}
          </button>
        </motion.div>
      );
    })}
  </div>
);

export default Integrations;

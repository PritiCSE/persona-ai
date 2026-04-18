import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const tools = [
  { name: "Gmail", letter: "G", color: "from-red-500/30 to-red-500/5" },
  { name: "Outlook", letter: "O", color: "from-blue-500/30 to-blue-500/5" },
  { name: "LinkedIn", letter: "in", color: "from-sky-500/30 to-sky-500/5" },
  { name: "HubSpot", letter: "H", color: "from-orange-500/30 to-orange-500/5" },
  { name: "Salesforce", letter: "S", color: "from-cyan-500/30 to-cyan-500/5" },
  { name: "Slack", letter: "#", color: "from-purple-500/30 to-purple-500/5" },
  { name: "Zapier", letter: "Z", color: "from-amber-500/30 to-amber-500/5" },
  { name: "Notion", letter: "N", color: "from-zinc-400/30 to-zinc-400/5" },
];

export const Integrations = () => (
  <section className="relative z-10 py-24 lg:py-28">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionHeader
          align="left"
          eyebrow="Integrations"
          title={<>Plays nicely with the tools <span className="gradient-text-primary">you already use</span></>}
          subtitle="Connect your stack in two clicks. Outbound syncs replies, deals, and meetings back where your team already lives."
        />
        <a
          href="#"
          className="inline-flex items-center justify-center h-11 px-6 mt-8 rounded-full font-medium text-sm bg-surface border border-border-strong hover:bg-surface-elevated transition"
        >
          View all integrations →
        </a>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`aspect-square rounded-2xl bg-gradient-to-br ${t.color} border border-white/10 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300`}
          >
            <span className="font-display font-semibold text-2xl text-foreground/90">{t.letter}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

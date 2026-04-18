import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const tools = [
  { 
    name: "Gmail", 
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>,
    color: "from-red-500/20 to-red-500/5" 
  },
  { 
    name: "Outlook", 
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500"><path d="M22 6.55l-7.46 2.38v.01L14.54 18l7.46 2.38V6.55zM2 6.55l7.46 2.38v9.07L2 20.38V6.55zM9.46 8.93l5.08-1.62v9.38l-5.08-1.62V8.93z"/></svg>,
    color: "from-blue-500/20 to-blue-500/5" 
  },
  { 
    name: "LinkedIn", 
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sky-500"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    color: "from-sky-500/20 to-sky-500/5" 
  },
  { 
    name: "HubSpot", 
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-orange-500"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.33 13.9a2.5 2.5 0 0 1-3.5-.9l-3.2 1.8a2.5 2.5 0 0 1-.2 3.7 2.5 2.5 0 1 1-2.6-4.1l2.4-3.8a2.5 2.5 0 1 1 4.5 2.6l3.8 2.4a2.5 2.5 0 0 1 1.6 2.1 2.5 2.5 0 0 1-2.8 2.8z"/></svg>,
    color: "from-orange-500/20 to-orange-500/5" 
  },
  { 
    name: "Salesforce", 
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-500"><path d="M17.5 19.375h-11a5.375 5.375 0 0 1-.6-10.709 6.875 6.875 0 0 1 13.344-1.107 4.125 4.125 0 0 1-1.744 11.816z"/></svg>,
    color: "from-cyan-500/20 to-cyan-500/5" 
  },
  { 
    name: "Slack", 
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-500"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.522v-2.522h2.523zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>,
    color: "from-purple-500/20 to-purple-500/5" 
  }
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
      <div className="grid grid-cols-3 gap-y-8 gap-x-6 place-items-center lg:justify-items-center xl:ml-12">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br ${t.color} border border-white/10 flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-sm`}
            title={t.name}
          >
            {t.icon}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

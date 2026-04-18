import { motion } from "framer-motion";
import { FileText, TrendingUp, Plus } from "lucide-react";

const templates = [
  { name: "ROI Angle", desc: "Hard numbers, infra cost, revenue impact.", rate: 32, uses: 412, tag: "CTO" },
  { name: "Curiosity Hook", desc: "Question-led, leaves something open.", rate: 28, uses: 287, tag: "Generic" },
  { name: "Social Proof", desc: "Mentions peer companies & outcomes.", rate: 24, uses: 198, tag: "VP" },
  { name: "Vision Pitch", desc: "Where the market is going. Big-picture.", rate: 26, uses: 244, tag: "Founder" },
  { name: "Technical Angle", desc: "Implementation depth, infra fit.", rate: 22, uses: 176, tag: "CTO" },
  { name: "Pain Point Direct", desc: "Names the pain in the first line.", rate: 21, uses: 154, tag: "Recruiter" },
];

const Templates = () => (
  <div className="space-y-4">
    <div className="flex justify-end">
      <button className="h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-medium inline-flex items-center gap-1.5 hover:opacity-90 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.6)]">
        <Plus className="h-4 w-4" /> New Template
      </button>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((t, i) => (
        <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
          className="card-premium p-5 group hover:-translate-y-0.5 transition">
          <div className="flex items-center justify-between mb-3">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary-glow" />
            </div>
            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground">{t.tag}</span>
          </div>
          <h3 className="font-display font-semibold text-base mb-1">{t.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
          <div className="flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1 text-success">
              <TrendingUp className="h-3 w-3" /> {t.rate}% reply
            </span>
            <span className="text-muted-foreground">{t.uses} uses</span>
          </div>
          <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
            <div className="h-full gradient-primary" style={{ width: `${t.rate * 2.5}%` }} />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Templates;

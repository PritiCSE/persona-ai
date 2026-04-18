import { motion } from "framer-motion";
import { Brain, TrendingUp } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import { insightPatterns, replyRateSeries, personaHeatmap, reflections } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const Insights = () => (
  <div className="space-y-6">
    {/* Pattern cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {insightPatterns.map((p, i) => (
        <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
          className="card-premium p-5 relative overflow-hidden group hover:-translate-y-0.5 transition">
          <div className={cn("absolute top-0 left-0 right-0 h-px",
            p.weight === "high" && "bg-gradient-to-r from-transparent via-primary to-transparent",
            p.weight === "med" && "bg-gradient-to-r from-transparent via-accent to-transparent",
            p.weight === "low" && "bg-gradient-to-r from-transparent via-secondary to-transparent")} />
          <div className="flex items-center gap-2 mb-2">
            <span className={cn("text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded",
              p.weight === "high" && "bg-primary/15 text-primary-glow",
              p.weight === "med" && "bg-accent/15 text-accent-glow",
              p.weight === "low" && "bg-secondary/15 text-secondary")}>
              {p.weight} signal
            </span>
          </div>
          <h3 className="font-display font-semibold text-base leading-snug mb-1.5">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
        </motion.div>
      ))}
    </div>

    {/* Charts */}
    <div className="grid lg:grid-cols-3 gap-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="lg:col-span-2 card-premium p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-base">Improvement after AI learning</h3>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
            <TrendingUp className="h-3.5 w-3.5" /> Reply rate +133%
          </span>
        </div>
        <div className="h-64">
          <ResponsiveContainer>
            <AreaChart data={replyRateSeries}>
              <defs>
                <linearGradient id="i1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} unit="%" />
              <Tooltip contentStyle={{ background: "hsl(var(--surface-elevated))", border: "1px solid hsl(var(--border-strong))", borderRadius: 12, fontSize: 12 }} />
              <Area dataKey="rate" stroke="hsl(var(--accent-glow))" strokeWidth={2.5} fill="url(#i1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="card-premium p-6">
        <h3 className="font-display font-semibold text-base mb-1">Reflections</h3>
        <p className="text-xs text-muted-foreground mb-4">What the agent noticed</p>
        <ul className="space-y-3">
          {reflections.map((r, i) => (
            <li key={i} className="border-l-2 border-primary/40 pl-3">
              <p className="text-sm leading-snug">{r.text}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{r.time}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* Persona heatmap */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
      className="card-premium p-6">
      <h3 className="font-display font-semibold text-base mb-1">Persona × Angle Heatmap</h3>
      <p className="text-xs text-muted-foreground mb-5">Reply rate %</p>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[10px] uppercase tracking-wider text-muted-foreground">
              <th className="text-left py-2 px-3"></th>
              <th className="text-center py-2 px-3">ROI</th>
              <th className="text-center py-2 px-3">Vision</th>
              <th className="text-center py-2 px-3">Social Proof</th>
              <th className="text-center py-2 px-3">Pain Point</th>
            </tr>
          </thead>
          <tbody>
            {personaHeatmap.map((row) => (
              <tr key={row.persona}>
                <td className="py-2 px-3 text-sm font-medium">{row.persona}</td>
                {(["roi", "vision", "social", "pain"] as const).map((k) => {
                  const v = row[k];
                  const intensity = Math.min(1, v / 45);
                  return (
                    <td key={k} className="p-1">
                      <div
                        className="h-12 rounded-lg flex items-center justify-center text-sm font-mono font-medium relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, hsl(230 90% 66% / ${intensity * 0.5}), hsl(265 85% 68% / ${intensity * 0.5}))`,
                          border: `1px solid hsl(230 90% 66% / ${intensity * 0.4})`,
                        }}
                      >
                        {v}%
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  </div>
);

export default Insights;

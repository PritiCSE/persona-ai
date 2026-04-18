import { motion } from "framer-motion";
import { Filter, Search, Download } from "lucide-react";
import { prospects } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusColor: Record<string, string> = {
  Replied: "bg-success/15 text-success border-success/30",
  Meeting: "bg-accent/15 text-accent-glow border-accent/30",
  Opened: "bg-primary/15 text-primary-glow border-primary/30",
  Sent: "bg-muted text-muted-foreground border-border",
  Ignored: "bg-destructive/10 text-destructive border-destructive/20",
};

const Tracking = () => (
  <div className="space-y-4">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="card-premium p-4 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 h-9 px-3 rounded-lg bg-input/60 border border-border flex-1 min-w-[200px]">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input className="bg-transparent outline-none text-sm w-full" placeholder="Search prospects, companies..." />
      </div>
      {["All roles", "All outcomes", "Last 30 days", "All industries"].map((f) => (
        <button key={f} className="h-9 px-3 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-border-strong inline-flex items-center gap-1.5">
          <Filter className="h-3 w-3" /> {f}
        </button>
      ))}
      <button className="h-9 px-3 rounded-lg gradient-primary text-primary-foreground text-xs font-medium inline-flex items-center gap-1.5">
        <Download className="h-3 w-3" /> Export
      </button>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      className="card-premium overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border bg-surface/40">
            <th className="text-left font-medium px-5 py-3">Prospect</th>
            <th className="text-left font-medium px-3 py-3">Role</th>
            <th className="text-left font-medium px-3 py-3">Channel</th>
            <th className="text-left font-medium px-3 py-3">Angle</th>
            <th className="text-left font-medium px-3 py-3">Status</th>
            <th className="text-right font-medium px-5 py-3">AI Score</th>
          </tr>
        </thead>
        <tbody>
          {[...prospects, ...prospects].map((p, i) => (
            <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface-elevated/40 transition">
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg gradient-primary p-[1.5px]">
                    <div className="h-full w-full rounded-[7px] bg-card flex items-center justify-center text-[11px] font-semibold">{p.initials}</div>
                  </div>
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-[11px] text-muted-foreground">{p.company}</p>
                  </div>
                </div>
              </td>
              <td className="px-3 py-3.5 text-muted-foreground">{p.role}</td>
              <td className="px-3 py-3.5 text-muted-foreground">{p.channel}</td>
              <td className="px-3 py-3.5"><span className="text-xs font-mono text-muted-foreground">{p.messageType}</span></td>
              <td className="px-3 py-3.5">
                <span className={cn("inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-md border", statusColor[p.status])}>
                  {p.status}
                </span>
              </td>
              <td className="px-5 py-3.5 text-right">
                <div className="inline-flex items-center gap-2">
                  <div className="w-16 h-1 rounded-full bg-muted overflow-hidden">
                    <div className="h-full gradient-primary" style={{ width: `${p.score}%` }} />
                  </div>
                  <span className="font-mono text-xs w-7 text-right">{p.score}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </div>
);

export default Tracking;

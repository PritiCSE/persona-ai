import { motion } from "framer-motion";
import {
  Users, MessageSquareReply, CalendarCheck, DollarSign, Rocket,
  Brain, ArrowUpRight, TrendingUp, Sparkles, ChevronRight,
} from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis, Cell,
} from "recharts";
import { CountUp } from "@/components/CountUp";
import { kpis, replyRateSeries, channelPerformance, personaFunnel, prospects, activity } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const iconMap = { users: Users, reply: MessageSquareReply, calendar: CalendarCheck, dollar: DollarSign, rocket: Rocket };

const statusColor: Record<string, string> = {
  Replied: "bg-success/15 text-success border-success/30",
  Meeting: "bg-accent/15 text-accent-glow border-accent/30",
  Opened: "bg-primary/15 text-primary-glow border-primary/30",
  Sent: "bg-muted text-muted-foreground border-border",
  Ignored: "bg-destructive/10 text-destructive border-destructive/20",
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((k, i) => {
          const Icon = iconMap[k.icon as keyof typeof iconMap] ?? Users;
          return (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="card-premium p-5 relative overflow-hidden group hover:-translate-y-0.5 transition-transform"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-primary opacity-10 blur-2xl group-hover:opacity-20 transition" />
              <div className="flex items-start justify-between mb-3 relative">
                <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary-glow" />
                </div>
                {k.trend !== 0 && (
                  <span className={cn("inline-flex items-center gap-0.5 text-[11px] font-medium px-1.5 py-0.5 rounded-md",
                    k.trend > 0 ? "text-success bg-success/10" : "text-destructive bg-destructive/10")}>
                    <ArrowUpRight className="h-3 w-3" /> {k.trend}%
                  </span>
                )}
              </div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{k.label}</p>
              <p className="font-display text-3xl font-semibold tracking-tight">
                <CountUp value={k.value} prefix={(k as any).prefix} suffix={k.suffix} />
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* AI Insight Hero + Activity */}
      <div className="grid lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="lg:col-span-2 card-elevated p-6 lg:p-8 relative overflow-hidden border border-border-strong"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="flex items-start gap-5">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-2xl gradient-primary blur-lg opacity-60 animate-glow-pulse" />
                <div className="relative h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <Brain className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-primary-glow font-semibold">AI Insight · just now</span>
                  <span className="text-[10px] text-muted-foreground">confidence 0.92</span>
                </div>
                <h2 className="font-display text-2xl lg:text-[28px] font-semibold leading-tight tracking-tight text-balance">
                  CTOs respond <span className="gradient-text-primary">43% better</span> to ROI messaging sent Tuesday mornings.
                </h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Detected across 412 sends in the last 14 days. Switching the Enterprise CTOs campaign
                  to ROI angle is projected to lift replies by <span className="text-foreground font-medium">+12%</span>.
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <button className="text-xs font-medium px-3 py-2 rounded-lg gradient-primary text-primary-foreground hover:opacity-90 inline-flex items-center gap-1.5">
                    Apply to campaign <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                  <button className="text-xs font-medium px-3 py-2 rounded-lg glass hover:bg-surface-elevated">
                    See evidence
                  </button>
                </div>
              </div>
            </div>

            {/* sparkline */}
            <div className="mt-6 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={replyRateSeries}>
                  <defs>
                    <linearGradient id="ai-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area dataKey="rate" stroke="hsl(var(--primary-glow))" strokeWidth={2} fill="url(#ai-area)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="card-premium p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-sm">Live Activity</h3>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
          </div>
          <ul className="space-y-3">
            {activity.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <div className={cn("h-7 w-7 rounded-lg flex items-center justify-center shrink-0",
                  a.type === "reply" && "bg-success/15 text-success",
                  a.type === "ai" && "bg-primary/15 text-primary-glow",
                  a.type === "meeting" && "bg-accent/15 text-accent-glow",
                  a.type === "send" && "bg-muted text-muted-foreground")}>
                  {a.type === "ai" ? <Sparkles className="h-3.5 w-3.5" /> :
                   a.type === "reply" ? <MessageSquareReply className="h-3.5 w-3.5" /> :
                   a.type === "meeting" ? <CalendarCheck className="h-3.5 w-3.5" /> :
                   <Rocket className="h-3.5 w-3.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm leading-snug">
                    <span className="font-medium">{a.who}</span>{" "}
                    <span className="text-muted-foreground">{a.what}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{a.when}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="lg:col-span-2 card-premium p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-semibold text-base">Reply Rate Over Time</h3>
              <p className="text-xs text-muted-foreground">8-week trend with baseline</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
              <TrendingUp className="h-3.5 w-3.5" /> +133% vs baseline
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={replyRateSeries}>
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} unit="%" />
                <Tooltip
                  contentStyle={{ background: "hsl(var(--surface-elevated))", border: "1px solid hsl(var(--border-strong))", borderRadius: 12, fontSize: 12 }}
                  cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 1, strokeDasharray: "3 3" }}
                />
                <Area dataKey="baseline" stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} strokeDasharray="4 4" fill="none" />
                <Area dataKey="rate" stroke="hsl(var(--primary-glow))" strokeWidth={2.5} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="card-premium p-6">
          <h3 className="font-display font-semibold text-base mb-1">Channel Performance</h3>
          <p className="text-xs text-muted-foreground mb-4">Reply rate %</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelPerformance} layout="vertical" margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis type="category" dataKey="channel" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} width={70} />
                <Tooltip
                  contentStyle={{ background: "hsl(var(--surface-elevated))", border: "1px solid hsl(var(--border-strong))", borderRadius: 12, fontSize: 12 }}
                  cursor={{ fill: "hsl(var(--muted) / 0.4)" }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {channelPerformance.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? "hsl(var(--primary))" : i === 1 ? "hsl(var(--accent))" : "hsl(var(--secondary))"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Funnel + Prospect table */}
      <div className="grid lg:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="card-premium p-6">
          <h3 className="font-display font-semibold text-base mb-4">Persona Funnel</h3>
          <div className="space-y-3">
            {personaFunnel.map((s, i) => {
              const max = personaFunnel[0].count;
              const pct = (s.count / max) * 100;
              return (
                <div key={s.stage}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">{s.stage}</span>
                    <span className="font-medium">{s.count.toLocaleString()}</span>
                  </div>
                  <div className="h-8 rounded-lg bg-muted/40 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
                      className="h-full gradient-primary opacity-90"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="lg:col-span-2 card-premium overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <div>
              <h3 className="font-display font-semibold text-base">Recent Prospects</h3>
              <p className="text-xs text-muted-foreground">Live outcomes</p>
            </div>
            <Link to="/app/tracking" className="text-xs font-medium text-primary-glow hover:underline inline-flex items-center gap-1">
              View all <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
                  <th className="text-left font-medium px-5 py-3">Name</th>
                  <th className="text-left font-medium px-3 py-3">Role</th>
                  <th className="text-left font-medium px-3 py-3">Company</th>
                  <th className="text-left font-medium px-3 py-3">Angle</th>
                  <th className="text-left font-medium px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {prospects.slice(0, 6).map((p) => (
                  <tr key={p.id} className="border-b border-border/50 last:border-0 hover:bg-surface-elevated/40 transition">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-lg gradient-primary p-[1.5px]">
                          <div className="h-full w-full rounded-[7px] bg-card flex items-center justify-center text-[11px] font-semibold">
                            {p.initials}
                          </div>
                        </div>
                        <span className="font-medium">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-muted-foreground">{p.role}</td>
                    <td className="px-3 py-3 text-muted-foreground">{p.company}</td>
                    <td className="px-3 py-3"><span className="text-xs font-mono text-muted-foreground">{p.messageType}</span></td>
                    <td className="px-5 py-3">
                      <span className={cn("inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-md border", statusColor[p.status])}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

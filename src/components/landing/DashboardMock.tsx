import {
  LayoutDashboard, Search, Bell, Calendar, Boxes, ShoppingCart,
  FileText, MessagesSquare, Truck, Megaphone, TrendingUp, TrendingDown,
} from "lucide-react";
import { CountUp } from "@/components/CountUp";

const sideItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Calendar, label: "Schedule" },
  { icon: Boxes, label: "Prospects" },
  { icon: ShoppingCart, label: "Campaigns" },
  { icon: FileText, label: "Templates" },
  { icon: MessagesSquare, label: "Inbox", badge: 6 },
  { icon: Truck, label: "Tracking" },
  { icon: Megaphone, label: "Outreach" },
];

const Bar = ({ h, c }: { h: number; c: string }) => (
  <div className="flex flex-col items-center gap-1 flex-1">
    <div className={`w-full rounded-md ${c}`} style={{ height: `${h}%` }} />
  </div>
);

export const DashboardMock = () => (
  <div className="relative w-full">
    {/* Glow under the mock */}
    <div className="absolute -inset-x-20 -top-10 -bottom-20 bg-[radial-gradient(ellipse_at_center,hsl(230_90%_55%/0.35),transparent_60%)] blur-2xl pointer-events-none" />

    <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-white/20 via-white/5 to-transparent shadow-[0_40px_120px_-30px_hsl(230_90%_20%/0.8)]">
      <div className="rounded-[26px] bg-[hsl(222_40%_8%)] overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col w-[200px] shrink-0 bg-[hsl(222_45%_6%)] p-3 gap-1 border-r border-border/50">
            <div className="flex items-center gap-2 px-2 py-3">
              <div className="h-7 w-7 rounded-lg gradient-primary" />
              <span className="font-display font-semibold text-sm">Outbound</span>
            </div>
            {sideItems.map((it) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.label}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] ${
                    it.active
                      ? "bg-primary/15 text-primary-glow"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="flex-1">{it.label}</span>
                  {it.badge && (
                    <span className="text-[9px] h-4 min-w-4 px-1 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {it.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0 p-4 md:p-5">
            {/* Top bar */}
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-display font-semibold text-base">Dashboard</h3>
              <div className="flex-1" />
              <div className="hidden sm:flex items-center gap-2 h-8 px-3 rounded-lg bg-surface text-[11px] text-muted-foreground border border-border/60 w-44">
                <Search className="h-3 w-3" /> Search...
              </div>
              <div className="h-8 w-8 rounded-lg bg-surface border border-border/60 flex items-center justify-center">
                <Bell className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <div className="h-8 px-2 rounded-lg bg-surface border border-border/60 flex items-center gap-2">
                <div className="h-5 w-5 rounded-full gradient-primary" />
                <div className="hidden sm:block leading-tight">
                  <div className="text-[10px] font-semibold">Rafael Williams</div>
                  <div className="text-[8px] text-muted-foreground">Admin</div>
                </div>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-3">
              {[
                { label: "Prospects Contacted", value: 4360, delta: "+2.34%", up: true },
                { label: "Reply Rate", value: 28, suffix: "%", delta: "+4.05%", up: true },
                { label: "Meetings Booked", value: 97, delta: "+2.34%", up: true },
                { label: "Avg Score", value: 82, suffix: "/100", delta: "-1.85%", up: false },
              ].map((k) => (
                <div key={k.label} className="rounded-xl bg-surface border border-border/60 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-6 w-6 rounded-md bg-primary/15 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-primary-glow">$</span>
                    </div>
                    <span className="text-muted-foreground text-[10px]">···</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground">{k.label}</div>
                  <div className="flex items-end justify-between mt-0.5">
                    <div className="font-display font-semibold text-lg tabular-nums">
                      <CountUp value={k.value} />{k.suffix ?? ""}
                    </div>
                    <div className={`text-[9px] flex items-center gap-0.5 ${k.up ? "text-success" : "text-destructive"}`}>
                      {k.up ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                      {k.delta}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
              {/* Reply Overview */}
              <div className="lg:col-span-2 rounded-xl bg-surface border border-border/60 p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-[11px] font-semibold">Reply Overview</div>
                    <div className="flex gap-4 mt-1">
                      <div>
                        <div className="text-[9px] text-muted-foreground">Sent</div>
                        <div className="text-sm font-display font-semibold">$84,378</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-muted-foreground">Replied</div>
                        <div className="text-sm font-display font-semibold">$51,954</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[9px] text-muted-foreground border border-border/60 rounded px-2 py-0.5">
                    Last 8 Months ▾
                  </div>
                </div>
                <div className="flex items-end gap-1.5 h-24 mt-3">
                  {[
                    [55, 30], [70, 45], [40, 25], [85, 55], [60, 38],
                    [78, 50], [92, 60], [68, 42],
                  ].map(([a, b], i) => (
                    <div key={i} className="flex-1 flex gap-0.5 items-end">
                      <Bar h={a} c="bg-primary" />
                      <Bar h={b} c="bg-primary/30" />
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insight */}
              <div className="rounded-xl bg-gradient-to-br from-primary/20 via-accent/15 to-transparent border border-primary/30 p-3 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/30 blur-2xl" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-wider text-primary-glow font-semibold mb-1">AI Insight</div>
                  <div className="text-[11px] leading-snug font-medium">
                    CTOs reply <span className="text-primary-glow font-semibold">43% more</span> to ROI angles on Tuesday mornings.
                  </div>
                  <div className="mt-3 space-y-1.5">
                    {[
                      { l: "ROI", v: 86 },
                      { l: "Vision", v: 64 },
                      { l: "Speed", v: 41 },
                    ].map((m) => (
                      <div key={m.l}>
                        <div className="flex justify-between text-[9px] text-muted-foreground">
                          <span>{m.l}</span><span>{m.v}%</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full gradient-primary rounded-full" style={{ width: `${m.v}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Floating mini cards */}
    <div className="hidden lg:flex absolute -left-10 top-[28%] -translate-y-1/2 items-center gap-2 px-3 py-2 rounded-2xl glass-strong shadow-2xl animate-[float_6s_ease-in-out_infinite]">
      <div className="h-8 w-8 rounded-xl bg-success/20 flex items-center justify-center">
        <TrendingUp className="h-4 w-4 text-success" />
      </div>
      <div className="leading-tight">
        <div className="text-[10px] text-muted-foreground">New reply</div>
        <div className="text-xs font-semibold">Rahul · CTO @ ScaleFlow</div>
      </div>
    </div>

    <div className="hidden lg:flex absolute -right-8 top-[58%] items-center gap-2 px-3 py-2 rounded-2xl glass-strong shadow-2xl animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: "1.2s" }}>
      <div className="h-8 w-8 rounded-xl bg-primary/20 flex items-center justify-center">
        <MessagesSquare className="h-4 w-4 text-primary-glow" />
      </div>
      <div className="leading-tight">
        <div className="text-[10px] text-muted-foreground">AI generated</div>
        <div className="text-xs font-semibold">12 personalized emails</div>
      </div>
    </div>
  </div>
);

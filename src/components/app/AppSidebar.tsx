import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, UserPlus, Sparkles, Megaphone, LineChart,
  BrainCircuit, FileText, Plug, Settings, Activity,
} from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const items = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/app/add", label: "Add Prospect", icon: UserPlus },
  { to: "/app/outreach", label: "Outreach Generator", icon: Sparkles },
  { to: "/app/campaigns", label: "Campaigns", icon: Megaphone },
  { to: "/app/tracking", label: "Tracking", icon: Activity },
  { to: "/app/insights", label: "Insights", icon: LineChart },
  { to: "/app/brain", label: "AI Brain", icon: BrainCircuit, badge: "Live" },
  { to: "/app/templates", label: "Templates", icon: FileText },
  { to: "/app/integrations", label: "Integrations", icon: Plug },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export const AppSidebar = () => {
  const location = useLocation();
  return (
    <aside className="hidden lg:flex flex-col w-[252px] shrink-0 border-r border-sidebar-border bg-sidebar h-screen sticky top-0 z-30">
      <div className="px-5 h-16 flex items-center border-b border-sidebar-border">
        <Logo />
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto scrollbar-none">
        <p className="px-3 mb-2 text-[10px] font-medium tracking-wider text-muted-foreground uppercase">Workspace</p>
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.end ? location.pathname === item.to : location.pathname.startsWith(item.to);
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={cn(
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground ring-glow"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
              )}
            >
              {active && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-r-full gradient-primary" />}
              <Icon className={cn("h-[18px] w-[18px] transition-colors", active ? "text-primary-glow" : "text-muted-foreground group-hover:text-foreground")} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-success/15 text-success border border-success/20">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-3 border-t border-sidebar-border">
        <div className="card-premium p-3 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="relative">
                <span className="block h-2 w-2 rounded-full bg-success" />
                <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-60" />
              </div>
              <span className="text-xs font-semibold">AI Brain</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Learning from <span className="text-foreground font-medium">348 replies</span> this week.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

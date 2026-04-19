import { Bell, Search, Command, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { prospects, campaigns } from "@/lib/mock-data";

export const TopNav = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: 1, type: "reply", message: "Rahul Mehta replied to your ROI email", time: "2m ago" },
    { id: 2, type: "meeting", message: "Maya Chen booked a meeting", time: "38m ago" },
    { id: 3, type: "ai", message: "AI Brain updated CTO template to v3.1", time: "12m ago" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim() ? [
    ...prospects.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.company.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(p => ({ type: "prospect", ...p })),
    ...campaigns.filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(c => ({ type: "campaign", ...c }))
  ] : [];

  return (
    <header className="sticky top-0 z-20 h-16 border-b border-border/60 bg-background/80 backdrop-blur-xl px-6 flex items-center gap-4">
      <div className="flex-1 min-w-0">
        <h1 className="font-display font-semibold text-[18px] tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground truncate">{subtitle}</p>}
      </div>

      <div className="relative hidden md:flex items-center gap-2 h-9 px-3 rounded-xl border border-border bg-input/40 text-sm text-muted-foreground w-72 hover:border-border-strong transition cursor-text"
        onClick={() => setSearchOpen(true)}>
        <Search className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search prospects, campaigns..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchOpen(true)}
          className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
        />
        {searchQuery && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSearchQuery("");
            }}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {!searchQuery && (
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted/60 border border-border flex items-center gap-0.5">
            <Command className="h-2.5 w-2.5" />K
          </kbd>
        )}

        {searchOpen && searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border border-border bg-background shadow-lg max-h-96 overflow-y-auto">
            {searchResults.map((result) => (
              <div key={`${result.type}-${result.id}`} className="px-3 py-2 hover:bg-muted/40 cursor-pointer border-b border-border/50 last:border-0">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-semibold text-primary-glow uppercase">{result.type}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {result.type === "prospect" ? result.name : result.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {result.type === "prospect" ? result.company : `AI Score: ${result.score}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 px-2.5 h-9 rounded-xl glass">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
        </span>
        <span className="text-xs font-medium text-foreground">Learning Active</span>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 relative"
        onClick={() => setNotificationsOpen(!notificationsOpen)}
      >
        <Bell className="h-[18px] w-[18px]" />
        <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-primary" />
      </Button>

      {notificationsOpen && (
        <div ref={notificationsRef} className="absolute top-16 right-6 w-80 rounded-lg border border-border bg-background shadow-lg z-50">
          <div className="p-4 border-b border-border/60">
            <h3 className="font-display font-semibold text-sm">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notif) => (
              <div key={notif.id} className="px-4 py-3 border-b border-border/30 hover:bg-muted/40 cursor-pointer transition last:border-0">
                <div className="flex items-start gap-3">
                  <div className={`h-2 w-2 rounded-full mt-1.5 flex-shrink-0 ${
                    notif.type === "reply" ? "bg-success" :
                    notif.type === "meeting" ? "bg-accent" :
                    "bg-primary"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{notif.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border/60 text-center">
            <button className="text-xs font-medium text-primary-glow hover:underline">View all notifications</button>
          </div>
        </div>
      )}

      <Link to="/app/add">
        <Button className="h-9 gradient-primary text-primary-foreground hover:opacity-90 shadow-[0_0_24px_-4px_hsl(var(--primary)/0.6)]">
          <Plus className="h-4 w-4 mr-1.5" />
          New Prospect
        </Button>
      </Link>

      <div className="h-9 w-9 rounded-xl gradient-primary p-[1.5px]">
        <div className="h-full w-full rounded-[10px] bg-background flex items-center justify-center text-xs font-semibold">
          AK
        </div>
      </div>
    </header>
  );
};

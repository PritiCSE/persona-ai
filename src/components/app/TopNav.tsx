import { Bell, Search, Command, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { prospects, campaigns } from "@/lib/mock-data";

export const TopNav = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

      <Button variant="ghost" size="icon" className="h-9 w-9 relative">
        <Bell className="h-[18px] w-[18px]" />
        <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-primary" />
      </Button>

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

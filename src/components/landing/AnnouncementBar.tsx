import { Sparkles } from "lucide-react";

export const AnnouncementBar = () => (
  <div className="relative z-30 w-full bg-surface/60 border-b border-border/50 backdrop-blur-xl">
    <div className="max-w-[1400px] mx-auto px-6 h-9 flex items-center justify-center gap-2 text-[12px] text-muted-foreground">
      <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
      <span>Memory engine v2 just shipped —</span>
      <a href="#brain" className="text-foreground font-medium underline-offset-4 hover:underline">
        See what's new ✨
      </a>
    </div>
  </div>
);

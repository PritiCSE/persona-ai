import { cn } from "@/lib/utils";

export const Logo = ({ className, showText = true }: { className?: string; showText?: boolean }) => (
  <div className={cn("flex items-center gap-2.5", className)}>
    <div className="relative h-8 w-8">
      <div className="absolute inset-0 rounded-lg gradient-primary glow-primary" />
      <div className="absolute inset-[2px] rounded-[7px] bg-background flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-glow" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19" opacity="0.4" />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </div>
    {showText && (
      <div className="flex flex-col leading-none">
        <span className="font-display font-semibold text-[15px] tracking-tight text-foreground">Outbound</span>
        <span className="text-[10px] text-muted-foreground tracking-wide uppercase">Prospecting Agent</span>
      </div>
    )}
  </div>
);

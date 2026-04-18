import { cn } from "@/lib/utils";

export const SectionHeader = ({
  eyebrow, title, subtitle, align = "center", className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) => (
  <div
    className={cn(
      "max-w-3xl",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}
  >
    {eyebrow && (
      <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] uppercase tracking-wider text-primary-glow mb-4 font-semibold", align === "center" && "mx-auto")}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
        {eyebrow}
      </div>
    )}
    <h2 className="font-display font-semibold text-4xl lg:text-5xl tracking-tight leading-[1.1] text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
        {subtitle}
      </p>
    )}
  </div>
);

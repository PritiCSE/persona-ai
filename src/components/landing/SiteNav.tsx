import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#brain", label: "AI Brain" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Resources" },
];

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between gap-6 rounded-full px-4 lg:px-6 h-16 transition-all duration-300",
            scrolled
              ? "glass-strong shadow-[0_8px_32px_-12px_hsl(0_0%_0%/0.6)]"
              : "bg-transparent"
          )}
        >
          <Logo />

          <nav className="hidden lg:flex items-center gap-1 text-[13.5px] font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Link
            to="/app"
            className="relative inline-flex items-center justify-center h-11 px-6 rounded-full font-medium text-sm text-primary-foreground gradient-primary shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.7)] hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.9)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Open App
          </Link>
        </div>
      </div>
    </header>
  );
};

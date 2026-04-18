import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTABanner = () => (
  <section className="relative z-10 py-20 lg:py-28">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
      <div className="relative rounded-[32px] overflow-hidden p-10 lg:p-16 text-center bg-gradient-to-br from-primary/30 via-accent/20 to-surface border border-primary/30">
        {/* glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(circle,hsl(230_90%_60%/0.4),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative">
          <h2 className="font-display font-semibold text-4xl lg:text-5xl tracking-tight leading-[1.1] text-balance max-w-2xl mx-auto">
            Try it free and let your AI agent <span className="gradient-text-primary">book your next meeting</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Connect your inbox in 60 seconds. Watch the brain learn your prospects. Sleep at night.
          </p>

          <form className="mt-8 max-w-md mx-auto flex gap-2 p-1.5 rounded-full glass-strong">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
            />
            <Link
              to="/app"
              className="inline-flex items-center justify-center h-11 px-5 rounded-full font-medium text-sm gradient-primary text-primary-foreground shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.7)] hover:-translate-y-0.5 transition-transform"
            >
              Try For Free <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  </section>
);

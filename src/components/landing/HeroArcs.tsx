/* Concentric arcs that radiate from the bottom-center of the hero — Saazy-style */
export const HeroArcs = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* radial spotlight */}
    <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full bg-[radial-gradient(circle_at_center,hsl(230_90%_30%/0.35),transparent_60%)]" />
    {/* arcs */}
    <svg
      className="absolute left-1/2 top-[5%] -translate-x-1/2 w-[2400px] max-w-none opacity-60"
      viewBox="0 0 2400 1400"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="hsl(230 90% 66% / 0)" />
          <stop offset="0.5" stopColor="hsl(230 90% 75% / 0.45)" />
          <stop offset="1" stopColor="hsl(265 85% 70% / 0)" />
        </linearGradient>
      </defs>
      {[400, 560, 720, 880, 1040, 1200, 1360].map((r, i) => (
        <ellipse
          key={r}
          cx="1200"
          cy="1400"
          rx={r * 1.6}
          ry={r}
          stroke="url(#arcStroke)"
          strokeWidth="1"
          style={{
            animation: `float 8s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </svg>
    {/* grid floor */}
    <div className="absolute inset-x-0 bottom-0 h-[40%] grid-bg opacity-40" />
  </div>
);

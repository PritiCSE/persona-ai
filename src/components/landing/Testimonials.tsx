import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    quote: "Before Outbound, tracking which messages worked was guesswork. Now we have real-time insights and reply rates jumped 35% in the first month.",
    name: "Dennis Kane",
    role: "Head of Growth — GrowthTech",
    initials: "DK",
  },
  {
    quote: "We've seen 3x more qualified meetings booked and our cost per opportunity dropped 50%. It's the SDR I wish I'd hired three years ago.",
    name: "Santino Rivers",
    role: "Founder — LeadBoost",
    initials: "SR",
  },
  {
    quote: "The AI Brain is honestly spooky. It noticed our CTO segment hated our intro paragraphs — fixed it, and replies doubled the next week.",
    name: "Zavier Miles",
    role: "Demand Gen — Polaris",
    initials: "ZM",
  },
  {
    quote: "From persona learning to follow-up automation, this platform has everything we need. Open rates are up 60% and our team finally sleeps.",
    name: "Linda Miller",
    role: "VP Marketing — Apex Labs",
    initials: "LM",
  },
  {
    quote: "Outbound replaced a $120k/yr SDR seat in our first quarter. The memory engine is a genuine moat — competitors can't catch this learning loop.",
    name: "Priya Shah",
    role: "Co-founder — TalentPro",
    initials: "PS",
  },
];

export const Testimonials = () => {
  const [ref] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  return (
    <section className="relative z-10 py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Real teams. <span className="gradient-text-primary">Real replies.</span></>}
          subtitle="Hundreds of revenue teams trust Outbound to run their pipeline on autopilot."
        />
      </div>

      <div className="overflow-hidden mt-14" ref={ref}>
        <div className="flex gap-5 px-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="shrink-0 w-[340px] sm:w-[420px]">
              <div className="card-premium p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="h-10 w-10 rounded-full gradient-primary p-[1.5px]">
                    <div className="h-full w-full rounded-full bg-background flex items-center justify-center text-xs font-semibold">
                      {t.initials}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

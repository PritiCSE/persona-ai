import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const posts = [
  {
    cat: "Sales",
    catColor: "bg-primary/20 text-primary-glow",
    title: "How to automate your outbound funnel without losing the human touch",
    excerpt: "The line between automation and authenticity is thinner than you think. Here's how the best teams stay on the right side of it.",
    accent: "from-primary/40 via-primary/10 to-transparent",
  },
  {
    cat: "Insight",
    catColor: "bg-accent/20 text-accent-glow",
    title: "The 7 messaging angles that consistently win replies in 2026",
    excerpt: "We analyzed 1.2M sent messages across our customer base. These are the patterns that actually move the needle.",
    accent: "from-accent/40 via-accent/10 to-transparent",
  },
  {
    cat: "Marketing",
    catColor: "bg-secondary/20 text-secondary",
    title: "How AI agents are quietly rewriting B2B sales playbooks",
    excerpt: "It's no longer just about volume. The teams winning now are the ones whose tools actually learn from every send.",
    accent: "from-secondary/40 via-secondary/10 to-transparent",
  },
];

export const Blog = () => (
  <section id="blog" className="relative z-10 py-24 lg:py-28">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <SectionHeader
          align="left"
          eyebrow="Blog"
          title={<>Latest articles & <span className="gradient-text-primary">field notes</span></>}
          subtitle="Tactics, teardowns, and lessons from teams running outbound at scale."
        />
        <a
          href="#"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full font-medium text-sm bg-surface border border-border-strong hover:bg-surface-elevated transition self-start lg:self-auto"
        >
          View all posts →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group card-premium overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
          >
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(0_0%_100%/0.1),transparent_60%)]" />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${p.catColor}`}>
                  {p.cat}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display font-semibold text-lg leading-snug tracking-tight mb-3 group-hover:text-primary-glow transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
              <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow mt-5 group-hover:gap-2.5 transition-all">
                Read more <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

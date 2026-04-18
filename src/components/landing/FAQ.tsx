import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "How does Outbound learn what works for each persona?",
    a: "Every send, open, click and reply is fed into a memory engine that clusters prospects by role, industry, and behaviour. The agent identifies which messaging angles, lengths, and send times correlate with replies — and rewrites future outreach accordingly.",
  },
  {
    q: "Is Outbound a good fit for startups and small teams?",
    a: "Especially. Outbound shines for teams of 1–20 where you need SDR-level output without the SDR headcount. Our Starter plan is built for solo founders running their own pipeline.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are sending their first AI-generated campaign within 15 minutes. Connect your inbox, import a CSV (or sync from HubSpot / Salesforce), pick a persona, and the agent takes it from there.",
  },
  {
    q: "What kind of customer support do I get?",
    a: "Email + chat for all plans, with priority response times on Professional. Enterprise customers get a dedicated CSM, custom training, and 24/7 SLA support.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — 14 days, no credit card required, with full access to the AI Brain and multi-channel outreach. Most teams see their first booked meeting in week one.",
  },
];

export const FAQ = () => (
  <section className="relative z-10 py-24 lg:py-28">
    <div className="max-w-3xl mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="FAQ"
        title={<>Most common <span className="gradient-text-primary">questions</span></>}
        subtitle="Everything you need to know before you start your trial. Still curious? Email us — a human replies."
      />
      <Accordion type="single" collapsible className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`q-${i}`}
            className="card-premium px-6 border-none"
          >
            <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

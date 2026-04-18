import { Logo } from "@/components/Logo";

const groups = [
  {
    title: "Product",
    links: ["Features", "AI Brain", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Contact", "Press"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "Help Center", "API Docs", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
  },
];

export const Footer = () => (
  <footer className="relative z-10 border-t border-border/60 mt-12">
    <div className="max-w-[1300px] mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-6 gap-12">
      <div className="lg:col-span-2">
        <Logo />
        <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
          The AI sales agent that learns what gets replies, remembers every prospect, and improves every campaign.
        </p>
        <div className="mt-6 flex gap-2">
          {["X", "in", "GH"].map((s) => (
            <a
              key={s}
              href="#"
              className="h-9 w-9 rounded-full bg-surface border border-border-strong flex items-center justify-center text-xs font-semibold hover:bg-surface-elevated transition"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
      {groups.map((g) => (
        <div key={g.title}>
          <h4 className="font-semibold text-sm mb-4">{g.title}</h4>
          <ul className="space-y-2.5">
            {g.links.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-border/60">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© 2026 Outbound, Inc. All rights reserved.</span>
        <span>Built for outbound teams who refuse to grind.</span>
      </div>
    </div>
  </footer>
);

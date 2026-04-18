const logos = ["ScaleFlow", "LaunchOS", "TalentPro", "NorthStar", "Vectra", "Apex Labs", "Lumen", "Polaris"];

export const LogoStrip = () => (
  <section className="relative z-10 py-12 lg:py-16">
    <div className="max-w-[1200px] mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground mb-8">
        Trusted by outbound teams at fast-growing startups
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-6 items-center opacity-70">
        {logos.map((name) => (
          <div
            key={name}
            className="font-display font-semibold text-base tracking-tight text-muted-foreground hover:text-foreground transition-colors"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

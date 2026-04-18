import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { SiteNav } from "@/components/landing/SiteNav";
import { HeroArcs } from "@/components/landing/HeroArcs";
import { DashboardMock } from "@/components/landing/DashboardMock";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { FeatureBlocks } from "@/components/landing/FeatureBlocks";
import { BenefitsGrid } from "@/components/landing/BenefitsGrid";
import { Pricing } from "@/components/landing/Pricing";
import { Integrations } from "@/components/landing/Integrations";
import { Testimonials } from "@/components/landing/Testimonials";
import { Blog } from "@/components/landing/Blog";
import { FAQ } from "@/components/landing/FAQ";
import { CTABanner } from "@/components/landing/CTABanner";
import { Footer } from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div id="home" className="min-h-screen relative overflow-hidden bg-background">
      <AnnouncementBar />
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-10 lg:pt-16 pb-0">
        <HeroArcs />

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display font-semibold tracking-tight leading-[1.02] text-balance text-[44px] sm:text-6xl lg:text-[88px]"
          >
            Your AI Sales Agent <br className="hidden sm:block" />
            That <span className="gradient-text-primary">Learns What Gets Replies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Outbound personalizes every message, remembers every prospect, and rewrites your
            playbook from real outcomes — so reply rates climb week after week.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/app"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full font-medium text-sm gradient-primary text-primary-foreground shadow-[0_12px_40px_-10px_hsl(var(--primary)/0.8)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free Trial <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full font-medium text-sm bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              <PlayCircle className="h-4 w-4 mr-2" /> Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Floating dashboard mock */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 mt-16 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <DashboardMock />
          </motion.div>
        </div>
      </section>

      <LogoStrip />
      <FeatureBlocks />
      <BenefitsGrid />
      <Pricing />
      <Integrations />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Landing;

import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Problem } from "@/components/Problem";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Testimonials } from "@/components/Testimonials";
import { Transformation } from "@/components/Transformation";
import { WhatsIncluded } from "@/components/WhatsIncluded";

export default function HomePage() {
  return (
    <>
      <main
        id="contenido-principal"
        tabIndex={-1}
        className="pb-24 lg:pb-0"
      >
        <Hero />
        <Problem />
        <Transformation />
        <Testimonials />
        <HowItWorks />
        <WhatsIncluded />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <StickyMobileCTA />
    </>
  );
}

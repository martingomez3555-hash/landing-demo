import { Benefits } from "@/components/Benefits";
import { Differentiator } from "@/components/Differentiator";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { WhoCanUse } from "@/components/WhoCanUse";
import BotFlotante from "@/components/BotFlotante";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
        id="contenido-principal"
        tabIndex={-1}
        className="pb-24 lg:pb-0"
      >
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <HowItWorks />
        <WhoCanUse />
        <Differentiator />
        <Portfolio />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <StickyMobileCTA />
      <BotFlotante />
      </>
  );
}
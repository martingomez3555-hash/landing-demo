import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSolution } from "@/components/ProblemSolution";
import { SocialProof } from "@/components/SocialProof";

export default function HomePage() {
  return (
    <main id="contenido-principal" tabIndex={-1}>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}

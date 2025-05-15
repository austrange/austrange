import { Hero } from "@/components/Hero/Hero";
import { AboutSection } from "@/components/Sections/AboutSection";
import { ProductSection } from "@/components/Sections/ProductSection";
import { ImpactSection } from "@/components/Sections/ImpactSection";
import { TeamSection } from "@/components/Sections/TeamSection";
import { RnDSection } from "@/components/Sections/RnDSection";
import { CollaborateSection } from "@/components/Sections/CollaborateSection";
import { NewsSection } from "@/components/Sections/NewsSection";
import { ContactSection } from "@/components/Sections/ContactSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutSection />
      <ProductSection />
      <ImpactSection />
      <TeamSection />
      <RnDSection />
      <CollaborateSection />
      <NewsSection />
      <ContactSection />
    </main>
  );
}

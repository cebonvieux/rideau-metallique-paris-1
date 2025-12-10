import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Zones } from "@/components/sections/Zones";
import { Tarifs } from "@/components/sections/Tarifs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { getPageContent } from "@/lib/content";
import faqData from "@/content/faq.json";
import tarifsData from "@/content/tarifs.json";

export default function HomePage() {
  const faq = getPageContent(faqData);
  
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Zones limit={12} />
      <Tarifs items={tarifsData} />
      <FAQ items={faq} />
      <CTA />
    </main>
  );
}


import { HeroSection } from "@/components/HeroSection";
import { Portfolio } from "@/components/Portfolio";
import { Differences } from "@/components/Differences";
import { Process } from "@/components/Process";
import { Developer } from "@/components/Developer";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Portfolio />
      <Differences />
      <Process />
      <Developer />
      <Contact />
    </>
  );
}

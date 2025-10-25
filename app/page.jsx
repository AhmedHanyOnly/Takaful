import SliderLanding from "@/components/pages/Home/SliderLanding";
import Contact from "@/components/pages/Home/Contact";
import { MapHolder } from "@/components/pages/Home/MapHolder";
import { LogoSection } from "@/components/pages/Home/LogoSection";
export default function Home() {
  return (
    <>
      <SliderLanding />
      <LogoSection />

      <Contact />
    </>
  );
}

import Image from "next/image";
import HeroSection from "./ui/component/HeroSection";

import AboutSection from "./ui/component/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}

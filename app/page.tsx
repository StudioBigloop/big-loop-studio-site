import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FabSection } from "@/components/FabSection";
import { RobloxSection } from "@/components/RobloxSection";
import { SteamSection } from "@/components/SteamSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FabSection />
      <RobloxSection />
      <SteamSection />
      <Footer />
    </main>
  );
}

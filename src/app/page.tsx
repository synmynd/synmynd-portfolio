import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustModel from "@/components/sections/TrustModel";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import MegaProject from "@/components/sections/MegaProject";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustModel />
        <Process />
        <About />
        <Services />
        <MegaProject />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

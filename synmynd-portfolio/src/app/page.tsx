import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustModel from "@/components/TrustModel";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustModel />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

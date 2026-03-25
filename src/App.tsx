import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Results from "./components/Results";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import StickyNav from "./components/StickyNav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#b4b4b4] selection:bg-white selection:text-[#0a0a0a] relative">
      {/* Cinematic Noise Overlay */}
      <div 
        className="fixed inset-0 z-[100] pointer-events-none opacity-[0.04] mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <StickyNav />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Results />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

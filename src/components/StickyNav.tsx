import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";

export default function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#141414]/90 backdrop-blur-md border-b border-[#2a2a2a] py-4" : "bg-transparent py-6"
        }`}
      >
        <div 
          className="container mx-auto flex items-center justify-between px-4 md:px-6 md:mr-[115px] md:mb-[11px] md:pl-[7px]"
        >
          <a href="#" className="flex items-center">
            <img 
              src="https://i.imgur.com/EHKs0Id.png" 
              alt="DNA Servicing & Detailing" 
              className="w-20 h-20 md:w-[120px] md:h-[120px] object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#b4b4b4] hover:text-white uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0428072070"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#b4b4b4] transition-colors"
            >
              <Phone className="w-4 h-4" /> 0428 072 070
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#141414] bg-white hover:bg-[#b4b4b4] transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#141414] pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 mb-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white uppercase tracking-widest border-b border-[#2a2a2a] pb-4"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-auto mb-12">
              <a
                href="tel:0428072070"
                className="flex items-center justify-center gap-2 py-4 border border-[#505050] text-white font-bold uppercase tracking-widest"
              >
                <Phone className="w-5 h-5" /> Call 0428 072 070
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center py-4 bg-white text-[#141414] font-bold uppercase tracking-widest"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA Buttons (Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-[#2a2a2a] bg-[#141414]">
        <a href="tel:0428072070" className="flex-1 py-4 flex justify-center items-center gap-2 text-white font-bold uppercase text-xs tracking-widest border-r border-[#2a2a2a]">
           <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href="#contact" className="flex-1 py-4 flex justify-center items-center text-[#141414] bg-white font-bold uppercase text-xs tracking-widest">
           Get Quote
        </a>
      </div>
    </>
  );
}

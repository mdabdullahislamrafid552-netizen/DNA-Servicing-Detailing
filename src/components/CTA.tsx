import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-40 bg-[#0a0a0a] relative overflow-hidden border-y border-[#2a2a2a]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#333] via-[#0a0a0a] to-[#0a0a0a]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-[9rem] font-bold mb-8 md:mb-12 tracking-tighter leading-[0.9] md:leading-[0.85] group cursor-default">
            <span className="block text-transparent [-webkit-text-stroke:1px_#505050] hover:[-webkit-text-stroke:1px_white] hover:text-white transition-all duration-700">BRING YOUR CAR</span>
            <span className="block text-white">BACK TO LIFE</span>
          </h2>
          
          <p className="text-lg md:text-2xl text-[#b4b4b4] font-light mb-10 md:mb-16 max-w-2xl mx-auto">
            Experience the ultimate in automotive care. Book your service or detailing appointment today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:0428072070"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] bg-white overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white via-[#e0e0e0] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-4 h-4" /> Call Now
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-sm font-semibold uppercase tracking-[0.2em] text-white bg-transparent border border-white/20 backdrop-blur-md overflow-hidden transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

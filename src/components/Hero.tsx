import { motion } from "motion/react";
import { Phone, Mail, MapPin, ChevronRight, Star, Shield, Droplets, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlT7JrzQ-noy574qQ4OWFPBYa16WBYWciZJw&s"
          alt="DNA Servicing & Detailing Hero"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-start text-left mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl"
        >
          <div className="overflow-hidden mb-2">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#b4b4b4] uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-px bg-[#505050]"></span>
              Port Lincoln's Premier Auto Care
            </motion.h2>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-6 md:mb-8 leading-[0.9] md:leading-[0.85]">
            <span className="block text-white">PREMIUM</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#b4b4b4] to-[#333]">
              DETAILING.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-[#b4b4b4] mb-10 md:mb-12 max-w-2xl font-light leading-relaxed border-l-2 border-[#505050] pl-4 md:pl-6">
            Expert vehicle servicing, 4x4 maintenance, and detailing that restores performance and absolute shine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-6 mb-24">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] bg-white overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white via-[#e0e0e0] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="tel:0428072070"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white bg-transparent border border-white/20 backdrop-blur-md overflow-hidden transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-4 h-4" /> Call Now
              </span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-8 text-xs text-[#505050] tracking-[0.2em] uppercase font-semibold">
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span>0428 072 070</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-[#2a2a2a]" />
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>DNAServicingandDetailing@gmail.com</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-[#2a2a2a]" />
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span>Port Lincoln, SA</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#505050] rotate-90 origin-left translate-y-8">SCROLL</span>
        <div className="w-px h-16 bg-[#2a2a2a] relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}

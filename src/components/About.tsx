import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="https://www.carcility.com/blog/wp-content/uploads/2020/01/full-car-service.jpg" 
                alt="DNA Servicing & Detailing Professional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/20 mix-blend-multiply pointer-events-none" />
            </div>
            
            {/* Floating Stats Box */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 right-0 md:-bottom-10 md:-right-20 bg-white p-6 md:p-12 z-10 shadow-2xl"
            >
              <p className="text-[#0a0a0a] text-4xl md:text-7xl font-bold tracking-tighter mb-1 md:mb-2">100<span className="text-[#b4b4b4]">%</span></p>
              <p className="text-[#505050] text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold">Local & Trusted</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 lg:pl-10 mt-16 lg:mt-0"
          >
            <h2 className="text-[#505050] uppercase tracking-[0.4em] text-xs font-semibold mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-[#505050]"></span>
              The DNA Standard
            </h2>
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 md:mb-10 leading-[0.9] tracking-tighter">
              PRECISION. <br />
              <span className="text-[#505050]">EXPERIENCE.</span> <br />
              DETAILS.
            </h3>
            
            <div className="space-y-8 text-[#b4b4b4] text-lg md:text-xl font-light leading-relaxed">
              <p>
                DNA Servicing & Detailing is a locally owned business in Port Lincoln focused on delivering uncompromising automotive care.
              </p>
              <p>
                We combine precision, experience, and an obsessive attention to detail to ensure every vehicle looks and performs at its absolute best. Whether it's a routine service, a rugged 4x4 preparation, or a showroom-finish detail, we treat every car as a masterpiece.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-[#2a2a2a]">
              <p className="text-white text-2xl font-light italic">"We don't just wash cars; we restore their soul."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

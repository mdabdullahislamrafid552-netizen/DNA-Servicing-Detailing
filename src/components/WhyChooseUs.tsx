import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Professional Equipment",
  "Detail-Focused Work",
  "Reliable Service",
  "High-End Finish",
  "Local & Trusted",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-[#141414] border-y border-[#2a2a2a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WHY CHOOSE US</h2>
            <p className="text-[#b4b4b4] font-light">
              We don't just wash cars; we restore them. Our commitment to excellence sets us apart in Port Lincoln.
            </p>
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#505050] transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                <span className="text-white font-medium tracking-wide text-sm uppercase">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

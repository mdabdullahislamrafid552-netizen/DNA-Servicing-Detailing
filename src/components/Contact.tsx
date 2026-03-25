import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#141414]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">GET IN TOUCH</h2>
            <p className="text-[#b4b4b4] font-light mb-12 leading-relaxed">
              Ready to give your vehicle the care it deserves? Contact us for a quote or to book an appointment.
            </p>

            <div className="space-y-8">
              <a href="tel:0428072070" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                  <Phone className="w-5 h-5 text-white group-hover:text-[#141414] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#505050] uppercase tracking-wider font-semibold mb-1">Call Us</p>
                  <p className="text-white text-lg group-hover:text-[#b4b4b4] transition-colors">0428 072 070</p>
                </div>
              </a>

              <a href="mailto:DNAServicingandDetailing@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                  <Mail className="w-5 h-5 text-white group-hover:text-[#141414] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#505050] uppercase tracking-wider font-semibold mb-1">Email</p>
                  <p className="text-white text-lg break-all group-hover:text-[#b4b4b4] transition-colors">DNAServicingandDetailing@gmail.com</p>
                </div>
              </a>

              <a href="https://instagram.com/dnaservicingdetailing" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                  <Instagram className="w-5 h-5 text-white group-hover:text-[#141414] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#505050] uppercase tracking-wider font-semibold mb-1">Instagram</p>
                  <p className="text-white text-lg group-hover:text-[#b4b4b4] transition-colors">@dnaservicingdetailing</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#505050] uppercase tracking-wider font-semibold mb-1">Location</p>
                  <p className="text-white text-lg">Port Lincoln, Australia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <form className="bg-[#1a1a1a] p-8 md:p-12 border border-[#2a2a2a]" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#505050] uppercase tracking-widest mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#505050] uppercase tracking-widest mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="0400 000 000" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="vehicle" className="block text-xs font-semibold text-[#505050] uppercase tracking-widest mb-2">Vehicle Type</label>
                  <input type="text" id="vehicle" className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="e.g. Toyota Landcruiser" required />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-[#505050] uppercase tracking-widest mb-2">Service Needed</label>
                  <select id="service" defaultValue="" className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none" required>
                    <option value="" disabled className="bg-[#1a1a1a] text-[#505050]">Select a service...</option>
                    <option value="servicing" className="bg-[#1a1a1a]">Car Servicing</option>
                    <option value="4x4" className="bg-[#1a1a1a]">4x4 Servicing</option>
                    <option value="detailing" className="bg-[#1a1a1a]">Vehicle Detailing</option>
                    <option value="polishing" className="bg-[#1a1a1a]">Paint Polishing</option>
                    <option value="other" className="bg-[#1a1a1a]">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-10">
                <label htmlFor="message" className="block text-xs font-semibold text-[#505050] uppercase tracking-widest mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-[#2a2a2a] py-3 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell us more about what you need..."></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-[#141414] font-bold uppercase tracking-widest py-5 hover:bg-[#b4b4b4] transition-colors">
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

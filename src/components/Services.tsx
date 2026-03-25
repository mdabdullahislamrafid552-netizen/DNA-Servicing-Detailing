import { motion } from "motion/react";

const services = [
  {
    title: "Oil Changes",
    description: "Premium synthetic oil changes to keep your engine running smooth and clean.",
    image: "https://www.wyotech.edu/wp-content/uploads/2024/04/how-to-change-your-car-oil-featured-image.jpeg",
  },
  {
    title: "Brake Repairs",
    description: "Complete brake system inspections, pad replacements, and rotor resurfacing.",
    image: "https://www.meineke.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fdkq07unc94tv%2F22yQ5GXhvnsQVhCF92cW4J%2Fa84c205c2533451beab07cdf844fce4d%2Fhow-do-brakes-work.jpg&w=3840&q=75",
  },
  {
    title: "Regular Servicing",
    description: "Scheduled maintenance to ensure your vehicle's longevity and reliability.",
    image: "https://www.indusmotor.com/public/uploads/pages/179020210129170225.jpg",
  },
  {
    title: "Transmission Servicing",
    description: "Fluid flushes, filter changes, and comprehensive transmission diagnostics.",
    image: "https://www.meineke.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fdkq07unc94tv%2F7rntlKfp2Wp3oC2rMZyaqg%2F322572c907a49ef35af823d1cd62e9e9%2Fimage.png&w=1920&q=75",
  },
  {
    title: "Tune Up",
    description: "Spark plugs, filters, and system checks to restore lost power and efficiency.",
    image: "https://pedalcommander.ae/cdn/shop/articles/car-tune-up.jpg?v=1657401754",
  },
  {
    title: "Full Car Servicing",
    description: "Bumper-to-bumper comprehensive servicing for ultimate peace of mind.",
    image: "https://www.mrclutch.com/blog/wp-content/uploads/2023/01/Photo-of-a-mechanic-completing-a-full-service-on-a-car.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-40 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 mb-12 md:mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[#505050] uppercase tracking-[0.4em] text-xs font-semibold mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-[#505050]"></span>
              What We Do
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">
              OUR SERVICES
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#b4b4b4] max-w-md font-light leading-relaxed"
          >
            Delivering uncompromising quality through specialized automotive services designed for the most demanding owners.
          </motion.p>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-y border-[#2a2a2a]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden bg-[#0a0a0a] border-[0.5px] border-[#2a2a2a] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                <div className="transform md:translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                  <h4 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-[#b4b4b4] text-sm md:text-base leading-relaxed font-light md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:delay-100">
                    {service.description}
                  </p>
                  <div className="w-12 md:w-0 h-px bg-white mt-4 md:mt-6 group-hover:w-12 transition-all duration-700 md:delay-200 ease-[0.22,1,0.36,1]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

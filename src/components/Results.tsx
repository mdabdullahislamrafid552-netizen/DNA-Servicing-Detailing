import { motion } from "motion/react";

const results = [
  {
    title: "Premium Detail",
    image: "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/643562315_17856797487617174_812196825240914211_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzg0MTAxMTgzNTg4NjIwMjg5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=D2tG8iUGrm4Q7kNvwGF7EZZ&_nc_oc=Adp6GNZjn7a4RfeYibKAQK0ccFsaxOksnDEUlboyI22yFbYF5LGb8lHkVPS_DY-53C0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=dI8xa-VstR9W46-N7E-AVA&_nc_ss=7a32e&oh=00_Afx7B07fmfoRKV0KANkWogB-fKQ3Q0dICQXe-_kmGKBRJw&oe=69C924C2",
  },
  {
    title: "Interior Restoration",
    image: "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/612474198_17851093224617174_2734311056597714934_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=MzgwNzY5NzU4NjEzMjk1MDg0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=a9LR-8Bn0lMQ7kNvwG7Yl_z&_nc_oc=AdrCX6Ggjj8Ivydxk-Bt0zxu_89zllhBoN40vh_el6W-c8LYxY7KJb6YIcJiTRvybtQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=dI8xa-VstR9W46-N7E-AVA&_nc_ss=7a32e&oh=00_AfyAzXC6uKXIGjZKiuKVMXq8bL4MIKlH44TqoPvi7cxS7A&oe=69C940A3",
  },
  {
    title: "Paint Correction",
    image: "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/615265817_17851092120617174_7976078888667948437_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzgwNzY4ODc4OTQ3NzkxMDkwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTcyOS5zZHIuQzMifQ%3D%3D&_nc_ohc=y_IoXFTn18MQ7kNvwFBQe_e&_nc_oc=AdoQ5_sX-dtT54Xyp1xLkbgFEgLffzBdAqgEb7mGyypP6PDQqqlv7S25Ou08FKEYxJI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=dI8xa-VstR9W46-N7E-AVA&_nc_ss=7a32e&oh=00_Afyvn9dSYGx-bG_osNeQd5UbG4oiKl04N2tlJuArc-x2wQ&oe=69C92FF3",
  },
  {
    title: "4x4 Servicing",
    image: "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/614940485_17851091391617174_947659113902859953_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzgwNzY4MzcxMjIyMjU5MzQxNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=SaQCEx2f6BMQ7kNvwED-PUD&_nc_oc=AdoN4U_MCpopf5AFC_SMcOZawjWC9BspfUt5w2emy1ZsHQ7B5zVBo2IOuJMxLWvYCNg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=dI8xa-VstR9W46-N7E-AVA&_nc_ss=7a32e&oh=00_AfziKdtif5N7t2jiW-iwWY0-v1puk1RPahJltCdmmXUaTw&oe=69C947B8",
  },
  {
    title: "Engine Bay Clean",
    image: "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/610805064_17850851850617174_4993709425245765825_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=MzgwNjExOTcwNDI4NTgwMjY5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=FvQDYaXIWu4Q7kNvwFaqzuR&_nc_oc=AdoPWoKXHcy-NCEHd6vrdScbldJGrUwRxYJLshkKwv63GeJKMMhuVRS7F87v9g6TzNM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=dI8xa-VstR9W46-N7E-AVA&_nc_ss=7a32e&oh=00_AfyVXasririlU8HGnHIgN-UEqMDFcuqKgltKoBIIsUfSjw&oe=69C9536A",
  },
  {
    title: "Ceramic Coating",
    image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/591144073_17846174781617174_5528056937558126821_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=Mzc3OTIyNzk3Mjk2MTE2MzcyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=EE18GTcmm08Q7kNvwHMeRWw&_nc_oc=Adp2A6sAfqcQUZCMdql9tqPyGmCwN_muO01SzrfoI5D5DUozONSFfqE1yNL5_dmLKpA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=dI8xa-VstR9W46-N7E-AVA&_nc_ss=7a32e&oh=00_AfwyaWq0NmC_wWsXf_uecZG0QN7vs4QgDWvJisMjNQXA8w&oe=69C934F8",
  },
  {
    title: "Wheel Detailing",
    image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/588955492_17846189022617174_7607453985218764420_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=Mzc3OTI4MTAyNzU4NDg2NDU5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=J8ClpGgetLEQ7kNvwEaAZmB&_nc_oc=Adp6GiR7IS_v2eTfqBc4AIhwbsubmZILPSdcYNk1jqGq06nsl6XaO_n3hStiQ-dIXhE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=dI8xa-VstR9W46-N7E-AVA&_nc_ss=7a32e&oh=00_Afzvrjmwa9xcWvQ6ADXO_QQl0OU__oS2zH0JdFZn6VcjWA&oe=69C931BA",
  },
  {
    title: "Full Restoration",
    image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/589072747_17846173287617174_7413447990696838532_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=Mzc3OTIxNzQ3ODU3NzYyODQ3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=tJX3nYTAGt4Q7kNvwFJVP10&_nc_oc=AdrJGC7A-AXWeInURMcsI5YYYTyyITYVLc-x2W4WGj_Rbi42hkabQ7a4xxqNESoCWPc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=dI8xa-VstR9W46-N7E-AVA&_nc_ss=7a32e&oh=00_AfxnreTbWlyE55upTaqHtbINXimbRm6xUwmSqY8Uk2p0sQ&oe=69C941E4",
  },
];

export default function Results() {
  return (
    <section id="gallery" className="py-20 md:py-40 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[#505050] uppercase tracking-[0.4em] text-xs font-semibold mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-[#505050]"></span>
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              THE RESULTS
            </h3>
          </motion.div>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] cursor-crosshair"
            >
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{result.title}</h3>
                <div className="w-0 h-px bg-white group-hover:w-full transition-all duration-700 delay-100 ease-[0.22,1,0.36,1]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

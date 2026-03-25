export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-[#2a2a2a] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://i.imgur.com/EHKs0Id.png" 
              alt="DNA Servicing & Detailing" 
              className="h-16 md:h-20 w-auto object-contain mb-2"
            />
          </div>
          
          <div className="text-center md:text-right text-xs text-[#505050] font-medium tracking-widest uppercase">
            &copy; {new Date().getFullYear()} DNA Servicing & Detailing. <br className="md:hidden" /> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 px-8 md:px-24 border-t border-white/10 uppercase tracking-widest text-sm relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding & Address */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="text-white font-bold text-lg mb-2 tracking-widest">Aazim Ameen</span>
          <p>Ladhoo Pampore 191103</p>
          <p>Pampore, Jammu & Kashmir, India</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <a
            href="mailto:aazimameen1@gmail.com"
            className="hover:text-white transition-colors duration-300 relative group"
          >
            aazimameen1@gmail.com
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/aazimameen-39634237b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-300 relative group"
          >
            LinkedIn Profile
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://github.com/aazimameen1-dotcom"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-300 relative group"
          >
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Aazim Ameen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

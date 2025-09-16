import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect for scroll-based background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Becomes true after scrolling 10px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to track active section
  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact Us" },
  ];

  const authItems = [
    { id: "signin", label: "Sign In" },
    { id: "signup", label: "Sign Up" },
  ];

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const mobileLinkVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-['Noto_Sans'] transition-all duration-300 ${
        isScrolled 
          // Changed to a semi-transparent white background for the "glassmorphism" effect on scroll
          ? "bg-white shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-gray-700">
        
        {/* Logo with the new gradient */}
        <a href="#home" className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] text-transparent bg-clip-text hover:scale-110 transition-transform">
          INCOIS
        </a>

        {/* Desktop Menu: Main Links (Center) */}
        <ul className="hidden lg:flex gap-8 text-lg">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a href={`#${item.id}`} className={`transition font-medium ${activeSection === item.id ? "text-[#0d47a1]" : "hover:text-[#0d47a1]"}`}>
                {item.label}
              </a>
              {activeSection === item.id && (
                <motion.div
                  // Underline with the new gradient
                  className="absolute w-full left-0 -bottom-2 h-1 bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] rounded-full"
                  layoutId="active-underline"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Menu: Auth Links (Right) */}
        <ul className="hidden lg:flex items-center gap-6 text-lg">
          <li>
            <a href="#signin" className="transition font-medium hover:text-[#0d47a1]">Sign In</a>
          </li>
          <li>
            {/* Sign Up button with the new gradient and light text */}
            <a href="#signup" className="px-5 py-2 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] text-white hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/60">
              Sign Up
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button - Changed color for light theme */}
        <button className="lg:hidden text-gray-800 hover:scale-110 transition-transform" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Changed mobile menu background to white
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-lg text-gray-700">
              {[...navItems, ...authItems].map((item) => (
                <motion.li key={item.id} variants={mobileLinkVariants}>
                  <a href={`#${item.id}`} className={`transition font-medium ${activeSection === item.id ? "text-[#0d47a1]" : "hover:text-[#0d47a1]"}`} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
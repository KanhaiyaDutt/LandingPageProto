import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiMapPin, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HomeSection = () => {
  // Required function for tsparticles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Configuration for the particle background - UPDATED LIGHT THEME
  const particlesOptions = {
    background: {
      color: {
        value: "#f3f4f6", // A light gray background (Tailwind gray-100)
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#374151", // Dark gray particles for contrast (gray-700)
      },
      links: {
        color: "#6b7280", // Medium gray links for subtlety (gray-500)
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="home" 
      // Changed to a light background and dark text
      className="relative h-screen flex items-center justify-center text-center text-gray-800 p-4 bg-gradient-to-b from-[#001f3f] via-[#001f3f]  to-white "
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full"
      />
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <TypeAnimation
          sequence={[
            'Guardians of the Coast',
            3000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className="
            text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
            font-extrabold leading-tight mb-4 tracking-wide 
            // Changed text gradient for better contrast on the light background
            bg-gradient-to-r from-white to-purple-600 text-transparent bg-clip-text
          "
        />

        <motion.p 
          variants={itemVariants}
          className="
            text-lg md:text-xl lg:text-2xl 
            // Changed text color to a softer dark gray
            text-gray-600 mb-8 max-w-3xl mx-auto
          "
        >
          Join INCOIS by reporting ocean hazards in real-time. Your observations help protect our communities and save lives.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.a 
            href="#signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // Applied the new blue-to-purple gradient with white text for contrast
            className="
              flex items-center justify-center w-full sm:w-auto 
              bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] text-white shadow-lg shadow-indigo-500/30 font-bold 
              py-3 px-6 rounded-lg text-lg lg:text-xl 
            "
          >
            <FiSend className="mr-2" /> Report an Event
          </motion.a>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // Applied the new gradient to the button's border
            className="relative p-0.5 w-full sm:w-auto rounded-lg bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a]"
          >
            <a 
              href="#dashboard" 
              // Updated the inner button for a light theme with a transparent hover effect
              className="
                flex items-center justify-center w-full 
                bg-gray-100 text-gray-800 hover:bg-transparent hover:text-white
                font-bold py-3 px-6 rounded-md 
                text-lg lg:text-xl transition-colors duration-300
              "
            >
              <FiMapPin className="mr-2" /> View Live Map
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeSection;
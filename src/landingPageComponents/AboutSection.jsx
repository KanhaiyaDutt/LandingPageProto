import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiMap, FiMessageSquare, FiSmartphone, FiArrowRight } from 'react-icons/fi';

const SuperInteractiveAbout = () => {
  // Updated features array with new theme colors
  const features = [
    {
      icon: <FiUsers size={28} className="text-[#0d47a1]" />,
      title: "Citizen Reporting",
      description: "Submit geotagged reports, photos, and videos of ocean hazards directly through the app."
    },
    {
      icon: <FiMap size={28} className="text-[#0d47a1]" />,
      title: "Live Dashboard",
      description: "Visualize real-time crowdsourced data and social media trends on a dynamic, interactive map."
    },
    {
      icon: <FiMessageSquare size={28} className="text-[#0d47a1]" />,
      title: "Social Media Integration",
      description: "Our NLP engine analyzes social media feeds to detect hazard-related discussions and public sentiment."
    },
    {
      icon: <FiSmartphone size={28} className="text-[#0d47a1]" />,
      title: "Enhanced Awareness",
      description: "Empower emergency responders with faster, more accurate situational awareness."
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section 
      id="about" 
      // Changed to a light background with dark text
      className="relative text-gray-800 py-24 px-4 overflow-hidden bg-gray-50"
    >
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            When the Ocean Threatens, Every Sighting Matters.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            // Changed text color for light theme
            className="text-lg md:text-xl text-gray-600"
          >
            We are the bridge across the critical gap between a scientific forecast and the real-time reality our communities face.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mb-20">
          <div className="lg:sticky top-24 h-fit">
            {/* Changed card styling to light theme */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] text-transparent bg-clip-text inline-block">The Problem</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                During ocean emergencies, authorities have the data, but communities have the live view. On-the-ground reports are often delayed or lost, and the public’s voice on social media goes untapped.
              </p>
            </div>
          </div>

          <div className="space-y-8 mt-12 lg:mt-0">
            <h3 className="text-3xl font-bold mb-4 text-center lg:text-left">Our Solution</h3>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                // Changed feature card styling to light theme
                className="bg-white p-6 rounded-xl flex items-start space-x-4 border border-gray-200 shadow-lg"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.5 }} 
                variants={cardVariants}
              >
                {/* Changed icon container styling */}
                <div className="bg-blue-50 p-4 rounded-full mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Impact Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          variants={cardVariants}
        >
          {/* Changed card styling to light theme */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] text-transparent bg-clip-text inline-block">The Impact</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We deliver a live, interactive map of developing situations to authorities. This allows them to validate threats faster, understand the scale of an event, and deploy resources where they are needed most—saving lives and property.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a
            href="#dashboard"
            // Changed button to new gradient with light text
            className="inline-flex items-center text-xl font-semibold px-8 py-4 rounded-full bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] text-white transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/40"
          >
            See Our Platform in Action <FiArrowRight className="ml-2" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default SuperInteractiveAbout;
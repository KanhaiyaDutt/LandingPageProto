import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiGlobe, FiSend } from 'react-icons/fi';

const ContactSection = () => {
  // Data for the agency cards
  const agencies = [
    {
      name: "Indian National Centre for Ocean Information Services (INCOIS)",
      relevance: "The primary stakeholder for Tsunami and Ocean State Forecasts. Our platform directly supplements their warning systems.",
      phone: "+91-40-23895000",
      email: "director@incois.gov.in",
      website: "https://www.incois.gov.in/"
    },
    {
      name: "National Disaster Management Authority (NDMA)",
      relevance: "The apex body for disaster management in India. Our data integrates into their national situational awareness tools.",
      helpline: "1078 (Toll-Free)",
      email: "controlroom@ndma.gov.in",
      website: "https://ndma.gov.in/"
    },
    {
      name: "India Meteorological Department (IMD)",
      relevance: "The principal agency for weather forecasting. Our data helps validate their cyclone and storm surge forecasts.",
      phone: "+91-11-24611068",
      website: "https://mausam.imd.gov.in/"
    },
    {
      name: "Indian Coast Guard (ICG)",
      relevance: "A key first responder for maritime incidents. They can use our data to identify and rescue those in distress.",
      helpline: "1554 (Toll-Free)",
      website: "https://indiancoastguard.gov.in/"
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
      id="contact" 
      // Changed to a light background with dark text
      className="relative text-gray-800 py-24 px-4 overflow-hidden bg-gray-50"
    >
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Contact & Key Agencies
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Connect with our team or find contact information for critical national and state-level stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Form */}
          <motion.div
            // Changed card styling to light theme
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Changed heading to new gradient */}
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] text-transparent bg-clip-text">Get in Touch</h3>
            <form className="space-y-6">
              {/* Changed form input styling */}
              <input type="text" placeholder="Your Name" className="w-full bg-gray-100 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
              <input type="email" placeholder="Your Email" className="w-full bg-gray-100 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
              <textarea placeholder="Your Message" rows="5" className="w-full bg-gray-100 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"></textarea>
              {/* Changed button to new gradient with light text */}
              <button type="submit" className="w-full flex items-center justify-center font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 bg-gradient-to-r from-[#0d47a1] to-[#6a1b9a] text-white hover:scale-105 shadow-lg hover:shadow-indigo-500/40">
                Send Message <FiSend className="ml-2" />
              </button>
            </form>
          </motion.div>
          
          {/* Right Column: Agency List */}
          <div className="space-y-8">
            {agencies.map((agency, index) => (
              <motion.div 
                key={agency.name}
                // Changed card styling to light theme
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">{agency.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{agency.relevance}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {/* Changed link styling */}
                  {agency.phone && <a href={`tel:${agency.phone}`} className="flex items-center text-blue-600 hover:text-blue-800 font-medium"><FiPhone className="mr-2"/>{agency.phone}</a>}
                  {agency.helpline && <span className="flex items-center text-blue-600 font-medium"><FiPhone className="mr-2"/>{agency.helpline}</span>}
                  {agency.email && <a href={`mailto:${agency.email}`} className="flex items-center text-blue-600 hover:text-blue-800 font-medium"><FiMail className="mr-2"/>Email</a>}
                  {agency.website && <a href={agency.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 font-medium"><FiGlobe className="mr-2"/>Website</a>}
                </div>
              </motion.div>
            ))}
            
            {/* State Agencies Card */}
            <motion.div
              // Changed card styling to light theme
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-2">State Disaster Management Authorities (SDMAs)</h4>
              <p className="text-gray-600">SDMAs and District Collectors are crucial for on-the-ground decisions. Find their contact details by searching online for "[State Name] SDMA".</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
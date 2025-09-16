import SuperInteractiveAbout from "../../landingPageComponents/AboutSection";
import ContactSection from "../../landingPageComponents/ContactSection";
import HomeSection from "../../landingPageComponents/HomeSection";
import Navbar from "../../landingPageComponents/Navbar";
import InteractiveServicesSection from "../../landingPageComponents/ServicesSection";



export default function LandingPage() {

  
  return (
    <div className="scroll-smooth">
      <Navbar />
      
      <HomeSection/>
      
      <SuperInteractiveAbout/>

      <InteractiveServicesSection/>

      <ContactSection/>


    </div>
  );
}

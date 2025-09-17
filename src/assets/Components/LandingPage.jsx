import { Routes, Route, useLocation } from "react-router-dom";
import SuperInteractiveAbout from "../../landingPageComponents/AboutSection";
import ContactSection from "../../landingPageComponents/ContactSection";
import HomeSection from "../../landingPageComponents/HomeSection";
import Navbar from "../../landingPageComponents/Navbar";
import InteractiveServicesSection from "../../landingPageComponents/ServicesSection";
import AuthForm from "../../AuthPage/AuthPage";



export default function LandingPage() {

   const location = useLocation();

  // 3. Create an array of paths where the navbar should be hidden
  const hideNavbarOnPaths = ['/signin', '/signup'];

  // 4. Check if the current path is in our array
  const showNavbar = !hideNavbarOnPaths.includes(location.pathname);


  
  return (
    <div className="scroll-smooth">
      {showNavbar && <Navbar />}
        <Routes>
          <Route path="/signin" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
        </Routes>
      
      {showNavbar && <HomeSection />}

      {showNavbar && <SuperInteractiveAbout />}

      {showNavbar && <InteractiveServicesSection />}

      {showNavbar && <ContactSection />}


      {/* <HomeSection/>
      
      <SuperInteractiveAbout/>

      <InteractiveServicesSection/>

      <ContactSection/> */}


    </div>
  );
}

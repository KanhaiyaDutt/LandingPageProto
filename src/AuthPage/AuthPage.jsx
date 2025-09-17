// src/pages/AuthPage.jsx

import React, { useState } from 'react';
import SignInForm from './signIn';
import SignUpForm from './signUp';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AuthPage() {
  // 2. Get the current location and the navigate function
  const location = useLocation();
  const navigate = useNavigate();

  // 3. Set the initial state based on the current URL path
  // If the path is '/signup', isActive will be true, otherwise false.
  const [isActive, setIsActive] = useState(location.pathname === '/signup');

  // 4. Update the click handlers to also change the URL
  const handleRegisterClick = () => {
    setIsActive(true);
    navigate('/signup'); // Navigate to the signup URL
  };

  const handleLoginClick = () => {
    setIsActive(false);
    navigate('/signin'); // Navigate to the signin URL
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 to-lavender-200 flex flex-col items-center justify-center min-h-screen p-4 font-sans">
      <div className="relative w-full max-w-sm md:max-w-4xl min-h-[580px] md:min-h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        <SignUpForm isActive={isActive} onSignInClick={handleLoginClick} />
        <SignInForm isActive={isActive} onSignUpClick={handleRegisterClick} />

        <div className={`
          hidden md:flex absolute top-0 left-1/2 w-1/2 h-full overflow-hidden
          transition-all duration-700 ease-in-out z-50
          bg-gradient-to-r from-blue-700 to-purple-700 text-white
          ${isActive ? '-translate-x-full rounded-r-[150px] rounded-l-none' : 'translate-x-0 rounded-l-[150px] rounded-r-none'}
        `}>
            <div className={`
              absolute inset-0 flex flex-col items-center justify-center px-10 text-center
              transition-opacity duration-300 ease-in-out
              ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}>
              <h1 className="text-3xl font-bold">Hello!</h1>
              <p className="text-sm mt-5 mb-8">Register with your personal details and start your journey with us</p>
              <button onClick={handleRegisterClick} className="bg-transparent border-2 border-white font-bold uppercase py-3 px-12 rounded-full transition-transform duration-100 ease-in hover:scale-105">
                Sign Up
              </button>
            </div>

            <div className={`
              absolute inset-0 flex flex-col items-center justify-center px-10 text-center
              transition-opacity duration-300 ease-in-out
              ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="text-sm mt-5 mb-8">Enter your personal details to continue your journey with us</p>
              <button onClick={handleLoginClick} className="bg-transparent border-2 border-white font-bold uppercase py-3 px-12 rounded-full transition-transform duration-100 ease-in hover:scale-105">
                Sign In
              </button>
            </div>
        </div>
        
      </div>
    </div>
  );
}
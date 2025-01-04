import React from "react";

import HeroSection from "../components/heroSection";


const HomePage = () => {
  return (
    <div className="hero bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://example.com/hero.jpg')" }}>
        <div>
            <HeroSection/>
        </div>
        
    </div>
  );
};

export default HomePage;

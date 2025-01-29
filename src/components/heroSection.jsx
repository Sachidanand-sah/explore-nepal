import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import destinationsData from "../data/destinationsData"; 

const HeroSection = () => {
  const navigate = useNavigate();

  const topDestinations = [...destinationsData]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);

  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1130964201/photo/nepal-couple-and-the-ice-lake-with-the-view-on-annapurna-chain.webp?a=1&b=1&s=612x612&w=0&k=20&c=3mc8D0DsvhpQ5Et3vXo4ebvNQ6ieybXIDBRSJ5RJIME=')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center text-center px-4 sm:px-8">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg"
        >
          "Nepal: A land of stunning mountains, rich culture, and unforgettable adventures."
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg sm:text-xl text-gray-300"
        >
          Discover breathtaking destinations, unique experiences, and memorable adventures of Nepal.
        </motion.p>

        
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

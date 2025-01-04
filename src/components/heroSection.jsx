import React from "react";
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1130964201/photo/nepal-couple-and-the-ice-lake-with-the-view-on-annapurna-chain.webp?a=1&b=1&s=612x612&w=0&k=20&c=3mc8D0DsvhpQ5Et3vXo4ebvNQ6ieybXIDBRSJ5RJIME=" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 flex space-x-4"
        >
          
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
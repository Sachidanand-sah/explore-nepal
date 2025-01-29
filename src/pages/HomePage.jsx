import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import destinationsData from "../data/destinationsData";

const HomePage = () => {
  const topDestinations = [...destinationsData]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4); // Select top 4 popular destinations

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Prevent Navbar Overlap */}
      <div className="pt-16">  
      
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1130964201/photo/nepal-couple-and-the-ice-lake-with-the-view-on-annapurna-chain.webp?a=1&b=1&s=612x612&w=0&k=20&c=3mc8D0DsvhpQ5Et3vXo4ebvNQ6ieybXIDBRSJ5RJIME=')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-white">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-6xl font-bold drop-shadow-lg"
            >
              Explore Nepal’s Beauty
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-4 text-lg sm:text-xl"
            >
              Discover breathtaking destinations, unique experiences, and unforgettable adventures.
            </motion.p>
          </div>
        </section>

        {/* Top Destinations Section */}
        <section className="py-16 px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
            Top Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {topDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all"
              >
                <Link to={`/destination/${destination.id}`}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
                    <p className="text-sm text-gray-600">{destination.region}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div> {/* End of pt-16 wrapper */}
    </div>
  );
};

export default HomePage;

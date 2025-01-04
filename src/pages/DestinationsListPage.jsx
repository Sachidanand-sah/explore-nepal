/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import destinationsData from "../data/destinationsData.jsx";
import DestinationCard from "../components/DestinationCard.jsx"; // Ensure correct import path

const DestinationsListPage = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filteredDestinations = destinationsData
    .filter((d) => (filter ? d.type.includes(filter) : true)) // Handle empty filter
    .sort((a, b) => (sort === "rating" ? b.rating - a.rating : 0));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Destinations</h1>

      {/* Filter and Sort Options */}
      <div className="flex gap-4 mb-6">
        <select
          className="p-2 border border-gray-300 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Trekking">Trekking</option>
          <option value="Cultural">Cultural</option>
          <option value="Adventure">Adventure</option>
        </select>

        <select
          className="p-2 border border-gray-300 rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="rating">Rating (High to Low)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsListPage;

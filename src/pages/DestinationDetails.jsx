import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import destinationsData from '../data/destinationsData'; 

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = destinationsData.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return <p className="text-center text-lg font-bold text-red-500">Destination not found!</p>;
  }

  const reviews = [
    { id: 1, name: 'John Doe', comment: 'Amazing place! Had a great time.', rating: 5 },
    { id: 2, name: 'Jane Smith', comment: 'Beautiful views and very peaceful.', rating: 4 },
    { id: 3, name: 'Emily Davis', comment: 'A bit crowded, but worth visiting.', rating: 4 },
  ];

  // Function to navigate back to the destinations list
  const handleBackClick = () => {
    navigate('/destinations');
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={handleBackClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-600"
      >
        Back to Destinations
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-4 md:w-1/2">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          {destination.additionalImages && destination.additionalImages.map((image, index) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              key={index}
              src={image}
              alt={`Image ${index + 2}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">{destination.name}</h2>
          <p className="text-lg text-gray-600">{destination.region}</p>

          <div className="flex items-center space-x-2">
            <p className="text-yellow-500">Rating:</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < destination.rating ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  strokeWidth="2"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-gray-700 mt-4">{destination.description}</p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">Popular Activities</h3>
            <ul className="list-disc pl-5 mt-2">
              {destination.activities.map((activity, index) => (
                <li key={index} className="text-gray-600">{activity}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">User Reviews</h3>
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-100 p-4 rounded-lg mt-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">{review.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={index < review.rating ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        strokeWidth="2"
                      >
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;

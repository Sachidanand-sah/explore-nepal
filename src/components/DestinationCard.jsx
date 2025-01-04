import { useNavigate } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate(`/destination/${destination.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md" onClick={handleClick}>
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{destination.name}</h3>
        <p className="text-gray-600">{destination.region}</p>
        <p className="text-yellow-500">Rating: {destination.rating} / 5</p>
      </div>
    </div>
  );
};

export default DestinationCard;

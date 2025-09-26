import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();


  // Determine price display based on property type or title
  const getPriceTag = () => {
    switch (property.title) {
      case "Luxury Apartment":
        return "₦100,000,000+";
      case "Modern Duplex":
        return "₦50,000,000 - ₦100,000,000";
      case "Beach House":
      case "Cozy Bungalow":
        return "₦15,000,000 - ₦50,000,000";
      default:
        return `₦${property.price.toLocaleString()}`;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Link
          className="text-xl font-semibold mb-1 text-indigo-600 hover:underline cursor-pointer"
     
        >
          {property.title}
        </Link>

        <p className="text-gray-500 text-sm mb-2">{property.location}</p>
        <p className="text-gray-700 font-medium mb-2">{property.type}</p>
        <p className="text-indigo-600 font-bold">{getPriceTag()}</p>

        <Link to={property.link}
          className="mt-3 w-full bg-indigo-600 text-white inline-block py-2 rounded-lg hover:bg-indigo-700 transition text-center"
        
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;

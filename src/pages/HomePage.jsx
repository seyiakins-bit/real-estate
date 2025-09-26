import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import PropertyCard from "../components/PropertyCard";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Lagos",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://res.cloudinary.com/dlu8e511s/image/upload/v1758721250/066eddefa10a67-estate-available-for-fastest-finger-for-an-investor-28-units-block-of-flats-for-sale-ajah-lagos_hbusxc.jpg",
    link: "/LuxuryApartment",
  },
  {
    id: 2,
    title: "Beach House",
    location: "Lekki",
    type: "House",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://res.cloudinary.com/dlu8e511s/image/upload/v1758723394/a9070607_1_lvnog3.avif",
    link: "/BeachHouse",
  },
  {
    id: 3,
    title: "Modern Duplex",
    location: "Victoria Island",
    type: "Duplex",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://res.cloudinary.com/dlu8e511s/image/upload/v1758774752/068d3abc83014b-2-units-of-3-bedroom-flat-detached-duplexes-for-sale-lekki-ibeju-lagos_asw0bm.jpg",
    link: "/ModernDuplex",
  },
  {
    id: 4,
    title: "Cozy Bungalow",
    location: "Ikeja",
    type: "Bungalow",
    bedrooms: 2,
    bathrooms: 1,
    image: "https://res.cloudinary.com/dlu8e511s/image/upload/v1758719708/0681e23b2ee125-luxury-3-bedroom-waterfront-apartment-for-rent-banana-island-ikoyi-lagos_a8p7pk.jpg",
    link: "/cozy-bungalow",
  },
];

const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 2; // show 2 per page (change as needed)

  // Handle search
  const handleSearch = (query) => {
    const results = properties.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(results);
    setCurrentPage(1); // reset to first page after search
  };

  // Handle filters
  const handleFilter = ({ location, bedrooms, priceRange }) => {
    let results = [...properties];

    if (location) {
      results = results.filter((p) => p.location === location);
    }

    if (bedrooms) {
      results = results.filter((p) => p.bedrooms >= parseInt(bedrooms));
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      results = results.filter((p) => p.price >= min && p.price <= max);
    }

    setFilteredProperties(results);
    setCurrentPage(1); // reset to first page after filter
  };

  // Pagination logic
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[70vh] flex items-center justify-center text-white relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be")',
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl mb-6">Browse top listings in your area</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Featured Properties</h1>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <SearchBar onSearch={handleSearch} />
          <Filters onFilter={handleFilter} />
        </div>

        {/* Property List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProperties.length > 0 ? (
            currentProperties.map((property) => (
              <Link key={property.id} to={property.link} className="cursor-pointer">
                <PropertyCard property={property} />
              </Link>
            ))
          ) : (
            <p className="text-gray-600">No properties match your search.</p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {/* Page numbers */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

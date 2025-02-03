import React from "react";


// Define the type for the car data
interface CarProps {
  name: string;
  model: string;
  price: string;
  imageUrl: string;
}

const CarGallery: React.FC = () => {
  const cars: CarProps[] = [
    {
      name: "2025 Mustang GT",
      model: "Mustang",
      price: "$45,000",
      imageUrl: "https://via.placeholder.com/400x300.png?text=Mustang+2025",
    },
    {
      name: "2025 Audi A8",
      model: "Audi",
      price: "$90,000",
      imageUrl: "https://via.placeholder.com/400x300.png?text=Audi+A8+2025",
    },
    {
      name: "Tesla Model S",
      model: "Tesla",
      price: "$70,000",
      imageUrl: "https://via.placeholder.com/400x300.png?text=Tesla+Model+S",
    },
    {
      name: "2025 BMW X5",
      model: "BMW",
      price: "$85,000",
      imageUrl: "https://via.placeholder.com/400x300.png?text=BMW+X5+2025",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Car Gallery
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-xl hover:scale-105 transform transition-all duration-500"
          >
            <img
              src={car.imageUrl}
              alt={car.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h2 className="text-white text-xl font-bold">{car.name}</h2>
              <p className="text-white mt-2">{car.model}</p>
              <p className="text-white mt-4">{car.price}</p>
              <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;

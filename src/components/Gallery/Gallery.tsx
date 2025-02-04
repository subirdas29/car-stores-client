import React from "react";
import img1 from '../../assets/img/car-gallery/car-1.jpg'
import img2 from '../../assets/img/car-gallery/car-2.jpg'
import img3 from '../../assets/img/car-gallery/car-3.jpg'
import img4 from '../../assets/img/car-gallery/car-4.jpg'
import img5 from '../../assets/img/car-gallery/car-5.jpg'
import img6 from '../../assets/img/car-gallery/car-6.jpg'

import logo1 from '../../assets/img/car-gallery/logo/logo-1.png'
import logo2 from '../../assets/img/car-gallery/logo/logo-2.png'
import logo3 from '../../assets/img/car-gallery/logo/logo-3.png'
import logo4 from '../../assets/img/car-gallery/logo/logo-4.png'
import logo5 from '../../assets/img/car-gallery/logo/logo-5.png'
import logo6 from '../../assets/img/car-gallery/logo/logo-6.png'

// Define the type for the car data
interface CarProps {
  name: string;
  model: string;
  price: string;
  imageUrl: string;
  logoUrl: string; // Add a logo URL for each brand
}

const CarGallery: React.FC = () => {
  const cars: CarProps[] = [
    {
      name: "2025 Mustang GT",
      model: "Mustang",
      price: "$45,000",
      imageUrl: `${img1}`,
      logoUrl: `${logo1}`, 
    },
    {
      name: "2025 Audi A8",
      model: "Audi",
      price: "$90,000",
      imageUrl: `${img2}`,
      logoUrl: `${logo2}`, 
    },
    {
      name: "Tesla Model S",
      model: "Tesla",
      price: "$70,000",
      imageUrl: `${img3}`,
      logoUrl: `${logo3}`, 
    },
    {
      name: "2025 BMW X5",
      model: "BMW",
      price: "$85,000",
      imageUrl: `${img4}`,
      logoUrl: `${logo4}`, 
    },
    {
      name: "2025 Mercedes-Benz GLC",
      model: "Mercedes-Benz",
      price: "$60,000",
      imageUrl: `${img5}`,
      logoUrl: `${logo5}`, 
    },
    {
      name: "2025 Porsche 911",
      model: "Porsche",
      price: "$100,000",
      imageUrl: `${img6}`,
      logoUrl: `${logo6}`, 
    },
  ];

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-28 p-6">
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
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-400 bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity duration-300 p-4 flex flex-col justify-center items-center">
              {/* Brand Logo */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white p-2 rounded-full flex items-center justify-center">
                <img src={car.logoUrl} alt={`${car.name} logo`} className="w-10 h-10 object-contain" />
              </div>
              <div className="text-center">
                <h2 className="text-white text-xl font-bold">{car.name}</h2>
                <p className="text-white mt-2">{car.model}</p>
                <p className="text-white mt-4">{car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;

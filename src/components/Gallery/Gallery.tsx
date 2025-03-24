import React from "react";
import img1 from '../../assets/img/car-gallery/car-1.webp';
import img2 from '../../assets/img/car-gallery/car-2.webp';
import img3 from '../../assets/img/car-gallery/car-3.webp';
import img4 from '../../assets/img/car-gallery/car-4.webp';
import img5 from '../../assets/img/car-gallery/car-5.webp';
import img6 from '../../assets/img/car-gallery/car-6.webp';
import img7 from '../../assets/img/car-gallery/car-7.webp';
import img8 from '../../assets/img/car-gallery/car-8.webp';

import logo1 from '../../assets/img/car-gallery/logo/logo-1.webp';
import logo2 from '../../assets/img/car-gallery/logo/logo-2.webp';
import logo3 from '../../assets/img/car-gallery/logo/logo-3.webp';
import logo4 from '../../assets/img/car-gallery/logo/logo-4.webp';
import logo5 from '../../assets/img/car-gallery/logo/logo-5.webp';
import logo6 from '../../assets/img/car-gallery/logo/logo-6.webp';
import logo7 from '../../assets/img/car-gallery/logo/logo-7.webp';
import logo8 from '../../assets/img/car-gallery/logo/logo-8.webp';

interface CarProps {
  name: string;
  model: string;
  price: string;
  imageUrl: string;
  logoUrl: string;
  size: string;
}

const CarGallery: React.FC = () => {
  const cars: CarProps[] = [
    { name: "2025 Mustang GT", model: "Mustang", price: "$45,000", imageUrl: img1, logoUrl: logo1, size: "row-span-2" },
    { name: "2025 Audi A8", model: "Audi", price: "$90,000", imageUrl: img2, logoUrl: logo2, size: "" },
    { name: "Tesla Model S", model: "Tesla", price: "$70,000", imageUrl: img3, logoUrl: logo3, size: "" },
    { name: "2025 BMW X5", model: "BMW", price: "$85,000", imageUrl: img4, logoUrl: logo4, size: "col-span-2" },
    { name: "2025 Mercedes-Benz GLC", model: "Mercedes-Benz", price: "$60,000", imageUrl: img5, logoUrl: logo5, size: "row-span-2" },
    { name: "2025 Porsche 911", model: "Porsche", price: "$100,000", imageUrl: img6, logoUrl: logo6, size: "" },
    { name: "2025 Jaguar F-Type", model: "Jaguar", price: "$80,000", imageUrl: img8, logoUrl: logo8, size: "" },
    { name: "2025 Lexus RX", model: "Lexus", price: "$55,000", imageUrl: img7, logoUrl: logo7, size: "col-span-2" },
   
  ];

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-28 p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Car Gallery</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
  Explore our premium collection of the latest cars, featuring top brands and 
  the newest models. Find your dream car with the perfect balance of luxury, 
  performance, and style.
</p>
      <div className="grid md:grid-cols-3 gap-6 auto-rows-[180px] md:auto-rows-[250px]">
        {cars.map((car, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-lg shadow-xl hover:scale-105 transform transition-all duration-500 ${car.size}`}
          >
            <img
              src={car.imageUrl}
              alt={car.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-400 bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity duration-300 p-4 flex flex-col justify-center items-center">
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
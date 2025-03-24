/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import banner from "../../assets/img/car-gallery/car-1.webp";

const PopularMakes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All'); // Default to "All"
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Define the type for scrollContainerRef

  // Demo data for each brand
  const vehicles: { [key: string]: any[] } = {
    Audi: [
      {
        model: 'Audi A5 Miles – 2023',
        miles: '900 Miles',
        fuel: 'Petrol',
        transmission: 'Automatic',
        price: '$45,000',
        originalPrice: '$500.00',
        image: banner,
      },
      {
        model: 'Audi A4 Miles – 2022',
        miles: '150 Miles',
        fuel: 'Diesel',
        transmission: 'CVT',
        price: '$120,000',
        image: banner,
      },
      {
        model: 'Audi A4 Miles – 2022',
        miles: '150 Miles',
        fuel: 'Diesel',
        transmission: 'CVT',
        price: '$120,000',
        image: banner,
      },
    ],
    Ford: [
      {
        model: 'Ford Mustang – 2023',
        miles: '1200 Miles',
        fuel: 'Petrol',
        transmission: 'Manual',
        price: '$55,000',
        originalPrice: '$600.00',
        image: banner,
      },
      {
        model: 'Ford Mustang – 2023',
        miles: '1200 Miles',
        fuel: 'Petrol',
        transmission: 'Manual',
        price: '$55,000',
        originalPrice: '$600.00',
        image: banner,
      },
      {
        model: 'Ford Mustang – 2023',
        miles: '1200 Miles',
        fuel: 'Petrol',
        transmission: 'Manual',
        price: '$55,000',
        originalPrice: '$600.00',
        image: banner,
      },
      {
        model: 'Ford Mustang – 2023',
        miles: '1200 Miles',
        fuel: 'Petrol',
        transmission: 'Manual',
        price: '$55,000',
        originalPrice: '$600.00',
        image: banner,
      },
      {
        model: 'Ford Mustang – 2023',
        miles: '1200 Miles',
        fuel: 'Petrol',
        transmission: 'Manual',
        price: '$55,000',
        originalPrice: '$600.00',
        image: banner,
      },
    ],
    MercedesBenz: [
      {
        model: 'Mercedes-Benz C-Class – 2023',
        miles: '800 Miles',
        fuel: 'Petrol',
        transmission: 'Automatic',
        price: '$65,000',
        originalPrice: '$700.00',
        image: banner,
      },
    ],
  };

  // Combine all vehicles for the "All" tab
  const allVehicles = Object.values(vehicles).flat();

  // Function to handle scroll left or right
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.card')?.clientWidth || 0; // Get the width of one card
      const scrollAmount = cardWidth + 16; // Add gap (16px) between cards

      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="px-4 mx-12 md:mx-16 lg:mx-24">
        <h1 className="text-4xl font-bold text-center mb-8">Popular Makes</h1>

        {/* Tab System */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* "All" Button */}
          <button
            key="All"
            className={`px-6 py-2 rounded-full ${
              activeTab === 'All'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
            } transition duration-300`}
            onClick={() => setActiveTab('All')}
          >
            All
          </button>

          {/* Brand Buttons */}
          {Object.keys(vehicles).map((brand) => (
            <button
              key={brand}
              className={`px-6 py-2 rounded-full ${
                activeTab === brand
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500 border border-blue-500'
              } transition duration-300`}
              onClick={() => setActiveTab(brand)}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Scrollable Container with CSS Grid */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth space-x-4 pb-4"
            style={{ scrollbarWidth: 'none' }} // Hide scrollbar for Firefox
          >
            {(activeTab === 'All' ? allVehicles : vehicles[activeTab]).map((vehicle, index) => (
              <div
                key={index}
                className="card flex-shrink-0 w-72 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Image on Top with Hover Effect */}
                <div className="overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                {/* Details Below */}
                <div className="p-6 flex flex-col justify-between" >
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{vehicle.model}</h2>
                    <p className="text-gray-700 mb-4">{vehicle.details}</p>
                    <p className="text-sm text-gray-600 mb-2">{vehicle.miles}</p>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>{vehicle.fuel}</span>
                      <span>{vehicle.transmission}</span>
                    </div>
                    <p className="text-xl font-semibold mb-4">{vehicle.price}</p>
                    {/* {vehicle.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        {vehicle.originalPrice}
                      </p>
                    )} */}
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="mt-6 flex justify-center">
            <Button
              icon={<LeftOutlined />}
              onClick={() => handleScroll('left')}
              className="absolute  left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg mr-4"
            />
            <Button
              icon={<RightOutlined />}
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMakes;
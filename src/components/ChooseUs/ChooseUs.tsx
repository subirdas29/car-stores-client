
import { FaCar, FaDollarSign, FaTools, FaFileContract } from "react-icons/fa";
import banner from "../../assets/img/features/img-1.png";

const ChooseUs: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-8 md:mx-16 lg:mx-24">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h1>
          <p className="text-lg text-gray-600">
            Experience top-notch quality, unbeatable deals, and a seamless car buying journey with us.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Side (Desktop) / Top Side (Mobile) */}
          <div className="flex flex-col gap-8 lg:w-1/4">
            <div className="flex items-center gap-6">
              <div className="px-4 py-2 bg-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <FaCar className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">Wide Selection of Cars</h3>
                <p className="text-gray-600">Explore a vast range of top-quality vehicles to find your perfect match.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="px-4 py-2 bg-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <FaDollarSign className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">Best Price Guarantee</h3>
                <p className="text-gray-600">Get the most competitive prices on the market with unbeatable deals.</p>
              </div>
            </div>
          </div>

          {/* Car Image with Animation */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={banner}
              alt="Car"
              className="w-full  hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side (Desktop) / Bottom Side (Mobile) */}
          <div className="flex flex-col gap-8 lg:w-1/4">
            <div className="flex items-center gap-6 flex-row-reverse text-right">
              <div className="px-4 py-2 bg-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <FaTools className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Certified Quality</h3>
                <p className="text-gray-600">Every car undergoes rigorous inspection to ensure top-notch performance.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-row-reverse text-right">
              <div className="px-4 py-2 bg-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <FaFileContract className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Easy Financing Options</h3>
                <p className="text-gray-600">Flexible payment plans to help you own your dream car effortlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
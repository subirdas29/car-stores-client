import pic1 from "../../assets/img/connectstore/car_logo_1.webp";
import pic2 from "../../assets/img/connectstore/car_logo_2.webp";
import pic3 from "../../assets/img/connectstore/car_logo_3.webp";
import pic4 from "../../assets/img/connectstore/car_logo_4.webp";
import pic5 from "../../assets/img/connectstore/car_logo_5.webp";
import pic6 from "../../assets/img/connectstore/car_logo_6.webp";
import pic8 from "../../assets/img/connectstore/car_logo_8.webp";
import pic9 from "../../assets/img/connectstore/car_logo_9.webp";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic8, pic9];

const ConnectBrand = () => {
  return (
    <div className="my-28 mx-8 md:mx-12 lg:mx-24">
      <div className="text-center mb-8">
        <h1 className="text-4xl mb-4 font-bold">Connected Brand</h1>
        <p>Car Hunt easily integrates with major car selling platforms and marketplaces</p>
      </div>

      {/* Auto Scrolling Wrapper */}
      <div className="relative w-full overflow-hidden ">
        <div className="flex items-center space-x-16 animate-scroll">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="flex items-center drop-shadow-md p-3 mb-4 mt-6 justify-center bg-white rounded-xl shadow-lg min-w-[180px] md:min-w-[200px] lg:min-w-[240px] h-[100px] md:h-[120px] lg:h-[140px] transition-all duration-300 hover:scale-125 hover:shadow-xl"
            >
              <img src={img} className="w-full h-full object-contain" alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Styles for smooth scrolling */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default ConnectBrand;

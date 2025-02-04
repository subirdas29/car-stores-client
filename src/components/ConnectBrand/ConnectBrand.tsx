import pic1 from "../../assets/img/connectstore/car_logo_1.png";
import pic2 from "../../assets/img/connectstore/car_logo_2.png";
import pic3 from "../../assets/img/connectstore/car_logo_3.png";
import pic4 from "../../assets/img/connectstore/car_logo_4.png";
import pic5 from "../../assets/img/connectstore/car_logo_5.png";
import pic6 from "../../assets/img/connectstore/car_logo_6.png";
import pic7 from "../../assets/img/connectstore/car_logo_7.png";
import pic8 from "../../assets/img/connectstore/car_logo_8.png";
// import pic9 from "../../assets/img/connectstore/car_logo_9.png";

const ConnectBrand = () => {
  const images = [
    pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8,
  ];

  return (
    <div className="my-28 mx-8 md:mx-12 lg:mx-24 ">
      <div className="text-center">
        <h1 className="text-4xl mb-4 font-bold">Connected Brand</h1>
        <p>Car Hunt easily integrates with major car selling platforms and marketplaces</p>
      </div>
      <div className="overflow-hidden">
        {/* Grid Layout for Images */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-8">
          {images.map((img, index) => (
            <div key={index} className="p-4 flex items-center justify-center bg-white rounded-xl drop-shadow-lg">
              <img src={img} className="w-full" alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectBrand;

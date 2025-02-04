import { Carousel } from "antd";
import { NavLink } from "react-router-dom";

const slides = [
  {
    image: "assets/images/banner/car1.jpg",
    title: "Welcome to Our Store",
    description: "Explore our products.",
    buttonText: "Learn More",
  },
  {
    image: "assets/images/banner/car2.jpg",
    title: "New Collection",
    description: "Check out our latest arrivals.",
    buttonText: "Shop Now",
  },
  {
    image: "assets/images/banner/car3.jpg",
    title: "Seasonal Offers",
    description: "Don't miss out on great discounts.",
    buttonText: "Explore Offers",
  },
  {
    image: "assets/images/banner/car4.jpg",
    title: "Exclusive Deals",
    description: "Grab them before they're gone.",
    buttonText: "Buy Now",
  },
];

const Banner = () => {
  return (
    <div className="w-full h-[540px] overflow-hidden">
      <Carousel autoplay autoplaySpeed={1500}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[540px]" // Ensures full height
          >
            <div
              className="w-full flex flex-col items-center justify-center text-center relative bg-cover bg-center h-full"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Dark Blue Shadow Overlay */}
              <div className="absolute inset-0 bg-[rgba(0,0,90,0.4)]" />

              {/* Content */}
              <div className="relative z-10 px-6 md:px-12">
                <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
                  {slide.title}
                </h1>
                <p className="text-white text-lg font-bold mb-4">
                  {slide.description}
                </p>
                <NavLink to="/all-cars">
                  <button className="bg-[#1890ff] text-white px-6 py-3 text-lg rounded-md hover:bg-[#0073e6] transition-all">
                    {slide.buttonText}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

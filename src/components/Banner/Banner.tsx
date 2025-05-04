import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const slides = [
  {
    image: "assets/images/banner/car1.webp",
    title: "Welcome to Our Store",
    description: "Explore our products.",
    buttonText: "Learn More",
  },
  {
    image: "assets/images/banner/car2.webp",
    title: "New Collection",
    description: "Check out our latest arrivals.",
    buttonText: "Shop Now",
  },
  {
    image: "assets/images/banner/car3.webp",
    title: "Seasonal Offers",
    description: "Don't miss out on great discounts.",
    buttonText: "Explore Offers",
  },
  {
    image: "assets/images/banner/car4.webp",
    title: "Exclusive Deals",
    description: "Grab them before they're gone.",
    buttonText: "Buy Now",
  },
];

const categories = [
 "SUV", "Hatchback", "Crossover", "Convertible", "Sedan", "Sports",
];

const Banner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1.5; // Adjust speed here
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset to create a perfect loop
      }
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <div className="w-full relative">
      {/* Banner Section */}
      <div className="w-full h-[540px] overflow-hidden relative">
        <Carousel autoplay autoplaySpeed={2000}>
          {slides.map((slide, index) => (
            <div key={index} className="flex items-center justify-center h-[540px]">
              <div
                className="w-full flex flex-col items-center justify-center text-center relative bg-cover bg-center h-full"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                {/* Dark Blue Shadow Overlay */}
                <div className="absolute inset-0 bg-[rgba(0,0,90,0.4)]" />

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12">
                  <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
                    {slide.title}
                  </h1>
                  <p className="text-white text-lg font-bold mb-4">
                    {slide.description}
                  </p>
                  <NavLink to="/all-cars">
                    <button className="bg-[#1890ff] cursor-pointer text-white px-4 py-2 md:px-6 md:py-3 text-lg rounded-md hover:bg-[#0073e6] transition-all">
                      {slide.buttonText}
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Scrolling Categories */}
        <div className="absolute bottom-5 w-full py-4 bg-transparent overflow-hidden">
          <div className="flex overflow-hidden whitespace-nowrap">
            <div ref={scrollRef} className="flex items-center text-blue-300 text-4xl font-bold">
              {/* Repeat categories infinitely for seamless scrolling */}
              {[...categories, ...categories, ...categories].map((category, index) => (
                <span key={index} >
                  {category}<span className="mx-6">—</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

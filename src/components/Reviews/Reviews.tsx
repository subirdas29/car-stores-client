import { Carousel, Button, Rate } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";

import { CarouselRef } from "antd/es/carousel";

import person1 from "../../assets/img/reviews/person1.webp";
import person2 from "../../assets/img/reviews/person2.webp";
import person3 from "../../assets/img/reviews/person3.webp";
import person4 from "../../assets/img/reviews/person4.webp";
import person5 from "../../assets/img/reviews/person5.webp";

const reviews = [
  {
    img: person1,
    name: "Robert A. Voltaire",
    title: "Great Experience!",
    rating: 5,
    feedback:
      "I recently bought a car from this website, and the process was smooth and hassle-free. Highly recommend!",
  },
  {
    img: person2,
    name: "Emily Johnson",
    title: "Excellent Service!",
    rating: 4.5,
    feedback:
      "Fantastic experience! The customer support was responsive, and the car I received was exactly as described.",
  },
  {
    img: person3,
    name: "Michael Smith",
    title: "Highly Recommend!",
    rating: 5,
    feedback:
      "This website made my car-buying journey easy and convenient. The listings were clear, and the purchase process was seamless.",
  },
  {
    img: person4,
    name: "Sophia Williams",
    title: "Trustworthy Platform",
    rating: 4.5,
    feedback:
      "I was skeptical at first, but after my first purchase, I can say this is one of the best platforms to buy used cars safely.",
  },
  {
    img: person5,
    name: "David Brown",
    title: "Smooth Transaction",
    rating: 5,
    feedback:
      "A great platform with a variety of car options. I found exactly what I was looking for, and the process was stress-free.",
  },
];

const Reviews = () => {
  const carouselRef = useRef<CarouselRef | null>(null);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(2);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className="bg-[#F7F7F7]  py-24 mt-28">
      <div className="mx-8 md:mx-16 lg:mx-24">
        <div className="mb-12 lg:mb-20 text-center lg:text-left lg:flex gap-12 lg:justify-start">
          <h1 className="text-4xl font-bold w-full lg:w-2/6">
            Trusted by thousands of buyers and sellers worldwide. 🚗
          </h1>
          <p className="w-full lg:w-2/6 mt-6 lg:mt-0">
            Whether you're a first-time buyer or a seasoned car enthusiast, we
            are committed to providing a seamless and reliable car-buying
            experience. 🚗✨
          </p>
        </div>
        <div className="relative">
       <Carousel ref={carouselRef} dots autoplay infinite slidesToShow={visibleSlides}>
          {reviews.map((review, index) => (
            <div key={index} className="p-3">
              <div className="h-[340px] p-6 md:p-10 bg-white border border-gray-200 shadow-lg rounded-md">
                <div className="flex gap-6 mb-6">
                  <img className="h-[64px] w-[64px] rounded-xl" src={review.img} alt={review.name} />
                  <div>
                    <h1 className="text-2xl font-bold">{review.name}</h1>
                    <p className="font-semibold mb-2">"{review.title}"</p>
                    <Rate defaultValue={review.rating} disabled allowHalf />
                  </div>
                </div>
                <p>{review.feedback}</p>
              </div>
            </div>
          ))}
        </Carousel>
    

        {/* Fixed Navigation Buttons (Visible on all screen sizes) */}
        <div className="absolute top-1/2 transform -translate-y-1/2 z-50 left-0">
          <Button
            onClick={handlePrev}
            className="text-white bg-[#1890ff] hover:bg-[#0073e6] rounded-full p-3 cursor-pointer shadow-lg"
            icon={<LeftOutlined />}
          />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 z-50 right-0">
          <Button
            onClick={handleNext}
            className="text-white bg-[#1890ff] hover:bg-[#0073e6] rounded-full p-3 cursor-pointer shadow-lg"
            icon={<RightOutlined />}
          />
        </div>
        </div>
        {/* Carousel */}
      
      </div>
    </div>
  );
};

export default Reviews;

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import person1 from '../../assets/img/reviews/person1.png'
import person2 from '../../assets/img/reviews/person2.png'
import person3 from '../../assets/img/reviews/person3.png'
import person4 from '../../assets/img/reviews/person4.png'
import person5 from '../../assets/img/reviews/person5.jpeg'

// import './styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {
  


    return (
        <div className='bg-[#F7F7F7] '>
            <div className='mx-8 md:mx-16 lg:mx-24 py-24'>
                <div className='mb-12 lg:mb-20 text-center lg:text-left lg:flex gap-12 lg:justify-start'>
                    <h1 className='text-4xl font-bold w-full lg:w-2/6'>Trusted by thousands of buyers and sellers worldwide. 🚗</h1>
                    <p className='w-full lg:w-2/6 mt-6 lg:mt-0'>Whether you're a first-time buyer or a seasoned car enthusiast, we are committed to providing a seamless and reliable car-buying experience. Our platform offers a wide selection of top brands, competitive pricing, and exceptional customer support to ensure your journey to owning the perfect car is smooth and hassle-free. 🚗✨</p>
                    <div className='hidden lg:block'></div>
                </div>
                <div>

                    {/* review */}
                    <Swiper
                         navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                          }}
                          pagination={{
                            el: '.custom-pagination',
                            clickable: true,
                          }}
                          breakpoints={{
                            
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            }
                        }}
                          freeMode={true}
                          modules={[FreeMode, Pagination, Navigation]}
                          className="mySwiper "
                    >
                        <SwiperSlide>
                            <div className=' h-[340px] p-6 md:p-10 bg-[#FFFFFF] border-1 border-gray-200 shadow-lg rounded-md'>
                                <div className=' flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person1} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Robert A.Voltaire</h1>
                                        <p className=' font-semibold mb-2'>"Great Experience!" </p>
                                        <div className='flex gap-2'>
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-8'>
                                    <p >
                                    "I recently bought a car from this website, and the process was smooth and hassle-free. The customer service was excellent, and I got a great deal on my new car! Highly recommend."
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' h-[340px] p-10 bg-[#FFFFFF] border-1 border-gray-200 shadow-lg rounded-md'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person2} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Quinten Barney</h1>
                                        <p className=' font-semibold mb-2'> "Excellent Service!"  </p>
                                        <div className='flex gap-2'>
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                    "The staff was very helpful in guiding me through the purchase process. The car was exactly as described, and the delivery was on time. I’m very satisfied with my purchase!"
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-10 h-[340px] border-1 border-gray-200 shadow-lg rounded-md bg-[#FFFFFF]'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person3} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Nikki</h1>
                                        <p className='textcolor font-semibold mb-2'>"Highly Recommended!"</p>
                                        <div className='flex gap-2'>
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                    "I was a bit skeptical about buying a car online, but this website made it easy. The car was in perfect condition, and the support team answered all my questions. Will definitely buy again!"
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-10 h-[340px] border-1 border-gray-200 shadow-lg rounded-md bg-[#FFFFFF]'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person4} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Emily T.</h1>
                                        <p className='textcolor font-semibold mb-2'>"Best Car Buying Experience!"</p>
                                        <div className='flex gap-2'>
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                    "I got my dream car at an unbeatable price! The whole transaction was transparent, and the customer service team was very responsive."
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-10 h-[340px] border-1 border-gray-200 shadow-lg rounded-md bg-[#FFFFFF]'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person5} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Michael B.</h1>
                                        <p className='textcolor font-semibold mb-2'>"Reliable and Trustworthy!"</p>
                                        <div className='flex gap-2'>
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                            <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                    "This platform offers a wide variety of car brands with great prices. The process was straightforward, and I felt confident in my purchase."
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <div className="flex justify-between items-center mt-6 mx-12 lg:mx-0">
                        {/* Custom previous button */}
                        <div
                            // ref={prevRef}
                            className="custom-prev text-white bg-[#1890ff] rounded-full p-3 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>

                        {/* Pagination */}
                        <div className="custom-pagination flex justify-center gap-2"></div>

                        {/* Custom next button */}
                        <div
                            // ref={nextRef}
                            className="custom-next text-white bg-[#1890ff] rounded-full p-3 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=" w-4 h-4 md:w-6 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews

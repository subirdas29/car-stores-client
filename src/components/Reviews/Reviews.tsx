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
            <div className='mx-8 sm:mx-16 md:mx-32 py-24'>
                <div className='mb-12 lg:mb-20 text-center lg:text-left lg:flex gap-12 lg:justify-start'>
                    <h1 className='text-4xl font-bold w-full lg:w-2/6'>Trusted by over 8M sellers around the world</h1>
                    <p className='w-full lg:w-2/6 mt-6 lg:mt-0'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
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
                            <div className=' p-6 md:p-10 rounded-3xl bg-[#FFFFFF]'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person1} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Robert A.Voltaire</h1>
                                        <p className='textcolor font-semibold mb-2'>Store link</p>
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
                                        Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person2} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Quinten Barney</h1>
                                        <p className='textcolor font-semibold mb-2'> Etsy Merchant </p>
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
                                        We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person3} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Nikki</h1>
                                        <p className='textcolor font-semibold mb-2'>Store link</p>
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
                                        Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person4} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Spencer, Brett</h1>
                                        <p className='textcolor font-semibold mb-2'>Store link</p>
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
                                        Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
                                <div className='flex gap-6 mb-6'>
                                    <img className='h-[64px] w-[64px] rounded-xl' src={person5} alt="" />
                                    <div>
                                        <h1 className='text-2xl font-bold'>April Showers</h1>
                                        <p className='textcolor font-semibold mb-2'>Store link</p>
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
                                        I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.
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

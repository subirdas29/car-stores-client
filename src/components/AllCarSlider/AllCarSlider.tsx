
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/img/SecondSliderImages/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.png';
import img2 from '../../assets/img/SecondSliderImages/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg';
import img3 from '../../assets/img/SecondSliderImages/Aesop_Harbour_City_II_Hero_Bleed_Desktop_2880x1620px.png';

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import styles from "./StoreLocator.module.css";

// import required modules
import 'swiper/css';
import 'swiper/css/pagination';


import { Scrollbar, FreeMode, Navigation, Pagination,Autoplay } from 'swiper/modules';

import { FaArrowRight } from 'react-icons/fa';
// import './styles.css'

const AllCarSlider = () => {
    return (
        <section className=" dark:text-black">
        <div className="flex flex-col justify-center py-6  mx-auto sm:py-12 lg:py-16 lg:flex-row xl:flex-row lg:justify-between relative ">
            
            <div className="flex flex-col justify-top py-6 lg:pl-20 xl:pl-20 px-8 text-center rounded-sm  lg:max-w-md xl:max-w-lg lg:text-left">
                <p>Tokens of appreciation</p>
                <h1 className="text-3xl font-bold leading-none sm:text-2xl my-4">Corporate gifts
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    
                    <button className="btn border border-slate-300 hover:bg-black hover:text-white px-6 py-5 text-sm font-medium rounded flex items-center justify-between">Learn more about this service <FaArrowRight className='ml-8 text-xs'/></button>
                </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-0 ml-10 lg:w-7/12 ">
            <Swiper
        slidesPerView={1}
        // centeredSlides={false}
        navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
        
       
          scrollbar={true}
        //   navigation={true}
        
          freeMode={true}
          modules={[Autoplay,Scrollbar,FreeMode, Pagination, Navigation]}
                className="mySwiper my-20 "
      >
        <SwiperSlide>
          <img src={img1}/>
          <p >Aesop New Town Plaza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <p>Aesop ifc mall</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <p>Aesop Harbour City</p>
        </SwiperSlide>       
      </Swiper>
      <div className="absolute bottom-20 flex gap-80 mx-12 lg:mx-0 z-2">
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
    </section>
    );
};

export default AllCarSlider;
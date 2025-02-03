import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../../assets/img/connectstore/car_logo_1.png'
import pic2 from '../../assets/img/connectstore/car_logo_2.png'
import pic3 from '../../assets/img/connectstore/car_logo_3.png'
import pic4 from '../../assets/img/connectstore/car_logo_4.png'
import pic5 from '../../assets/img/connectstore/car_logo_5.png'
import pic6 from '../../assets/img/connectstore/car_logo_6.png'
import pic7 from '../../assets/img/connectstore/car_logo_7.png'
import pic8 from '../../assets/img/connectstore/car_logo_8.png'
import pic9 from '../../assets/img/connectstore/car_logo_9.png'




import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';

const ConnectBrand = () => {
  return (
    <div className='my-20 mx-8 md:mx-12 lg:mx-24'>
     <div className='text-center'>
     <h1 className='text-4xl mb-4 font-bold '>Connected Brand </h1>
      <p>Car Hunt easily integrates with major car selling platforms and marketplaces</p>
     </div>
     <div>
     <Swiper
      breakpoints={{
                            
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
      
        768: {
          slidesPerView: 5,
          spaceBetween: 30,
      },
        
        0: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }}
   

        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
          <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg mb-8 '>
          <img src={pic1} className='w-full' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg'>
          <img src={pic2} className=' w-full' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg'>
          <img src={pic3} className=' w-full' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg'>
          <img src={pic4} className=' w-full' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg'>
          <img src={pic5} className=' w-full' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg'>
          <img src={pic6} className=' w-full' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg'>
          <img src={pic7} className=' w-full' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg'>
          <img src={pic8} className=' w-full' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-4 w-22 h-22 md:w-28 md:h-28 flex items-center justify-center bg-[#FFFFFF] rounded-xl drop-shadow-lg'>
          <img src={pic9} className=' w-full' alt="" />
          </div>
        </SwiperSlide>
      
      
      </Swiper>
     </div>
     {/* <div>
        <div className=' bg-[#E2F7E3] mt-16 h-[144px] bg-no-repeat bg-right border rounded-badge' style={{
          backgroundImage: "url(https://i.ibb.co.com/94Y7gmn/bg.png)",
        }}>

            <div className='flex items-center justify-around my-6 lg:my-8 px-4 md:px-0'>
                <p className=' md:text-lg lg:text-2xl font-bold w-1/2 lg:w-2/5  text-[#1F6B45]'>Are you a large business looking for custom solutions?</p>
                <button className='h-9 px-4 md:px-6 bg-white font-semibold'>Talk to sales</button>
            </div>
           
        </div>
     </div> */}
    </div>
  )
}

export default ConnectBrand

import { useState } from 'react'
import car1 from '../../../public/assets/images/banner/car1.jpg'
import car2 from '../../../public/assets/images/banner/car2.jpg'
import car3 from '../../../public/assets/images/banner/car3.jpg'
import car4 from '../../../public/assets/images/banner/car4.jpg'
const CarDetails = () => {
  const [selectedImage, setSelectedImage] = useState(car1); // Initial big image

  const images = [car1, car2, car3, car4];
  return (
    <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url('assets/images/AllCars/allcarsbanner.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              padding: "80px",
              position: "relative",
            }}
          >
            {/* Dark Blue Shadow Overlay */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(0, 0, 90, 0.4)", // Dark blue overlay
                zIndex: "1",
              }}
            />
            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: "2",
              }}
            >
              <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", fontWeight:"bold", color:"white" }}>
                Cars
              </h1>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px" ,fontWeight:"bold", color:"white"  }}>
              Explore the world’s finest cars and find your perfect match.
              </p>
           
            </div>
          </div>
        </div>
     <div className="mx-8 md:mx-12 lg:mx-24 my-28 grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-16">
            <div className='col-span-2'>


            <div className="flex flex-col items-center">
     
      <img src={selectedImage} className="rounded-3xl w-full mb-6 lg:mb-8" alt="Selected" />

      {/* Thumbnails */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`rounded-3xl h-20 md:h-28 lg:h-30 cursor-pointer transition-transform transform hover:scale-110 ${
              selectedImage === image ? "ring-3 ring-[#1890ff]" : ""
            }`}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)} // Update the big image on click
          />
        ))}
      </div>
    </div>




              <div className='mt-12'>
                <h1 className='text-3xl font-semibold mb-4'>Car descriptions</h1>
                <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.
How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious.</p>
              </div>
              <div className='mt-10'>
                <h1 className='text-2xl font-semibold mb-4'>Features</h1>
                <div className='grid grid-cols-3'>
                 
               <div className='flex items-center '>
               <span className='mr-3 w-2 h-2 bg-black rounded-full'></span> <p>Blind spot alert</p>
               </div>
               <div className='flex items-center '>
               <span className='mr-3 w-2 h-2 bg-black rounded-full'></span> <p>Bluetooth</p>
               </div>
               <div className='flex items-center '>
               <span className='mr-3 w-2 h-2 bg-black rounded-full'></span> <p>Heated seats</p>
               </div>
               <div className='flex items-center '>
               <span className='mr-3 w-2 h-2 bg-black rounded-full'></span> <p>Leather seats</p>
               </div>
               <div className='flex items-center '>
               <span className='mr-3 w-2 h-2 bg-black rounded-full'></span> <p>Side airbags</p>
               </div>
               <div className='flex items-center '>
               <span className='mr-3 w-2 h-2 bg-black rounded-full'></span> <p>alert</p>
               </div>
                
                </div>
              </div>
            </div>
           <div className='my-12 md:my-0'>
           <div>
              <p>Chevrolet nexa bkuysn camaro 2-door convertible dark metblack</p>
              <div className='flex'>
                <p>2022</p>
                <p>Convertible</p>
                <p>Diesel</p>
              </div>
              <hr className='my-4' />
              <p className='text-2xl font-bold'>$85,000</p>
              <p>Add to favorites</p>
            </div>
            <div className='my-8 rounded-4xl p-11 md:p-4 lg:p-11 bg-[#EDF1F4]'>


              <div className='flex justify-between'>
              <div>
                <p className='font-bold'>Make:</p>
                <p className='font-bold'>Model:</p>
                <p className='font-bold'>Drivetype:</p>
                
              </div>
              <div>
                <p>Chevrolet</p>
                <p>Camaro</p>
                <p>Front wheel drive</p>
              </div>
              </div>
            </div>
            <div>
           
                <button className='rounded-md py-2 px-5 border-1 w-full bg-transparent  hover:text-white  text-[#1890ff]   hover:bg-[#1890ff] font-bold cursor-pointer mb-4'>Add To Cart</button>
            
            <button className='rounded-md py-2 px-5 border-1 hover:text-[#1890ff]  w-full hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer '>Order Now</button>
            
            </div>
           </div>
     </div>
    </div>
  )
}

export default CarDetails

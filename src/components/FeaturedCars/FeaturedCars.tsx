

import { NavLink } from 'react-router-dom'
import car1 from '../../../public/assets/images/banner/car1.jpg'
const FeaturedCars = () => {
  return (
    <div className='my-28 mx-12 md:mx-16 lg:mx-24'>
        <h1 className='text-4xl font-bold mb-4 text-center'>Featured Cars</h1>
        <p className='text-center mb-8'>Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5'>
        
        <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={car1} className='p-3 rounded-md' alt="" />
           <div className='px-6 py-4'>
           <h1 className='font-bold'>VW Polo</h1>
           <div className='flex'>
            <p>5</p>
            <p>2</p>
            <p>4</p>
            <p>Hatchback</p>
           </div>
           <hr className='my-3 text-gray-300' />
            <p className='text-sm text-gray-500'>Daily rate from</p>
            <div className='flex justify-between items-center pb-4'>
                <p className='text-2xl font-bold'>$147</p>
                <button className='rounded-md px-4 py-1 border-1 hover:text-[#1890ff] hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer'>Order Now</button>
            </div>
           </div>
        </div>
        <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={car1} className='p-3 rounded-md' alt="" />
           <div className='px-6 py-4'>
           <h1 className='font-bold'>VW Polo</h1>
           <div className='flex'>
            <p>5</p>
            <p>2</p>
            <p>4</p>
            <p>Hatchback</p>
           </div>
           <hr className='my-3 text-gray-300' />
            <p className='text-sm text-gray-500'>Daily rate from</p>
            <div className='flex justify-between items-center pb-4'>
                <p className='text-2xl font-bold'>$147</p>
                <button className='rounded-md px-4 py-1 border-1 hover:text-[#1890ff] hover:bg-transparent  text-white  bg-[#1890ff]  font-bold cursor-pointer'>Order Now</button>
            </div>
           </div>
        </div>
        <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={car1} className='p-3 rounded-md' alt="" />
           <div className='px-6 py-4'>
           <h1 className='font-bold'>VW Polo</h1>
           <div className='flex'>
            <p>5</p>
            <p>2</p>
            <p>4</p>
            <p>Hatchback</p>
           </div>
           <hr className='my-3 text-gray-300' />
            <p className='text-sm text-gray-500'>Daily rate from</p>
            <div className='flex justify-between items-center pb-4'>
                <p className='text-2xl font-bold'>$147</p>
                <button className='rounded-md px-4 py-1 border-1 hover:text-[#1890ff] hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer'>Order Now</button>
            </div>
           </div>
        </div>
       
      </div>
    
      <div className='flex justify-center mt-8'>
      <NavLink to='/allcars'>
      <button className='rounded-md py-2 px-5 border-1 hover:text-[#1890ff] hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer '>View All</button>
      </NavLink>
       </div>

    </div>
  )
}

export default FeaturedCars

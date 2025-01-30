

import { NavLink, useParams } from 'react-router-dom'
import car1 from '../../../public/assets/images/banner/car1.jpg'
const FeaturedCars = ({car}) => {
 

  

  const {_id ,brand,model,
    imageUrl,price,category,description,quantity,isStock} = car
  console.log(_id)

 

  return (
    <div>
        
        <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={imageUrl} className='p-3 rounded-md' alt="" />
           <div className='py-2 px-3 lg:px-6 lg:py-4'>
           <h1 className='font-bold'>{brand} {model}</h1>
           <div className='flex'>
            <p>5</p>
            <p>2</p>
            <p>4</p>
            <p>Hatchback</p>
           </div>
           <hr className='my-3 text-gray-300' />
            <p className='text-sm text-gray-500'>Daily rate from</p>
            <div className='flex justify-between items-center mt-4 pb-4'>
                <p className='text-2xl font-bold mr-2'>{price}</p>
                <NavLink to={`car-details/${_id}`}>
               <button className='rounded-md px-4 py-1 md:px-6 md:py-2 border-1 hover:text-[#1890ff] hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer '>Details</button>
               </NavLink>
            </div>
           </div>
        </div>
       

    </div>
  )
}

export default FeaturedCars

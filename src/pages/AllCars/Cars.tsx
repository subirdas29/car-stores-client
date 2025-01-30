import { TCar } from "../../types/users.types"
import car2 from '../../../public/assets/images/banner/car2.jpg'
import { NavLink } from "react-router-dom"

const Cars = ({car}) => {

  console.log(car)
    const {_id,brand,model,imageUrl,price,category,description,quantity,isStock} = car

  return (
   
        
      <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={imageUrl} className='p-3 rounded-md' alt="" />
           <div className='px-6 py-4'>
           <h1 className='font-bold'>{brand}</h1>
           <div className='flex'>
            <p>5</p>
            <p>2</p>
            <p>4</p>
            <p>{model}</p>
           </div>
           <hr className='my-3 text-gray-300' />
            <p className='text-sm text-gray-500'>Price</p>
            <div className='flex justify-between items-center pb-4'>
                <p className='text-2xl font-bold'>{price}</p>
                <NavLink to={`/car-details/${_id}`}>
                <button className='rounded-md px-4 py-1 md:px-6 md:py-2 border-1 hover:text-[#1890ff] hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer '>Details</button>
                </NavLink>
            </div>
           </div>
        </div>

      
       
 
  )
}

export default Cars

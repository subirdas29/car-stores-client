import { TCar } from "../../types/users.types"
import car2 from '../../../public/assets/images/banner/car2.jpg'

const Cars = ({car}) => {

    const {brand,model,year,price,category,description,quantity,isStock} = car

  return (
   
        
      <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={car2} className='p-3 rounded-md' alt="" />
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
                <button className='rounded-md px-4 py-1 text-white bg-[#1890ff] font-bold cursor-pointer'>Order Now</button>
            </div>
           </div>
        </div>

      
       
 
  )
}

export default Cars

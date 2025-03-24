import { Link} from 'react-router-dom';
import { Car, CarFront, ShoppingBag, User } from 'lucide-react';
import { TCar } from '../../types/admin.types';

type FeaturedCarsProps = {
  car: TCar;
};

const FeaturedCars = ({ car }: FeaturedCarsProps) => {
  const { _id, brand, model, imageUrl, price, category } = car;



  return (
    <div>
      <div className="border-1 border-gray-200 shadow-lg rounded-md">
     
        <img 
          src={imageUrl?.[0]} 
          className="h-[170px] w-full p-3 rounded-md" 
          
          alt={`${brand} ${model}`} 
          loading="lazy"
        />
        <div className="py-2 px-3 lg:px-6 lg:py-4">
          <h1 className="font-bold">{brand} {model}</h1>
          <div className="flex justify-between items-center my-2">
            <p className="flex gap-1"><User size={20} color="#1890ff" />5</p>
            <p className="flex gap-1"><Car size={20} color="#1890ff" />2</p>
            <p className="flex gap-1"><CarFront size={20} color="#1890ff" />4</p>
            <p className="flex gap-1"><ShoppingBag size={20} color="#1890ff" />{category}</p>
          </div>
          <hr className="my-3 text-gray-300" />
          <p className="text-sm text-gray-500">Price:</p>
          <div className="flex justify-between items-center mt-4 pb-4">
            <p className="text-2xl font-bold mr-2">${price}</p>
            <Link to={`/car-details/${_id}`}>
            <button
            
              className="rounded-md px-4 py-1 md:px-6 md:py-2 border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer"
            >
              Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;

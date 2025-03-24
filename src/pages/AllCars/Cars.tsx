import { Link,  } from "react-router-dom";
import { Car, CarFront, ShoppingBag, User } from "lucide-react";
import { TCar } from "../../types/admin.types";


type FeaturedCarsProps = {
  car: TCar;
};

const Cars = ({ car }: FeaturedCarsProps) => {

  const { _id, brand, imageUrl, price, category, model } = car;




  return (
    <div className="border-1 border-gray-200 shadow-lg rounded-md ">

      <img
        src={imageUrl?.[0]}
        className="h-[170px] w-full p-3 rounded-md"
        alt={`${brand} ${model}`}
        loading="lazy"
      />
      <div className="p-3">
        <h1 className="font-bold">{brand} {model}</h1>
        <div className="flex justify-between items-center my-2">
          <p className="flex gap-1 items-center">
            <User size={16} color="#1890ff" />5
          </p>
          <p className="flex gap-1 items-center">
            <Car size={16} color="#1890ff" />2
          </p>
          <p className="flex gap-1 items-center">
            <CarFront size={16} color="#1890ff" />4
          </p>
          <p className="flex gap-1 items-center">
            <ShoppingBag size={16} color="#1890ff" />
            {category}
          </p>
        </div>
        <hr className="my-3 text-gray-300" />
        <p className="text-sm text-gray-500">Price:</p>
        <div className="flex justify-between items-center pb-4">
          <p className="text-lg lg:text-xl font-bold">${price}</p>
        <Link to={`/car-details/${_id}`}>
        <button
           className="rounded-md px-3 py-1 lg:px-4  border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer"
         >
           Details
         </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Cars;

import { useNavigate } from "react-router-dom";
import { Car, CarFront, ShoppingBag, User } from "lucide-react";
import { TCar } from "../../types/admin.types";
import { useAppSelector } from "../../redux/hook";
import { useCurrentToken } from "../../redux/features/auth/authSlice";

type FeaturedCarsProps = {
  car: TCar;
};

const Cars = ({ car }: FeaturedCarsProps) => {
  console.log(car);
  const { _id, brand, imageUrl, price, category, model } = car;

  const token = useAppSelector(useCurrentToken); 
  const navigate = useNavigate(); 

  const handleDetailsClick = () => {
    if (token) {
      navigate(`/car-details/${_id}`); 
    } else {
      navigate("/login"); 
    }
  };

  return (
    <div className="border-1 border-gray-200 shadow-lg rounded-md">

      <img
        src={imageUrl}
        className="h-[250px] w-full p-3 rounded-md"
        alt={`${brand} ${model}`}
        loading="lazy"
      />
      <div className="px-6 py-4">
        <h1 className="font-bold">{brand} {model}</h1>
        <div className="flex justify-between items-center my-2">
          <p className="flex gap-1">
            <User size={20} color="#1890ff" />5
          </p>
          <p className="flex gap-1">
            <Car size={20} color="#1890ff" />2
          </p>
          <p className="flex gap-1">
            <CarFront size={20} color="#1890ff" />4
          </p>
          <p className="flex gap-1">
            <ShoppingBag size={20} color="#1890ff" />
            {category}
          </p>
        </div>
        <hr className="my-3 text-gray-300" />
        <p className="text-sm text-gray-500">Price:</p>
        <div className="flex justify-between items-center pb-4">
          <p className="text-2xl font-bold">${price}</p>
          <button
            onClick={handleDetailsClick}
            className="rounded-md px-4 py-1 md:px-6 md:py-2 border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cars;

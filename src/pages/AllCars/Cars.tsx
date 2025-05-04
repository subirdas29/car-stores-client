import { Link } from "react-router-dom";
import { Car, CarFront, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { TCar } from "../../types/admin.types";
import { toast, Toaster } from "sonner";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";

type FeaturedCarsProps = {
  car: TCar;
};

const Cars = ({ car }: FeaturedCarsProps) => {
  const { _id, brand, imageUrl, price, category, model, stock } = car;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (!_id) {
      toast.error("Car ID is missing.");
      return;
    }
    dispatch(
      addToCart({
        _id,
        car: _id,
        name: brand!,
        model: model!,
        category: category!,
        price: price!,
        quantity: 1,
        stock: stock!,
        imageUrl: imageUrl!,
      })
    );

    // Show toast notification
    toast.success(`${brand} added to cart!`);
  };

  return (
    <div className="border-1 border-gray-200 shadow-lg rounded-md ">
      <img
        src={imageUrl?.[0]}
        className="h-[170px] w-full p-3 rounded-md"
        alt={`${brand} ${model}`}
        loading="lazy"
      />
      <div className="p-3">
     <div className="flex justify-between">
     <h1 className="font-bold">
          {brand} {model}
        </h1>
        <button
            onClick={handleAddToCart}
          className="cursor-pointer"
          >
            <Toaster />
            <ShoppingCart color="#1890ff"/>
          </button>
     </div>

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
          <p className="text-lg lg:text-xl font-bold">৳ {price}</p>
       
          <Link to={`/car-details/${_id}`}>
            <button className="rounded-md px-3 py-1 lg:px-4  border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cars;

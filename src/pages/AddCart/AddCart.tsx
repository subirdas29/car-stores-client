import { useEffect, useState } from "react"
import { useCreateOrderMutation } from "../../redux/features/order/orderApi"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { toast } from "sonner"
import { removeFromCart, updateQuantity } from "../../redux/features/cart/cartSlice"
import { ShoppingBagIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Trash } from "lucide-react";


const AddCart = () => {
    const cartData = useAppSelector((state) =>state.cart)

    const [createOrder,{isLoading,isSuccess,data,isError,error}] = useCreateOrderMutation()

    console.log(cartData)

    const handlePlaceOrder = async()=>{
      
        await createOrder({cars:cartData.items})
    }


    const dispatch = useAppDispatch()
    const toastId = 'cart'

    const redWarningIcon = <AlertTriangle size={20} className="text-red-500" />;

    useEffect(() => {
        if (!data) return; // Prevents accessing properties on undefined
      
        if (isLoading) toast.loading("Processing...", { id: toastId });
    
        if (isSuccess) {
          toast.success(data.message, { id: toastId });
        
          if (data.data) {
            setTimeout(() => {
              window.location.href = data.data;
            }, 1000);
          }
        }
      
        if (isError) toast.error(JSON.stringify(error), { id: toastId });
      }, [data, error, isError, isLoading, isSuccess]); 

      console.log(data)
      // const [added, setAdded] = useState(false);

  return (
    <div className="my-24  grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl  mx-8 md:mx-12 lg:mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
    {/* Left Side - Cart Items */}
    <div className="md:col-span-2 space-y-4">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cartData.items.length > 0 ? (
        <div className="space-y-4">
          {cartData.items.map((item) => (
            <div key={item.car} className="flex flex-col md:flex-row items-center justify-between border-b pb-4">
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1 ml-4 text-center md:text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                  <button
                    onClick={() => {
                      if(item.quantity<=1){
                        toast.warning("Quantity cannot be less than 1",{ icon: redWarningIcon });
                        return
                      }
                      dispatch(updateQuantity({ id: item.car, quantity: Math.max(item.quantity - 1, 1) }))}
                    }
                    className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => 
                     {
                      if (item.quantity >= item.stock) {
                        toast.warning("You cannot add more than available stock!",{ icon: redWarningIcon });
                        return;
                      }
                      dispatch(updateQuantity({ id: item.car, quantity: Math.min(item.quantity + 1, item.stock) }))}
                     }
                    className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800">${(item.quantity * item.price).toFixed(2)}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.car))}
                className="text-[#1890ff] hover:text-blue-600 cursor-pointer ml-2"
              >
                <Trash size={20} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>

    {/* Right Side - Order Summary */}
    <div className="md:col-span-1 bg-gray-100 p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <MapPin size={18} /> Location
      </h3>
      <p className="text-sm text-gray-600"> Chattogram Sadar, Chattogram</p>
      <div className="border-b my-3"></div>
      <h3 className="text-lg font-semibold">Order Summary</h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm font-medium text-gray-700">Subtotal ({cartData.totalQuantity} items):</span>
        <span className="text-lg font-bold">${cartData.totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm font-medium text-gray-700">Shipping Fee:</span>
        <span className="text-lg font-bold">$0.00</span>
      </div>
      <div className="border-b my-3"></div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-lg font-bold">${cartData.totalPrice.toFixed(2)}</span>
      </div>
      <button
        className="w-full cursor-pointer bg-[#1890ff] border hover:text-[#1890ff] text-white font-semibold rounded-md py-3 mt-4 hover:bg-transparent"
        onClick={handlePlaceOrder}
      >
        {isLoading ? "Processing..." : "Order Now"}
      </button>
    </div>
  </div>
  )
}

export default AddCart

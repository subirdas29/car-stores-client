import { useEffect, useState } from "react"
import { useCreateOrderMutation } from "../../redux/features/order/orderApi"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { toast } from "sonner"
import { removeFromCart, updateQuantity } from "../../redux/features/cart/cartSlice"
import { ShoppingBagIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";


const AddCart = () => {
    const cartData = useAppSelector((state) =>state.cart)

    const [createOrder,{isLoading,isSuccess,data,isError,error}] = useCreateOrderMutation()

    console.log(cartData)

    const handlePlaceOrder = async()=>{
        console.log(cartData.items)
        await createOrder({cars:cartData.items})
    }

    const dispatch = useAppDispatch()

    const toastId = 'cart'

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
      
      const [added, setAdded] = useState(false);

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-2xl border border-gray-200">
    <img
      src="https://via.placeholder.com/300"
      alt="Product"
      className="w-full h-48 object-cover rounded-xl"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold">Stylish Product</h2>
      <p className="text-gray-500">$29.99</p>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={`mt-4 flex items-center justify-center gap-2 w-full p-3 text-white font-semibold rounded-xl transition-all duration-300 ${
          added ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={() => setAdded(true)}
      >
        <ShoppingCart size={20} />
        {added ? "Added to Cart" : "Add to Cart"}
      </motion.button>
    </div>
  </div>
  )
}

export default AddCart

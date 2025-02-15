/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react"
import { useCreateOrderMutation } from "../../redux/features/order/orderApi"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { toast } from "sonner"
import { removeFromCart, updateQuantity } from "../../redux/features/cart/cartSlice"
import banner from "../../assets/img/car-gallery/car-1.webp"

import { AlertTriangle, MapPin, Trash } from "lucide-react";
import { TResponse } from "../../types/global"
import { useGetMeQuery } from "../../redux/features/user/userApi"
import { useNavigate } from "react-router-dom"
import { useCurrentToken } from "../../redux/features/auth/authSlice"
import { verifyToken } from "../../utils/verifyToken"


const AddCart = () => {
  const { data:userData } = useGetMeQuery(undefined,
    {
      refetchOnMountOrArgChange:true,
      refetchOnReconnect:true
    }
  );
    const cartData = useAppSelector((state) =>state.cart)
  const token = useAppSelector(useCurrentToken)
   let user
    
        if(token){
          user = verifyToken(token)
        }
        const role = user?.role
        const email = user?.email
     
      console.log(userData)

      const address:string = userData?.data?.address
      const phone:string = userData?.data?.phone 

      const navigate = useNavigate();

    const [createOrder,{isLoading,isSuccess,data,isError,error}] = useCreateOrderMutation()

    console.log(cartData)
    console.log(data)

    const handlePlaceOrder = async()=>{
      console.log('order running')
          try {
              const res = (await createOrder({cars:cartData.items})) as TResponse<any>;
              console.log('order entry')
              console.log(res);
              if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
                console.log(res);
              } else {
                toast.success("Order Placed", { id: toastId });
              }
            } catch (err) {
              toast.error("Something went wrong", { id: toastId });
            }
        
    }

    const dispatch = useAppDispatch()
    const toastId = 'cart'

    const redWarningIcon = <AlertTriangle size={20} className="text-red-500" />;

    useEffect(() => {
   
      
        if (isLoading) toast.loading("Processing...", { id: toastId });
    
        console.log(data?.data)
        if (isSuccess) {
          toast.success(data.message, { id: toastId });
        
          if (data.data) {
            setTimeout(() => {
              window.location.href = data.data;
            }, 1000);
          }
        }
      
        if (isError) toast.error((error as any)?.data?.message || "An error occurred", { id: toastId });
      }, [data, error, isError, isLoading, isSuccess]); 

   
      

  return (
    <div>
      <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Dark Blue Shadow Overlay */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0, 0, 90, 0.4)", // Dark blue overlay
          zIndex: "1",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: "2",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "10px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Add Cart
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Add Your Favourite Cars
        </p>
      </div>
    </div>
  </div>
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
                <h3 className="text-lg font-semibold">{item.name} {item.model}</h3>
                <p className="text-[#7e7e84]">Category: {item.category}</p>
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


    <div className="md:col-span-1 bg-gray-100 p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
        <MapPin size={18} /> Location
      </h3>
      <p className="text-sm text-gray-600">
      {address === "N/A" ? (
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={() => navigate(`/${role}/account-profile`)}
        >
          Please add your address from profile
        </span>
      ) : (
        address
      )}
    </p>
      <p className="text-sm text-gray-600 my-2">
      Phone Number:{phone === "N/A" ? (
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={() => navigate(`/${role}/account-profile`)}
        >
          Please add your Phone number
        </span>
      ) : (
        phone
      )}
    </p>

    <p className="text-sm text-gray-600"> Email: {email}</p>
      <div className="border-b my-5"></div>
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
    </div>
  )
}

export default AddCart

import { NavLink, useSearchParams } from "react-router-dom";


import { useVerifyOrderQuery } from "../../redux/features/order/orderApi";
import { TOrderData } from "../../types/order.types";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { useEffect } from "react";
import { Skeleton } from "antd";

export default function VerifyOrder() {
  const [searchParams] = useSearchParams();
  const { isLoading, data,refetch } = useVerifyOrderQuery(searchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    refetch(); 
  }, [searchParams, refetch]);

  const dispatch = useAppDispatch()

  const CarData = useAppSelector((state) =>state.cart)
  console.log(CarData)


  const orderData:TOrderData = data?.data?.[0];
  console.log("All Orders:", data?.data);
  console.log("All Orders:", data?.data[0]);

  const CarId:string[] = CarData?.items.map((car)=>car.car)
  console.log(CarId)

  useEffect(() => {
    if (orderData?.bank_status === "Success") {
      dispatch(clearCart());
    }
  }, [orderData, dispatch]);

  if (isLoading) return   <Skeleton className="my-28" active />;



  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg font-semibold"><Skeleton className="my-28" active /></p>
    </div>
  ) : (
    <div className="mx-8 md:mx-12 lg:mx-24 p-6 my-28">
      <h1 className="text-3xl font-bold mb-6">Order Verification</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {/* Order Details */}
        <div className="border-1 border-gray-200 shadow-lg rounded-md p-6">
          <h2 className="text-xl font-bold mb-3">Order Details</h2>
          <p><strong>Order ID:</strong> {orderData?.order_id}</p>
          <p><strong>Amount:</strong> {orderData?.currency} {orderData?.amount?.toFixed(2)}</p>
          <p><strong>Status:</strong> <span className={`px-2 py-1 rounded-md text-white ${orderData?.bank_status === "Success" ? "bg-[#1890ff]" : "bg-red-500"}`}>{orderData?.bank_status}</span></p>
          <p><strong>Date:</strong> {new Date(orderData?.date_time)?.toLocaleString()}</p>
        </div>
        
        {/* Payment Information */}
        <div className="border-1 border-gray-200 shadow-lg rounded-md p-6">
          <h2 className="text-xl font-bold mb-3">Payment Information</h2>
          <p><strong>Method:</strong> {orderData?.method}</p>
          <p><strong>Transaction ID:</strong> {orderData?.bank_trx_id}</p>
          <p><strong>Invoice No:</strong> {orderData?.invoice_no}</p>
          <p><strong>SP Code:</strong> {orderData?.sp_code}</p>
          <p><strong>SP Message:</strong> {orderData?.sp_message}</p>
        </div>

        {/* Customer Information */}
        <div className="border-1 border-gray-200 shadow-lg rounded-md p-6">
          <h2 className="text-xl font-bold mb-3">Customer Information</h2>
          <p><strong>Name:</strong> {orderData?.name}</p>
          <p><strong>Email:</strong> {orderData?.email}</p>
          <p><strong>Phone:</strong> {orderData?.phone_no}</p>
          <p><strong>Address:</strong> {orderData?.address}</p>
          <p><strong>City:</strong> {orderData?.city}</p>
        </div>

 
      
      </div>
     <div className="flex justify-center mt-12">
     <NavLink to='/user/dashboard' >
      <button className="px-6  py-2  cursor-pointer bg-[#1890ff] border hover:text-[#1890ff] text-white font-semibold rounded-md  hover:bg-transparent">View Orders</button>
      </NavLink>
      <NavLink to='/' >
      <button className="px-6  py-2  cursor-pointer bg-[#1890ff] border hover:text-[#1890ff] text-white font-semibold rounded-md  hover:bg-transparent ml-4">Back to Home</button>
      </NavLink>
     </div>
    </div>
  );
}

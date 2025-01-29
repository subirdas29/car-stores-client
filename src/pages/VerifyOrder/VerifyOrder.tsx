import { useSearchParams } from "react-router-dom"
import { useGetOrdersQuery, useVerifyOrderQuery } from "../../redux/features/order/orderApi"
import { FaCheckCircle } from "react-icons/fa"


const VerifyOrder = () => {
    const [searchParams] = useSearchParams()
    const{data,isLoading} = useVerifyOrderQuery(useGetOrdersQuery(searchParams.get('order_id'),{
        refetchOnMountOrArgChange:true,
    }
))
    const orderData = data?.data?.[0]
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full text-center">
      {/* Success Icon */}
      <div className="flex justify-center">
        <FaCheckCircle className="text-green-500 text-6xl" />
      </div>

      {/* Order Message */}
      <h2 className="text-2xl font-bold text-gray-800 mt-4">
        Order Placed Successfully!
      </h2>
      <p className="text-gray-600 mt-2">
        Thank you for your purchase. Your order has been confirmed.
      </p>

      {/* Order Details */}
      <div className="bg-gray-50 rounded-lg p-4 mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Order ID:</span> #123456789
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Estimated Delivery:</span> Feb 5, 2025
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <button
        //   onClick={() => navigate("/orders")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Order
        </button>
        <button
        //   onClick={() => navigate("/")}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
  )
}

export default VerifyOrder

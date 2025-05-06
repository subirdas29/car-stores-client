import { Card, Statistic } from "antd";
import { useGetMyOrderQuery } from "../../../../redux/features/order/orderApi";
import { getFavoriteCars } from "./FavouriteCars";
import OrderStatusPieChart from "./OrderStatusPieChartUser";
import { PieChartOutlined, CarOutlined, OrderedListOutlined, CheckCircleOutlined } from "@ant-design/icons";
import MostOrderedCarsChart from "./MostOrderedCarsChart";


const UserDashboard = () => {

    const { data: myOrderData} = useGetMyOrderQuery(undefined, {
      refetchOnMountOrArgChange:true,
      refetchOnReconnect:true
    });

    const paidOrders = myOrderData?.data?.filter((paid)=>paid.status==="Paid")
    const pendingOrders = myOrderData?.data?.filter((pending)=>pending.status==="Pending")
    const favoriteCars = getFavoriteCars(myOrderData?.data);

    const totalFavoriteCars = favoriteCars.length;

  return (
  <div>
     <h1 className="text-2xl font-bold mb-4 text-center">User Dashboard</h1>
      {/* Overview Card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6 text-center"><Statistic title="Total Orders" value={myOrderData?.data?.length} prefix={<CheckCircleOutlined/>} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6 text-center"><Statistic title="Paid Orders" value={paidOrders?.length} prefix={<OrderedListOutlined/>} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6 text-center"><Statistic title="Pending Orders" value={pendingOrders?.length} prefix={<PieChartOutlined />} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6 text-center"> 
          <Statistic title="Favourite Cars" 
        value={totalFavoriteCars} prefix = {<CarOutlined/>} />
        </Card>
      </div>

      <div className="my-8 border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
    <OrderStatusPieChart/>
    <MostOrderedCarsChart/>
      </div>
      </div>
   
    </div>

  )
}

export default UserDashboard

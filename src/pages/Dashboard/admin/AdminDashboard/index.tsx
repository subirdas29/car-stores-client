import { Card, Statistic } from "antd";
import { PieChartOutlined, CarOutlined, UserOutlined } from "@ant-design/icons";
// import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useAllUsersQuery } from "../../../../redux/features/user/userApi";
import { useAllCarsQuery } from "../../../../redux/features/car/carApi";
import { useViewOrdersQuery } from "../../../../redux/features/order/orderApi";

import MonthlyRevenueBarChart from "./MonthlyRevenueBarChart";
import OrderStatusPieChart from "./OrderStatusPieChart";
import UserGrowthLineChart from "./UserGrowthLineChart";
import PopularCarsPieChart from "./OrderOfCarPieChart";





const AdminDashboard = () => {

  const {data:users} = useAllUsersQuery(undefined)
  const {data: allCars } = useAllCarsQuery(undefined);
  const {data: orders} = useViewOrdersQuery(undefined);

  const totalUser = users?.data?.filter((user)=>user.role !== 'admin')
  const totalPaidOrder = orders?.data?.filter((order)=>order.status === 'Paid')
  const totalRevenue = totalPaidOrder?.reduce((allPrice,price)=> price.totalPrice + allPrice,0)




  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6 text-center"><Statistic title="Total Users" value={totalUser?.length} prefix={<UserOutlined />} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6 text-center"><Statistic title="Cars Listed" value={allCars?.data?.length} prefix={<CarOutlined />} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6 text-center"><Statistic title="Orders Completed" value={totalPaidOrder?.length} prefix={<PieChartOutlined />} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6 text-center"> 
          <Statistic title="Revenue" 
        value={`BDT ${totalRevenue}`}  />
        </Card>
      </div>

      {/* User Growth Chart */}
      <div className="my-8 border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
      <PopularCarsPieChart/>
      <MonthlyRevenueBarChart />
      <UserGrowthLineChart/>
      <OrderStatusPieChart />
    </div>
      </div>

     
    </div>
  );
};

export default AdminDashboard;

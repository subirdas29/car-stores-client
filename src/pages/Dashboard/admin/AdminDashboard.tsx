import { Card, Statistic } from "antd";
import { PieChartOutlined, CarOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useAllUsersQuery } from "../../../redux/features/user/userApi";


const userData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 300 },
  { month: "Apr", users: 400 },
];


const AdminDashboard = () => {

  const {data} = useAllUsersQuery(undefined)
  console.log(data)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6"><Statistic title="Total Users" value={500} prefix={<UserOutlined />} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6"><Statistic title="Cars Listed" value={150} prefix={<CarOutlined />} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6"><Statistic title="Orders Completed" value={120} prefix={<PieChartOutlined />} /></Card>
        <Card className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6"><Statistic title="Revenue" value={"$30,000"} prefix={<DollarOutlined />} /></Card>
      </div>

      {/* User Growth Chart */}
      <div className="my-8 border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6">
        <h2 className="text-lg font-semibold">User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="users" stroke="#1890ff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

     
    </div>
  );
};

export default AdminDashboard;

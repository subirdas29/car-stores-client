import { Card, Statistic, Table } from "antd";
import { PieChartOutlined, CarOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const userData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 300 },
  { month: "Apr", users: 400 },
];

const recentOrders = [
  { key: "1", buyer: "John Doe", car: "Toyota Camry", price: "$20,000", status: "Completed" },
  { key: "2", buyer: "Jane Smith", car: "Honda Accord", price: "$22,500", status: "Pending" },
];

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><Statistic title="Total Users" value={500} prefix={<UserOutlined />} /></Card>
        <Card><Statistic title="Cars Listed" value={150} prefix={<CarOutlined />} /></Card>
        <Card><Statistic title="Orders Completed" value={120} prefix={<PieChartOutlined />} /></Card>
        <Card><Statistic title="Revenue" value={"$30,000"} prefix={<DollarOutlined />} /></Card>
      </div>

      {/* User Growth Chart */}
      <div className="mt-6">
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

      {/* Recent Orders */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <Table columns={[{ title: "Buyer", dataIndex: "buyer" }, { title: "Car", dataIndex: "car" }, { title: "Price", dataIndex: "price" }, { title: "Status", dataIndex: "status" }]} dataSource={recentOrders} />
      </div>
    </div>
  );
};

export default AdminDashboard;

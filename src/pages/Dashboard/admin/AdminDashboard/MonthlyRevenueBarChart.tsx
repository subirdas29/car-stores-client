// components/charts/MonthlyRevenueBarChart.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useViewOrdersQuery } from "../../../../redux/features/order/orderApi";


const MonthlyRevenueBarChart = () => {
  const { data: orders } = useViewOrdersQuery(undefined);

  // Dummy month mapping for now
  const monthlyRevenue: { month: string; revenue: number }[] = [
    { month: "Jan", revenue: 0 },
    { month: "Feb", revenue: 0 },
    { month: "Mar", revenue: 0 },
    { month: "Apr", revenue: 0 },
  ];

  orders?.data?.forEach((order) => {
    const month = "Jan"; // Change based on your order date field
    const item = monthlyRevenue.find((m) => m.month === month);
    if (order.status === "Paid" && item) item.revenue += order.totalPrice;
  });

  return (
    <div>
      <h2 className="font-semibold mb-2">Monthly Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyRevenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyRevenueBarChart;

// components/charts/OrderStatusPieChart.tsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useViewOrdersQuery } from "../../../../redux/features/order/orderApi";


const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

const OrderStatusPieChart = () => {
  const { data: orders } = useViewOrdersQuery(undefined);

  const statusData = [
    { name: "Paid", value: orders?.data?.filter((o) => o.status === "Paid")?.length || 0 },
    { name: "Pending", value: orders?.data?.filter((o) => o.status === "Pending")?.length || 0 },
    { name: "Cancelled", value: orders?.data?.filter((o) => o.status === "Cancelled")?.length || 0 },
  ];

  return (
    <div>
      <h2 className="font-semibold mb-2">Order Status Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
            {statusData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderStatusPieChart;

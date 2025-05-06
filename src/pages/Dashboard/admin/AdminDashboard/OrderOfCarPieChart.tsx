// components/charts/PopularCarsPieChart.tsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useViewOrdersQuery } from "../../../../redux/features/order/orderApi";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CF0", "#FF6699"];

const PopularCarsPieChart = () => {
  const { data: orders } = useViewOrdersQuery(undefined);

  const totalPaidOrder = orders?.data?.filter((order)=>order.status === 'Paid')

  // Step 1: Car count object
  const carCountMap: { [key: string]: number } = {};

  totalPaidOrder?.forEach((order) => {
    order?.cars?.forEach((car) => {
      const name = car?.car.model|| "Unknown Car";
      if (carCountMap[name]) {
        carCountMap[name] += 1;
      } else {
        carCountMap[name] = 1;
      }
    });
  });

  // Step 2: Convert to chart-friendly array
  const chartData = Object.entries(carCountMap).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div>
      <h2 className="font-semibold text-center mt-8 md:mt-0 mb-4">Most Popular Cars (by Order)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {chartData.map((_, index) => (
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

export default PopularCarsPieChart;

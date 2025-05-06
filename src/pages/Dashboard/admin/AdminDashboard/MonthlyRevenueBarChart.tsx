import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useViewOrdersQuery } from "../../../../redux/features/order/orderApi";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const MonthlyRevenueBarChart = () => {
  const { data: orders } = useViewOrdersQuery(undefined);
  const [windowWidth, setWindowWidth] = useState(1024); // Default to desktop width

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallDevice = windowWidth < 850; // tablet and mobile

  // Prepare monthly revenue data
  const monthlyRevenueMap: { [key: string]: number } = {};
  monthNames.forEach((month) => {
    monthlyRevenueMap[month] = 0;
  });

  orders?.data?.forEach((order) => {
    if (order.status === "Paid") {
      const date = new Date(order.createdAt);
      const month = monthNames[date.getMonth()];
      monthlyRevenueMap[month] += order.totalPrice;
    }
  });

  const monthlyRevenue = monthNames.map((month) => ({
    month,
    revenue: monthlyRevenueMap[month],
  }));

  return (
    <div>
      <h2 className="font-semibold text-center mt-8 md:mt-0 mb-4">Monthly Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyRevenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
  dataKey="month"
  interval={0}
  angle={isSmallDevice ? -45 : 0}
  textAnchor={isSmallDevice ? "end" : "middle"}
  tick={{ fontSize: isSmallDevice ? 10 : 12 }}
/>

          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyRevenueBarChart;

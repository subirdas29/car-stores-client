// components/charts/UserGrowthLineChart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAllUsersQuery } from "../../../../redux/features/user/userApi";
import { useEffect, useState } from "react";

// Month short names
const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const UserGrowthLineChart = () => {
  const { data: users } = useAllUsersQuery(undefined);
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

  // Initialize map for month-wise count
  const monthlyUserMap: { [key: string]: number } = {};
  monthNames.forEach((month) => {
    monthlyUserMap[month] = 0;
  });

  // Count users by createdAt month
  users?.data?.forEach((user) => {
    if (user.createdAt) {
      const date = new Date(user.createdAt);
      const monthIndex = date.getMonth(); 
      const month = monthNames[monthIndex];
      monthlyUserMap[month] += 1;
    }
  });

  // Prepare data for chart (Jan to Dec)
  const userGrowth = monthNames.map((month) => ({
    month,
    users: monthlyUserMap[month] || 0,
  }));

  return (
    <div>
      <h2 className="font-semibold text-center mt-8 md:mt-0 mb-4">User Growth Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={userGrowth}>
        <XAxis
  dataKey="month"
  interval={0}
  angle={isSmallDevice ? -45 : 0}
  textAnchor={isSmallDevice ? "end" : "middle"}
  tick={{ fontSize: isSmallDevice ? 10 : 12 }}
/>
          <YAxis allowDecimals={false} />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthLineChart;

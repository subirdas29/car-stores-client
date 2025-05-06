// components/charts/UserRolePieChart.tsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useAllUsersQuery } from "../../../../redux/features/user/userApi";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const UserRolePieChart = () => {
  const { data: users } = useAllUsersQuery(undefined);

  const roleData = [
    { name: "Buyer", value: users?.data?.filter((u) => u.role === "user")?.length || 0 },
    { name: "Seller", value: users?.data?.filter((u) => u.role === "seller")?.length || 0 },
    { name: "Admin", value: users?.data?.filter((u) => u.role === "admin")?.length || 0 },
  ];

  return (
    <div>
      <h2 className="font-semibold mb-2">User Role Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={roleData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
            {roleData.map((_, index) => (
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

export default UserRolePieChart;

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGetMyOrderQuery } from "../../../../redux/features/order/orderApi";
import { useEffect, useState } from "react";

const MostOrderedCarsChart = () => {
  const carCount: Record<string, number> = {};
  const { data: myOrderData } = useGetMyOrderQuery(undefined);
  
  const paidOrders = myOrderData?.data?.filter((paid)=>paid.status==="Paid")

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

  paidOrders?.forEach((order) => {
    order.cars?.forEach((car) => {
      const carName = car.car?.model || "Unknown Car";
      carCount[carName] = (carCount[carName] || 0) + car.quantity;
    });
  });

  const data = Object.entries(carCount).map(([name, quantity]) => ({
    name,
    quantity,
  }));

  return (
    <div className="bg-white rounded-xl p-4 shadow w-full">
      <h2 className="text-lg font-semibold mb-2">Most Ordered Cars</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            interval={0}
            angle={isSmallDevice ? -45 : 0}
            textAnchor={isSmallDevice ? "end" : "middle"}
            tick={{ fontSize: isSmallDevice ? 8 : 12 }}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MostOrderedCarsChart;

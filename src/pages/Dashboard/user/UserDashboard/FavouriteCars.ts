/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOrder } from "../../../../types/users.types";

export const getFavoriteCars = (orders: TOrder[] | undefined) => {
    const carMap: { [carId: string]: { car: any; quantity: number } } = {};
  
    if (!orders) return [];
  
    orders.forEach((order) => {
      if (order.status === "Paid") {
        order.cars.forEach(({ car, quantity }) => {
          const carId = car._id;
          if (carMap[carId]) {
            carMap[carId].quantity += quantity;
          } else {
            carMap[carId] = { car, quantity };
          }
        });
      }
    });
  
    return Object.values(carMap);
  };
  
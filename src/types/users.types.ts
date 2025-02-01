import { TCar } from "./admin.types";

export type TOrderCar = {
  car: TCar;
  quantity: number;
  _id: string;
};

export type TTransaction = {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string; // ISO date string
  method: string;
  sp_code: string;
  sp_message: string;
};

export type TOrder = {
  _id: string;
  user: string;
  email: string;
  cars: TOrderCar[];
  totalPrice: number;
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled",
  createdAt: string; 
  updatedAt: string; 
  transaction: TTransaction;
};

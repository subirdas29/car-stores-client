import { TCar } from "./users.types";

  
  export type TOrderView = {
    _id: string;
    email: string;
    quantity: number;
    totalPrice: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    car: TCar;
  };
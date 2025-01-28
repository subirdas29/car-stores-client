export type TCar = {
  _id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  description: string;
  quantity: number;
  isStock: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};


export type TOrder ={
  _id:string,
  email:string,
  car:TCar,
  quantity:number,
  totalPrice:number,
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
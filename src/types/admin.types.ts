export type TUser ={
    _id: string;        
    name: string;
    email: string;
    role:string;
    phone: number;
    address: string;
    city: string;
    status: string;    
    createdAt: string; 
    updatedAt:string;
}

export type TCar = {
    _id: string;
    brand: string;
    model: string;
    price: number;
    category?:'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible',
    description?:string,
    stock: number;
    imageUrl?: string;
    createdAt: string; 
    updatedAt:string;
  };
  
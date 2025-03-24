export type TUser ={
    _id: string;        
    name: string;
    email?: string;
    role:string;
    phone?: string;
    address?: string;
    imageUrl?:string;
    city?: string;
    status: string;    
    createdAt?: string; 
    updatedAt?:string;
}

export type TCar = {
    _id: string;
    brand: string;
    model: string;
    price: number;
    category?:'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible',
    description?:string,
    stock: number;
    isDeleted?:boolean
    imageUrl?: string[];
    createdAt: string; 
    updatedAt:string;
  };
  
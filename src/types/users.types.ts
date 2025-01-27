export type TOrderData = {
    _id: string;
    car: {
      brand: string;
      model: string;
      year: number;
      price: number;
      category: string;
    };
    quantity: number;
    createdAt: string;
  };
  
  // Define the table data type
  export type TTableData = {
    key: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    category: string;
    quantity: string; // Converted to string for the table
    orderDate: string; // Formatted as a readable date string
  };
  
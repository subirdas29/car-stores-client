export const carCategory = [ 'Sedan' ,
    'SUV' , 
    'Truck' , 
    'Coupe' , 
    'Convertible'];

    export const carCategoryOptions = carCategory.map((item) => ({
        value: item,
        label: item,
      }));
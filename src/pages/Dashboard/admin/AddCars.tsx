/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { toast } from "sonner";
import { useCreateCarMutation } from "../../../redux/features/admin/adminApi";
import { TCar } from "../../../types/admin.types";
import { TResponse } from "../../../types/global";
import CarForm from "../../../components/form/CarForm";
import CarInput from "../../../components/form/CarInput";
import CarSelect from "../../../components/form/CarSelect";
import { carCategoryOptions } from "../../../constants/global";
import UploadImage from "../../../components/form/UploadImage";

const AddCars = () => {
  const [createCar, { isLoading }] = useCreateCarMutation();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Loading...");
    const carInfo = {
      brand: data.brand,
      model: data.model,
      category: data.category,
      price: Number(data.price),
      stock: Number(data.stock),
      imageUrl: data.imageUrl,
      description: data.description,
    };

    try {
      const res = await createCar(carInfo) as TResponse<TCar>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(`Car created successfully`, { id: toastId });
      }
      console.log(res);
    } catch (err: any) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <CarForm onSubmit={onSubmit} >
    <div className="grid grid-cols-2 gap-4">
    <CarInput type="text" name="brand" label="Brand" placeholder="Enter Car Brand" />
      <CarInput type="text" name="model" label="Model" placeholder="Enter Car Model" />
      <CarSelect name="category" label="Category" options={carCategoryOptions} />
      <CarInput type="text" name="price" label="Price:" />
      <CarInput type="text" name="stock" label="Stock:" />
      <CarInput type="textarea" name="description" label="Description" placeholder="Enter Car Description" rows={4} />
     
    </div>
    <p className="mb-4">Image</p>
    <UploadImage /> 
<div className="flex justify-center">
  
<button
        type="submit"
        className="px-8 cursor-pointer bg-[#1890ff] border hover:text-[#1890ff] text-white font-semibold rounded-md py-3 mt-4 hover:bg-transparent"
        disabled={isLoading} 
      >
        {isLoading ? "Creating..." : "Add Car"}
      </button>
</div>
    </CarForm>
  );
};

export default AddCars;

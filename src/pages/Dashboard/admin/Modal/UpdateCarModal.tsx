/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { TCar } from "../../../../types/admin.types";
import CarInput from "../../../../components/form/CarInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import CarForm from "../../../../components/form/CarForm";
import CarSelect from "../../../../components/form/CarSelect";
import { carCategoryOptions } from "../../../../constants/global";
import { useAllCarsQuery, useUpdateCarsMutation } from "../../../../redux/features/admin/adminApi";
import { toast } from "sonner";
import { TResponse } from "../../../../types/global";


const UpdateCarModal = ({carInfo}:TCar)=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

 
    const [updateCars,{isLoading}] = useUpdateCarsMutation()

    const onSubmit:SubmitHandler<FieldValues>  = async(data) => {
        console.log(data);
       
        const toastId = toast.loading('Updating...')
        const carData = {
            carId:data._id,
            data,
        }


        try{
            console.log(carData)
            const res = await updateCars(carData) as TResponse<TCar>
            setIsModalOpen(false)
            if(res.error){
                toast.error(res.error.data.message,{id:toastId})
            } else{
                toast.success(`${data.brand} ${data.model} updated successfully`,{id:toastId}) 
                
               
            }
            console.log(res)
        }
        catch(err:any){
            toast.error('Something went wrong',{id:toastId})
        }

      
      
      };
    
      const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    const {_id,brand,model,category,price,description,stock,imageUrl} = carInfo
  
    console.log(carInfo)

   const  defaultValues={
        _id,
        brand,
        model,
        category,
        price,
        description,
        stock,
        imageUrl
    }
 
  
    return (
      <>
      <Button onClick={showModal}>Update</Button>
      <Modal style={{textAlign:'center'}} title={`${brand} ${model}`} open = {isModalOpen}
        onCancel={handleCancel} footer={null}>
        
        <CarForm  onSubmit={onSubmit}
     defaultValues = {defaultValues}>
  
     <div className="grid grid-cols-2 gap-5 font-bold">
  
   

     <CarInput  type="text" name="brand" label= "Brand Name:"  />
    
   <CarInput type="text" name="model" label= "Model:"   />
    <CarSelect
            name="category"
            label="Category"
            options={carCategoryOptions}
          /> 
 
 <Controller
              name="imageUrl"
              render={({ field: { onChange, value, ...field } }) => (
                <Form.Item label="Picture">
                  <Input
                    type="file"
                    value={value?.fileName}
                    {...field}
                    onChange={(e) => onChange(e.target.files?.[0])}
                  />
                </Form.Item>
              )}
            />

    <CarInput type="text" name="price" label="Price:"  />
    <CarInput type="text" name="stock" label="Stock:"  />
    <CarInput
  type="textarea"
  name="description"
  label="Description:"
  
  rows={4}
  maxLength={500}
/>
   
     </div>
     
      <Button htmlType="submit" disabled={isLoading}>
       {isLoading ? "Updating...":"Update"}
        </Button>

     
    </CarForm>

      </Modal>
      </>
    )
  }

  export default UpdateCarModal
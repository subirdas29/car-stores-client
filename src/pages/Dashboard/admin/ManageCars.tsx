import { Button, Col, Row } from "antd"
import CarForm from "../../../components/form/CarForm"
import CarInput from "../../../components/form/CarInput"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { FieldValues } from "react-hook-form"
import { useCreateCarMutation } from "../../../redux/features/admin/adminApi"
import { TResponse } from "../../../types/global"
import { carCategoryOptions } from "../../../constants/global"
import CarSelect from "../../../components/form/CarSelect"
import TextArea from "antd/es/input/TextArea"


const ManageCars = () => {
    // const [signup] = useSignupMutation(undefined)
   
    const [createCar] = useCreateCarMutation()

    const onSubmit = async(data:FieldValues) =>{
        const toastId = toast.loading('Logging in')
      
        const carInfo ={
            brand:data.name,
            model:data.model,
            category:data.category,
            image:data.image,
            price:Number(data.price),
            description:data.description,
            quantity:Number(data.quantity)
        }
       
        console.log(carInfo)
       
    
        // try {
        //   const res = (await createCar(carInfo)) as TResponse<any>;
        //   console.log(res);
        //   if (res.error) {
        //     toast.error(res.error.data.message, { id: toastId });
        //   } else {
        //     toast.success('Car created', { id: toastId });
        //   }
        // } catch (err) {
        //   toast.error('Something went wrong', { id: toastId });
        // }
      }

  return (
    
   
   <div className="border-1 border-gray-200 shadow-lg rounded-md p-10" >
     <CarForm  onSubmit={onSubmit}
    //  defaultValues = {defaultValues}
     >
  
     <div className="grid grid-cols-2 gap-5 font-bold">
  
   

     <CarInput  type="text" name="name" label= "Brand Name:"/>
   

   <CarInput type="text" name="model" label= "Model:"/>
   <CarSelect
            name="category"
            label="Category"
            options={carCategoryOptions}
          />
 
  <CarInput type="file" name="image" label = "Picture"/>

    <CarInput type="text" name="price" label="Price:" />
    <CarInput type="text" name="quantity" label="Quantity:" />


    <CarInput
  type="textarea"
  name="description"
  label="Description:"
  placeholder="Write car details..."
  rows={4}
  maxLength={500}
/>
   
     </div>
     
      <Button htmlType="submit">Add</Button>
    </CarForm>
   </div>

  )
}

export default ManageCars

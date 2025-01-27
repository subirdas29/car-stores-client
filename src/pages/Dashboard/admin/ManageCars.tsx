import { Button, Col, Row } from "antd"
import CarForm from "../../../components/form/CarForm"
import CarInput from "../../../components/form/CarInput"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { FieldValues } from "react-hook-form"


const ManageCars = () => {
    // const [signup] = useSignupMutation(undefined)
   

    const onSubmit = async(data:FieldValues) =>{
        const toastId = toast.loading('Logging in')
       try{
        const userInfo ={
            name:data.name,
          email: data.email,
          password:data.password
        }
       
        console.log(userInfo)
        // await signup(userInfo).unwrap()
    
      toast.success("Update profile", {id:toastId,duration:2000})
      
    
      }
      catch(err){
        toast.error("Something went wrong",{id:toastId,duration:2000})
      }
    
       }

  return (
    
   
   <div className="border-1 border-gray-200 shadow-lg rounded-md p-10" >
     <CarForm  onSubmit={onSubmit}
    //  defaultValues = {defaultValues}
     >
  
     <div className="grid grid-cols-2 gap-5 font-bold">
  
   

     <CarInput  type="text" name="name" label= "Brand Name:"/>
   

   <CarInput type="text" name="model" label= "Model:"/>
 
  
    <CarInput type="text" name="year" label="Year:" />
    <CarInput type="number" name="price" label="Price:" />
    <CarInput type="textarea" name="Description" label="Description:" />
    <CarInput type="text" name="price" label="Price:" />
     </div>
     
      
      
      <Button htmlType="submit">Add</Button>
    </CarForm>
   </div>

  )
}

export default ManageCars

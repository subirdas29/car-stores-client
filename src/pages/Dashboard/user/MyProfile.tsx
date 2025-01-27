/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button,  } from "antd"
import CarForm from "../../../components/form/CarForm"
import CarInput from "../../../components/form/CarInput"
import { toast } from "sonner"

import { FieldValues } from "react-hook-form"
import { useGetMeQuery } from "../../../redux/features/user/userApi"


const MyProfile = () => {
    // const [signup] = useSignupMutation(undefined)
   

    const {data,isFetching} = useGetMeQuery(undefined)

    

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
     <CarInput  type="text" name="name" label= "Name:"/>
   

   <CarInput type="email" name="email" label= "Email:"/>
 
  
    <CarInput type="password" name="password" label="Password:" />
 
  
    <CarInput type="password" name="reenterPassword" label="Re-enter Password:" />
     </div>
     
      
      
      <Button htmlType="submit">Update profile</Button>
    </CarForm>
   </div>

  )
}

export default MyProfile

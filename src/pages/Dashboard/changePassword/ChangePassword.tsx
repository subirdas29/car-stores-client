/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button,  } from "antd"
import CarForm from "../../../components/form/CarForm"
import CarInput from "../../../components/form/CarInput"
import { toast } from "sonner"

import { FieldValues } from "react-hook-form"
import { useGetMeQuery } from "../../../redux/features/user/userApi"
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi"


const ChangePassword = () => {
    // const [signup] = useSignupMutation(undefined)
   
    const defaultValues = {
        oldPassword: "987654321",
        newPassword: "123456789",
      };

    const [changePassword] = useChangePasswordMutation()

    const onSubmit = async(data:FieldValues) =>{
        const toastId = toast.loading('Logging in')
       try{
        const passInfo ={
            newPassword:data.newPassword,
            oldPassword:data.oldPassword,
         
        }
       
        const res= await changePassword(passInfo)

        console.log(res)
        // await signup(userInfo).unwrap()
    
      toast.success("Changed Password", {id:toastId,duration:2000})
      
    
      }
      catch(err:any){
        toast.error(err.data.message,{id:toastId,duration:2000})
      }
    
       }

  return (
    
   
   <div className="border-1 border-gray-200 shadow-lg rounded-md p-10" >
     <CarForm  onSubmit={onSubmit} defaultValues={defaultValues}
    //  defaultValues = {defaultValues}
     >
  
     <div className="grid grid-cols-1 gap-5 font-bold">
  

     <CarInput type="password" name="oldPassword" label= "Old Password:"/>
    <CarInput type="password" name="newPassword" label="New Password:" />

     </div>
     
      
      
      <Button  type="primary"
      className="rounded-md py-2 px-6 font-bold cursor-pointer border border-[#1890ff] hover:text-[#1890ff] hover:bg-transparent"
      style={{ backgroundColor: "#1890ff", color: "white", borderWidth: 1 }} htmlType="submit">Change Password</Button>

    </CarForm>
   </div>

  )
}

export default ChangePassword

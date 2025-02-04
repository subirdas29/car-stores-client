/* eslint-disable @typescript-eslint/no-explicit-any */

import CarForm from "../../../components/form/CarForm"
import CarInput from "../../../components/form/CarInput"
import { toast } from "sonner"

import { FieldValues } from "react-hook-form"

import { useChangePasswordMutation } from "../../../redux/features/auth/authApi"
import { TResponse } from "../../../types/global"
import { useAppDispatch } from "../../../redux/hook"
import { logOut } from "../../../redux/features/auth/authSlice"
import {  useNavigate } from "react-router-dom"


const ChangePassword = () => {

   
    const dispatch = useAppDispatch()

 

    const [changePassword] = useChangePasswordMutation()

    const navigate = useNavigate()

    const onSubmit = async(data:FieldValues) =>{
      
     const res= (await changePassword(data))as TResponse<any>

     if(res.data.success){
        toast.success(res.data.message)
        dispatch(logOut());
        navigate('/login')
     }
       }

  return (
    
   
   <div className="border-1 border-gray-200 shadow-lg rounded-md p-10" >
     <CarForm  onSubmit={onSubmit}
     >
  
     <div className="grid grid-cols-1 gap-5 font-bold">
  

     <CarInput  type="password" name="oldPassword" label= "Old Password:"/>
    <CarInput type="password" name="newPassword" label="New Password:" />

     </div>
     
      
      
      <button  type="submit"
      className='rounded-md py-2 px-6  border-1 hover:text-[#1890ff] hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer'>Update</button>

    </CarForm>
   </div>

  )
}

export default ChangePassword

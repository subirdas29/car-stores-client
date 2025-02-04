/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button,  } from "antd"
import CarForm from "../../../components/form/CarForm"
import CarInput from "../../../components/form/CarInput"
import { toast } from "sonner"

import { FieldValues } from "react-hook-form"
import { useGetMeQuery, useProfileUpdateMutation } from "../../../redux/features/user/userApi"
import { TResponse } from "../../../types/global"
import { TUser } from "../../../types/admin.types"
import { useEffect, useState } from "react"


const MyProfile = () => {
    
   

    const {data:userData,refetch} = useGetMeQuery(undefined,{
      // refetchOnMountOrArgChange:true,
      // refetchOnReconnect:true,
      // pollingInterval:3000
})

  const [profileUpdate,{isLoading}]= useProfileUpdateMutation()
  

    const defaultValues = {
        name: userData?.data?.name,
        email: userData?.data?.email,
        phone: userData?.data?.phone,
        address: userData?.data?.address,
        city:  userData?.data?.city
    }
    const [formValues, setFormValues] = useState(defaultValues);

    useEffect(() => {
      if (userData?.data) {
        setFormValues({
          name: userData.data.name,
          email: userData.data.email,
          phone: userData.data.phone,
          address: userData.data.address,
          city: userData.data.city
        });
      }
    }, [userData]);

    console.log(defaultValues)
   

    const onSubmit = async(data:FieldValues) =>{
        const toastId = toast.loading('Loading...')
        const userInfo = {
          data
        }
      try{
                  console.log(userInfo)
                  const res = await profileUpdate(userInfo) as TResponse<TUser>
                  
                  if(res.error){
                      toast.error(res.error.data.message,{id:toastId})
                  } else{
                      toast.success(`${data.name} profile updated successfully`,{id:toastId}) 
                      // await refetch()
                      // setTimeout(()=>{
                      //    refetch();
                      // },1000)
                     
                  }
                  console.log(res)
              }
              catch(err:any){
                  toast.error('Something went wrong',{id:toastId})
              }
    
       }

  return (
    
   
   <div className="border-1 border-gray-200 shadow-lg rounded-md p-10" >
     <CarForm  onSubmit={onSubmit}
     defaultValues = {formValues}
     >
  
     <div className="grid grid-cols-2 gap-5 font-bold">
     <CarInput  type="text" name="name" label= "Name:" />
   

   <CarInput type="email" name="email" label= "Email:"/>
   <CarInput type="number" name="phone" label= "Phone:"/>

   <CarInput  type="text" name="city" label= "City:"/>
    
   <CarInput
            type="textarea"
            name="address"
            label="Address:"
            placeholder="Write your address..."
            rows={4}
            maxLength={500}
          />
  
    
     </div>
     
      
      
     <Button htmlType="submit" disabled={isLoading}>
       {isLoading ? "Updating...":"Update Profile"}
        </Button>

    </CarForm>
   </div>

  )
}

export default MyProfile

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Row } from 'antd';
import { useSignupMutation } from '../../redux/features/auth/authApi';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import CarForm from '../../components/form/CarForm';
import CarInput from '../../components/form/CarInput';
import { useNavigate } from 'react-router-dom';

  
const SignUp = () => {
    const [signup] = useSignupMutation(undefined)
    const navigate = useNavigate()

    const onSubmit = async(data:FieldValues) =>{
        const toastId = toast.loading('Logging in')
       try{
        const userInfo ={
            name:data.name,
          email: data.email,
          password:data.password
        }
       
        await signup(userInfo).unwrap()
    
      toast.success("Sign up", {id:toastId,duration:2000})
       navigate(`/login`)
    
      }
      catch(err){
        toast.error("Something went wrong",{id:toastId,duration:2000})
      }
    
       }

  return (
    
    <Row justify="center" align="middle" >
    <CarForm onSubmit={onSubmit}
    //  defaultValues = {defaultValues}
     >
     <CarInput type="text" name="name" label= "Name:"/>
     <CarInput type="email" name="email" label= "Email:"/>
      <CarInput type="password" name="password" label="Password:" />
      
      <Button htmlType="submit">submit</Button>
    </CarForm>
  </Row>
  )
}

export default SignUp

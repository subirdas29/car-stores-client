/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd"
import { FieldValues, } from "react-hook-form"
import { useAppDispatch } from "../../redux/hook"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../redux/features/auth/authApi"
import { toast } from "sonner"
import { verifyToken } from "../../utils/verifyToken"
import { setUser, TUser } from "../../redux/features/auth/authSlice"
import CarForm from "../../components/form/CarForm"
import CarInput from "../../components/form/CarInput"



const Login = () => {
 
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [login] =useLoginMutation()

  const defaultValues = {
    email:'subir@gmail.com',
    password:'123456789'
  }
  const onSubmit = async(data:FieldValues) =>{
    const toastId = toast.loading('Logging in')
   try{
    const userInfo ={
      email: data.email,
      password:data.password
    }
   
   const res =  await login(userInfo).unwrap()
   const user = verifyToken(res.data.accessToken) as TUser
  
   dispatch(setUser({user:user,token:res.data.accessToken}))

  toast.success("Logged in", {id:toastId,duration:2000})
   navigate(`/`)

  }
  catch(err){
    toast.error("Something went wrong",{id:toastId,duration:2000})
  }

   }

  return (
   <Row justify="center" align="middle" style= {{height:'100vh'}}>
     <CarForm onSubmit={onSubmit}
      defaultValues = {defaultValues}

      >
      <CarInput type="email" name="email" label= "Email:" />
       <CarInput type="password" name="password" label="Password:" />
       
       <Button htmlType="submit">submit</Button>
     </CarForm>
   </Row>
  )
}

export default Login

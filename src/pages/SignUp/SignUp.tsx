/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Row } from 'antd';
import { useSignupMutation } from '../../redux/features/auth/authApi';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import CarForm from '../../components/form/CarForm';
import CarInput from '../../components/form/CarInput';
import { NavLink, useNavigate } from 'react-router-dom';

  
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
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url('/assets/images/banner/car1.jpg')`, // Update the path as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white", // Black overlay with transparency
          paddingTop: "50px",
          paddingBottom: "50px",
          borderRadius: "10px",
          paddingLeft:'40px',
          paddingRight:'40px',
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
       
          color: "#fff",
        }}
      >
        <h1 className=" mb-4 text-black font-bold text-center text-4xl">SignUp</h1>
        <Row justify="center" align="middle">
          
          <CarForm onSubmit={onSubmit} >
            
            <CarInput type="text" name="Name" label="Name:" />
            <CarInput type="email" name="email" label="Email:" />
           
            <CarInput type="password" name="password" label="Password:" />
            <Button htmlType="submit" style={{backgroundColor:"#1890ff", paddingTop:"20px", paddingBottom:"20px", marginBottom:"16px", color:"white"}}  block>
              Submit
            </Button>
            <p> Already have an account
              <NavLink to='/login'>
              <span> Please Login</span>
              </NavLink>
            </p>
          </CarForm>
        </Row>
      
      </div>
    </div>
  );
}

export default SignUp

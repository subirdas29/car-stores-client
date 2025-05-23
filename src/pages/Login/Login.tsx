/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useAppDispatch } from "../../redux/hook";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import CarForm from "../../components/form/CarForm";
import CarInput from "../../components/form/CarInput";
import { AlertTriangle } from "lucide-react";
import {  useState } from "react";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  

  const [defaultValues, setDefaultValues] = useState({ email: "", password: "" });



  const redWarningIcon = <AlertTriangle size={20} className="text-red-500" />;

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      console.log(userInfo)

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
   
      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Login successful", { id: toastId, duration: 2000 });
      navigate(`/`);
    } catch (err:any) {
      
      toast.error(err.data.message, { id: toastId, duration: 2000,icon:redWarningIcon });
    }
  };

  const defaultValuesUser = {
    email: "subirdas1045@gmail.com",
    password: "123456"
  }

  const defaultValuesAdmin = {
    email: "subir@gmail.com",
    password: "12345678"
  }
  return (
    <div
      style={{
        height: "100vh",
        // width: "100vw",
        backgroundImage: `url('/assets/images/banner/car1.webp')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          paddingTop: "50px",
          paddingBottom: "50px",
          borderRadius: "10px",
          
          paddingLeft:'40px',
          paddingRight:'40px',
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          color: "#fff",
        }}
      >
        <h1 className=" mb-4 text-black font-bold text-center text-4xl">Login</h1>

       <div className="my-6">
       <Button className="mr-4" onClick={()=>setDefaultValues(defaultValuesUser)}>User Credentials</Button>
       <Button onClick={()=>setDefaultValues(defaultValuesAdmin)}>Admin Credentials</Button>
       
       </div>
        <Row justify='center' align='middle'>
          
          <CarForm onSubmit={onSubmit} defaultValues={defaultValues} >
            
            <CarInput type="email" name="email" label="Email:"   />
           
            <CarInput type="password" name="password" label="Password:" />
            <Button htmlType="submit" style={{backgroundColor:"#1890ff", paddingTop:"20px", paddingBottom:"20px", marginBottom:"16px", color:"white"}}  block>
              Submit
            </Button>
            <p> New to CarHunt? 
              <NavLink to='/signup'>
                <span> Create New Account</span>
              </NavLink>
            </p>
          </CarForm>
        </Row>
      
      </div>
    </div>
  );
};

export default Login;

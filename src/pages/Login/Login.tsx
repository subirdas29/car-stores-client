/* eslint-disable @typescript-eslint/no-unused-vars */
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

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const defaultValues = {
    email: "subir@gmail.com",
    password: "123456789",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

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
        <h1 className=" mb-4 text-black font-bold text-center text-4xl">Login</h1>
        <Row justify='center' align='middle'>
          
          <CarForm onSubmit={onSubmit} defaultValues={defaultValues} >
            
            <CarInput type="email" name="email" label="Email:" />
           
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

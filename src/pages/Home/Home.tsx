import Navbar from "../../components/Navbar/Navbar"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"


const Home = () => {
  return (
    <div >
      <Navbar ></Navbar>
      <SignUp ></SignUp>
      <Login></Login>
    </div>
  )
}

export default Home

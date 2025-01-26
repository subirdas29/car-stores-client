import Banner from "../../components/Banner/Banner"
import FeaturedCars from "../../components/FeaturedCars/FeaturedCars"
import Navbar from "../../components/Navbar/Navbar"



const Home = () => {
  return (
    <div >
      <Navbar ></Navbar>
      <Banner></Banner>
      <FeaturedCars></FeaturedCars>
      {/* <SignUp ></SignUp>
      <Login></Login> */}
    </div>
  )
}

export default Home

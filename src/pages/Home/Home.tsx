import AllCarSlider from "../../components/AllCarSlider/AllCarSlider"
import Banner from "../../components/Banner/Banner"
import ConnectBrand from "../../components/ConnectBrand/ConnectBrand"
import AllFeaturedCars from "../../components/FeaturedCars/AllFeaturedCars"
import Reviews from "../../components/Reviews/Reviews"





const Home = () => {
  return (
    <div >
      <Banner></Banner>
    <AllFeaturedCars/>
    <AllCarSlider/>
    <ConnectBrand/>
    <Reviews/>
    </div>
  )
}

export default Home

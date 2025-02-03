import AllCarSlider from "../../components/AllCarSlider/AllCarSlider"
import Banner from "../../components/Banner/Banner"
import ConnectBrand from "../../components/ConnectBrand/ConnectBrand"
import EventList from "../../components/Events/EventList"
import AllFeaturedCars from "../../components/FeaturedCars/AllFeaturedCars"
import CarGallery from "../../components/Gallery/Gallery"
import Reviews from "../../components/Reviews/Reviews"





const Home = () => {
  return (
    <div >
      <Banner></Banner>
    <AllFeaturedCars/>
    <AllCarSlider/>
    <CarGallery/>
    <EventList/>
    <ConnectBrand/>
    <Reviews/>
    </div>
  )
}

export default Home

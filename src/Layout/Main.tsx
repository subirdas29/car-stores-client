import { Outlet } from "react-router-dom"

import Footer from "../pages/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"


const Main = () => {
  return (
    <div>
      <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main


import { Outlet } from 'react-router-dom';


import Sidebar from './Sidebar';

const DashboardLayout = () => {
 
  return (
    <div>
       <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
           style={{
            backgroundImage: `url('/assets/images/banner/car1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "80px",
            position: "relative",
          }}
          >
            {/* Dark Blue Shadow Overlay */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(0, 0, 90, 0.4)", // Dark blue overlay
                zIndex: "1",
              }}
            />
            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: "2",
              }}
            >
              <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", fontWeight:"bold", color:"white" }}>
                Cars
              </h1>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px" ,fontWeight:"bold", color:"white"  }}>
              Explore the world’s finest cars and find your perfect match.
              </p>
           
            </div>
          </div>
        </div>

      <div>
      <div className='grid grid-cols-1 md:grid-cols-5 my-28  mx-8 md:mx-12 lg:mx-24 gap-y-5 md:gap-5'>
        <Sidebar/>
       <div className='col-span-4'>
       <Outlet/>
       </div>
    </div>
      
    </div>
    </div>
  )
}

export default DashboardLayout

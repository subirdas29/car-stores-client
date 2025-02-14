


const AboutUs = () => {


  

  
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
              backgroundImage: `url('assets/images/banner/car3.webp')`,
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
                About Us
              </h1>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px" ,fontWeight:"bold", color:"white"  }}>
              Explore the world’s finest cars and find your perfect match.
              </p>
           
            </div>
          </div>
        </div>
     <div className="mx-8 md:mx-12 lg:mx-24 my-28 ">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div>
              <p className="font-bold text-center md:text-left text-4xl md:text-5xl">We offer customers a wide range of <span className="text-[#1890ff]">commercial cars</span> and <span className="text-[#1890ff]">luxury cars</span> for any occasion.</p>
        </div>
        <div>
            <p className="text-lg">Welcome to AutoDrive Hub! 🚗
            Your one-stop destination for all things cars! From sleek sports cars to reliable family vehicles, explore our collection of the latest models, detailed specs, and stunning visuals. Whether you're browsing for inspiration, searching for your dream car, or just a car enthusiast, we've got you covered. Drive your passion with us!</p>
        </div>
     </div>
     <div className="grid grid-cols-2 md:grid-cols-4 mt-12 gap-4  lg:gap-5 text-center">
        <div className="bg-[#EDF1F4] rounded-3xl p-6">
            <p className="text-3xl font-semibold text text-[#1890ff]">16522</p>
            <p>Completed Orders</p>
        </div>
        <div className="bg-[#EDF1F4] rounded-3xl p-6">
            <p className="text-3xl font-semibold text text-[#1890ff]">8902</p>
            <p>Happy Customers</p>
        </div>
        <div className="bg-[#EDF1F4] rounded-3xl p-6">
            <p className="text-3xl font-semibold text text-[#1890ff]">405</p>
            <p>Vehicles Fleet</p>
        </div>
        <div className="bg-[#EDF1F4] rounded-3xl p-6">
            <p className="text-3xl font-semibold text text-[#1890ff]">16</p>
            <p>Years Experience</p>
        </div>
     </div>
     </div>
    </div>
  )
}

export default AboutUs

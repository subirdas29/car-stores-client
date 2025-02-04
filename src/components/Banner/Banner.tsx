
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Carousel autoplay autoplaySpeed={1500}>
        {/* Slide Template with Consistent Background and Overlay */}
        {/* First Slide */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url('assets/images/banner/car1.jpg')`,
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
              padding: "160px",
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
                Welcome to Our Store
              </h1>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px" ,fontWeight:"bold", color:"white"  }}>
                Explore our products.
              </p>
              <NavLink to='/all-cars'>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "1rem",
                  backgroundColor: "#1890ff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
               
                Learn More
              
               
              </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url('assets/images/banner/car2.jpg')`,
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
              padding: "160px",
              
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
                backgroundColor: "rgba(0, 0, 90, 0.4)",
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
              <h1 style={{ fontSize: "2.5rem",fontWeight:"bold", color:"white", marginBottom: "10px" }}>
                New Collection
              </h1>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px", fontWeight:"bold", color:"white" }}>
                Check out our latest arrivals.
              </p>
              <NavLink to='/all-cars'>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "1rem",
                  backgroundColor: "#1890ff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url('assets/images/banner/car3.jpg')`,
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
              padding: "160px",
             
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
                backgroundColor: "rgba(0, 0, 90, 0.4)",
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
                Seasonal Offers
              </h1>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px", fontWeight:"bold", color:"white" }}>
                Don't miss out on great discounts.
              </p>
              <NavLink to='/all-cars'>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "1rem",
                  backgroundColor: "#1890ff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Explore Offers
              </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Fourth Slide */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url('assets/images/banner/car4.jpg')`,
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
              padding: "160px",
             
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
                backgroundColor: "rgba(0, 0, 90, 0.4)",
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
              <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" , fontWeight:"bold", color:"white" }}>
                Exclusive Deals
              </h1>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px" , fontWeight:"bold", color:"white" }}>
                Grab them before they're gone.
              </p>
              <NavLink to='/all-cars'>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "1rem",
                  backgroundColor: "#1890ff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

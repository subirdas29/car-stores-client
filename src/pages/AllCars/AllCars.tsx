
import { Skeleton } from 'antd'
import { useAllCarsQuery } from '../../redux/features/admin/adminApi'

import Cars from './Cars'

const AllCars = () => {

  const {data:allCars,isLoading} = useAllCarsQuery(undefined)
  console.log(allCars)


  return isLoading?(<Skeleton className="my-28" active />):
  (
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
        <div className='my-28 mx-12 md:mx-16 lg:mx-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5'>
     {
        allCars?.data?.map((car)=><Cars key={car._id} car={car}></Cars>)
     }
     </div>
     </div>
    </div>
  )
}

export default AllCars

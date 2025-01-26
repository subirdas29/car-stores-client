import car2 from '../../../public/assets/images/banner/car2.jpg'

const AllCars = () => {
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
              backgroundImage: `url('assets/images/AllCars/allcarsbanner.jpg')`,
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
        
      <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={car2} className='p-3 rounded-md' alt="" />
           <div className='px-6 py-4'>
           <h1 className='font-bold'>VW Polo</h1>
           <div className='flex'>
            <p>5</p>
            <p>2</p>
            <p>4</p>
            <p>Hatchback</p>
           </div>
           <hr className='my-3 text-gray-300' />
            <p className='text-sm text-gray-500'>Daily rate from</p>
            <div className='flex justify-between items-center pb-4'>
                <p className='text-2xl font-bold'>$147</p>
                <button className='rounded-md px-4 py-1 text-white bg-[#1890ff] font-bold cursor-pointer'>Order Now</button>
            </div>
           </div>
        </div>

        <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={car2} className='p-3 rounded-md' alt="" />
           <div className='px-6 py-4'>
           <h1 className='font-bold'>VW Polo</h1>
           <div className='flex'>
            <p>5</p>
            <p>2</p>
            <p>4</p>
            <p>Hatchback</p>
           </div>
           <hr className='my-3 text-gray-300' />
            <p className='text-sm text-gray-500'>Daily rate from</p>
            <div className='flex justify-between items-center pb-4'>
                <p className='text-2xl font-bold'>$147</p>
                <button className='rounded-md px-4 py-1 text-white bg-[#1890ff] font-bold cursor-pointer'>Order Now</button>
            </div>
           </div>
        </div>
        <div className='border-1 border-gray-200 shadow-lg rounded-md'>
            <img src={car2} className='p-3 rounded-md' alt="" />
           <div className='px-6 py-4'>
           <h1 className='font-bold'>VW Polo</h1>
           <div className='flex'>
            <p>5</p>
            <p>2</p>
            <p>4</p>
            <p>Hatchback</p>
           </div>
           <hr className='my-3 text-gray-300' />
            <p className='text-sm text-gray-500'>Daily rate from</p>
            <div className='flex justify-between items-center pb-4'>
                <p className='text-2xl font-bold'>$147</p>
                <button className='rounded-md px-4 py-1 text-white bg-[#1890ff] font-bold cursor-pointer'>Order Now</button>
            </div>
           </div>
        </div>
       
       
      </div>
    
     
    </div>
    </div>
  )
}

export default AllCars

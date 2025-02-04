import { NavLink } from "react-router-dom"

import FeaturedCars from "./FeaturedCars"
import { Skeleton } from "antd"
import { useAllCarsQuery } from "../../redux/features/admin/adminApi";


const AllFeaturedCars = () => {
  const { data: allCars, isLoading } = useAllCarsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true
  });

 

  console.log(allCars)
  return isLoading ? (
    <Skeleton active />
  ) : (
    <div>
      <div className='mt-28 mx-12 md:mx-16 lg:mx-24'>
        <h1 className='text-4xl font-bold mb-4 text-center'>Featured Cars</h1>
        <p className='text-center mb-8'>
          Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5'>
          {allCars?.data?.slice(0, 6).map((car) => (
            <FeaturedCars key={car._id} car={car} />
          ))}
        </div>
        <div className='flex justify-center mt-8'>
          <NavLink to={'/all-cars'}>
            <button className='rounded-md py-2 px-6 border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer'>
              View All
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllFeaturedCars;




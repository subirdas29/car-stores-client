import DashboardTable from "./UserComponent/DashboardTable"
const UserDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6" >
        <p className="font-bold text-3xl">03</p>
        <p >Upcoming Orders</p>
      </div>
      <div className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6">
        <p className="font-bold text-3xl">12</p>
        <p >Coupons</p>
      </div>
      <div className="border-1 col-span-2  md:col-span-1 border-gray-200 shadow-lg rounded-md p-6">
        <p className="font-bold text-3xl">58</p>
        <p >Total Orders</p>
      </div>
      <div className="border-1 col-span-2 md:col-span-1 border-gray-200 shadow-lg rounded-md p-6">
        <p className="font-bold text-3xl">24</p>
        <p >Cancel Orders</p>
      </div>
      <div className="col-span-4">
        <DashboardTable/>
      </div>
    </div>
  )
}

export default UserDashboard

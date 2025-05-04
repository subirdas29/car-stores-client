import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { FiShoppingCart } from "react-icons/fi"; // Import icons
import { clearCart } from "../../redux/features/cart/cartSlice";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { useGetMeQuery } from "../../redux/features/user/userApi";
import { CarFront, Contact, Home, LayoutDashboard, Notebook } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false); // State to control the button visibility
  const [isScrolled, setIsScrolled] = useState(false); // State for detecting scroll to add shadow effect
  const menuRef = useRef<HTMLDivElement>(null);
  const closeIconRef = useRef<HTMLButtonElement>(null);

  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartData = useAppSelector((state) => state.cart);
  const cartLength = cartData.items.length;

  const cartQuantity = cartLength;

  let user: { email: string; role: string } | null = null;
  if (token) {
    user = verifyToken(token);
  }

  const { data } = useGetMeQuery(undefined);
  const imageUrl: string = data?.data?.imageUrl || "";
  const name: string = data?.data?.name || "";

  const dashboardPath = user ? `/${user.role}/dashboard` : "/login";

  const menuData = [
    { title: "Home", path: "/" , icon: <Home/>},
    { title: "All Cars", path: `/all-cars` ,icon: <CarFront/> },
    { title: "Dashboard", path: dashboardPath ,icon: <LayoutDashboard/> },
    { title: "About Us", path: "/about" ,icon: <Notebook/>},
    { title: "Contact Us", path: "/contact-us" ,icon: <Contact/>},
  ];


  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logOut());
    setMenuOpen(false);
    navigate("/");
  };

  // Handle scroll events to show or hide the "Back to Top" button and add shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
        setIsScrolled(true); // Show shadow when scrolled down
      } else {
        setShowBackToTop(false);
        setIsScrolled(false); // Remove shadow when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={` sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="flex justify-between items-center py-3 mx-8 md:mx-12 lg:mx-24">
        {/* Logo */}
       <Link to='/'>
       <div className="flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dsgnwjmlv/image/upload/v1739543958/car-hunt_ms5cyt.webp"
            className="h-14 w-14"
            alt=""
          />
          <h1 className="text-2xl font-bold text-[#1890ff]">CarHunt</h1>
        </div>
       </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
  {menuData
    .filter((item) => user || item.title !== "Dashboard") 
    .map((item, index) => (
      <NavLink
        key={index}
        to={item.path}
        className={({ isActive }) =>
          `font-medium text-lg ${isActive ? "text-[#1890ff]" : "hover:text-[#1890ff]"}`
        }
      >
       <div className="flex items-center gap-2"> {item.icon}
       {item.title}
       </div>
      </NavLink>
    ))}
</div>

        {/* Icons and Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <FiShoppingCart className="text-2xl text-gray-600 hover:text-[#1890ff]" />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </NavLink>

          {/* Authentication Buttons */}
          {user ? (
            <>
              <NavLink to={`/${user.role}/dashboard`} className="mr-0">
                <p className="mr-0">{name}</p>
              </NavLink>

              <NavLink to={`/${user.role}/dashboard`} className="mr-0 ml-3">
                <ProfileAvatar imageUrl={imageUrl} size={40} />
              </NavLink>

              <button
                onClick={handleLogout}
                className=" ml-3 rounded-md py-2 px-5 border hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <button className="rounded-md py-2 px-5 border bg-transparent hover:text-white text-[#1890ff] hover:bg-[#1890ff] font-bold cursor-pointer">
                  LogIn
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="rounded-md py-2 px-5 border hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer">
                  SignUp
                </button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            ref={closeIconRef}
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white shadow-md absolute top-full left-0 w-full z-50 text-center "
        >
          <div className="space-y-4 py-4 px-6">
            {menuData.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `block font-medium ${
                    isActive ? "text-[#1890ff]" : "hover:text-[#1890ff]"
                  }`
                }
                onClick={() => {
                  if (item.title === "Dashboard" && !user) {
                    navigate("/login");
                  }
                  setMenuOpen(false);
                }}
              >
                <div className="flex items-center justify-center gap-2"> {item.icon}
                 {item.title}
                </div>
              </NavLink>
            ))}

            {/* Icons */}
            <div className="flex items-center justify-center space-x-6">
              {/* Cart Icon */}
              <NavLink to="/cart" className="relative">
                <FiShoppingCart className="text-2xl text-gray-600 hover:text-[#1890ff]" />
                {cartQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartQuantity}
                  </span>
                )}
              </NavLink>
            </div>

            <div className="flex flex-col space-y-4">
              {user ? (
                <>
                  <NavLink to={`/${user.role}/dashboard`} className="mr-0">
                    <p className="mr-0">{name}</p>
                  </NavLink>

                  <NavLink to={`/${user.role}/dashboard`} className="mr-0 ml-3">
                    <ProfileAvatar imageUrl={imageUrl} size={40} />
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="w-full rounded-md py-2 px-5 border hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login">
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="w-full rounded-md py-2 px-5 border bg-transparent hover:text-white text-[#1890ff] hover:bg-[#1890ff] font-bold cursor-pointer"
                    >
                      LogIn
                    </button>
                  </NavLink>
                  <NavLink to="/signup">
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="w-full rounded-md py-2 px-5 border hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer"
                    >
                      SignUp
                    </button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-4 bg-[#1890ff] text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          ↑
        </button>
      )}
    </header>
  );
};

export default Navbar;

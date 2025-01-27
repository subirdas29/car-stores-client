import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeIconRef = useRef<HTMLButtonElement>(null);

  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Verify user token to extract role
  let user: { email: string; role: string } | null = null;
  if (token) {
    user = verifyToken(token); // Example: { email: 'user@example.com', role: 'admin' }
  }

  // Dynamic Dashboard Path
  const dashboardPath = user ? `/${user.role}/dashboard` : "/login";

  const menuData = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Dashboard", path: dashboardPath },
    { title: "Contact Us", path: "/contact" },
  ];

  const handleLogout = () => {
    dispatch(logOut());
    setMenuOpen(false); // Close the menu
    navigate("/"); // Redirect to the home page
  };

  // Close the menu when clicking outside or on the cross icon
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        closeIconRef.current &&
        event.target !== closeIconRef.current
      ) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Listen for clicks outside of the menu or cross icon to close it
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle click on the cross button to close the menu
  const handleMenuToggle = () => {
    setMenuOpen(false); // Close the menu
  };

  return (
    <header className="relative">
      <div className="bg-white w-full z-50 shadow-lg">
        <div className="flex justify-between items-center py-3 mx-4 md:mx-12 lg:mx-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">CarHunt</h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              ref={closeIconRef}
              className="text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)} // Toggle menu
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuData.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? "text-[#1890ff]" : "hover:text-[#1890ff]"
                  }`
                }
                onClick={() => {
                  if (item.title === "Dashboard" && !user) {
                    navigate("/login"); // Redirect to login if not logged in
                  }
                }}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="rounded-md py-2 px-5 border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer"
              >
                LogOut
              </button>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  <button className="rounded-md py-2 px-5 border-1 bg-transparent hover:text-white text-[#1890ff] hover:bg-[#1890ff] font-bold cursor-pointer">
                    LogIn
                  </button>
                </NavLink>
                <NavLink
                  to="/signup"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  <button className="rounded-md py-2 px-5 border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer">
                    SignUp
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden bg-white shadow-md absolute top-full left-0 w-full z-50"
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
                      navigate("/login"); // Redirect to login if not logged in
                    }
                    setMenuOpen(false); // Close menu on click
                  }}
                >
                  {item.title}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-4">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="rounded-md py-2 px-5 border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer"
                  >
                    LogOut
                  </button>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      onClick={() => setMenuOpen(false)} // Close menu on click
                    >
                      <button className="rounded-md py-2 px-5 border-1 bg-transparent hover:text-white text-[#1890ff] hover:bg-[#1890ff] font-bold cursor-pointer">
                        LogIn
                      </button>
                    </NavLink>
                    <NavLink
                      to="/signup"
                      onClick={() => setMenuOpen(false)} // Close menu on click
                    >
                      <button className="rounded-md py-2 px-5 border-1 hover:text-[#1890ff] hover:bg-transparent text-white bg-[#1890ff] font-bold cursor-pointer">
                        SignUp
                      </button>
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

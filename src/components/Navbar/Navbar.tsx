import  { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const menuData = [
  {
    title: "Catalog",
    href: "#",
  },
  {
    title: "How it Works",
    children: [
      { title: "How Printify Works", href: "#" },
      { title: "Print On Demand", href: "#" },
      { title: "Printify Quality Promise", href: "#" },
      { title: "What to Sell?", href: "#" },
    ],
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Services",
    children: [
      { title: "Printify Studio", href: "#" },
      { title: "Printify Express Delivery", href: "#" },
      { title: "Transfer Products", href: "#" },
      { title: "Order in Bulk", href: "#" },
      { title: "Experts Program", href: "#" },
    ],
  },
  {
    title: "Use-cases",
    children: [
      { title: "Merch For Fans", href: "#" },
      { title: "Merch For eCommerce", href: "#" },
      { title: "Merch For Enterprises", href: "#" },
      { title: "Grow Your Store", href: "#" },
    ],
  },
  {
    title: "Need Help?",
    children: [
      { title: "Help Center", href: "#" },
      { title: "Contacts", href: "#" },
      { title: "My Requests", href: "#" },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <div>
      <div className="bg-white w-full z-50 shadow-lg px-8 lg:px-32">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl">CarHunt</h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
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
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuData.map((item, index) =>
              item.children ? (
                <div key={index} className="relative group">
                  <button className="hover:text-[#29AB51] font-medium">
                    {item.title}
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 space-y-2">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.href}
                        className="block hover:text-[#29AB51]"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={index} href={item.href} className="hover:text-[#29AB51] font-medium">
                  {item.title}
                </a>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-4">
          <NavLink to='/login' >
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer">
              Log In
              </button>
            </NavLink>
            <NavLink to='/signup'>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer">
              Sign Up
              </button>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-4 py-4">
              {menuData.map((item, index) =>
                item.children ? (
                  <details key={index}>
                    <summary className="hover:text-[#29AB51]">{item.title}</summary>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.href}
                          className="block hover:text-[#29AB51]"
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a key={index} href={item.href} className="block hover:text-[#29AB51]">
                    {item.title}
                  </a>
                )
              )}
              <div className="flex flex-col space-y-4 mx-auto">

                <NavLink to='/login' className=''>
            <button  className="border-2 border-gray-300 w-full text-gray-800 font-bold py-2 px-4 rounded-md cursor-pointer mx-full ">
              Log In
              </button>
            </NavLink>
              
            <NavLink to='/signup'>
            <button className="bg-green-600 w-full text-white font-bold py-2 px-4 rounded-md cursor-pointer">
              Sign Up
              </button>
            </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

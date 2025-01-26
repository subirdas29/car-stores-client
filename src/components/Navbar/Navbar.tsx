import  { useState } from 'react';
import { NavLink, } from 'react-router-dom';

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


  return (
    <div>
      <div className="bg-white w-full z-50 shadow-lg ">
        <div className="flex justify-between items-center py-3 mx-12 md:mx-16 lg:mx-24">
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
                  <button className="hover:text-[#1890ff] font-medium">
                    {item.title}
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 space-y-2">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.href}
                        className="block hover:text-[#1890ff]"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={index} href={item.href} className="hover:text-[#1890ff] font-medium">
                  {item.title}
                </a>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-4">
          <NavLink to='/login' >
          <button className='rounded-md py-2 px-5 border-1 w-full bg-transparent  hover:text-white  text-[#1890ff]   hover:bg-[#1890ff] font-bold cursor-pointer '>LogIn</button>
            </NavLink>
            <NavLink to='/signup'>
            <button className='rounded-md py-2 px-5 border-1 hover:text-[#1890ff]  w-full hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer '>SignUp</button>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-12 cursor-pointer">
            <div className="space-y-4 py-4">
              {menuData.map((item, index) =>
                item.children ? (
                  <details key={index}>
                    <summary className="hover:text-[#1890ff]">{item.title}</summary>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.href}
                          className="block hover:text-[#1890ff]"
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
                <button className='rounded-md py-2 px-5 border-1 w-full bg-transparent  hover:text-white  text-[#1890ff]   hover:bg-[#1890ff] font-bold cursor-pointer '>LogIn</button>
            </NavLink>
              
            <NavLink to='/signup'>
            <button className='rounded-md py-2 px-5 border-1 hover:text-[#1890ff]  w-full hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer '>SignUp</button>
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

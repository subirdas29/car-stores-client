

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className=" mx-8 md:mx-12 lg:mx-24 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Company Info */}
        <div className="col-span-2 md:col-span-1">
      <div className="flex gap-3 items-center">
      <img src="https://res.cloudinary.com/dsgnwjmlv/image/upload/v1739543958/car-hunt_ms5cyt.webp" className="h-14 w-14" alt="" />
      <h1 className="text-2xl font-bold text-[#1890ff]">CarHunt</h1>
      </div>
        
          <p className="text-sm leading-relaxed">
            Car Hunt is your ultimate destination for exploring, discovering,
            and purchasing top-tier cars. We strive to provide you with the best
            automotive experience, connecting you to the car of your dreams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="fas fa-envelope text-[#1890ff] mr-3"></i>
              <a href="mailto:info@carhunt.com" className="hover:text-white">
                info@carhunt.com
              </a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone text-[#1890ff] mr-3"></i>
              <a href="tel:+1234567890" className="hover:text-white">
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt text-[#1890ff] mr-3"></i>
              123 Car Hunt Drive, Auto City, USA
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-[#F2F2F2] bg-opacity-40 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                <i
                  className={`fab fa-${icon} text-[#1890ff] transition-transform duration-300 group-hover:scale-125`}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 mt-10 py-6 mx-8 md:mx-12 lg:mx-24">
        <div className=" mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-evenly items-center">
          <p className="text-sm mb-4 md:mb-0">
            Subscribe to our newsletter for the latest updates and offers:
          </p>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:ring-2 focus:ring-[#1890ff] outline-none"
            />
            <button
              type="submit"
              className="bg-[#1890ff] text-white px-6 py-2 rounded-r-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; 2025 Car Hunt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

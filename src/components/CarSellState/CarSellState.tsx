import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgImage from "../../assets/img/state/img.jpg";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  // Smooth scrolling with scaling to prevent empty bottom space
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Scale to fill the space

  return (
    <div ref={sectionRef} className="relative w-full h-[80vh] flex flex-col items-center justify-center text-white overflow-hidden px-4 py-10 sm:px-6 sm:py-2">
      {/* Background Image with Smooth Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          y: yBackground,
          scale: scaleBackground, // Scaling prevents empty space issue
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 p-6" />

      <div className="relative z-10 flex flex-col w-full max-w-6xl px-6 md:px-12 text-center md:text-left">
        {/* Left Section */}
        <div className="lg:flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Drive Your Dream Car Today! <br />
            <span className="text-blue-500">Brand-New</span> & <span className="text-green-500">Certified Used Cars</span> at the Best Prices.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Explore our premium collection of <strong>luxury, sports, and budget-friendly cars</strong>. Whether you're looking for a <strong>brand-new ride</strong> or a <strong>high-quality pre-owned vehicle</strong>, we have something for every car enthusiast.
          </p>
        </div>

        {/* Right Section - Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {[
            { number: "10,000+", label: "Cars Sold" },
            { number: "8,745", label: "Happy Customers" },
            { number: "500+", label: "Luxury Models Available" },
            { number: "15+", label: "Years in the Market" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/40 rounded-lg p-4 lg:p-6 text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-500">{stat.number}</h2>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

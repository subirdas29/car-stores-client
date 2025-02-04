import { motion } from "framer-motion";
import { FaCarSide } from "react-icons/fa";

const CarLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
       
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{
            repeat: Infinity,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <FaCarSide className="text-[#1890ff] text-6xl" />
        </motion.div>

      
        <motion.div
          className="absolute bottom-[-20px] flex space-x-2"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        >
          <span className="w-2 h-2 bg-[#1890ff] rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-[#1890ff] rounded-full animate-bounce delay-200"></span>
          <span className="w-2 h-2 bg-[#1890ff] rounded-full animate-bounce delay-400"></span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CarLoader;

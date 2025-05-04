/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useCreateContactMutation } from '../../redux/features/user/userApi';


const ContactUs: React.FC = () => {
   const [contact] = useCreateContactMutation();
  const {register, handleSubmit, reset} = useForm()


  const onSubmit = async(data:FieldValues)=>{
  
    try {
      
      const contactInfo = {
        name:data.name,
        email:data.email,
        message:data.message
      }

      const res = await contact(contactInfo).unwrap();

      toast.success(res.message );
      reset()
  
    } catch (err:any) {
      
      toast.error(err.data.message);
    }
  
   }

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
        backgroundImage: `url('assets/images/banner/car2.webp')`,
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
          About Us
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" ,fontWeight:"bold", color:"white"  }}>
        Explore the world’s finest cars and find your perfect match.
        </p>
     
      </div>
    </div>
  </div>
    <div className="bg-gray-50 py-12 px-6 min-h-screen">
      
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
          
              {...register("name",{required:true})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#1890ff"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
         
         
              {...register("email",{required:true})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#1890ff]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">Your Message</label>
            <textarea
              id="message"
              {...register("message",{required:true})}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#1890ff]"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-[#1890ff] text-white py-2 px-4 rounded-md hover:bg-[#1890ff] focus:outline-none focus:ring-2 focus:ring-[#1890ff]">
            Submit
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default ContactUs;

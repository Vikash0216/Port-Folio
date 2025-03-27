import React,{useState} from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import service from "../../appwrite/service";



const Contact = () => {
  const { register, handleSubmit,reset } = useForm();
  const [loading,setLoading] = useState(false)
  const [send,toSend] = useState(false)
 async function messageSubmit(data) {
    if(loading)return;
    setLoading(true)
    try{
      const { name, email, message } = data; // ✅ Extract values correctly
      const sentData = await service.postData({ name, email, message }); 
   if(sentData) {
    toSend(true);
    reset();
  }
    }catch(error){
      console.error("Message sent failed")
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg w-full md:w-1/2 p-8"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Contact Me
          </h2>
          <div className="w-full my-4 border-t border-gray-400" />
          <form onSubmit={handleSubmit(messageSubmit)} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col"
            >
              <label htmlFor="name" className="text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^[A-Za-z\s]{2,50}$/.test(value) ||
                      "Please enter a valid name",
                  },
                })}
                className="p-2 rounded border focus:outline-none focus:border-blue-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col"
            >
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                        value
                      ) || "Please enter a valid email",
                  },
                })}
                className="p-2 rounded border focus:outline-none focus:border-blue-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col"
            >
              <label htmlFor="message" className="text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                {...register("message", {
                  required: true,
                })}
                className="p-2 rounded border focus:outline-none focus:border-blue-400"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              disabled={loading}
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-600"
            >
              {loading?"Sending..." :send ? "Message Sent" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white shadow-lg min-h-[31rem] rounded-lg w-full md:w-1/2 p-8"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Get In Touch
          </h2>
          <div className="w-full my-4 border-t border-gray-400" />
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Phone:</strong> +91 8797 053 283
            </p>
            <p>
              <strong>Email:</strong> vikashmahatoravi@gmail.com
            </p>
            <p>
              <strong>Address:</strong> Mundatand,Sini ,Jamshedpur, Jarkhand
              INDIA 833220
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/vikashmahato0216"
                className="text-blue-500"
              >
                Vikash Mahato
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Vikash0216" className="text-blue-500">
                Vikash Mahato
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

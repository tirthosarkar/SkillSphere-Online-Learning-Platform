"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden bg-white px-4">
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[12rem] md:text-[20rem] font-bold leading-none select-none tracking-tighter bg-linear-to-b from-indigo-200 to-transparent bg-clip-text text-transparent"
      >
        404
      </motion.h1>

      
      <div className="absolute  bg-linear-to-t from-white via-transparent to-transparent  h-full w-full" />

    
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 -mt-20 md:-mt-10 text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1C30]">
          Sorry, that page could not be found
        </h2>
        <p className="text-[#464555] max-w-md mx-auto">
          The requested page either doesn't exist or you don't have access to it. 
          Please check the URL or head back home.
        </p>

       
        <div className="pt-6">
          <Link href="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0B1C30] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Go Back Home
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <div className="absolute top-1/4 left-10 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50" />
    </div>
  );
};

export default NotFound;
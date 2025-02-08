import React from 'react';
import { motion } from 'framer-motion';
import loadingGif from '../Neura_ai_bg_hor-removebg-preview.png'; // Ensure correct path

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, rgb(2, 61, 41), rgb(0, 5, 62), rgb(2, 61, 41))' }} // Change gradient colors here
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }} // Reduced duration and delay
    >
      <motion.img 
        src={loadingGif} 
        alt="Loading..."
        className="w-64 h-64" // Adjust size as needed
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
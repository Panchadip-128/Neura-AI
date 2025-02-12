import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import researchTopics from '../ResearchTopics.pdf';

const TitlePane = () => {
  const sentence = "MIT BLR's Largest Professional AI/ML/DL/DataScience Community";
  const words = sentence.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className=''>
      <div className='title-bg'></div>
      <div className='title-text-container'>
        <h1 className='title-text xl:text-6xl 2xl:text-7xl text-5xl'>NEURA AI</h1>
        <motion.p
          className='disc-text xl:text-2xl text-xl'
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={child} className="inline-block mr-1">
              {word}
            </motion.span>
          ))}
        </motion.p>
        <div className='flex disc-container'>
          <div className='items-center'>
            <a href="https://mbosc-takshakala2025.vercel.app/" className='discord-btn'></a>
          </div>
          <div className='items-center'>
            <a href={researchTopics} className='checkin-btn' download target="_blank" rel="noopener noreferrer">
              
            </a>
          </div>
        </div>
        <div className='arrow-container disc-container'>
          <IoIosArrowDown className='arrow-icon'/>
        </div>
      </div>
    </div>
  );
};

export default TitlePane;
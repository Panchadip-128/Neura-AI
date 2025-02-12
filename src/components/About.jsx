import React from 'react';
import { SwipeCarousel } from './SwipeCarousel';
import CountUp from './CountUp';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='bg-[#18191A] pb-32' id='about'>
      <div className='bg-[#141414] h-1/2'>
        <div id='ACMstats' className='flex justify-evenly align-center py-11'>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={2000} className="countUpText gradient-text1 sm:text-5xl" end={2021}/>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="text-sm sm:text-lg md:text-xl pt-3">
                Established in
              </motion.p>
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={75} end={1} className="countUpText gradient-text2 sm:text-5xl" prefix='#'/>
              <div className='flex justify-center'>
                <div className='w-1/2'>
                  <motion.p 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    className="text-xs sm:text-lg md:text-xl pt-3">
                    Largest MIT-B Tech Club
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={750} end={2100} className="countUpText gradient-text3 sm:text-5xl" formatNumber={true} suffix="+"/>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="text-sm sm:text-lg md:text-xl pt-3">
                Active Members
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:min-h-100 sm:flex sm:items-center sm:justify-evenly p-4">
        <div className="w-full h-full sm:w-1/2 sm:h-1/2">
          <SwipeCarousel />
        </div>

        <div className="text-center text-white max-w-md">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.5, delay: 0.3 }}
            className="dm-mono text-sm sm:text-lg md:text-xl"
          >
            Neura AI is MIT BLR's largest AI tech community.
            Our club focuses on helping students discover their passions, prepare for internships and careers, and make
            friends and professional connections. We promote computer science education through 
            professional AI events, social events, and conferences.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;

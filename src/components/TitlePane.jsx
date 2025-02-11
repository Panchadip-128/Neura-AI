import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import researchTopics from '../ResearchTopics.pdf';




function TitlePane() {
  return (
    <div className=''>
      <div className='title-bg'></div>
      <div className='title-text-container'>
        <h1 className='title-text xl:text-6xl 2xl:text-7xl text-5xl'>NEURA AI</h1>
        <p className='disc-text xl:text-2xl text-xl'>MIT BLR's Largest Professional AI/ML/DL/DataScience Community</p>
        <div className='flex disc-container'>
          <div className='items-center'><a href="https://mbosc-takshakala2025.vercel.app/" className='discord-btn'></a></div>
          <div className='items-center'><a 
  href={researchTopics} 
  className='checkin-btn' 
  download
  target="_blank"
  rel="noopener noreferrer"
>
  
  </a></div>
        </div>
        <div className='arrow-container disc-container'><IoIosArrowDown className='arrow-icon'/></div>
      </div>
      
     

    </div>
    
    
  )
}

export default TitlePane
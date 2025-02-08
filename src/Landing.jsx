import React from 'react'
import TitlePane from './components/TitlePane';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import SponsorCarousel from './components/SponsorCarousel';
import SIGs from './components/SIGs';
import Footer from './components/Footer';
import Officers from './components/Officers';
import NeuraLogo from './Neura_ai-hor5-removebg-preview.png';
import { useEffect, useState } from 'react';

function Landing() {
    const [ isSmall, setIsSmall ] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsSmall(window.innerWidth < 1100);
        };
    
        // Call handleResize once to set the initial state correctly
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
 
  return (
    <div>
        <div className='splash-container' id='home'>
          {isSmall && <span className='fish-conatiner'>
             <img src={NeuraLogo} alt='neura' className='fish'/>
          </span>}
          
          <TitlePane/>
          <Menu/>
        </div>
        <Home/>
        <About/> 
        <Officers/>
        <h1 id='sponsors' className='flex justify-center p-4'>Upcoming Events</h1>
        <SponsorCarousel id='sponsors'/>
        <SIGs id='sigs'/>
        <Footer/>

    </div>
  )
}

export default Landing
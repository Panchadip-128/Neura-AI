import React, { useEffect, useState } from 'react';
import TitlePane from './components/TitlePane';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import SponsorCarousel from './components/SponsorCarousel';
import Gallery from "./components/Gallery"
import SIGs from './components/SIGs';
import Footer from './components/Footer';
import Officers from './components/Officers';
import NeuraLogo from './Neura_ai-hor5-removebg-preview.png';
import FAQ from "./components/FAQs";
import ContactForm from "./components/contact";
import Projects from "./components/Projects";
import LoadingScreen from "./components/LoadingScreen"; // Import LoadingScreen

function Landing() {
    const [isSmall, setIsSmall] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 1100);
        };

        // Handle screen resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Simulating a loading effect
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Adjust time as needed

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    if (isLoading) {
        return <LoadingScreen />; // Show loading screen while loading
    }

    return (
        <div>
            <div className='splash-container' id='home'>
                {isSmall && <span className='fish-conatiner'>
                    <img src={NeuraLogo} alt='neura' className='fish' />
                </span>}

                <TitlePane />
                <Menu />
            </div>
            <Home />
            <About />
            <Officers />
            <h1 id='sponsors' className='text-center p-4'>Upcoming Events</h1>
            <SponsorCarousel id='sponsors' />

            <h1 id='gallery' className='text-center p-4'>Gallery</h1>
            <Gallery id='gallery' />
            <SIGs id='sigs' />

            <Projects />
            <FAQ />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Landing;

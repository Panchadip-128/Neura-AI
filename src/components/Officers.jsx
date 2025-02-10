import * as React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { FaLinkedin } from "react-icons/fa";
import 'swiper/css/pagination';

function Officers() {
    const officers = [
        {
            name: "Norman Bukingolts",
            position: "President",
            linkedin: "https://www.linkedin.com/in/norman-codes/",
            imgSrc: require('../assets/headshots/Norman+Headshot.jpg'),
            bio: "M.S. in AI Systems '26, University of Florida",
        },
        {
            name: "Alexander Klein",
            position: "Internal Vice President",
            linkedin: "https://www.linkedin.com/in/alexanderkleincs/",
            imgSrc: require('../assets/headshots/Alexander+Headshot.jpg'),
            bio: "Incoming Solutions Engineer @ Deloitte, Former Software Engineer Intern @ Akima",
        },
        {
            name: "Surya Karthikeyan Vijayalakshmi",
            position: "External Vice President",
            linkedin: "https://www.linkedin.com/in/kvsurya/",
            imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
            bio: "Director of Web Development @ University of Florida Homecoming and Gator Growl",
        },
        {
            name: "Jacob Hoppenstedt",
            position: "Secretary",
            linkedin: "https://www.linkedin.com/in/jacob-hoppenstedt/",
            imgSrc: require('../assets/headshots/Jacob+Headshot.jpg'),
            bio: "Former Software Development Engineer Intern @ Publix",
        },
        {
            name: "Connor Munjed",
            position: "Treasurer",
            linkedin: "https://www.linkedin.com/in/connor-munjed-58a171289/",
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ FIS Global",
        },
        {
            name: "Anteneh Zewdie",
            position: "Marketing Lead",
            linkedin: "https://www.linkedin.com/in/antenehzewdie/",
            imgSrc: require('../assets/headshots/Anteneh+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Prevent Overdose Inc.",
        },
        {
            name: "Jack Crew",
            position: "VP of Professional Affairs",
            linkedin: "https://www.linkedin.com/in/jack-crew/",
            imgSrc: require('../assets/headshots/Jack+Headshot.jpg'),
            bio: "Former Business Development Intern @ TaskUs",
        },
        {
            name: "Alexander Fisher",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/alexander-fisher-00209828a/",
            imgSrc: require('../assets/headshots/Fisher+Headshot.jpg'),
            bio: "Incoming Software Engineer Intern @ BNY",
        },
        {
            name: "Kovidh Gandreti",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/kovidhgandreti/",
            imgSrc: require('../assets/headshots/Kovidh+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Lockheed Martin Aeronautics",
        },
        {
            name: "Diego Alvarez d Jesus",
            position: "Social Lead",
            linkedin: "https://www.linkedin.com/in/dalvarezdejesus/",
            imgSrc: require('../assets/headshots/Diego+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Northrop Grumman",
        },
        {
            name: "Rashi Goyal",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/RashiG_Neura.png'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Tanay Sanjay",
            position: "Media Team",
            linkedin: "https://www.linkedin.com/in/jasontenczar/",
            imgSrc: require('../assets/headshots/Tsm (2).jpg'),
            bio: "Former Software Engineer Intern @ Integris Group",
        },
        {
            name: "Arnav Agarwal",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Arnav_Media.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Shreya Rastogi",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/ShreyaR.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Bhavika",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Bhavika.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Sashia Tuli",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Sashia.png'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Samaira Malik",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Samaira.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Riddhi P",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Riddhi.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Aaditya Khopade",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/adityaK.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Livana Datta",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/adityaK.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Livana Datta",
            position: "Operations & Logistics Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Livana.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Adithi Jahnavi",
            position: "Web Development Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Adithi.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Aryan Jha",
            position: "Operations & Logistics Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Aryan.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
    ];

    const [activeOfficer, setActiveOfficer] = useState(officers[0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640 || window.innerHeight < 632);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640 || window.innerHeight < 632);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerClass = isMobile ? 'flexMobile' : 'flexDefault';
    const officerClass = isMobile ? 'officerMobile' : 'officerCard';

    const mobileInfoStyle = isMobile ? { height: '50vh', overflowY: 'auto' } : {};

    return (
        <div className='officerCardBg'>
            <div className={containerClass}>
                <div style={mobileInfoStyle} className="bg-[#0000008e] sm:w-1/2 flex-col items-center justify-center">
                    <h1 className="text-center text-white text-4xl py-4">Meet The Team</h1> {/* Reduced padding */}
                    <div className="text-center">
                        <h2 className="text-5xl gradient-text2 p-3">{activeOfficer.name}</h2>
                        <p className="text-3xl gradient-text1 p-3">{activeOfficer.position}</p>
                        <div className="flex justify-center">
                            <p className="dm-mono text-sm p-3 sm:text-md md:text-lg outline-gray-500 w-5/6 text-center sm:w-1/2">{activeOfficer.bio}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0000008e] pt-4 pb-10 sm:w-1/2"> {/* Reduced padding-top */}
                    <Swiper
                        pagination={true}
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        spaceBetween={30}
                        onSlideChange={(swiper) => setActiveOfficer(officers[swiper.activeIndex])}
                    >
                        {officers.map((officer, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col items-center p-2'> {/* Reduced padding */}
                                    <div className={officerClass}>
                                        <div className="flex flex-col items-center">
                                            <img src={officer.imgSrc} alt={officer.name} className='w-32 h-32 sm:w-48 sm:h-48 rounded-md object-cover mb-2' /> {/* Reduced margin-bottom */}
                                            <h2 className='text-md sm:text-2xl text-white text-center'>{officer.name}</h2>
                                            <a href={officer.linkedin} target="_blank" rel="noreferrer" className='text-4x hover:scale-110 linked-in duration-300 mt-2 p-2'>
                                                <FaLinkedin />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Officers;
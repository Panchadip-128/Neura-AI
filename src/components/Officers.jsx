import * as React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import Instagram icon
import 'swiper/css/pagination';

function Officers() {
    const officers = [
        
        {
            name: "Yasaswini Suryadevara",
            position: "Executive Secretary",
            linkedin: "https://www.linkedin.com/in/yasaswini-suryadevara-114154159",
            instagram: "https://www.instagram.com/its._.yasaswini", // Add Instagram link
            imgSrc: require('../assets/headshots/yasaswini2.png'),
            bio: "Passionate about fostering AI innovation and education.Enthusiastic, musical, and book-obsessed organizer.",
        },
        {
            name: "Tridib Jena",
            position: "General Secretary",
            linkedin: "https://www.linkedin.com/in/kvsurya/",
            instagram: "https://www.instagram.com/tridibjena_", // Add Instagram link
            imgSrc: require('../assets/headshots/Tridib.png'),
            bio: "Wanna have some refreshments.. ?",
        },
        {
            name: "Panchadip Bhattacharya",
            position: "Technical Lead",
            linkedin: "https://www.linkedin.com/in/panchadip-bhattacharya-192388228/",
            instagram: "https://www.instagram.com/its_panchadip", // Add Instagram link
            imgSrc: require('../assets/headshots/PDB2.png'),
            bio: "Former Software Development Engineer Intern @ Publix",
        },
        {
            name: "Dipen Singh",
            position: "Operations & Logistics Team",
            linkedin: "https://www.linkedin.com/in/connor-munjed-58a171289/",
            instagram: "https://www.instagram.com/connor.munjed/", // Add Instagram link
            imgSrc: require('../assets/headshots/Dipen.png'),
            bio: "I love future💯",
        },
        {
            name: "Jonath Jimmi",
            position: "Operations & Logistics Team" ,
            linkedin: "https://www.linkedin.com/in/jonath-jimmi-41932b302",
            instagram: "https://www.instagram.com/anteneh.zewdie/", // Add Instagram link
            imgSrc: require('../assets/headshots/Jonath.png'),
            bio: "'In the pages of books and the strings of my guitar, I find whispers of the divine—stories, melodies, and miracles intertwined.'",
        },
        {
            name: "Pranshu Thakkar",
            position: "Graphics Designer",
            linkedin: "https://www.linkedin.com/in/pranshu-t-aba933325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/pranshu._.thakkar?igsh=MTV2NzBrcnQ4YW1ieQ==", // Add Instagram link
            imgSrc: require('../assets/headshots/Pranshu.png'),
            bio: "Have edited a book called Vismrit Shaurya & have worked on multiple Graphc Designing projects in various clubs",
        },
        
        
        {
            name: "Prajwal Pandey",
            position: "AI Specialist",
            linkedin: "http://www.linkedin.com/in/prajwal-pandey14",
            instagram: "https://www.instagram.com/prajwal_x8c/", // Add Instagram link
            imgSrc: require('../assets/headshots/Prajwal.png'),
            bio: "Interested in AI/ML, with emphasis on NLP. Also very interested in psychology, writing, and acting. ",
        },
        {
            name: "Rashi Goyal",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/rashi-goyal-1801a6314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            instagram: "https://www.instagram.com/rashi.goyal/", // Add Instagram link
            imgSrc: require('../assets/headshots/RashiG_Neura.png'),
            bio: "Always up for new experiences!",
        },
        {
            name: "Tanay Sanjay",
            position: "Media Team",
            linkedin: "https://www.linkedin.com/in/jasontenczar/",
            instagram: "https://www.instagram.com/tanay.sanjay/", // Add Instagram link
            imgSrc: require('../assets/headshots/Tsm (2).jpg'),
            bio: "Passionate about videography and editing—I make clips cool, question my life choices, and rewatch footage endlessly until it 'feels right.'",
        },
        {
            name: "Arnav Agarwal",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/arnav.agarwal/", // Add Instagram link
            imgSrc: require('../assets/headshots/Arnav_Media.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Shreya Rastogi",
            position: "Operations & Logistics Head",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/shreya.rastogi/", // Add Instagram link
            imgSrc: require('../assets/headshots/ShreyaR.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Bhavika",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/bhavika/", // Add Instagram link
            imgSrc: require('../assets/headshots/Bhavika.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Sashia Tuli",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/sashia.tuli/", // Add Instagram link
            imgSrc: require('../assets/headshots/Sashia.png'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Samaira Malik",
            position: "Marketing Team",
            linkedin: "https://in.linkedin.com/in/samaira-malik-a06266264?trk=public_profile_samename-profile",
            instagram: "https://www.instagram.com/samaira.malik/", // Add Instagram link
            imgSrc: require('../assets/headshots/Samaira.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Riddhi P",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/riddhi.p/", // Add Instagram link
            imgSrc: require('../assets/headshots/Riddhi.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Aaditya Khopade",
            position: "Marketing Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/aaditya.khopade/", // Add Instagram link
            imgSrc: require('../assets/headshots/adityaK.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        
        {
            name: "Livana Datta",
            position: "Operations & Logistics Team",
            linkedin: "https://in.linkedin.com/in/livana-datta-200452326",
            instagram: "https://www.instagram.com/livana.datta/", // Add Instagram link
            imgSrc: require('../assets/headshots/Livana.jpg'),
            bio: "Former Software Engineer Intern @ DS2",
        },
        {
            name: "Adithi Jahnavi",
            position: "Web Development Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/adithi.jahnavi/", // Add Instagram link
            imgSrc: require('../assets/headshots/FullSizeRender - Adithi1.jpg'),
            bio: "Fun, easygoing coder.Well-written code fixes everything (except my coffee addiction).",
        },
        {
            name: "Aryan Jha",
            position: "Operations & Logistics Team",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            instagram: "https://www.instagram.com/aryan.jha/", // Add Instagram link
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
                                            <div className="flex space-x-2 mt-2">
                                                <a href={officer.linkedin} target="_blank" rel="noreferrer" className='text-4x hover:scale-110 linked-in duration-300 p-2'>
                                                    <FaLinkedin className="text-2xl" />
                                                </a>
                                                <a href={officer.instagram} target="_blank" rel="noreferrer" className='text-4x hover:scale-110 instagram duration-300 p-2'>
                                                    <FaInstagram className="text-2xl" />
                                                </a>
                                            </div>
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
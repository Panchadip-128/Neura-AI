import * as React from "react";

function SponsorCarousel() {
    const sponsors = [
        { text: "ANN", link: "#", imgSrc: require("../assets/UEV_ANN1.png")},
        { text: "UEV2", link: "#", imgSrc: require("../assets/UEV_2.png") },
        { text: "AI_uev", link: "#", imgSrc: require("../assets/AI_uev.png") },
        { text: "AI_TH", link: "#", imgSrc: require("../assets/th_uev.jpg") },
        { text: "AI_movie", link: "#", imgSrc: require("../assets/AI_movie1.png") },
        { text: "AI_tech", link: "#", imgSrc: require("../assets/AI_tech.png") },
       

        { text: "ANN", link: "#", imgSrc: require("../assets/UEV_ANN1.png")},
        { text: "UEV2", link: "#", imgSrc: require("../assets/UEV_2.png") },
        { text: "AI_uev", link: "#", imgSrc: require("../assets/AI_uev.png") },
        { text: "AI_TH", link: "#", imgSrc: require("../assets/th_uev.jpg") },
        { text: "AI_movie", link: "#", imgSrc: require("../assets/AI_movie1.png") },
        { text: "AI_tech", link: "#", imgSrc: require("../assets/AI_tech.png") },
        
    ];

    return (
        <div className="carousel">
            <div className="carousel-track">
                {sponsors.map((item) => (
                    <a className="slide" href={item.link}>
                        <img className="slide-img" src={item.imgSrc} alt={item.text} />
                    </a>
                ))}
            </div>
        </div>
    )
};

export default SponsorCarousel;
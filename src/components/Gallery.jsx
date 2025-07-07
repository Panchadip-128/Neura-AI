import * as React from "react";

function Gallery() {
    const pics = [
        { imgSrc: require("../assets/pics/IMG-20250405-WA0009.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0010.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0011.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0012.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0013.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0014.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0015.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0016.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0017.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0018.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0019.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0020.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0021.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0022.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0023.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0024.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0025.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0026.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0027.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0028.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0029.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0030.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0031.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0032.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0033.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0034.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0035.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0036.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0081.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0082.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0083.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0084.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0085.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0086.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0087.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0088.jpg") },
        { imgSrc: require("../assets/pics/IMG-20250405-WA0089.jpg") },
    ]

    return (
        <div className="carousel">
            <div className="carousel-track">
                {pics.map((item, idx) => (
                    <img className="h-[20em] mr-10 rounded-lg" src={item.imgSrc} alt={`Picture ${idx}`} />
                ))}
            </div>
        </div>
    )
};

export default Gallery;
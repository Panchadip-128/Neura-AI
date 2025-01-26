import * as React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin  } from "react-icons/fa";


function Footer() {
    const socials = [
        { text: "discord", link: "https://discord.gg/wcYxbcgbVN", fa: <FaWhatsapp/>},
        { text: "linkedin", link: "https://www.linkedin.com/company/ufacm/", fa: <FaLinkedin/>},
        { text: "instagram", link: "https://www.instagram.com/uf.acm/", fa: <FaInstagram/>},
    ];

    return (
        <div className="footer py-5 opacity-80">
            <div className="footer-text text-xs">
                <img className="self-center w-1/2" src={require("../assets/neura-hor-10.png")} alt='Neura Logo'/>
                <p className="footer-line leading-5 md:text-s md:leading-7">Manipal Academy of Higher Education</p>
                <p className="footer-line leading-5 md:text-s md:leading-7">Govindapura Village, Yelahanka , Bengaluru - 560064</p>
                <p className="footer-line leading-5 md:text-s md:leading-7">Designed by the <b>Neura AI Tech Team</b></p>
            </div>
            <div className="footer-socials">
                {socials.map((item) => (
                    <a className="social-button p-2" href={item.link}>
                        {item.fa}
                    </a>
                ))}
            </div>
        </div>
    )
};

export default Footer;
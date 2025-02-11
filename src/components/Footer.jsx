import * as React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    const socials = [
        { text: "discord", link: "https://chat.whatsapp.com/CthdcrweQat21qTLxRDJ63", fa: <FaWhatsapp /> },
        { text: "linkedin", link: "https://www.linkedin.com/company/neura-ai/posts/", fa: <FaLinkedin /> },
        { text: "instagram", link: "https://www.instagram.com/neura.mitblr/", fa: <FaInstagram /> },
    ];

    return (
        <div className="footer py-5 opacity-80 text-white" style={{ backgroundColor: '#000000' }}>
            <div className="footer-text text-xs text-center mb-4">
                <img className="self-center w-1/2 mx-auto mb-4 transition-transform duration-300 hover:scale-105" src={require("../assets/neura-hor-10.png")} alt='Neura Logo' />
                <p className="footer-line leading-5 md:text-s md:leading-7">Manipal Academy of Higher Education</p>
                <p className="footer-line leading-5 md:text-s md:leading-7">Govindapura Village, Yelahanka, Bengaluru - 560064</p>
                <p className="footer-line leading-5 md:text-s md:leading-7">Designed by the <b>Neura AI Tech Team</b></p>
            </div>
            <div className="footer-socials text-center mb-4">
                {socials.map((item, index) => (
                    <a key={index} className="social-button p-2 mx-2 transition-transform duration-300 hover:scale-110 hover:text-blue-500" href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.fa}
                    </a>
                ))}
            </div>
            <div className="footer-map text-left mb-4">
                <h3 className="text-left mb-2">Find us at</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31083.29798917921!2d77.59631590000001!3d13.136376300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739194998605!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
            <footer className="footer">
                <p className="text-xs">
                    &copy; {new Date().getFullYear()} Neura AI Tech Team. All rights reserved.
                </p>
             </footer>
        </div>
    );
}

export default Footer;
"use client";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import about2.jpg from src/assets
import about2 from "../assets/about2.jpg";

// Reference the headshot image from the public folder
const normanHeadshot = "/images/headshots/Norman+Headshot.jpg";

const projects = [
  {
    title: "AI Image Recognition",
    description: "A project that uses AI to recognize images.",
    tags: ["AI", "ML", "Image Recognition"],
    githubLink: "https://github.com/user/ai-image-recognition",
    thumbnail: about2, // Use imported image
  },
  {
    title: "ML Model for Predictive Analysis",
    description: "A machine learning model for predictive analysis.",
    tags: ["ML", "Predictive Analysis"],
    githubLink: "https://github.com/user/ml-predictive-analysis",
    thumbnail: normanHeadshot, // Image from public folder
  },
];

const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "next" ? "right-4" : "left-4"
      } z-10 p-3 bg-gray-800 hover:bg-gray-600 text-white rounded-full cursor-pointer shadow-md flex items-center justify-center w-10 h-10`}
      onClick={onClick}
      style={{ display: "block" }} // Ensure arrows are always displayed
    >
      {direction === "next" ? ">" : "<"}
    </div>
  );
};

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true, // Keep arrows visible on small screens
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <motion.div className="max-w-4xl mx-auto p-6 bg-gradient-to-tl from-[#0f4e44] to-[#070015] rounded-lg shadow-lg">
      <motion.h1 className="text-3xl font-bold text-center mb-6 text-white">
        Projects Showcase
      </motion.h1>
      <div className="relative">
        <Slider {...settings} className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div key={index} className="flex justify-center px-4 sm:ml-8 sm:w-72"> {/* Add margin-left and adjust width for responsive screens */}
              <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col sm:w-72 sm:h-80"> {/* Adjust width and height for responsive screens */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-2 rounded-lg shadow hover:from-green-500 hover:to-blue-600 transition duration-300 text-sm"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Projects;
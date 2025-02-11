"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { FaGithub } from "react-icons/fa"; // Import the GitHub icon
import about2 from "../assets/about2.jpg";
import image from "../assets/waste_mg_1.png";
import image1 from "../assets/img_cap1.png";
import image3 from "../assets/llm_1.png";
import image4 from "../assets/nlp_1.png";




const projects = [
  {
    title: "Waste Management System using Reinforcement Learning",
    description: "A project to optimize waste collection using RL(Epsillon Explorer) for an optimised production, minimising overflow and increasing efficiency",
    tags: ["AI", "RL", "Epsillon Explorer"],
    githubLink: "https://github.com/Panchadip-128/Waste-Management-Solution-using-advanced-Reinforcement-Learning-techniques",
    thumbnail: image,
  },
  {
    title: "AI Image Recognition and Captioning System",
    description: "A project that uses AI to recognize and caption images using advanced state of the art BLIP and CLIP models and Transformers Library",
    tags: ["AI", "ML", "Image Recognition", "BLIP", "CLIP", "Transformers"],
    githubLink: "https://github.com/Panchadip-128/Image_Captioning_Application",
    thumbnail: image1,
  },
  {
    title: "An advanced LLM Copilot Extension for VS Code",
    description: "This extension was developed to enhance coding efficiency by integrating advanced language models like Llama 3.1, OpenAI’s GPT-3.5-turbo, and Gemini 1.5.",
    tags: ["Gen AI", "Advanced LLM Engine", "Llama","Fine Tuning", "Chatbot"],
    githubLink: "https://github.com/Panchadip-128/LLM_Copilot_Extension",
    thumbnail: image3,
  },
  {
    title: "Automated Text Summarization- Using NLP",
    description: "This project implements a text summarization tool using the Hugging Face Transformers library and spaCy.Offers both extractive and abstractive summarization methods.",
    tags: ["NLP", "Predictive Analysis","spaCy"],
    githubLink: "https://github.com/Panchadip-128/Automated-Text-Summarization",
    thumbnail: image4,
  },
];

const Projects = () => {
  return (
    <motion.div className="w-full max-w-8xl mx-auto px-6 lg:px-12 py-10 bg-gradient-to-tl from-[#0f4e44] to-[#070015] shadow-lg">
      <motion.h1 className="text-3xl font-bold text-center mb-6 text-white">
        Projects Showcase
      </motion.h1>
      <div className="relative">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          className="carousel-3D-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="w-80 h-104 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col sm:w-80 sm:h-104">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs"
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
                    className="inline-flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-3 rounded-lg shadow hover:from-green-500 hover:to-blue-600 transition duration-300 text-sm"
                  >
                    View on GitHub <FaGithub className="inline ml-2" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Projects;
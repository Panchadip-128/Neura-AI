"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import about2 from "../assets/about2.jpg";

const projects = [
  {
    title: "AI Image Recognition",
    description: "A project that uses AI to recognize images.",
    tags: ["AI", "ML", "Image Recognition"],
    githubLink: "https://github.com/user/ai-image-recognition",
    thumbnail: about2,
  },
  {
    title: "AI Image Recognition",
    description: "A project that uses AI to recognize images.",
    tags: ["AI", "ML", "Image Recognition"],
    githubLink: "https://github.com/user/ai-image-recognition",
    thumbnail: about2,
  },
  {
    title: "ML Model for Predictive Analysis",
    description: "A machine learning model for predictive analysis.",
    tags: ["ML", "Predictive Analysis"],
    githubLink: "https://github.com/user/ml-predictive-analysis",
    thumbnail: about2,
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
              <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col sm:w-80 sm:h-96">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Projects;
import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const ScrollSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

export const MenuItem = ({ item, toggleOpen }) => {
  const handleClick = () => {
    ScrollSection(item.id);
    toggleOpen(); // Close the menu
  };

  return (
    <motion.li
      className="menu_list_item mb-6 text-white text-lg font-semibold relative cursor-pointer transition-all duration-300"
      variants={variants}
      // Apply a boxShadow on hover for a glow effect
      whileHover={{ boxShadow: "0px 0px 8px 2px #38bdf8" }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <span className="relative group block px-4 py-2" style={{ fontSize: '18px', lineHeight: '0.8' }}> {/* Set font size and line height in numbers */}
        {item.text}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </span>
    </motion.li>
  );
};

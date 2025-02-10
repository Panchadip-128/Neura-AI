import * as React from "react";
import { motion } from "framer-motion";

// Variants for the outer menu item (scale and glow effect)
const menuItemVariants = {
  rest: { scale: 1, boxShadow: "none" },
  hover: { 
    scale: 1.05, 
    boxShadow: "0px 0px 8px 2px #38bdf8",
    transition: { duration: 0.3 },
    borderRadius: "20px",
  },
};

export const MenuItem = ({ item, toggleOpen }) => {
  const handleClick = () => {
    // Scroll to the corresponding section (if needed)
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "nearest",
      });
    }
    toggleOpen(); // Close the menu after clicking
  };

  return (
    <motion.li
      className="menu_list_item mb-6 text-white font-semibold relative cursor-pointer transition-all duration-300 overflow-hidden rounded-[20px]"
      style={{
        fontSize: "18px",
        lineHeight: "1.2",
        padding: "12px 16px",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
      }}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      variants={menuItemVariants}
      onClick={handleClick}
    >
      {/* Background fill element that expands only on hover */}
      <div className="background-fill"></div>
      
      {/* Menu item text (remains on top) */}
      <span className="relative block" style={{ zIndex: 1 }}>
        {item.text}
      </span>
    </motion.li>
  );
};

export default MenuItem;

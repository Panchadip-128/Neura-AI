import { motion } from "framer-motion";

function NavBar() {  
  function ScrollSection(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  const menuItems = [
    { text: "Home", onClick: () => ScrollSection("home"), id: "home" },
    { text: "About", onClick: () => ScrollSection("about"), id: "about" },
    { text: "Sponsors", onClick: () => ScrollSection("sponsors"), id: "sponsors" },
    { text: "SIGs", onClick: () => ScrollSection("sigs"), id: "sigs" },
  ];

  return (
    <div className="navbar">
      <ul className="navbar_list flex space-x-4">
        {menuItems.map((item) => (
          <motion.li
            key={item.text}
            whileHover={{ scale: 1.1, color: "#A0522D" }} // Add hover animation
            whileTap={{ scale: 0.9 }} // Add tap animation
          >
            <a href="/#" className="navbar_list_child text-xs" onClick={item.onClick}>{item.text}</a> {/* Reduced font size */}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
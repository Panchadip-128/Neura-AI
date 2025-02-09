import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    try {
      const response = await fetch('https://your-vercel-app-url.vercel.app/api/send-email', { // Replace with your deployed backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          className: 'text-sm'
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error('Failed to send email');
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          className: 'text-sm'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        className: 'text-sm'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-lg mx-auto p-8 bg-gray-900 text-white shadow-lg rounded-lg"
    >
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Contact Us</h2>
      <motion.form
        onSubmit={handleSubmit}
        className={`space-y-6 ${shake ? "animate-shake" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
import React, { useState } from "react";
import { motion } from "framer-motion";

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

        await fetch('https://api.useplunk.com/v1/send', {
            method: 'POST',
            body: JSON.stringify({
                to: "panchadip125@gmail.com",
                subject: `NeuraAI Contact Form Message`,
                body: `Name: ${formData.name} | Email:  ${formData.email} | Message: ${formData.message}`
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk_b4eed4c94a1818a80f7f0ae63d0ad58fea9f6bccfe693b06',
            },
        });

        alert("Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            id="contact"
            className="w-full max-w-3xl mx-auto px-6 lg:px-12 py-8 bg-gradient-to-br from-[#091320] to-[#080d1d] text-white shadow-lg rounded-lg"
        >
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h2>
            <motion.form
                onSubmit={handleSubmit}
                className={`space-y-6 ${shake ? "animate-shake" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    className="flex flex-col md:flex-row md:space-x-4"
                >
                    <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3 bg-[#fffde1] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105 mb-4 md:mb-0 text-gray-900"
                        whileFocus={{ scale: 1.05 }}
                    />
                    <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3 bg-[#fffde1] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105 text-gray-900"
                        whileFocus={{ scale: 1.05 }}
                    />
                </motion.div>
                <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 bg-[#fffde1] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105 text-gray-900"
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
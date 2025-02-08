"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
    const faqs = [
        { question: "What is this website about?", answer: "This website provides information about our organization and its activities." },
        { question: "How can I join?", answer: "You can join by signing up on our website or contacting us through the form below." },
        { question: "Who are the organizers?", answer: "Our team consists of dedicated professionals and students passionate about technology and learning." },
        { question: "What if we have technical doubts after events?", answer: "Our team will float a Google form for doubt clarification right after the event." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div 
            className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-[#0f4e44] to-[#070015] shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2 
                className="text-4xl font-bold text-center mb-8 text-white"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index} 
                        className="border rounded-lg shadow-md bg-white dark:bg-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <button
                            className="w-full flex justify-between items-center text-lg font-semibold p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition duration-300"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                ⌄
                            </span>
                        </button>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden bg-white dark:bg-gray-900"
                        >
                            <p className="p-4 text-sm text-gray-700 dark:text-gray-300">{faq.answer}</p> {/* Applied extra small font size */}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default FAQ;
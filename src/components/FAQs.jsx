"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
    const faqs = [
        { question: "What activities does the club organize?", answer: "We conduct workshops, coding challenges, AI hackathons, guest lectures from industry experts, research collaborations, and project-building sessions to help members gain hands-on experience and stay updated with AI advancements." },
        { question: "How can I participate in club events and projects?", answer: "You can stay updated by joining our WhatsApp group and following our Instagram & LinkedIn page. Event details, registration links, and project collaboration opportunities will be shared on these platforms." },
        { question: "Who are the organizers?", answer: "Our team consists of dedicated professionals and students passionate about technology and learning." },
        { question: "What if we have technical doubts after events?", answer: "Our team will float a Google form for doubt clarification right after the event." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
            className="w-full max-w-8xl mx-auto px-6 lg:px-12 py-8 bg-gradient-to-br from-[#0f4e44] to-[#070015] shadow-lg" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="faqs"
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
                            className="w-full rounded-lg flex justify-between items-center text-lg font-semibold p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition duration-300 text-left"
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
                            className="overflow-hidden rounded-lg bg-white dark:bg-gray-900"
                        >
                            <p className="p-4 text-sm text-gray-700 dark:text-gray-300 text-left">{faq.answer}</p> {/* Applied extra small font size */}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default FAQ;
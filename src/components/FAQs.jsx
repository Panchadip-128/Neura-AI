import React, { useState } from "react";

const FAQ = () => {
    const faqs = [
        { question: "What is this website about?", answer: "This website provides information about our organization and its activities." },
        { question: "How can I join?", answer: "You can join by signing up on our website or contacting us through the form below." },
        { question: "Who are the organizers?", answer: "Our team consists of dedicated professionals and students passionate about technology and learning." },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <button
                        className="w-full text-left text-lg font-semibold bg-gray-200 p-3 rounded"
                        onClick={() => toggleFAQ(index)}
                    >
                        {faq.question}
                    </button>
                    {openIndex === index && <p className="p-3 text-gray-700">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;

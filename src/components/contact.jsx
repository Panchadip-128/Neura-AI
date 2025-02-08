import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 border rounded"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border rounded"
                    required
                ></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

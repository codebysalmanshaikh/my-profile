import React, { useState } from "react";
import {
  FaReact,
  FaGithub,
  FaGitAlt,
  // Faenvelope,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submission
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    // You can integrate emailjs, Formspree, or backend here
  };

  return (
    <section id="contact" className="bg-gray-950 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Contact <span className="text-teal-400">Me</span>
        </h2>
        <p className="text-gray-300 text-center mb-10">
          Have a question, proposal, or just want to say hi? Fill out the form below or connect with me on social media.
        </p>
        <form
          className="bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={5}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-teal-400 text-center mt-2">Thank you! Your message has been sent.</p>
          )}
        </form>
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/codebysalmanshaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="GitHub"
          >
            {/* <i className="fab fa-github"></i> Or use an SVG/icon */}
            {/* <FaGithub /> */}
             GitHub
          </a>
          <a
            href="salmans3724@gmail.com"
            className="text-2xl text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="Email"
          >
            {/* <i className="fas fa-envelope"></i> */}
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/salman-shaikh-580283269"
            className="text-2xl text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fas fa-envelope"></i>
            LinkedIn
          </a>
          {/* Add more socials as needed */}
        </div>
      </div>
    </section>
  );
}
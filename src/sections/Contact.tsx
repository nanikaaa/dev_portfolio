'use client';

import React, { useState } from "react";
import Typewriter from 'typewriter-effect';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send("service_pk9cf97", "template_pqi7cnn", formData, "WYxRm9C3FM3JOytcC")
      .then(
        (response) => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <div id="contact" className="py-16 px-4 sm:px-6 md:px-8 lg:py-20 lg:px-12 xl:px-24">
      <div className="container mx-auto">
        
        <div className="bg-white/5 text-gray-100 p-6 sm:text-center sm:p-8 md:p-10 lg:py-12 lg:px-16 xl:px-20 rounded-3xl flex flex-col lg:flex-row gap-8 lg:gap-12 backdrop-blur-md border border-white/20 shadow-lg">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 pt-0 pb-19 sm:text-center lg:text-left">
            <h2 className=" bg-gradient-to-r from-pink to-teal text-transparent bg-clip-text font-serif text-3xl md:text-4xl lg:text-5xl">
            <Typewriter
            options={{
              strings: ['Get in Touch', 'Connect with Me', 'Let’s Collaborate'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
            </h2>
            <p className="mt-2 text-base md:text-lg lg:text-xl">
              I&apos;m always open to connecting and discussing new opportunities, collaborations, or just a friendly chat.
              
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Feel free to reach out via email or any of my social channels and contribute a testimony. 
            </p>

                  {/* Social Media Icons */}
            <div className="flex sm:justify-center lg:justify-start space-x-4 mt-4 pt-6">
              <a href="https://www.instagram.com/nott_yssa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-4xl text-gray-100 hover:text-teal transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/ma-yssabelle-amigable-2a5928293/e" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-4xl text-gray-100 hover:text-teal transition-transform transform hover:scale-110" />
              </a>
              <a href="https://github.com/nanikaaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-4xl text-gray-100 hover:text-teal transition-transform transform hover:scale-110" />
              </a>
              <a href="https://discordapp.com/users/891661691866202142" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <FaDiscord className="text-4xl text-gray-100 hover:text-teal transition-transform transform hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form (inside gradient background) */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto lg:mx-0">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-100"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal text-gray-100"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-100"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal text-gray-100"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-100"></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal text-gray-100"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 mt-4 bg-button-gradient text-white rounded-lg hover:bg-alt-gradient transition-transform transform active:scale-95"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && <p className="mt-4 text-green-200">Message sent successfully!</p>}
              {status === "error" && <p className="mt-4 text-red-200">There was an error sending your message.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

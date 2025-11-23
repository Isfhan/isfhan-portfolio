"use client";

import { useState } from "react";
import { Mail, Send, MapPin, Phone, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Contact = () => {
  const { social, personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10 space-y-12">

      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-brutal-purple to-brutal-pink drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Talk</span>
        </h1>
        <p className="text-xl font-bold max-w-2xl mx-auto">
          Got a project in mind? Want to collaborate? Or just want to say hi?
          Drop me a line and let&apos;s make something awesome together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="bg-white border-2 border-black p-8 shadow-brutal relative">
          <div className="absolute -top-4 -left-4 bg-brutal-yellow border-2 border-black px-4 py-2 font-black uppercase tracking-widest shadow-brutal-sm rotate-[-2deg]">
            Send a Message
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="space-y-2">
              <label className="font-bold uppercase text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-50 border-2 border-black p-4 font-bold focus:outline-none focus:shadow-brutal-sm transition-all"
                placeholder="YOUR NAME"
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold uppercase text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-50 border-2 border-black p-4 font-bold focus:outline-none focus:shadow-brutal-sm transition-all"
                placeholder="YOUR@EMAIL.COM"
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold uppercase text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-gray-50 border-2 border-black p-4 font-bold focus:outline-none focus:shadow-brutal-sm transition-all resize-none"
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                required
                disabled={status === "loading"}
              />
            </div>

            {status === "success" && (
              <div className="bg-brutal-green border-2 border-black p-4 font-bold text-center animate-fade-in-up">
                ✓ Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-100 border-2 border-black p-4 font-bold text-center text-red-800">
                ✗ {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-brutal-green hover:text-black border-2 border-transparent hover:border-black hover:shadow-brutal transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="space-y-8">

          {/* Info Card */}
          <div className="bg-brutal-cyan border-2 border-black p-8 shadow-brutal">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
              <Mail className="w-8 h-8" /> Contact Info
            </h3>
            <div className="space-y-4 font-bold">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-4 bg-white border-2 border-black p-4 hover:translate-x-2 transition-transform">
                <div className="bg-black text-white p-2">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="break-all">{personal.email}</span>
              </a>
              <div className="flex items-center gap-4 bg-white border-2 border-black p-4 hover:translate-x-2 transition-transform">
                <div className="bg-black text-white p-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Remote / Worldwide</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-brutal-purple border-2 border-black p-8 shadow-brutal">
            <h3 className="text-2xl font-black uppercase mb-6">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {social.map((link, index) => {
                // Map icons based on name
                let Icon = Github;
                if (link.name === "LinkedIn") Icon = Linkedin;
                if (link.name === "Twitter") Icon = Twitter;
                if (link.name === "YouTube") Icon = Youtube;
                if (link.name === "Instagram") Icon = Send; // Fallback

                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-black p-3 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
                    title={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

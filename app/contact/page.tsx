"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { portfolioData } from "@/lib/data";

const Contact = () => {
  const { social, personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateForm = (): boolean => {
    const errors: { name?: string; email?: string; message?: string } = {};
    let isValid = true;

    // Validate name
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      errors.name = "Name is required";
      isValid = false;
    } else if (trimmedName.length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    } else if (trimmedName.length > 100) {
      errors.name = "Name must be less than 100 characters";
      isValid = false;
    }

    // Validate email
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      errors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        errors.email = "Please enter a valid email address";
        isValid = false;
      } else if (trimmedEmail.length > 255) {
        errors.email = "Email is too long";
        isValid = false;
      }
    }

    // Validate message
    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      errors.message = "Message is required";
      isValid = false;
    } else if (trimmedMessage.length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    } else if (trimmedMessage.length > 2000) {
      errors.message = "Message must be less than 2000 characters";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setFieldErrors({});

    // Validate form
    if (!validateForm()) {
      setStatus("error");
      setErrorMessage("Please fix the errors below");
      return;
    }

    try {
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      // Send email directly via FormSubmit.co AJAX API
      const response = await fetch(
        `https://formsubmit.co/ajax/${personal.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            _subject: `New Contact Form Submission from ${formData.name.trim()}`,
            _captcha: false,
            _template: "box",
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      // Handle different response statuses
      if (!response.ok) {
        // Handle HTTP errors
        if (response.status === 429) {
          throw new Error(
            "Too many requests. Please try again in a few minutes."
          );
        } else if (response.status >= 500) {
          throw new Error("Server error. Please try again later.");
        } else if (response.status === 404) {
          throw new Error("Service not found. Please contact us directly.");
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid response from server. Please try again.");
      }

      // Check FormSubmit.co response
      if (!data.success) {
        // Handle specific FormSubmit.co errors
        if (data.message) {
          throw new Error(data.message);
        } else if (data.error) {
          throw new Error(data.error);
        } else {
          throw new Error("Failed to send message. Please try again.");
        }
      }

      // Success
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFieldErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        // Handle specific error types
        if (error.name === "AbortError") {
          setErrorMessage(
            "Request timed out. Please check your connection and try again."
          );
        } else if (
          error.message.includes("Failed to fetch") ||
          error.message.includes("NetworkError")
        ) {
          setErrorMessage(
            "Network error. Please check your internet connection and try again."
          );
        } else {
          setErrorMessage(error.message);
        }
      } else {
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    // Clear general error message when user starts typing
    if (status === "error" && errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brutal-purple to-brutal-pink drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Talk
          </span>
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
                className={`w-full bg-gray-50 border-2 p-4 font-bold focus:outline-none focus:shadow-brutal-sm transition-all ${
                  fieldErrors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-black focus:border-black"
                }`}
                placeholder="YOUR NAME"
                required
                disabled={status === "loading"}
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
              />
              {fieldErrors.name && (
                <p
                  id="name-error"
                  className="text-red-600 text-sm font-bold"
                  role="alert"
                >
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-bold uppercase text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-50 border-2 p-4 font-bold focus:outline-none focus:shadow-brutal-sm transition-all ${
                  fieldErrors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-black focus:border-black"
                }`}
                placeholder="YOUR@EMAIL.COM"
                required
                disabled={status === "loading"}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
              {fieldErrors.email && (
                <p
                  id="email-error"
                  className="text-red-600 text-sm font-bold"
                  role="alert"
                >
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-bold uppercase text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full bg-gray-50 border-2 p-4 font-bold focus:outline-none focus:shadow-brutal-sm transition-all resize-none ${
                  fieldErrors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-black focus:border-black"
                }`}
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                required
                disabled={status === "loading"}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={
                  fieldErrors.message ? "message-error" : undefined
                }
              />
              {fieldErrors.message && (
                <p
                  id="message-error"
                  className="text-red-600 text-sm font-bold"
                  role="alert"
                >
                  {fieldErrors.message}
                </p>
              )}
            </div>

            {status === "success" && (
              <div className="bg-brutal-green border-2 border-black p-4 font-bold text-center animate-fade-in-up">
                ✓ Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}

            {status === "error" && errorMessage && (
              <div
                className="bg-red-100 border-2 border-black p-4 font-bold text-center text-red-800 animate-fade-in-up"
                role="alert"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl">✗</span>
                  <span>{errorMessage}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setErrorMessage("");
                    setFieldErrors({});
                  }}
                  className="mt-2 text-sm underline hover:no-underline"
                >
                  Dismiss
                </button>
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
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 bg-white border-2 border-black p-4 hover:translate-x-2 transition-transform"
              >
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

"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";
import TypewriterText from "@/components/TypewriterText";

const Hero = () => {
  const { hero, personal } = portfolioData;

  const typewriterWords = [
    "CREATOR 🚀",
    "DEVELOPER 💻",
    "BUILDER 🔨",
    "CODER ⚡",
    "INNOVATOR 💡",
    "TEACHER 🎓",
    "SPEAKER 🎤",
    "WRITER 📝",
    "MENTOR 🧑",
    "ADVISOR 💼",
    "CONSULTANT 🧑‍💻",
    "COACH 💪",
    "TRAINER 🏋️‍♀️",
    "EXPERT 🧠",
  ];

  return (
    <div className="mb-20 sm:mb-32 md:mb-40">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Image Section - Takes 2 columns */}
        <div className="lg:col-span-2">
          <div
            className="border-4 border-black bg-neo-yellow p-4 sm:p-5 md:p-6 relative animate__animated animate__fadeInLeft shadow-neo-sm hover:shadow-neo transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-1 group"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Badge with Typewriter */}
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-1 bg-black border-2 sm:border-4 border-black px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 z-20 min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
              <span className="text-neo-yellow text-[10px] sm:text-xs md:text-sm font-bold">
                <TypewriterText
                  words={typewriterWords}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={2000}
                />
              </span>
            </div>

            <div className="border-4 border-black bg-white overflow-hidden">
              <Image
                className="w-full h-auto"
                src={personal.image}
                alt={`Picture of ${personal.fullName}`}
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        {/* Content Section - Takes 3 columns */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          {/* Greeting */}
          <div
            className="border-4 border-black bg-neo-cyan p-4 sm:p-5 md:p-6 animate__animated animate__fadeInRight shadow-neo-sm hover:shadow-neo transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-1"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              {hero.greeting.split(".")[0]}
              <span className="block mt-2">
                <span className="bg-black text-neo-yellow px-3 py-1 sm:px-4 sm:py-2 border-4 border-black inline-block">
                  {hero.greeting.split(".")[1] || ""}
                </span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <div
            className="border-4 border-black bg-white p-4 sm:p-5 md:p-6 animate__animated animate__fadeInUp shadow-neo-sm hover:shadow-neo transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-1"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-black text-base sm:text-lg md:text-xl font-bold leading-relaxed">
              {hero.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

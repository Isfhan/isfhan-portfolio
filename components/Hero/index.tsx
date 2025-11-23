"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";
import TypewriterText from "@/components/TypewriterText";
import { Code2, Rocket, Brain, Globe } from "lucide-react";

const Hero = () => {
  const { hero, personal } = portfolioData;

  const typewriterWords = [
    "CREATOR",
    "DEVELOPER",
    "BUILDER",
    "INNOVATOR",
  ];

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 -z-20" />
      
      {/* Floating Stickers (Decorative) */}
      <div className="absolute top-20 left-10 md:left-20 animate-bounce duration-[3000ms] hidden lg:block">
        <div className="bg-brutal-yellow p-3 border-2 border-black shadow-brutal rotate-[-6deg]">
          <Code2 className="w-8 h-8 text-black" />
        </div>
      </div>
      <div className="absolute bottom-40 right-10 md:right-20 animate-bounce duration-[4000ms] hidden lg:block">
        <div className="bg-brutal-cyan p-3 border-2 border-black shadow-brutal rotate-[12deg]">
          <Rocket className="w-8 h-8 text-black" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce duration-[3500ms] hidden lg:block">
        <div className="bg-brutal-pink p-3 border-2 border-black shadow-brutal rotate-[3deg]">
          <Brain className="w-8 h-8 text-black" />
        </div>
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce duration-[4500ms] hidden lg:block">
        <div className="bg-brutal-green p-3 border-2 border-black shadow-brutal rotate-[-12deg]">
          <Globe className="w-8 h-8 text-black" />
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 text-center z-10">
        <div className="space-y-8 animate-fade-in-up">
          
          {/* Profile Image "Polaroid" */}
          <div className="mx-auto w-64 h-64 sm:w-72 sm:h-72 relative rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
            <div className="absolute inset-0 bg-white border-2 border-black shadow-brutal-lg p-3 pb-12 transform translate-x-2 translate-y-2" />
            <div className="relative w-full h-full bg-white border-2 border-black p-2 shadow-brutal">
              <div className="relative w-full h-full border-2 border-black overflow-hidden bg-gray-100">
                <Image
                  className="object-cover"
                  src={personal.image}
                  alt={`Picture of ${personal.fullName}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-foreground uppercase leading-none">
              {hero.greeting.split(".")[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brutal-purple to-brutal-pink block mt-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                {hero.greeting.split(".")[1] || ""}
              </span>
            </h1>
            
            <div className="inline-block bg-white border-2 border-black px-6 py-2 shadow-brutal rotate-[2deg]">
               <span className="text-xl sm:text-2xl text-black font-mono font-bold uppercase tracking-widest">
                I am a <span className="text-brutal-purple">
                  <TypewriterText
                    words={typewriterWords}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseTime={2000}
                  />
                </span>
              </span>
            </div>
          </div>

          {/* Description Card */}
          <div className="max-w-2xl mx-auto p-6 bg-white border-2 border-black shadow-brutal rotate-[-1deg] hover:rotate-0 transition-transform">
            <p className="text-lg sm:text-xl text-black font-medium leading-relaxed">
              {hero.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
             <a href="#work" className="inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider bg-brutal-yellow text-black hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-black shadow-brutal h-14 px-10 text-lg">
               View Work
             </a>
             <a href="/contact" className="inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider bg-white text-black hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-black shadow-brutal h-14 px-10 text-lg">
               Contact Me
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

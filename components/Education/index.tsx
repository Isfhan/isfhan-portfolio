import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Calendar, School } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Education = () => {
  const { education: educationList } = portfolioData;

  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
      <div className="mb-4 sm:mb-5">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl text-left font-bold border-4 border-black bg-neo-cyan px-3 py-2 sm:px-4 sm:py-2 inline-flex items-center gap-2 sm:gap-3 shadow-neo-sm hover:shadow-neo transform hover:scale-105 transition-all duration-300">
          <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-black flex-shrink-0" />
          My Education
        </h1>
      </div>

      <div className="my-6 sm:my-8 md:my-10 space-y-3 sm:space-y-4">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className={`${edu.bgColor} border-4 border-black p-4 sm:p-5 md:p-6 relative shadow-neo-sm hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 hover:-rotate-1 group animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-black border-4 border-black p-1.5 sm:p-2 z-20">
              <School className="w-5 h-5 sm:w-6 sm:h-6 text-neo-yellow" />
            </div>

            {/* Decorative corner */}
            <div
              className={`absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 ${edu.bgColor} border-4 border-black transform rotate-45 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300`}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 relative z-10">
              <div className="md:col-span-2 flex items-start gap-2 sm:gap-3">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0 mt-1" />
                <h3 className="text-black text-lg sm:text-xl font-bold">
                  {edu.degree}
                </h3>
              </div>
              <div className="text-black font-bold border-4 border-black bg-white px-2 py-1.5 sm:px-3 sm:py-2 inline-flex items-center gap-1.5 sm:gap-2 md:justify-self-end w-fit transform group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{edu.date}</span>
              </div>
            </div>
            <div className="mt-2 sm:mt-3 relative z-10">
              <span className="text-black font-bold bg-black text-neo-yellow px-2 py-1 sm:px-3 sm:py-1 border-4 border-black inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm transform group-hover:scale-110 transition-transform duration-300">
                <School className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                {edu.institution}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

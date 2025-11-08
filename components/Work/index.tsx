import { Briefcase, Calendar, Code2, Rocket } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Work = () => {
  const { work: workExperiences } = portfolioData;

  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
      <div className="mb-4 sm:mb-5">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl text-left font-bold border-4 border-black bg-neo-yellow px-3 py-2 sm:px-4 sm:py-2 inline-flex items-center gap-2 sm:gap-3 shadow-neo-sm hover:shadow-neo transform hover:scale-105 transition-all duration-300">
          <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-black flex-shrink-0" />
          My Work Experience
        </h1>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6">
        {workExperiences.map((work, index) => (
          <div
            key={index}
            className={`${work.bgColor} border-4 border-black p-4 sm:p-5 md:p-6 relative shadow-neo-sm hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 hover:-rotate-1 group animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-black border-4 border-black p-1.5 sm:p-2 z-20">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-neo-yellow" />
            </div>

            {/* Decorative corner elements */}
            <div
              className={`absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 ${work.bgColor} border-4 border-black transform rotate-45 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300`}
            ></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3 relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
                <h3 className="text-black text-base sm:text-lg md:text-xl font-bold break-words">
                  {work.title}
                </h3>
              </div>
              {work.period === "Present" ? (
                <span className="bg-black text-neo-yellow text-xs sm:text-sm font-bold px-2 py-1.5 sm:px-3 sm:py-1 border-2 sm:border-4 border-black flex items-center gap-1.5 sm:gap-2 w-fit self-start sm:self-auto transform group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  Present
                </span>
              ) : (
                <time className="text-xs sm:text-sm font-bold text-black border-2 sm:border-4 border-black bg-white px-2 py-1.5 sm:px-3 sm:py-1 flex items-center gap-1.5 sm:gap-2 w-fit self-start sm:self-auto transform group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  {work.period}
                </time>
              )}
            </div>
            <p className="text-black text-sm sm:text-base font-bold leading-relaxed relative z-10">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

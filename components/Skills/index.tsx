import { Brain, Globe, Cpu, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "PROFESSIONAL SKILLS",
      icon: Brain,
      skills: skills.professional,
      bgColor: "bg-neo-yellow",
    },
    {
      title: "WEB DEVELOPMENT",
      icon: Globe,
      skills: skills.webDevelopment,
      bgColor: "bg-neo-cyan",
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      icon: Cpu,
      skills: skills.ai,
      bgColor: "bg-neo-pink",
    },
  ];

  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
      <div className="mb-4 sm:mb-5">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl text-left font-bold border-4 border-black bg-neo-pink px-3 py-2 sm:px-4 sm:py-2 inline-flex items-center gap-2 sm:gap-3 shadow-neo-sm hover:shadow-neo transform hover:scale-105 transition-all duration-300">
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-black flex-shrink-0" />
          My Skills
        </h1>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const getIconColor = () => {
            if (category.bgColor === "bg-neo-yellow") return "text-neo-yellow";
            if (category.bgColor === "bg-neo-cyan") return "text-neo-cyan";
            if (category.bgColor === "bg-neo-pink") return "text-neo-pink";
            return "text-neo-yellow";
          };
          return (
            <div
              key={index}
              className={`block w-full p-4 sm:p-5 md:p-6 border-4 border-black ${category.bgColor} relative shadow-neo-sm hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 hover:-rotate-1 group animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-black border-4 border-black p-1.5 sm:p-2 z-20`}
              >
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${getIconColor()}`} />
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 ${category.bgColor} border-4 border-black transform rotate-45 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300`}
              ></div>

              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0" />
                <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-black">
                  {category.title}
                </h5>
              </div>

              <ul className="flex flex-wrap p-1 sm:p-2 text-black font-bold gap-1 sm:gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="p-1.5 sm:p-2 m-1 sm:m-2 border-4 border-black bg-white text-xs sm:text-sm transform hover:scale-110 hover:-rotate-1 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

import { Brain, Globe, Cpu, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Professional Skills",
      icon: Brain,
      skills: skills.professional,
      color: "bg-brutal-yellow",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: skills.webDevelopment,
      color: "bg-brutal-cyan",
    },
    {
      title: "Artificial Intelligence",
      icon: Cpu,
      skills: skills.ai,
      color: "bg-brutal-purple",
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase inline-block border-b-4 border-brutal-green pb-2">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="group bg-white border-2 border-black p-0 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className={`${category.color} p-4 border-b-2 border-black flex items-center gap-3`}>
                <div className="p-2 bg-black text-white border-2 border-black shadow-brutal-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="p-6 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white text-black border-2 border-black shadow-brutal-sm hover:translate-y-[1px] hover:shadow-none hover:bg-black hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

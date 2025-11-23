import { Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Work = () => {
  const { work: workExperiences } = portfolioData;
  const colors = ["bg-brutal-yellow", "bg-brutal-purple", "bg-brutal-cyan", "bg-brutal-pink", "bg-brutal-green"];

  return (
    <section id="work" className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase inline-block border-b-4 border-brutal-yellow pb-2">
          Work Experience
        </h2>
      </div>

      <div className="space-y-12">
        {workExperiences.map((work, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className="group relative bg-white border-2 border-black p-0 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Colored Header */}
              <div className={`${colorClass} p-4 border-b-2 border-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}>
                <h3 className="text-xl font-black text-black uppercase tracking-tight">
                  {work.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-bold text-black bg-white px-3 py-1 border-2 border-black shadow-brutal-sm">
                  <Calendar className="w-4 h-4" />
                  {work.period}
                </div>
              </div>

              <div className="p-6">
                <p className="text-black font-medium leading-relaxed text-lg">
                  {work.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;

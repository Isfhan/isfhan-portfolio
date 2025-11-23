import { GraduationCap, Calendar, School } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Education = () => {
  const { education: educationList } = portfolioData;
  const colors = ["bg-brutal-pink", "bg-brutal-green", "bg-brutal-yellow", "bg-brutal-purple", "bg-brutal-cyan"];

  return (
    <section id="education" className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase inline-block border-b-4 border-brutal-pink pb-2">
          Education
        </h2>
      </div>

      <div className="space-y-8">
        {educationList.map((edu, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className="group relative bg-white border-2 border-black p-0 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-4 border-b-2 border-black ${colorClass}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                   <h3 className="text-xl font-black text-black uppercase tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-bold text-black bg-white px-3 py-1 border-2 border-black shadow-brutal-sm w-fit h-fit">
                    <Calendar className="w-4 h-4" />
                    {edu.date}
                  </div>
                </div>
              </div>

              <div className="p-6">
                 <div className="flex items-center gap-3">
                  <div className="p-2 bg-black text-white border-2 border-black">
                    <School className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold text-black uppercase tracking-wide">{edu.institution}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;

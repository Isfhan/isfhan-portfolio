import Image from "next/image";
import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Certifications = () => {
  const { certifications } = portfolioData;
  
  const colors = ["bg-brutal-yellow", "bg-brutal-purple", "bg-brutal-cyan", "bg-brutal-pink", "bg-brutal-green"];

  return (
    <section id="certifications" className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase flex items-center justify-center gap-4">
          <Award className="w-10 h-10" />
          Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className="group bg-white border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden border-b-2 border-black">
                <Image
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  src={cert.image}
                  fill
                  alt={cert.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay badge */}
                <div className={`absolute top-4 right-4 ${colorClass} border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-brutal-sm`}>
                  Verified
                </div>
              </div>
              
              {/* Content */}
              <div className={`p-6 ${colorClass} border-b-2 border-black`}>
                <Link
                  href={cert.link}
                  target="_blank"
                  className="block group-hover:translate-x-1 transition-transform"
                >
                  <h3 className="text-lg font-black uppercase tracking-tight flex items-start gap-2 text-black">
                    <span className="flex-1">{cert.title}</span>
                    <ExternalLink className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </Link>
              </div>
              
              <div className="p-4 bg-white">
                <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">
                  {cert.provider}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12">
        <div className="bg-brutal-yellow border-2 border-black p-8 md:p-12 text-center shadow-brutal relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-black">
              Want to see more credentials?
            </h2>
            <Link
              href={
                portfolioData.social.find((s) => s.name === "LinkedIn")?.url ||
                "#"
              }
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all border-2 border-transparent hover:border-black shadow-brutal"
            >
              <ExternalLink className="w-6 h-6" />
              View on LinkedIn
            </Link>
          </div>
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;

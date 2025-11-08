import Image from "next/image";
import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
      <div className="mb-4 sm:mb-5">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl text-left font-bold border-4 border-black bg-neo-yellow px-3 py-2 sm:px-4 sm:py-2 inline-flex items-center gap-2 sm:gap-3 shadow-neo-sm hover:shadow-neo transform hover:scale-105 transition-all duration-300">
          <Award className="w-8 h-8 sm:w-10 sm:h-10 text-black flex-shrink-0" />
          My Certifications
        </h1>
      </div>

      <div className="my-6 sm:my-8 md:my-10 p-2 sm:p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {certifications.map((cert, index) => {
            const getHoverColor = () => {
              if (cert.bgColor === "bg-white") return "hover:text-white";
              if (cert.bgColor === "bg-neo-yellow")
                return "hover:text-neo-yellow";
              if (cert.bgColor === "bg-neo-cyan") return "hover:text-neo-cyan";
              if (cert.bgColor === "bg-neo-pink") return "hover:text-neo-pink";
              return "hover:text-neo-cyan";
            };
            const getAwardColor = () => {
              if (cert.bgColor === "bg-white") return "text-white";
              if (cert.bgColor === "bg-neo-yellow") return "text-neo-yellow";
              if (cert.bgColor === "bg-neo-cyan") return "text-neo-cyan";
              if (cert.bgColor === "bg-neo-pink") return "text-neo-pink";
              return "text-neo-yellow";
            };
            return (
              <div
                key={index}
                className={`${cert.bgColor} border-4 border-black p-3 sm:p-4 relative shadow-neo-sm hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 transform hover:scale-[1.05] hover:-translate-y-2 hover:-rotate-1 group animate__animated animate__fadeInUp`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-black border-4 border-black p-1 sm:p-1.5 z-20`}
                >
                  <Award
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${getAwardColor()}`}
                  />
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 ${cert.bgColor} border-4 border-black transform rotate-45 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300`}
                ></div>

                <Image
                  className="w-full h-32 sm:h-40 object-cover border-4 border-black mb-3 sm:mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  src={cert.image}
                  width={500}
                  height={500}
                  alt={cert.title}
                />
                <Link
                  href={cert.link}
                  className={`hover:bg-black ${getHoverColor()} transition-all duration-300 block group p-1.5 sm:p-2`}
                >
                  <h3
                    className={`text-base sm:text-lg font-bold text-black flex items-center gap-1.5 sm:gap-2 transition-colors ${
                      cert.bgColor === "bg-white"
                        ? "group-hover:text-white"
                        : cert.bgColor === "bg-neo-yellow"
                        ? "group-hover:text-neo-yellow"
                        : cert.bgColor === "bg-neo-cyan"
                        ? "group-hover:text-neo-cyan"
                        : cert.bgColor === "bg-neo-pink"
                        ? "group-hover:text-neo-pink"
                        : "group-hover:text-neo-cyan"
                    }`}
                  >
                    {cert.title}
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 transform group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform duration-300" />
                  </h3>
                  <p
                    className={`text-black font-bold transition-colors text-sm sm:text-base ${
                      cert.bgColor === "bg-white"
                        ? "group-hover:text-white"
                        : cert.bgColor === "bg-neo-yellow"
                        ? "group-hover:text-neo-yellow"
                        : cert.bgColor === "bg-neo-cyan"
                        ? "group-hover:text-neo-cyan"
                        : cert.bgColor === "bg-neo-pink"
                        ? "group-hover:text-neo-pink"
                        : "group-hover:text-neo-cyan"
                    }`}
                  >
                    {cert.provider}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black text-center mt-4 sm:mt-5 p-3 sm:p-4 border-4 border-black bg-neo-yellow font-bold shadow-neo-sm hover:shadow-neo transition-all duration-300 transform hover:scale-[1.02]">
          These are a few of my certifications. For a comprehensive list, please
          visit my{" "}
          <Link
            href={
              portfolioData.social.find((s) => s.name === "LinkedIn")?.url ||
              "#"
            }
            className="bg-black text-neo-yellow px-1.5 py-0.5 sm:px-2 sm:py-1 border-4 border-black hover:bg-neo-cyan hover:text-black break-words transform hover:scale-110 transition-all duration-300 inline-block"
          >
            LinkedIn profile
          </Link>{" "}
          where you can find more details.
        </p>
      </div>
    </div>
  );
};

export default Certifications;

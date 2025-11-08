"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Code2,
  Rocket,
  Youtube,
  Zap,
  Target,
  TrendingUp,
  GithubIcon,
  Star,
  GitFork,
  Code,
  User,
} from "lucide-react";
import { portfolioData } from "@/lib/data";

interface GitHubData {
  followers: number;
  publicRepos: number;
  loading: boolean;
  totalStars: number;
  totalForks: number;
  topLanguages: string[];
  error: string | null;
  lastUpdated: string | null;
}

const About = () => {
  const { about, social, githubUsername } = portfolioData;
  const [githubData, setGithubData] = useState<GitHubData>({
    followers: 0,
    publicRepos: 0,
    loading: true,
    totalStars: 0,
    totalForks: 0,
    topLanguages: [],
    error: null,
    lastUpdated: null,
  });

  // Get social links for buttons
  const githubLink = social.find((s) => s.name === "GitHub");
  const linkedInLink = social.find((s) => s.name === "LinkedIn");

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubStats = async () => {
      try {
        if (isMounted) {
          setGithubData((prev) => ({
            ...prev,
            loading: true,
            error: null,
          }));
        }

        // Fetch from our API endpoint which reads from JSON file
        const response = await fetch("/api/github-stats", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub stats");
        }

        const data = await response.json();

        if (isMounted) {
          setGithubData({
            followers: data.followers || 0,
            publicRepos: data.publicRepos || 0,
            loading: false,
            totalStars: data.totalStars || 0,
            totalForks: data.totalForks || 0,
            topLanguages: data.topLanguages || [],
            error: data.error || null,
            lastUpdated: data.lastUpdated || null,
          });
        }
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        if (isMounted) {
          setGithubData((prev) => ({
            ...prev,
            loading: false,
            error: "Failed to fetch GitHub stats. Please try again later.",
          }));
        }
      }
    };

    fetchGitHubStats();
    return () => {
      isMounted = false;
    };
  }, []);

  const stats = [
    {
      icon: Code2,
      label: "Framework Creator",
      value: "BurgerAPI",
      color: "bg-neo-cyan",
    },
    {
      icon: Rocket,
      label: "Years Experience",
      value: "8+",
      color: "bg-neo-pink",
    },
    {
      icon: GithubIcon,
      label: "GitHub Repos",
      value: githubData.loading ? "..." : `${githubData.publicRepos}+`,
      color: "bg-neo-yellow",
    },
    {
      icon: Youtube,
      label: "Content Creator",
      value: "YouTube, Instagram, Facebook",
      color: "bg-neo-cyan",
    },
  ];

  return (
    <div className="container max-w-7xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate__animated animate__backInLeft">
        <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold border-2 sm:border-2 md:border-4 border-black bg-neo-yellow p-2 sm:p-2.5 md:p-3 lg:p-4 inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 shadow-neo transform hover:scale-105 transition-transform duration-300">
          <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex-shrink-0" />
          <span className="break-words">About Me</span>
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`${stat.color} border-2 sm:border-2 md:border-4 border-black p-3 sm:p-4 md:p-5 lg:p-6 relative shadow-neo-sm hover:shadow-neo transform hover:scale-105 hover:-rotate-1 transition-all duration-300 animate__animated animate__fadeInUp group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-black border-2 sm:border-2 md:border-4 border-black p-1 sm:p-1.5 md:p-2">
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="mt-1.5 sm:mt-2">
                <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold break-words">
                  {stat.value}
                </div>
                <div className="text-black text-[10px] sm:text-xs md:text-sm font-bold mt-0.5 sm:mt-1 break-words">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Stats Card */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate__animated animate__fadeInUp">
        <div className="border-2 sm:border-2 md:border-4 border-black bg-neo-yellow p-4 sm:p-5 md:p-6 lg:p-8 relative shadow-neo group hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 transform hover:scale-[1.01]">
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-black border-2 sm:border-2 md:border-4 border-black p-1.5 sm:p-2 md:p-3">
            <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neo-yellow" />
          </div>

          {githubData.loading ? (
            <div className="text-center py-6 sm:py-8">
              <div className="text-black text-base sm:text-lg md:text-xl font-bold">
                Loading GitHub stats...
              </div>
            </div>
          ) : githubData.error ? (
            <div className="text-center py-6 sm:py-8">
              <div className="bg-black text-neo-yellow px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 border-2 sm:border-2 md:border-4 border-black mb-3 sm:mb-4 inline-block max-w-full mx-2">
                <div className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                  ⚠️ Error Loading Stats
                </div>
                <div className="text-xs sm:text-sm md:text-base break-words">
                  {githubData.error}
                </div>
              </div>
              {githubLink && (
                <div className="mt-3 sm:mt-4">
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-neo-yellow px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border-2 sm:border-2 md:border-4 border-black text-xs sm:text-sm md:text-base font-bold hover:bg-neo-cyan hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    View GitHub Profile →
                  </a>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Main Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    {githubData.publicRepos}
                  </div>
                  <div className="text-black text-[10px] sm:text-xs md:text-sm font-bold mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
                    <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    Repos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    {githubData.followers}
                  </div>
                  <div className="text-black text-[10px] sm:text-xs md:text-sm font-bold mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
                    <GithubIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    Followers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    {githubData.totalStars}
                  </div>
                  <div className="text-black text-[10px] sm:text-xs md:text-sm font-bold mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    Stars
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    {githubData.totalForks}
                  </div>
                  <div className="text-black text-[10px] sm:text-xs md:text-sm font-bold mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
                    <GitFork className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    Forks
                  </div>
                </div>
              </div>

              {/* Top Languages */}
              {githubData.topLanguages.length > 0 && (
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <div className="text-black text-xs sm:text-sm md:text-base font-bold mb-1.5 sm:mb-2 md:mb-3 text-center">
                    Top Languages:
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
                    {githubData.topLanguages.map((lang, index) => (
                      <span
                        key={index}
                        className="bg-black text-neo-yellow px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 border-2 sm:border-2 md:border-4 border-black text-[10px] sm:text-xs md:text-sm font-bold"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {githubLink && (
                <div className="mt-3 sm:mt-4 text-center">
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-neo-yellow px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border-2 sm:border-2 md:border-4 border-black text-xs sm:text-sm md:text-base font-bold hover:bg-neo-cyan hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    View GitHub Profile →
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Personal Intro Card - Enhanced */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate__animated animate__fadeInUp">
        <div className="border-2 sm:border-2 md:border-4 border-black bg-black p-4 sm:p-6 md:p-8 lg:p-10 relative shadow-neo group hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300">
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-neo-yellow border-2 sm:border-2 md:border-4 border-black p-1.5 sm:p-2 md:p-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
          </div>
          <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 md:-bottom-3 md:-left-3 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-neo-pink border-2 sm:border-2 md:border-4 border-black transform rotate-45"></div>
          <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 md:top-4 md:right-4 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-neo-cyan border-2 border-black transform rotate-45"></div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-3 lg:gap-4">
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-neo-yellow flex-shrink-0" />
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center break-words">
                Passionate Developer
              </span>
            </div>
            <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hidden sm:inline">
              •
            </span>
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-neo-pink flex-shrink-0" />
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center break-words">
                Problem Solver
              </span>
            </div>
            <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hidden sm:inline">
              •
            </span>
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-neo-cyan flex-shrink-0" />
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center break-words">
                Tech Enthusiast
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About Cards - Enhanced */}
      <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
        {about.map((paragraph, index) => {
          const Icon = paragraph.icon;
          const isEven = index % 2 === 0;
          const getIconColor = () => {
            if (paragraph.bgColor === "bg-white") return "text-white";
            if (paragraph.bgColor === "bg-neo-yellow") return "text-neo-yellow";
            if (paragraph.bgColor === "bg-neo-cyan") return "text-neo-cyan";
            if (paragraph.bgColor === "bg-neo-pink") return "text-neo-pink";
            return "text-neo-cyan";
          };
          return (
            <div
              key={index}
              className={`border-2 sm:border-2 md:border-4 border-black ${paragraph.bgColor} p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 relative shadow-neo-sm hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 hover:-rotate-1 animate__animated animate__fadeInUp group`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Top Left Icon */}
              <div
                className={`absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 bg-black border-2 sm:border-2 md:border-4 border-black p-1 sm:p-1.5 md:p-2 z-20`}
              >
                <Icon
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${getIconColor()}`}
                />
              </div>

              {/* Decorative corner elements */}
              <div
                className={`absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 md:-bottom-3 md:-right-3 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${paragraph.bgColor} border-2 sm:border-2 md:border-4 border-black transform rotate-45 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300`}
              ></div>

              {/* Side accent bar */}
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 sm:w-1 md:w-2 h-12 sm:h-16 md:h-20 ${
                  paragraph.bgColor === "bg-white" ? "bg-black" : "bg-black"
                } opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              ></div>

              <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold leading-relaxed relative z-10 pl-1.5 sm:pl-2 md:pl-0 break-words">
                {paragraph.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Card */}
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 animate__animated animate__fadeInUp">
        <div className="border-2 sm:border-2 md:border-4 border-black bg-neo-yellow p-4 sm:p-6 md:p-8 lg:p-10 relative shadow-neo group hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 hover:-rotate-1">
          {/* Decorative corner elements */}
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-black border-2 sm:border-2 md:border-4 border-black p-1.5 sm:p-2 md:p-3">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neo-yellow" />
          </div>
          <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 md:-bottom-3 md:-left-3 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-neo-pink border-2 sm:border-2 md:border-4 border-black transform rotate-45 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300"></div>
          <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 md:top-4 md:right-4 w-3 h-3 sm:w-4 sm:h-4 bg-neo-cyan border-2 border-black transform rotate-45"></div>

          <div className="text-center relative z-10">
            <h2 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 px-2 break-words">
              Let's build something amazing together!
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 md:mt-6">
              {linkedInLink && (
                <a
                  href={linkedInLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-neo-yellow px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 border-2 sm:border-2 md:border-4 border-black text-xs sm:text-sm md:text-base lg:text-lg font-bold transform hover:scale-110 hover:-rotate-1 hover:bg-neo-cyan hover:text-black transition-all duration-300 inline-flex items-center justify-center cursor-pointer min-h-[44px] break-words"
                >
                  🚀 Ready to collaborate?
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

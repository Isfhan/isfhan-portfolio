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
  Terminal,
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
  const { about, social } = portfolioData;
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

  const githubLink = social.find((s) => s.name === "GitHub");
  const linkedInLink = social.find((s) => s.name === "LinkedIn");

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubStats = async () => {
      try {
        if (isMounted) {
          setGithubData((prev) => ({ ...prev, loading: true, error: null }));
        }

        const response = await fetch("/api/github-stats", { cache: "no-store" });

        if (!response.ok) throw new Error("Failed to fetch GitHub stats");

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
    return () => { isMounted = false; };
  }, []);

  const stats = [
    { icon: Code2, label: "Framework Creator", value: "BurgerAPI", color: "bg-brutal-yellow" },
    { icon: Rocket, label: "Years Experience", value: "8+", color: "bg-brutal-purple" },
    { icon: GithubIcon, label: "GitHub Repos", value: githubData.loading ? "..." : `${githubData.publicRepos}+`, color: "bg-brutal-cyan" },
    { icon: Youtube, label: "Content Creator", value: "YouTube, FB, Insta", color: "bg-brutal-pink" },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10 space-y-20">
      
      {/* Header Section */}
      <div className="text-center relative">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-brutal-green transform translate-x-2 translate-y-2 border-2 border-black" />
          <h1 className="relative bg-white border-2 border-black px-8 py-4 text-4xl md:text-6xl font-black uppercase tracking-tighter flex items-center gap-4">
            <User className="w-8 h-8 md:w-12 md:h-12 text-black" />
            About Me
          </h1>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`group relative ${stat.color} border-2 border-black p-6 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="absolute top-3 right-3 p-2 bg-black border-2 border-black rounded-full">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="mt-8">
                <div className="text-4xl font-black text-black mb-1">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-wider text-black">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Bio - Spans 8 columns */}
        <div className="lg:col-span-8 space-y-8">
          {about.map((paragraph, index) => {
             const Icon = paragraph.icon;
             return (
               <div key={index} className="bg-white border-2 border-black p-6 shadow-brutal flex gap-4 items-start hover:translate-x-1 transition-transform">
                 <div className="p-3 bg-brutal-yellow border-2 border-black shadow-brutal-sm shrink-0">
                   <Icon className="w-6 h-6 text-black" />
                 </div>
                 <p className="text-lg font-medium leading-relaxed text-black">
                   {paragraph.text}
                 </p>
               </div>
             );
          })}
        </div>

        {/* Sidebar - Spans 4 columns */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* GitHub Terminal */}
          <div className="bg-black border-2 border-black shadow-brutal overflow-hidden">
            <div className="bg-gray-800 p-2 flex gap-2 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center gap-2 text-green-400 mb-4">
                <Terminal className="w-4 h-4" />
                <span>root@isfhan:~$ fetch-github-stats</span>
              </div>
              
              {githubData.loading ? (
                <div className="text-gray-400 animate-pulse">Loading data...</div>
              ) : githubData.error ? (
                <div className="text-red-400">Error: {githubData.error}</div>
              ) : (
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Public Repos:</span>
                    <span className="text-brutal-cyan font-bold">{githubData.publicRepos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Followers:</span>
                    <span className="text-brutal-pink font-bold">{githubData.followers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Stars:</span>
                    <span className="text-brutal-yellow font-bold">{githubData.totalStars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Forks:</span>
                    <span className="text-brutal-green font-bold">{githubData.totalForks}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="text-gray-500 mb-2">Top Languages:</div>
                    <div className="flex flex-wrap gap-2">
                      {githubData.topLanguages.map((lang, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 text-brutal-purple text-xs border border-gray-600">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {githubLink && (
                <a 
                  href={githubLink.url} 
                  target="_blank"
                  className="block mt-6 text-center bg-white text-black font-bold py-2 hover:bg-brutal-green transition-colors"
                >
                  View Profile
                </a>
              )}
            </div>
          </div>

          {/* Personality Card */}
          <div className="bg-brutal-pink border-2 border-black p-6 shadow-brutal hover:shadow-brutal-lg transition-all">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3 border-b-2 border-black pb-4">
              <Zap className="w-8 h-8" /> Vibe Check
            </h3>
            <div className="space-y-4 font-bold">
              <div className="flex items-center gap-3 bg-white border-2 border-black p-4 shadow-brutal-sm hover:translate-x-1 transition-transform">
                <Target className="w-6 h-6 text-brutal-purple" />
                <span className="text-lg">Problem Solver</span>
              </div>
              <div className="flex items-center gap-3 bg-white border-2 border-black p-4 shadow-brutal-sm hover:translate-x-1 transition-transform">
                <TrendingUp className="w-6 h-6 text-brutal-green" />
                <span className="text-lg">Tech Enthusiast</span>
              </div>
              <div className="flex items-center gap-3 bg-white border-2 border-black p-4 shadow-brutal-sm hover:translate-x-1 transition-transform">
                <Sparkles className="w-6 h-6 text-brutal-yellow" />
                <span className="text-lg">Creative Mind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brutal-cyan border-2 border-black p-8 md:p-12 text-center shadow-brutal relative overflow-hidden group">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            Let&apos;s Build Something Amazing!
          </h2>
          {linkedInLink && (
            <a
              href={linkedInLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all border-2 border-transparent hover:border-black shadow-brutal"
            >
              <Rocket className="w-6 h-6" />
              Collaborate
            </a>
          )}
        </div>
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      </div>
    </div>
  );
};

export default About;

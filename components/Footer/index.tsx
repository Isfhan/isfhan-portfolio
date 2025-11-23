"use client";

import React from "react";

import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Footer = () => {
  const { social, personal, resume } = portfolioData;
  const currentYear = new Date().getFullYear();
  const copyright = `© ${currentYear} ${personal.fullName}. All rights reserved.`;

  return (
    <footer className="bg-white border-t-2 border-black mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black uppercase tracking-tighter text-black">
              {portfolioData.personal.fullName}
            </h3>
            <p className="text-sm font-bold text-gray-500 mt-2">
              {copyright}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {social.map((socialLink, index) => {
              const Icon = socialLink.icon;
              const colors = ["hover:bg-brutal-yellow", "hover:bg-brutal-cyan", "hover:bg-brutal-pink"];
              const hoverColor = colors[index % colors.length];
              
              return (
                <Link
                  key={index}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 border-2 border-transparent hover:border-black hover:shadow-brutal-sm transition-all text-black hover:text-black ${hoverColor}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black hover:underline decoration-2 underline-offset-4 decoration-brutal-pink transition-all"
            >
              About
            </Link>
            <Link
              href={resume}
              target={"_blank"}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black hover:underline decoration-2 underline-offset-4 decoration-brutal-green transition-all"
            >
              Resume <DownloadIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

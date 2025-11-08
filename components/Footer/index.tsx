import React from "react";
import Link from "next/link";
import { portfolioData } from "@/lib/data";

import { DownloadIcon } from "lucide-react";

export const Footer = () => {
  const { social, resume, copyright } = portfolioData;

  return (
    <footer className="bg-black border-t-4 border-black mt-12 sm:mt-16 md:mt-20 relative">
      {/* Decorative top accent bars */}
      <div className="flex h-1">
        <div className="w-1/3 bg-neo-yellow"></div>
        <div className="w-1/3 bg-neo-cyan"></div>
        <div className="w-1/3 bg-neo-pink"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          {/* Social Links */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {social.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <span
                  key={index}
                  className="text-2xl font-semibold whitespace-nowrap cursor-pointer border-4 border-black bg-neo-yellow p-1.5 sm:p-2 hover:bg-neo-cyan transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center shadow-neo-sm hover:shadow-neo transform hover:scale-110 hover:-rotate-1"
                >
                  <Link
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Icon
                      width={24}
                      height={24}
                      className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-black group-hover:text-black transition-colors"
                    />
                  </Link>
                </span>
              );
            })}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href="/about"
              className="bg-neo-pink text-black transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2.5 border-4 border-black text-base sm:text-lg font-bold cursor-pointer shadow-neo-sm hover:shadow-neo transform hover:scale-110 hover:-rotate-1 hover:translate-y-[-2px]"
            >
              About
            </Link>
            <Link
              href={resume}
              target={"_blank"}
              className="flex items-center gap-1.5 sm:gap-2 bg-neo-yellow text-black transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2.5 border-4 border-black text-base sm:text-lg font-bold cursor-pointer shadow-neo-sm hover:shadow-neo transform hover:scale-110 hover:-rotate-1 hover:translate-y-[-2px] relative group"
            >
              Resume{" "}
              <DownloadIcon className="h-3 w-3 sm:h-4 sm:w-4 transform group-hover:translate-y-1 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 sm:my-6 border-4 border-black lg:my-8" />

        {/* Copyright */}
        <span className="block text-xs sm:text-sm text-white sm:text-center font-bold">
          {copyright}
        </span>
      </div>
    </footer>
  );
};

export default Footer;

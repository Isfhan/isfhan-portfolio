"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/lib/data";

import { MenuIcon, XIcon, DownloadIcon } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomeActive = pathname == "/" ? true : false;
  const isAboutActive = pathname == "/about" ? true : false;

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black border-b-4 border-black animate__animated animate__fadeInDown sticky top-0 z-50 ">
        {/* Decorative top accent bars */}
        <div className="flex h-1">
          <div className="w-1/3 bg-neo-yellow"></div>
          <div className="w-1/3 bg-neo-cyan"></div>
          <div className="w-1/3 bg-neo-pink"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative">
          <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link
                  href="/"
                  className="text-white text-lg sm:text-xl md:text-2xl font-bold relative group"
                >
                  <span className="relative z-10">
                    {portfolioData.personal.firstName}
                  </span>
                  <span className="bg-neo-yellow text-black px-2 py-1 sm:px-3 sm:py-1.5 border-4 border-black text-sm sm:text-base md:text-lg ml-2 relative z-10 inline-block transform group-hover:scale-110 group-hover:-rotate-1 transition-all duration-200 shadow-neo-sm group-hover:shadow-neo">
                    {portfolioData.personal.lastName}
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-2 sm:space-x-3 md:space-x-4">
                  <Link
                    href="/"
                    className={
                      isHomeActive
                        ? "active [&.active]:bg-neo-pink [&.active]:text-black text-white transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2.5 border-4 border-black text-base sm:text-lg font-bold cursor-pointer shadow-neo-sm transform hover:scale-110 hover:-rotate-1"
                        : "bg-neo-pink text-black transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2.5 border-4 border-black text-base sm:text-lg font-bold cursor-pointer shadow-neo-sm hover:shadow-neo transform hover:scale-110 hover:-rotate-1 hover:translate-y-[-2px]"
                    }
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className={
                      isAboutActive
                        ? "active [&.active]:bg-neo-cyan [&.active]:text-black text-white transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2.5 border-4 border-black text-base sm:text-lg font-bold cursor-pointer shadow-neo-sm transform hover:scale-110 hover:rotate-1"
                        : "bg-neo-cyan text-black transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2.5 border-4 border-black text-base sm:text-lg font-bold cursor-pointer shadow-neo-sm hover:shadow-neo transform hover:scale-110 hover:rotate-1 hover:translate-y-[-2px]"
                    }
                  >
                    About
                  </Link>

                  <Link
                    href={portfolioData.resume}
                    target={"_blank"}
                    className="flex items-center gap-1.5 sm:gap-2 bg-neo-yellow text-black transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2.5 border-4 border-black text-base sm:text-lg font-bold cursor-pointer shadow-neo-sm hover:shadow-neo transform hover:scale-110 hover:-rotate-1 hover:translate-y-[-2px] relative group"
                  >
                    Resume{" "}
                    <DownloadIcon className="h-3 w-3 sm:h-4 sm:w-4 transform group-hover:translate-y-1 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-black border-4 border-black bg-neo-yellow p-2 hover:bg-neo-cyan hover:text-black focus:outline-none min-w-[44px] min-h-[44px] shadow-neo-sm hover:shadow-neo transition-all transform hover:scale-105"
                >
                  {isOpen ? (
                    <XIcon className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t-4 border-black bg-neo-pink relative">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-12 h-1 bg-neo-yellow"></div>

            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-black transition-all duration-300 block px-3 py-2.5 border-4 border-black text-base font-bold min-h-[44px] flex items-center bg-neo-pink shadow-neo-sm hover:shadow-neo transform hover:scale-[1.05] hover:-rotate-1"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-black transition-all duration-300 block px-3 py-2.5 border-4 border-black text-base font-bold min-h-[44px] flex items-center bg-neo-cyan shadow-neo-sm hover:shadow-neo transform hover:scale-[1.05] hover:rotate-1"
              >
                About
              </Link>

              <Link
                href={portfolioData.resume}
                target={"_blank"}
                className="text-black transition-all duration-300 block px-3 py-2.5 border-4 border-black text-base font-bold min-h-[44px] flex items-center bg-neo-yellow shadow-neo-sm hover:shadow-neo transform hover:scale-[1.05] hover:-rotate-1"
              >
                Resume{" "}
                <DownloadIcon className="h-4 w-4 inline-block ml-2 transform group-hover:translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon, DownloadIcon } from "lucide-react";
import { portfolioData } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b-2 border-black ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-black uppercase border-2 border-transparent hover:border-black hover:bg-brutal-yellow hover:shadow-brutal-sm px-2 py-1 transition-all"
            >
              {portfolioData.personal.firstName}
              <span className="text-brutal-purple ml-1">
                {portfolioData.personal.lastName}
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-black hover:bg-brutal-cyan px-2 py-1 border-2 border-transparent hover:border-black hover:shadow-brutal-sm ${isHomeActive ? "bg-brutal-cyan border-black shadow-brutal-sm text-black" : "text-gray-500"
                }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-black hover:bg-brutal-pink px-2 py-1 border-2 border-transparent hover:border-black hover:shadow-brutal-sm ${isAboutActive ? "bg-brutal-pink border-black shadow-brutal-sm text-black" : "text-gray-500"
                }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-black hover:bg-brutal-yellow px-2 py-1 border-2 border-transparent hover:border-black hover:shadow-brutal-sm ${isContactActive ? "bg-brutal-yellow border-black shadow-brutal-sm text-black" : "text-gray-500"
                }`}
            >
              Contact
            </Link>

            <Link
              href={portfolioData.resume}
              target={"_blank"}
              className="inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider bg-black text-white hover:bg-brutal-green hover:text-black hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-black shadow-brutal-sm h-10 px-6"
            >
              Resume <DownloadIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-none border-2 border-black text-black hover:bg-brutal-yellow focus:outline-none shadow-brutal-sm active:shadow-none active:translate-y-[2px]"
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-2 border-black animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 text-base font-bold uppercase tracking-wider border-2 border-transparent hover:border-black hover:shadow-brutal-sm ${isHomeActive
                ? "bg-brutal-cyan border-black shadow-brutal-sm"
                : "text-black hover:bg-brutal-cyan"
                }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block px-3 py-2 text-base font-bold uppercase tracking-wider border-2 border-transparent hover:border-black hover:shadow-brutal-sm ${isAboutActive
                ? "bg-brutal-pink border-black shadow-brutal-sm"
                : "text-black hover:bg-brutal-pink"
                }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`block px-3 py-2 text-base font-bold uppercase tracking-wider border-2 border-transparent hover:border-black hover:shadow-brutal-sm ${isContactActive
                ? "bg-brutal-yellow border-black shadow-brutal-sm"
                : "text-black hover:bg-brutal-yellow"
                }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              href={portfolioData.resume}
              target={"_blank"}
              className="block px-3 py-2 text-base font-bold uppercase tracking-wider text-white bg-black hover:bg-brutal-green hover:text-black border-2 border-black mt-4 text-center mx-3 shadow-brutal-sm active:shadow-none active:translate-y-[2px]"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

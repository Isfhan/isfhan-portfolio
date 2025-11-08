"use client";

import { useEffect, useState } from "react";

const ScrollBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFF4B3"); // Start with yellow

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage =
        scrollHeight > 0 ? scrollPosition / scrollHeight : 0;

      // Define color stops based on scroll percentage
      // 0% = yellow, 33% = cyan, 66% = pink, 100% = yellow (cycle back)
      let color: string;

      if (scrollPercentage < 0.33) {
        // Transition from yellow to cyan (0% to 33%)
        const t = scrollPercentage / 0.33;
        color = interpolateColor("#FFF4B3", "#B3FFE6", t);
      } else if (scrollPercentage < 0.66) {
        // Transition from cyan to pink (33% to 66%)
        const t = (scrollPercentage - 0.33) / 0.33;
        color = interpolateColor("#B3FFE6", "#FFB3D1", t);
      } else {
        // Transition from pink back to yellow (66% to 100%)
        const t = (scrollPercentage - 0.66) / 0.34;
        color = interpolateColor("#FFB3D1", "#FFF4B3", t);
      }

      setBackgroundColor(color);
    };

    // Initial call to set background on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-300 ease-in-out"
      style={{ backgroundColor }}
    />
  );
};

// Helper function to interpolate between two hex colors
function interpolateColor(
  color1: string,
  color2: string,
  factor: number
): string {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);

  if (!c1 || !c2) return color1;

  const r = Math.round(c1.r + (c2.r - c1.r) * factor);
  const g = Math.round(c1.g + (c2.g - c1.g) * factor);
  const b = Math.round(c1.b + (c2.b - c1.b) * factor);

  return `rgb(${r}, ${g}, ${b})`;
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export default ScrollBackground;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBackground from "@/components/ScrollBackground";
import "./globals.css";
import "animate.css";
import { Maven_Pro } from "next/font/google";
import { portfolioData } from "@/lib/data";

const mavenPro = Maven_Pro({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Get website URL from environment variable or use default
const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isfhan-ahmed.vercel.app";
const siteName = `${portfolioData.personal.fullName} - Portfolio`;
const title = `${portfolioData.personal.fullName} | Full Stack Developer & Creator of BurgerAPI`;
const description = portfolioData.hero.description || "Full Stack Developer with expertise in TypeScript, JavaScript, PHP, and Python. Creator of BurgerAPI - Pakistan's first Bun.js Framework.";
const imageUrl = `${websiteUrl}${portfolioData.personal.image}`;
const keywords = [
  "Isfhan Ahmed",
  "Full Stack Developer",
  "BurgerAPI",
  "Bun.js",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Python",
  "Next.js",
  "Portfolio",
  "Web Developer",
  "Backend Developer",
  ...portfolioData.hero.languages,
  ...portfolioData.skills.professional,
  ...portfolioData.skills.webDevelopment,
].join(", ");

export const metadata = {
  metadataBase: new URL(websiteUrl),
  title: title,
  description: description,
  keywords: keywords,
  authors: [{ name: portfolioData.personal.fullName }],
  creator: portfolioData.personal.fullName,
  publisher: portfolioData.personal.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: websiteUrl,
    siteName: siteName,
    title: title,
    description: description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.fullName} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageUrl],
    creator: portfolioData.social.find((s) => s.name === "Twitter")?.url || undefined,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  alternates: {
    canonical: websiteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mavenPro.className} relative min-h-screen`}>
        {/* Scroll-based Background */}
        <ScrollBackground />

        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

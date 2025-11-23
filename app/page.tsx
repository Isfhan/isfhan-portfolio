import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      <Hero />
      <Work />
      <Education />
      <Skills />
      <Certifications />
    </div>
  );
};

export default Home;

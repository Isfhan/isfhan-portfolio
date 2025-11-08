import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";

const Home = () => {
  return (
    <div className="container max-w-7xl mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8">
      <Hero />
      <Work />
      <Education />
      <Skills />
      <Certifications />
    </div>
  );
};

export default Home;

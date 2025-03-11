import Image from "next/image";

const Hero = () => {
  return (
    // here I have made some changes drag items to the center and apply hover to the image and also apply glassmorphsim to the text background
    <div className="relative mb-40 px-6 md:px-20">
      {/****************** Background Image ******************/}
      <div>
        <Image
          className="absolute -z-10 opacity-20 w-full h-full object-cover"
          src="/landing-bg.jpg"
          fill
          alt="Background Image"
        />
      </div>

      <div className="flex items-center gap-10 flex-wrap justify-center lg:justify-between lg:flex-nowrap">
        {/****************** Profile Image ******************/}
        <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <Image
            className="border-b-4 border-lime-400 animate__animated animate__fadeInLeft w-72 sm:w-[500px] md:w-[500px]"
            src="/isfhan.jpg"
            alt="Picture of Isfhan Ahmed"
            width={500}
            height={500}
          />
        </div>

        {/****************** Text Content ******************/}
        <div className="flex justify-center flex-col p-6 animate__animated animate__fadeInRight bg-gray-900 bg-opacity-50 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h1 className="text-white text-5xl text-center lg:text-left font-extrabold mb-5">
            Hi, I'm <span className="text-lime-400">ISFHAN</span> <br /> Nice to meet you.
          </h1>
          <p className="text-white text-2xl text-center lg:text-left font-normal leading-relaxed">
            I am a backend-heavy full-stack developer with proficiency in various programming languages, such as 
            <span className="text-lime-400"> PHP</span>, 
            <span className="text-lime-400"> JavaScript</span>, 
            <span className="text-lime-400"> Python</span>, & 
            <span className="text-lime-400"> TypeScript</span>, along with their related libraries and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

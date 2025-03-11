const About = () => {
  return (
    // Adding some margin at the bottom here and make this contract from both side
    <div className="container max-w-7xl h-screen mt-10 mb-[150px] px-5 md:px-20">
      <h1 className="text-white text-5xl font-extrabold mb-8 border-b-4 border-lime-400 pb-2 w-max">
        About Me
      </h1>
    {/************************ make bold All keyword  ************************/}
      <div className="animate__animated animate__backInRight">
        <p className="text-white text-2xl mt-10">
          I am a backend heavy <b>full-stack developer</b> with proficiency in various
          programming languages, such as <b>PHP</b>,<b>JavaScript</b> and <b>Python</b>, as well
          their related frameworks and libraries like  <b>Express.js</b>,<b>Laravel</b> etc.
        </p>

        <p className="text-white text-2xl mt-10">
          Currently, I am working as a <b>JavaScript backend developer</b>, where I
          utilize my <b>Node.js</b> skills to develop robust and scalable web
          applications.
        </p>

        <p className="text-white text-2xl mt-10">
          While I primarily focus on web app development, I am passionate about
          exploring emerging technologies. Presently, I am expanding my
          knowledge base in <b>Artificial Intelligence, Machine Learning</b>, and
          <b> Data
          Science</b>, and I am enrolled in an Artificial Intelligence Diploma
          course at <b>PIAIC</b>. I am particularly interested in Computer Vision and
          aspire to contribute to the industry in the future.
        </p>

        <p className="text-white text-2xl mt-10">
          Furthermore, I am excited about the transformative potential of the
          metaverse and Web3, actively learning about these technologies and
          their potential applications at PIAIC.
        </p>

        <p className="text-white text-2xl mt-10">
          Besides back-end and front-end development, I enjoy sharing my
          knowledge with others. Therefore, I started a <b>YouTube channel</b> where I
          post videos about my experiences as a developer, share insights on
          coding, development, and new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;

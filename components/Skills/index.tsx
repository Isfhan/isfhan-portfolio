const Skills = () => {
  return (
    // apply bg and some hover effect, cursor-ptr and  some more changes also reduce the code by use map() 
    <div className="mt-10 px-5 md:px-10">
      
      <h1 className="text-white text-5xl font-extrabold mb-8 border-b-4 border-lime-400 pb-2 w-max">
      My Skills
      </h1>

      <div className="mt-10 p-3 space-y-8 text-white">
        {/************************* Professional Skills ************************/}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-lime-400">
            PROFESSIONAL SKILLS
          </h5>
          <div className="flex flex-wrap gap-4 p-2">
            {[
              "ANALYTICAL THINKING",
              "CRITICAL THINKING",
              "CREATIVE THINKING",
              "DECISION-MAKING",
              "PROBLEM-SOLVING",
              "LOGICAL REASONING",
              "STRATEGIC PLANNING",
              "RESEARCH",
              "TIME MANAGEMENT",
              "ATTENTION TO DETAIL",
              "ADAPTABILITY",
              "COLLABORATION",
              "COMMUNICATION",
              "LEADERSHIP",
              "RISK MANAGEMENT",
              "CONTINUOUS LEARNING",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-lg px-3 py-1 cursor-pointer border-2 border-lime-400 bg-gray-700 hover:bg-lime-500 hover:text-black transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

         {/************************** Web Development  *******************/}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-lime-400">
            WEB DEVELOPMENT
          </h5>
          <div className="flex flex-wrap gap-4 p-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "jQuery",
              "Bootstrap",
              "PHP",
              "Laravel",
              "Express.js",
              "Node.js",
              "Python",
              "Flask",
              "React",
              "Vue",
              "AJAX",
              "Shopware",
              "MongoDB",
              "MySQL",
              "PostgreSQL",
              "AWS",
              "Linux",
              "Docker",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-lg px-3 py-1 cursor-pointer border-2 border-lime-400 bg-gray-700 hover:bg-lime-500 hover:text-black transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/**************** Artificial Intelligence *******************/}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-lime-400">
            ARTIFICIAL INTELLIGENCE
          </h5>
          <div className="flex flex-wrap gap-4 p-2">
            {[
              "PYTHON",
              "FLASK",
              "NUMPY",
              "PANDAS",
              "Tensorflow",
              "KERAS",
              "SCIKIT-LEARN",
              "MATPLOTLIB",
              "OPENCV",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-lg px-3 py-1 cursor-pointer border-2 border-lime-400 bg-gray-700 hover:bg-lime-500 hover:text-black transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

import Image from "next/image";
import Link from "next/link";

const Certifications = () => {
  return (
    // Apply overlay and some Hover Effect to this section make this more Readable
    <div className="mt-10 px-5 md:px-10">
    
      <h1 className="text-white text-5xl font-extrabold mb-8 border-b-4 border-lime-400 pb-2 w-max">
      My Certifications
      </h1>

      <div className="my-10 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg border-b-4 border-lime-400"
            >
              <Image
                className="w-full h-full object-fit rounded-md"
                src={cert.image}
                width={500}
                height={400}
                alt={cert.title}
              />

              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white text-center">{cert.title}</h3>
                <p className="text-gray-300">{cert.platform}</p>
                <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 px-4 py-2 text-sm font-semibold text-white bg-lime-500 rounded-md hover:bg-lime-600 transition">
                    View Certificate
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-2xl text-white text-center mt-5 p-4">
          These are a few of my certifications. For a comprehensive list, please
          visit my {" "}
          <Link
            href="https://pk.linkedin.com/in/isfhan"
            className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline"
            target="_blank" rel="noopener noreferrer"
          >
            LinkedIn profile
          </Link>{" "}
          where you can find more details.
        </p>
      </div>
    </div>
  );
};

const certifications = [
  {
    title: "Web - Internet Fundamentals",
    platform: "Codedamn",
    image: "/net-fun.png",
    link: "https://codedamn.com/certificate/verify/b8be266e289d2659511369640aa385954280c342",
  },
  {
    title: "Web Development Fundamentals",
    platform: "Sololearn",
    image: "/wdf.png",
    link: "https://www.sololearn.com/Certificate/CT-UARFCW4T/pdf",
  },
  {
    title: "Responsive Web Design",
    platform: "FreeCodeCamp.org",
    image: "/rwd.png",
    link: "https://www.freecodecamp.org/certification/isfhan/responsive-web-design",
  },
  {
    title: "Back End Development and APIs",
    platform: "FreeCodeCamp.org",
    image: "/bda.png",
    link: "https://www.freecodecamp.org/certification/isfhan/back-end-development-and-apis",
  },
  {
    title: "NodeJs E-Commerce Web API",
    platform: "Udemy",
    image: "/cwa.png",
    link: "https://www.udemy.com/certificate/UC-b8064000-0225-4f4f-bf6c-4bde61a14bdc/",
  },
  {
    title: "MongoDB Node.js Developer Path",
    platform: "MongoDB",
    image: "/mongo-db.png",
    link: "https://learn.mongodb.com/c/xwdIcLBfQMm0yOXOSIQhXg",
  },
  {
    title: "Advanced Node.js Course",
    platform: "Codedamn",
    image: "/adv-node.png",
    link: "https://codedamn.com/certificate/verify/a4d85b6c792e80ba979a88527911ca71eb88473f",
  },
  {
    title: "PHP",
    platform: "Great Learning",
    image: "/php.png",
    link: "https://olympus1.mygreatlearning.com/course_certificate/QWKBPXTC",
  },
  {
    title: "PHP - Advanced Features",
    platform: "Udemy",
    image: "/php-adv.png",
    link: "https://www.udemy.com/certificate/UC-bea53e2d-7718-4aeb-8881-7cc3bc4e44fc/",
  },
  {
    title: "Docker for Intermediate Level",
    platform: "Great Learning",
    image: "/docker.png",
    link: "https://olympus1.mygreatlearning.com/course_certificate/XWLNIRWF",
  },
  {
    title: "Python for Data Science",
    platform: "IBM",
    image: "/python.png",
    link: "https://www.credly.com/badges/1722d44d-3d8f-474a-a062-fd66d45a27c9/linked_in_profile",
  },
  {
    title: "MySQL command line",
    platform: "Cognitiveclass",
    image: "/mysql-cli.png",
    link: "https://courses.cognitiveclass.ai/certificates/f4f752f200434d90b4cc79f4ff9cd879",
  },
];

export default Certifications;
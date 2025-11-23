import {
  Code2,
  Rocket,
  Brain,
  Youtube,
  Globe,
  GraduationCap,
  School,
  Calendar as CalendarIcon,
  Award,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon as YoutubeIconLucide,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface WorkExperience {
  title: string;
  period: string;
  description: string;
  bgColor: string;
}

export interface EducationEntry {
  degree: string;
  date: string;
  institution: string;
  bgColor: string;
}

export interface Certification {
  title: string;
  provider: string;
  image: string;
  link: string;
  bgColor: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  bgColor: string;
}

export interface AboutParagraph {
  text: string;
  icon: LucideIcon;
  bgColor: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface PortfolioData {
  personal: {
    firstName: string;
    lastName: string;
    fullName: string;
    greeting: string;
    image: string;
    email: string;
    phone: string;
  };
  hero: {
    greeting: string;
    description: string;
    languages: string[];
  };
  work: WorkExperience[];
  education: EducationEntry[];
  certifications: Certification[];
  skills: {
    professional: string[];
    webDevelopment: string[];
    ai: string[];
  };
  about: AboutParagraph[];
  social: SocialLink[];
  resume: string;
  copyright: string;
  githubUsername: string;
}

export const portfolioData: PortfolioData = {
  personal: {
    firstName: "Isfhan",
    lastName: "Ahmed",
    fullName: "Isfhan Ahmed",
    greeting: "Hi, I'm Isfhan. Nice to meet you.",
    image: "/me2.jpg",
    email: "isfhan729@gmail.com",
    phone: "+923059487339",
  },
  hero: {
    greeting: "Hi, I'm Isfhan. Nice to meet you.",
    description:
      "I am a Creator of BurgerAPI Pakistan first bun.js Framework and i am a backend heavy full-stack developer with proficiency in various programming languages, such as TypeScript/JavaScript, PHP and Python, as well their related frameworks and libraries.",
    languages: ["TypeScript/JavaScript", "PHP", "Python"],
  },
  work: [
    {
      title: "Full Stack Software Engineer at Ve2Max | Remote",
      period: "01/2024 - Present",
      description:
        "I am currently working as a Full Stack Software Engineer for the Ve2Max. My responsibilities include utilizing Node.js, Next.js, Tailwind CSS, Supabase,Vercel,Postgres, docker, git, and other related technologies to develop efficient and reliable full stack web applications. ",
      bgColor: "bg-brutal-pink",
    },
    {
      title: "Software Engineer at Cloud Primero B.V",
      period: "Present",
      description:
        "I am currently working on backend tasks for the 433 Football CMS App. My responsibilities include utilizing Node.js, Express.js, MongoDB, AWS Lambda, and Mongoose to develop efficient and reliable backend functionalities. I actively collaborate with other developers to ensure the production of high-quality code. Additionally, I troubleshoot and debug any issues that arise during development and provide clear and concise documentation for the code I develop.",
      bgColor: "bg-brutal-yellow",
    },
    {
      title: "PHP | JS | Shopware | Full Stack Developer at Zepcom",
      period: "08/2019 - 03/2022",
      description:
        "My primary responsibility was developing Shopware plugins. I also worked on various PHP and JavaScript tasks as secondary responsibilities. Collaboration with fellow developers was crucial to ensure the delivery of high-quality code. I maintained a focus on continuously improving my technical skills and staying up-to-date with industry developments. Timely delivery of assigned tasks was a priority for me throughout my role",
      bgColor: "bg-brutal-cyan",
    },
    {
      title: "Full Stack Developer at Devoppia",
      period: "05/2018 - 08/2019",
      description:
        "I performed a wide range of tasks utilizing PHP, JavaScript, Node.js, Laravel, AWS, and various Front-End technologies for medical and freelance projects. Troubleshooting and debugging issues were part of my routine to ensure smooth functionality. Working in a fast-paced environment with changing priorities and tight deadlines was a common aspect of my work, and I adapted effectively to meet project requirements.",
      bgColor: "bg-brutal-pink",
    },
    {
      title: "Full Stack Laravel Developer at Chaabi.pk",
      period: "04/2017 - 08/2018",
      description:
        "I owned the entire development lifecycle of the dropshipping portal, from requirements gathering to deployment. I built front-end views using Laravel's Blade templating engine, HTML, CSS, and JavaScript. Additionally, I created the entire backend, including database design, API integration, and business logic implementation.",
      bgColor: "bg-white",
    },
    {
      title: "PHP | Javascript Developer at Ali Info Tech Sdn Bhd",
      period: "11/2016 - 03/2017",
      description:
        "In my role as a PHP and JavaScript developer, I focused on Laravel development. I utilized my skills in PHP, JavaScript, and related technologies to build robust web applications. I had a strong commitment to continuous improvement, constantly updating my skills and learning new technologies to stay ahead of industry trends.",
      bgColor: "bg-brutal-yellow",
    },
  ],
  education: [
    {
      degree: "Diploma in Artificial Intelligence",
      date: "01-2023 - June 01, 2024",
      institution: "PIAIC",
      bgColor: "bg-brutal-yellow",
    },
    {
      degree: "Certified Web & Mobile Hybrid App Development Course",
      date: "02-2022 - 09/2022",
      institution: "UIT University",
      bgColor: "bg-brutal-pink",
    },
    {
      degree: "Diploma In Artificial-Intelligence & Cloud Computing",
      date: "11/2019 - 01/2020",
      institution: "UIT University",
      bgColor: "bg-white",
    },
    {
      degree: "Diploma in Advance Web Development",
      date: "11/2016 - 01/2017",
      institution: "Computer Collegiate",
      bgColor: "bg-brutal-yellow",
    },
    {
      degree: "Intermediate Pre-Engineering",
      date: "2014 - 2016",
      institution: "City College",
      bgColor: "bg-brutal-cyan",
    },
    {
      degree: "Matric",
      date: "2013",
      institution: "Ali Ali School Sharifabad",
      bgColor: "bg-brutal-pink",
    },
  ],
  certifications: [
    {
      title: "Web - Internet fundamentals",
      provider: "codedamn",
      image: "/net-fun.png",
      link: "https://codedamn.com/certificate/verify/b8be266e289d2659511369640aa385954280c342",
      bgColor: "bg-brutal-yellow",
    },
    {
      title: "WEB DEVELOPMENT FUNDAMENTALS",
      provider: "Sololearn",
      image: "/wdf.png",
      link: "https://www.sololearn.com/Certificate/CT-UARFCW4T/pdf",
      bgColor: "bg-brutal-cyan",
    },
    {
      title: "Responsive Web Design",
      provider: "FreeCodeCamp.org",
      image: "/rwd.png",
      link: "https://www.freecodecamp.org/certification/isfhan/responsive-web-design",
      bgColor: "bg-brutal-pink",
    },
    {
      title: "Back End Development and APIs",
      provider: "FreeCodeCamp.org",
      image: "/bda.png",
      link: "https://www.freecodecamp.org/certification/isfhan/back-end-development-and-apis",
      bgColor: "bg-white",
    },
    {
      title: "NodeJs E-Commerce Web API",
      provider: "Udemy",
      image: "/cwa.png",
      link: "https://www.udemy.com/certificate/UC-b8064000-0225-4f4f-bf6c-4bde61a14bdc/",
      bgColor: "bg-brutal-yellow",
    },
    {
      title: "MongoDB Node.js Developer Path",
      provider: "MongoDB",
      image: "/mongo-db.png",
      link: "https://learn.mongodb.com/c/xwdIcLBfQMm0yOXOSIQhXg",
      bgColor: "bg-brutal-cyan",
    },
    {
      title: "Advanced Node.js Course",
      provider: "codedamn",
      image: "/adv-node.png",
      link: "https://codedamn.com/certificate/verify/a4d85b6c792e80ba979a88527911ca71eb88473f",
      bgColor: "bg-brutal-pink",
    },
    {
      title: "PHP",
      provider: "Great Learning",
      image: "/php.png",
      link: "https://olympus1.mygreatlearning.com/course_certificate/QWKBPXTC",
      bgColor: "bg-white",
    },
    {
      title: "PHP - Advanced Features",
      provider: "Udemy",
      image: "/php-adv.png",
      link: "https://www.udemy.com/certificate/UC-bea53e2d-7718-4aeb-8881-7cc3bc4e44fc/",
      bgColor: "bg-brutal-yellow",
    },
    {
      title: "Docker for Intermediate Level",
      provider: "Great Learning",
      image: "/docker.png",
      link: "https://olympus1.mygreatlearning.com/course_certificate/XWLNIRWF",
      bgColor: "bg-brutal-cyan",
    },
    {
      title: "Python for Data Science",
      provider: "IBM",
      image: "/python.png",
      link: "https://www.credly.com/badges/1722d44d-3d8f-474a-a062-fd66d45a27c9/linked_in_profile",
      bgColor: "bg-brutal-pink",
    },
    {
      title: "MySQL command line",
      provider: "Cognitiveclass",
      image: "/mysql-cli.png",
      link: "https://courses.cognitiveclass.ai/certificates/f4f752f200434d90b4cc79f4ff9cd879",
      bgColor: "bg-white",
    },
  ],
  skills: {
    professional: [
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
    ],
    webDevelopment: [
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
    ],
    ai: [
      "PYTHON",
      "FLASK",
      "NUMPY",
      "PANDAS",
      "Tensorflow",
      "KERAS",
      "SCIKIT-LEARN",
      "MATPLOTLIB",
      "OPENCV",
    ],
  },
  about: [
    {
      text: "I am a Creator of BurgerAPI 🚀 Pakistan first bun.js Framework and i am a backend heavy full-stack developer with proficiency in various programming languages, such as PHP, JavaScript and Python, as well their related frameworks and libraries.",
      icon: Code2,
      bgColor: "bg-brutal-cyan",
    },
    {
      text: "Currently, I am working as a Full Stack Developer ⚡, where I utilize my programming skills to develop robust and scalable web applications.",
      icon: Rocket,
      bgColor: "bg-brutal-pink",
    },
    {
      text: "While I primarily focus on Web App development, I am passionate about exploring emerging technologies. Presently, I am expanding my knowledge base in Artificial Intelligence 🤖, Machine Learning, and Data Science. I am particularly interested in Computer Vision and aspire to contribute to the industry in the future.",
      icon: Brain,
      bgColor: "bg-white",
    },
    {
      text: "Furthermore, I am excited about the transformative potential of the Meta Verse 🌐 and Web3, actively learning about these technologies and their potential applications.",
      icon: Globe,
      bgColor: "bg-brutal-yellow",
    },
    {
      text: "Besides back-end and front-end development, I enjoy sharing my knowledge with others 📚. Therefore, I started creating content on YouTube 📺, Instagram 📷, and Facebook 📘 where I post about my experiences as a developer, share insights on coding, development, and new technologies.",
      icon: Youtube,
      bgColor: "bg-brutal-cyan",
    },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Isfhan",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://pk.linkedin.com/in/isfhan",
      icon: LinkedinIcon,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@IsfhanAhmed",
      icon: YoutubeIconLucide,
    },
  ],
  resume: "/Isfhan-Resume-2023.pdf",
  githubUsername: "Isfhan",

  get copyright() {
    const currentYear = new Date().getFullYear();
    return `© ${currentYear} Isfhan Ahmed™. All Rights Reserved.`;
  },
};

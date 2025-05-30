export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  color: "primary" | "secondary" | "accent";
  icon: string;
}

export const experiences: Experience[] = [
  {
    role: "MERN Stack Developer",
    company: "Sid Techno",
    period: "2024 - Present",
    description:
      "Designed, developed, and maintained dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Built RESTful APIs and developed interactive front-end components for seamless integration. Implemented Firebase Realtime Database for real-time data synchronization and Firebase Push Notifications for mobile user engagement. Designed and built a full-fledged live chat web app with socket handling both front-end and back-end development. Utilized AWS S3 for efficient image storage and management. Implemented Google Sign-In authentication using Next.js and integrated Google Maps services for enhanced location-based functionalities. Developed fully responsive websites for seamless user experiences across devices.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Firebase",
      "AWS",
      "Socket",
      "Next.js",
      "Google Maps",
      "Responsive Design",
    ],
    color: "primary",
    icon: "fas fa-briefcase",
  },
  {
    role: "MERN Stack Internship",
    company: "Digital Dividend Global",
    period: "Dec 2023 - Feb 2024",
    description:
      "Completed a dynamic 3-month internship in MERN stack development, working on diverse projects. Gained hands-on experience in front-end and back-end development. Contributed to building responsive, user-friendly web applications using JavaScript, HTML, CSS, and modern frameworks. Gained practical experience in Node.js for back-end development and server-side technologies. Explored Angular to enhance front-end skills and focused on optimizing fully responsive websites for seamless user experiences.",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "React.js",
      "Angular",
      "Responsive Design",
    ],
    color: "secondary",
    icon: "fas fa-laptop-code",
  },
  {
    role: "MERN Stack Internship",
    company: "SID Techno",
    period: "Sep 2023 - Nov 2023",
    description:
      "Worked on diverse projects, gaining hands-on experience in front-end and back-end development. Contributed to building responsive, user-friendly web applications using JavaScript, HTML, CSS, and modern frameworks. Gained practical experience in Node.js for back-end development and explored Angular to enhance front-end skills.",
    skills: [
      "JavaScript",
      "HTML/CSS",
      "Node.js",
      "React.js",
      "Responsive Design",
    ],
    color: "secondary",
    icon: "fas fa-laptop-code",
  },
];

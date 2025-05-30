export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  icon: string;
  color: "primary" | "secondary" | "accent";
}

export interface Certification {
  title: string;
  issuer: string;
  color: "primary" | "secondary" | "accent" | "primary";
}

export const education: Education[] = [
  {
    institution: "Virtual University",
    degree: "Bachelor's Degree",
    period: "In Progress",
    description:
      "Currently pursuing a degree with a focus on leveraging technology for innovative solutions. Applying MERN stack skills to academic projects and exploring advanced web development techniques.",
    highlightsTitle: "Key Interests",
    highlights: [
      "Web Development",
      "Real-time Applications",
      "Database Management",
      "User Interface Design",
    ],
    icon: "fas fa-university",
    color: "primary",
  },
  {
    institution: "Government Islamia Science College",
    degree: "Intermediate",
    period: "2022 - 2024",
    description:
      "Completed intermediate education with a strong foundation in science and computer-related subjects. Developed analytical and problem-solving skills through coursework and practical projects.",
    highlightsTitle: "Key Subjects",
    highlights: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Programming Fundamentals",
    ],
    icon: "fas fa-school",
    color: "secondary",
  },
  {
    institution: "Amma Foundation School",
    degree: "Matriculation",
    period: "2021 - 2022",
    description:
      "Completed matriculation with a focus on science and foundational computer skills. Built a strong base for further studies in technology and web development.",
    highlightsTitle: "Key Subjects",
    highlights: ["Computer Science", "Mathematics", "Science", "English"],
    icon: "fas fa-graduation-cap",
    color: "accent",
  },
];

export const certifications: Certification[] = [
  {
    title: "MERN Stack Development",
    issuer: "Jawan Pakistan",
    color: "primary",
  },
];

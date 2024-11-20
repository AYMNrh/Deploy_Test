import { 
  FaBriefcase, 
  FaPython, 
  FaDatabase, 
  FaChartBar, 
  FaAws, 
  FaReact 
} from 'react-icons/fa';
import { SiAzurefunctions, SiSelenium, SiGoogleanalytics } from 'react-icons/si';
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "BNP Paribas",
    position: "Data Analytics Engineer, Alternance",
    duration: "Nov 2023 - Present",
    year: 2024,
    description: [
      "Optimized and maintained machine learning model infrastructure for fraud detection, focusing on data pipeline improvements and false positive reduction.",
      "Co-developed an automated fraud detection system capable of filtering over 2 million daily transactions for AML Level 1 processes.",
      "Implemented language models (LLMs) with Azure OpenAI and OpenAI APIs, incorporating Retrieval-Augmented Generation (RAG) tools for enhanced data analysis.",
      "Developed an internal Python platform with YAML configuration, automating the evaluation of linear and non-linear machine learning models and streamlining decision-making processes."
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Azure OpenAI", icon: SiAzurefunctions },
      { name: "Fraud Detection", icon: FaBriefcase },
      { name: "Data Engineering", icon: FaDatabase },
      { name: "Machine Learning", icon: FaChartBar },
    ],
    logo: "/logos/bnp.png" // Replace with actual logo path
  },
  {
    company: "Lionswerk",
    position: "Data Engineer, Intern",
    duration: "May 2023 - Aug 2023",
    year: 2023,
    description: [
      "Designed and developed a robust recruitment database infrastructure for storage and retrieval.",
      "Built and maintained APIs for secure and efficient recruitment data access.",
      "Collaborated closely with the frontend team to ensure seamless integration between backend and frontend systems."
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Database Design", icon: FaDatabase },
      { name: "API Development", icon: FaBriefcase },
    ],
    logo: "/logos/lionswerk.jpg" // Replace with actual logo path
  },
  {
    company: "Sciences Po & OFCE",
    position: "Data Analyst, Project",
    duration: "Jan 2023 - Apr 2023",
    year: 2023,
    description: [
      "Developed a web scraping script to extract data from the European Commission website, focusing on corporate carbon transactions.",
      "Analyzed data to identify opportunities for reducing pollution and improving environmental outcomes.",
      "Processed and cleaned a dataset of 1.6 million rows, ensuring high-quality data for subsequent analysis.",
      "Created an interactive dashboard to visualize trends and insights related to carbon credit usage."
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Web Scraping", icon: SiSelenium },
      { name: "Data Visualization", icon: FaChartBar },
    ],
    logo: "/logos/scpo.png" // Replace with actual logo path
  },
  {
    company: "ProFPro",
    position: "NoCode Software Engineer, Intern",
    duration: "Jun 2022 - Aug 2022",
    year: 2022,
    description: [
      "Developed a website-building platform tailored for educators.",
      "Built both frontend and backend functionalities using Bubble.io, a no-code development framework.",
      "Integrated APIs including Stripe, Facebook, and Google to enhance platform capabilities."
    ],
    skills: [
      { name: "Bubble.io", icon: FaReact },
      { name: "API Integration", icon: FaBriefcase },
      { name: "NoCode Development", icon: SiGoogleanalytics },
    ],
    logo: "/logos/profpro.jpg" // Replace with actual logo path
  }
];

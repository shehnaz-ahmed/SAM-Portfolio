import { Bot, Braces, Cloud, Code2, Database, Globe2, ScanSearch, Server, Sparkles, type LucideIcon } from "lucide-react";

export const profile = {
  name: "SHEHNAZ AHMED", role: "Senior Full-Stack Developer", email: "sam.portfoli0.33@gmail.com", location: "Sec 71 Mohali, India", github: "https://github.com/your-username", linkedin: "https://linkedin.com/in/your-username", resume: "/resume.pdf"
};
export const navItems = ["Home", "About", "Skills", "Experience", "Services", "Projects", "Contact"];
export const skills = [
  ["Frontend", ["React.js", "Next.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]],
  ["Backend", ["Node.js", "Express.js", "Python", "FastAPI", "Django", "REST API Development", "Authentication & Authorization", "JWT / OAuth"]],
  ["Data", ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"]],
  ["Automation", ["Puppeteer", "Browser Automation", "Web Scraping", "Node.js Cron Jobs", "Scheduled Tasks", "Data Extraction", "Workflow Automation"]],
  ["AI & Integrations", ["OpenAI API", "Gemini API", "AI-powered Applications", "Third-party API Integrations", "Payment API Integrations", "Twilio API", "Plaid API", "Tekmetric API"]],
  ["Cloud & Tools", ["AWS EC2", "AWS S3", "Vercel", "Git", "GitHub", "GitHub Actions", "CI/CD Pipelines", "Docker (Basic)", "VS Code", "Postman", "Linux"]]
] as const;
export const services: { title:string; copy:string; icon:LucideIcon }[] = [
  { title:"Full-Stack Web Development", copy:"MERN, MEAN, Next.js, and responsive platforms designed for real business workflows.", icon:Code2 },
  { title:"Backend & API Engineering", copy:"Secure Node.js, FastAPI, Django, and REST architecture built to scale.", icon:Server },
  { title:"Automation & Web Scraping", copy:"Reliable browser automation, extraction pipelines, scheduled tasks, and workflows.", icon:ScanSearch },
  { title:"AI Integration & Development", copy:"OpenAI and Gemini-powered product features and intelligent application flows.", icon:Bot },
  { title:"Database & Backend Solutions", copy:"Data modeling and managed backend services across SQL, MongoDB, Supabase, and Firebase.", icon:Database },
  { title:"Third-Party Integrations", copy:"Payment, messaging, financial, and operational APIs integrated thoughtfully.", icon:Globe2 }
];
export type Project = { slug:string; title:string; category:string; description:string; stack:string[]; features:string[]; accent:string; };
export const projects: Project[] = [
  { slug:"healthcare-platform", title:"Healthcare Management Platform", category:"HealthTech", description:"A configurable platform for practitioner, patient, administration, and healthcare workflows.", stack:["React", "Node.js", "REST APIs"], features:["Doctor & patient management", "Administration workflows", "API integration"], accent:"#22a7b4" },
  { slug:"dating-platform", title:"Dating Platform", category:"Consumer App", description:"A privacy-minded social application centered on profiles, matching, and meaningful interactions.", stack:["Angular", "Node.js", "MongoDB"], features:["Authentication", "Profiles & matching", "Messaging"], accent:"#8057d6" },
  { slug:"commerce-platform", title:"E-commerce Platform", category:"Commerce", description:"A streamlined retail experience spanning catalog management, checkout, orders, and payments.", stack:["Next.js", "Express", "PostgreSQL"], features:["Product catalog", "Orders & checkout", "Payment integrations"], accent:"#dc7b3e" },
  { slug:"school-system", title:"School Management System", category:"EdTech", description:"An operations hub that brings student, teacher, academic, and administrative work together.", stack:["React", "Python", "MySQL"], features:["Student records", "Teacher management", "Academic administration"], accent:"#4d8d61" },
  { slug:"automation-platform", title:"Automation Platform", category:"Operations", description:"Workflow tooling for repeatable data processing, scheduled jobs, and connected services.", stack:["Node.js", "Puppeteer", "APIs"], features:["Scheduled tasks", "Data processing", "Connected workflows"], accent:"#1976d2" },
  { slug:"ai-applications", title:"AI-Powered Applications", category:"Applied AI", description:"Practical AI application features designed around real user journeys and operational needs.", stack:["Python", "OpenAI", "Gemini"], features:["AI workflows", "Provider integrations", "Product-ready interfaces"], accent:"#d25483" }
];
export const experience = [
  { title:"Senior Full-Stack Development", detail:"Configurable role — 6+ years building scalable frontend systems, backend services, and complete web products." },
  { title:"Backend, API & Integration Engineering", detail:"Configurable role — designing service boundaries, data flows, authentication, and third-party integrations." },
  { title:"Automation & AI Integration", detail:"Configurable role — creating reliable automation pipelines and AI-enabled workflows." }
];

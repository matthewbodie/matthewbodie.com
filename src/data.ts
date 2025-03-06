export const myName = "Matthew Bodie";
export const introduction = 
  "Pleased to meet you! I'm currently the Executive Director of " +
  "Learning Resources at St. Petersburg College, and a seasoned " +
  "college administrator with 13 years of leadership experience in " +
  "building and enhancing programs, partnerships, and initiatives " +
  "centered on student and faculty success.";

export const cvLink = "/assets/Bodie_CV_2025-03_work_address.pdf"

export interface TeachingCardType {
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
  iconName?: string;
}

export const teachingCards: TeachingCardType[] = [
  {
    title: "Multigenre Writing Lesson Plan Assignment (LAE)",
    description: "A comprehensive lesson plan for teaching multigenre writing in the classroom.",
    link: "/assets/multigenre_writing_lesson_plan-2.pdf",
    linkText: "View Lesson Plan",
    iconName: "FileText"
  },
  {
    title: "Sample Assignment (FYC)",
    description: "Example assignment for First-Year Composition courses.",
    link: "https://spcollege.libguides.com/c.php?g=254571&p=10485169",
    linkText: "View Assignment",
    iconName: "Pencil"
  },
  {
    title: "Sample Course (Tech Comm)",
    description: "Overview of a Technical Communication course structure and materials.",
    link: "https://bodietechwriting.wordpress.com/",
    linkText: "View Course",
    iconName: "BookOpen"
  },
  {
    title: "SPC Faculty Page",
    description: "Official faculty profile at St. Petersburg College.",
    link: "https://web.spcollege.edu/instructors/id/bodie.matthew/BIO/",
    linkText: "Visit Faculty Page",
    iconName: "User"
  },
  {
    title: "Surveys and Evaluations of Teaching",
    description: "Collection of student feedback and teaching evaluations.",
    link: "/assets/bodie-surveys-and-evaluations-of-teaching.pdf",
    linkText: "View Evaluations",
    iconName: "ClipboardCheck"
  },
  {
    title: "RMP Page",
    description: "Rate My Professor profile and student reviews.",
    link: "https://www.ratemyprofessors.com/professor/1392972",
    linkText: "View Profile",
    iconName: "Star"
  }
]; 

export interface PhilosophyCardType {
  title: string;
  link?: string;
  iconName?: string;
}

export const philosophyCards: PhilosophyCardType[] = [
  {
    title: "Philosophy of Leadership",
    link: "/assets/philosophy/bodie-philosophy-of-leadership.pdf",
    iconName: "User"
  },
  {
    title: "Philosophy of Education",
    link: "/assets/philosophy/philosophy-of-education-2018-2.pdf",
    iconName: "BookOpen"
  },
  {
    title: "Philosophy of Teaching Writing",
    link: "/assets/philosophy/bodie-philosophy-of-teaching-writing.pdf",
    iconName: "Pencil"
  },
];

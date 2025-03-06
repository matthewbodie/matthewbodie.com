export const myName = "Matthew Bodie";
export const introduction = 
  "Pleased to meet you! I'm currently the Executive Director of " +
  "Learning Resources at St. Petersburg College, and a seasoned " +
  "college administrator with 13 years of leadership experience in " +
  "building and enhancing programs, partnerships, and initiatives " +
  "centered on student and faculty success.";

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
    link: "#",
    linkText: "View Assignment",
    iconName: "Pencil"
  },
  {
    title: "Sample Course (Tech Comm)",
    description: "Overview of a Technical Communication course structure and materials.",
    link: "#",
    linkText: "View Course",
    iconName: "BookOpen"
  },
  {
    title: "SPC Faculty Page",
    description: "Official faculty profile at St. Petersburg College.",
    link: "#",
    linkText: "Visit Faculty Page",
    iconName: "User"
  },
  {
    title: "Surveys and Evaluations of Teaching",
    description: "Collection of student feedback and teaching evaluations.",
    link: "#",
    linkText: "View Evaluations",
    iconName: "ClipboardCheck"
  },
  {
    title: "RMP Page",
    description: "Rate My Professor profile and student reviews.",
    link: "#",
    linkText: "View Profile",
    iconName: "Star"
  }
]; 
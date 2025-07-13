import {
  User,
  Briefcase,
  Award,
  FileText,
  BookOpen,
  Newspaper,
  Home
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/work-experience", label: "Work Experience", icon: Briefcase },
  { href: "/about", label: "About Me", icon: User },
  { href: "/certifications", label: "Certifications", icon: Award },
  { href: "/publications", label: "Publications", icon: Newspaper },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/resume", label: "Resume", icon: FileText },
];

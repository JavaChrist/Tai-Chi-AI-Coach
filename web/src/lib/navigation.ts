import type { LucideIcon } from "lucide-react";
import { BookOpen, Home, LineChart, PlayCircle, User } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const mainNavItems: NavItem[] = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/sessions", label: "Séances", icon: PlayCircle },
  { href: "/progression", label: "Progression", icon: LineChart },
  { href: "/bibliotheque", label: "Bibliothèque", icon: BookOpen },
  { href: "/profil", label: "Profil", icon: User },
];

/** Détermine l’état actif d’un item de navigation. */
export function isNavItemActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  number: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}
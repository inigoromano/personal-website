export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  image?: string;
  tags?: string[];
  highlightTags?: string[];
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  isEmail?: boolean;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  image?: string;
  imageDark?: string;
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

export interface Education {
  id: string;
  period: string;
  qualification: string;
  institution: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  isEmail?: boolean;
}

export interface ToolkitGroup {
  category: string;
  items: string[];
}

import { Project, Experience, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'coupling',
    title: 'Coupling',
    description: 'An app that brings long-distance couples closer through shared calendars, memories, and daily connection tools.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['React Native + Expo', 'Firebase'],
    highlightTags: ['In Progress', 'Projected Launch: 2026 Q1'],
  },
  {
    id: 'playmate',
    title: 'Playmate',
    description: 'Multiple fun turn-based minigames accessible in one app.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['Unity', 'C#', 'Firebase', 'Photon Fusion'],
    highlightTags: ['In Progress', 'Projected Launch: 2026 Q2'],
  },
  {
    id: 'northworks-digital',
    title: 'Northworks Digital',
    description: 'A digital agency based in North Island, New Zealand.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['React', 'Vite'],
    highlightTags: ['Startup'],
  },
  {
    id: 'trecho',
    title: 'Trecho',
    description: 'Live translate audio to text in real-time.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['Flutter', 'Python Fast API'],
    highlightTags: ['Brainstorming Phase'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'northworks-digital',
    period: 'NOV 2025 - PRESENT',
    role: 'Founder and Web Developer',
    company: 'Northworks Digital',
    description: 'Building custom, high-performance websites for small and medium-sized businesses in New Zealand using modern web technologies and best practices.'
  },
  {
    id: 'massey-halls',
    period: 'JAN 2024 - NOV 2025',
    role: 'Residential Assistant',
    company: 'Massey University Student Accommodation',
    description: 'Supported and guided a community of 200+ students, organized events, and ensured a safe and inclusive living environment.'
  },
  {
    id: 'paknsave',
    period: 'SEP 2022 - NOV 2023',
    role: 'Checkout Operator',
    company: 'PAK\'nSAVE',
    description: 'Provided efficient and friendly checkout services, ensuring a positive shopping experience for customers.'
  }
];

export const SOCIALS: SocialLink[] = [
  {
    label: 'inigo.manuelromano@gmail.com',
    url: 'mailto:inigo.manuelromano@gmail.com',
    isEmail: true
  },
  {
    label: 'Northworks Digital',
    url: 'https://northworks.co.nz'
  },
  {
    label: '+64 22 033 2166',
    url: 'tel:+64220332166'
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com'
  }
];

export const SECTION_SOCIALS: SocialLink[] = [
  {
    label: 'Email',
    url: 'mailto:inigo.manuelromano@gmail.com',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/inigoromano/'
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@inigocodes'
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/inigoromano/'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/inigocodes'
  },
  {
    label: 'northworks.co.nz',
    url: 'https://northworks.co.nz'
  }
];

export const NORTHWORKS_TEXT = `Northworks Digital is a fully coded web design studio focused on building clean, modern, and high-performance websites for New Zealand small and medium-sized businesses.

Many businesses rely on basic WordPress or drag-and-drop builders like Wix and Squarespace, without knowing how much it affects performance, SEO, and customer trust. We don't do that here. Every site is built from scratch for better speed, stronger SEO, security, and a smoother experience overall.

Through this startup venture, I get to combine my interest in design, digital presence, and user experience while also learning how to run a business and grow as a solopreneur.

Visit Website`;
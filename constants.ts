import { Project, Experience, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'acadex',
    title: 'Acadex',
    description: 'A peer-to-peer book exchange platform for students to buy, sell, and trade textbooks and study materials within their university community.',
    image: '/assets/acadex-logo-light.webp',
    imageDark: '/assets/acadex-logo-dark.webp',
    tags: ['Next.js', 'Supabase'],
    highlightTags: ['In Progress', 'Academic Project'],
  },
  {
    id: 'recurr',
    title: 'Recurr',
    description: 'A simple subscription management app to track and manage all your recurring expenses in one place.',
    image: '/assets/recurr-light.webp',
    imageDark: '/assets/recurr-dark.webp',
    tags: ['Swift', 'Supabase'],
    highlightTags: ['In Progress', 'Projected Launch: 2026 Q3'],
  },
  {
    id: 'interval',
    title: 'INTERVAL',
    description: 'A timer app designed for interval training workouts, allowing users to create custom timers for their exercise routines.',
    image: '/assets/interval-light.webp',
    imageDark: '/assets/interval-dark.webp',
    tags: ['Swift', 'Supabase'],
    highlightTags: ['In Progress', 'Projected Launch: 2026 Q3'],
  },
  {
    id: 'coupling',
    title: 'Coupling',
    description: 'An app that brings long-distance couples closer through shared calendars, memories, and daily connection tools.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['React Native + Expo', 'Supabase'],
    highlightTags: ['Brainstorming Phase', 'Projected Launch: 2026 Q3'],
  },
  {
    id: 'playmate',
    title: 'Playmate',
    description: 'Multiple fun turn-based minigames accessible in one app.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['Unity', 'C#', 'Firebase', 'Photon Fusion'],
    highlightTags: ['Brainstorming Phase', 'Projected Launch: 2026 Q4'],
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
    id: 'massey-university',
    period: 'MAR 2026 - PRESENT',
    role: 'Academic Support Assistant',
    company: 'Massey University',
    description: 'Provide academic support to students, mark assignments, and assist with course administration in the CSIT department.'
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
    label: 'Send me an Email',
    url: 'mailto:hello@inigoromano.dev',
    isEmail: true
  },
  {
    label: 'Let\'s connect on LinkedIn',
    url: 'https://www.linkedin.com/in/inigoromano/'
  }
];

export const SECTION_SOCIALS: SocialLink[] = [
  {
    label: 'Email',
    url: 'mailto:hello@inigoromano.dev',
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
    label: 'GitHub',
    url: 'https://github.com/inigoromano'
  },
];

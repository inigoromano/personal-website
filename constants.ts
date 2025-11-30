import { Project, Experience, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'p2',
    title: 'project 2',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'p3',
    title: 'project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://placehold.co/100x100/2a2a2a/FFF',
    tags: ['Python', 'Django', 'PostgreSQL'],
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    period: 'DEC 20xx - JUN 20xx',
    content: 'experience content',
  },
  {
    id: 'e2',
    period: 'DEC 20xx - JUN 20xx',
    content: 'experience content',
  },
  {
    id: 'e3',
    period: 'DEC 20xx - JUN 20xx',
    content: 'experience content',
  },
  {
    id: 'e4',
    period: 'DEC 20xx - JUN 20xx',
    content: 'experience content',
  },
  {
    id: 'e5',
    period: 'DEC 20xx - JUN 20xx',
    content: 'experience content',
  },
  {
    id: 'e6',
    period: 'DEC 20xx - JUN 20xx',
    content: 'experience content',
  }
];

export const SOCIALS: SocialLink[] = [
  {
    label: 'inigo.manuelromano@gmail.com',
    url: 'mailto:inigo.manuelromano@gmail.com',
    isEmail: true
  },
  {
    label: 'northworks.co.nz',
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

export const NORTHWORKS_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Visit Website`;
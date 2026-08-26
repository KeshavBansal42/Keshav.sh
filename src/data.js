export const PROFILE = {
  name: 'Keshav Bansal',
  role: 'Full-stack Developer',
  bio: 'Full-stack developer who builds across the whole stack — browser, server, database, and the odd bit of systems-level code. I like shipping things that actually run, from real-time apps to CLI tools.',
  location: 'India',
  email: 'keshavbansal9a@gmail.com',
  github: 'https://github.com/KeshavBansal42',
  linkedin: 'https://www.linkedin.com/in/keshav-bansal-559788372',
  githubHandle: 'KeshavBansal42',
}

export const NEOFETCH = [
  { label: 'user', value: 'keshav' },
  { label: 'host', value: 'portfolio.local' },
  { label: 'os', value: 'KeshavOS 2026 LTS' },
  { label: 'shell', value: '/bin/bash (mostly)' },
  { label: 'role', value: 'Full-stack Developer' },
  { label: 'location', value: 'India' },
  { label: 'languages', value: 'TS · JS · Go · Python · C# · Dart' },
  { label: 'uptime', value: '13+ public repos' },
  { label: 'status', value: 'open to work' },
  { label: 'contact', value: 'keshavbansal9a@gmail.com' },
]

export const PROJECTS = [
  {
    id: 'lords-of-larceny',
    name: 'Lords of Larceny',
    tagline: 'A browser-based Clash of Clans clone with a WebGL client and Go API.',
    description:
      'Real-time strategy built as a production-style full-stack system: a Pixi.js WebGL game client, authenticated Go API, and containerized Postgres persistence.',
    stack: ['React', 'TypeScript', 'Pixi.js', 'Go', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/KeshavBansal42/Lords_of_Larceny',
    index: '01',
  },
  {
    id: 'gotorrent',
    name: 'goTorrent',
    tagline: 'A BitTorrent client written from scratch in Go.',
    description:
      'Parses bencode and torrent/magnet metadata, discovers and handshakes with peers, and downloads files concurrently across goroutines — a deep dive into networking and concurrency.',
    stack: ['Go', 'Networking', 'Concurrency', 'BitTorrent Protocol'],
    link: 'https://github.com/KeshavBansal42/goTorrent',
    index: '02',
  },
  {
    id: 'nash',
    name: 'Nash',
    tagline: 'Prediction markets for friend groups — a Flutter + Node.js team build.',
    description:
      'A hackathon project combining Flutter on mobile with a Node/TypeScript + Socket.io + PostgreSQL backend for real-time bets, a balanced in-game economy, and live pot updates.',
    stack: ['Flutter', 'Dart', 'Node.js', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    link: 'https://github.com/KeshavBansal42/Nash',
    team: true,
    index: '03',
  },
  {
    id: 'proximity',
    name: 'Proximity',
    tagline: 'A location-aware task manager that fires reminders by geofence.',
    description:
      'Triggers reminders by location instead of time — an interactive OpenStreetMap, adjustable radius, background service, offline Hive storage, packaged as a CI-built Android APK.',
    stack: ['Flutter', 'Dart', 'Hive', 'OpenStreetMap', 'GitHub Actions'],
    link: 'https://github.com/KeshavBansal42/Proximity',
    index: '04',
  },
]

export const SKILLS = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'C#', 'Dart', 'C++'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Pixi.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'Express', 'Go APIs', 'PostgreSQL', 'MongoDB', 'Socket.io'],
  },
  {
    category: 'Tools & Systems',
    items: ['Docker', 'Git', 'GitHub Actions', 'Electron', 'Flutter', 'Vite'],
  },
]

export { ASCII_PORTRAIT } from './asciiPortrait.js'

export const LINKS = [
  { label: 'GitHub', href: PROFILE.github, command: 'github' },
  { label: 'LinkedIn', href: PROFILE.linkedin, command: 'linkedin' },
  { label: 'Email', href: `mailto:${PROFILE.email}`, command: 'email' },
]

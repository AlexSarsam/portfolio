import {
  Atom,
  Wind,
  Braces,
  Code2,
  Palette,
  Server,
  Hexagon,
  FileCode,
  Terminal,
  Zap,
  Database,
  Layers,
  Flame,
  GitBranch,
  Container,
  PenTool,
  Code,
  Globe,
  LayoutGrid,
} from 'lucide-react'

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: Atom },
      { name: 'Tailwind', icon: Wind },
      { name: 'JavaScript', icon: Braces },
      { name: 'HTML', icon: Code2 },
      { name: 'CSS', icon: Palette },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', icon: Server },
      { name: 'Node.js', icon: Hexagon },
      { name: 'PHP', icon: FileCode },
      { name: 'Python', icon: Terminal },
      { name: 'FastAPI', icon: Zap },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: Database },
      { name: 'PostgreSQL', icon: Layers },
      { name: 'Supabase', icon: Flame },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'Docker', icon: Container },
      { name: 'Figma', icon: PenTool },
      { name: 'VS Code', icon: Code },
    ],
  },
  {
    category: 'CMS',
    items: [
      { name: 'WordPress', icon: Globe },
      { name: 'Elementor', icon: LayoutGrid },
    ],
  },
]

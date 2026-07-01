import { Mail, Briefcase, FolderGit2 } from 'lucide-react'

const socials = [
  { label: 'Email', href: 'mailto:diputacion530@gmail.com', icon: Mail },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alex-sarsam-gasca-591bb4265/',
    icon: Briefcase,
  },
  { label: 'GitHub', href: 'https://github.com/AlexSarsam', icon: FolderGit2 },
]

function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © 2026 Alex Sarsam. Construido con React y Tailwind.
        </p>
        <ul className="flex items-center gap-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                className="text-muted hover:text-purple-light transition-colors"
              >
                <social.icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer

import { motion } from 'framer-motion'
import { Mail, Briefcase, FolderGit2 } from 'lucide-react'

const links = [
  {
    label: 'Email',
    value: 'diputacion530@gmail.com',
    href: 'mailto:diputacion530@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/alex-sarsam-gasca',
    href: 'https://www.linkedin.com/in/alex-sarsam-gasca-591bb4265/',
    icon: Briefcase,
  },
  {
    label: 'GitHub',
    value: 'github.com/AlexSarsam',
    href: 'https://github.com/AlexSarsam',
    icon: FolderGit2,
  },
]

function Contact() {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-mono text-xs text-accent border border-accent/30 rounded px-2 py-1 mb-4"
        >
          04 /
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl mb-4"
        >
          Ponte en contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl text-muted leading-relaxed mb-12"
        >
          ¿Buscas un frontend junior con ganas? Hablemos.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden flex flex-col gap-3 p-6 rounded-2xl border border-line bg-surface hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              <link.icon className="text-accent" size={22} />
              <span className="text-sm text-muted">{link.label}</span>
              <span className="text-ink text-sm break-all">{link.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

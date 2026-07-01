import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-mono text-xs text-accent border border-accent/30 rounded px-2 py-1 mb-4"
        >
          02 /
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl mb-12"
        >
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden flex flex-col p-6 rounded-2xl border border-line bg-surface hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              <span className="self-start text-xs tracking-widest text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-4">
                {project.category}
              </span>

              <h3 className="text-xl mb-2">{project.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted border border-line rounded-full px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-line">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver repositorio de ${project.title} en GitHub`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors"
                >
                  <FolderGit2 size={16} />
                  Código
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver demo de ${project.title}`}
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

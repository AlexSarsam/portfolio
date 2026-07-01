import { motion } from 'framer-motion'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-mono text-xs text-accent border border-accent/30 rounded px-2 py-1 mb-4"
        >
          03 /
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl mb-12"
        >
          Skills
        </motion.h2>

        <div className="space-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm uppercase tracking-widest text-muted mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-line bg-surface hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <item.icon className="text-accent shrink-0" size={20} />
                    <span className="text-sm text-ink">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

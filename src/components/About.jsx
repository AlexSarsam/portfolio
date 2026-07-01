import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Dumbbell } from 'lucide-react'

const cards = [
  {
    title: 'Formación',
    icon: GraduationCap,
    text: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW), Monlau. Próximo paso: especialización en ciberseguridad.',
  },
  {
    title: 'Experiencia',
    icon: Briefcase,
    text: 'Proyectos full-stack propios combinando frontend, backend e integración de IA, desde la idea hasta el despliegue.',
  },
  {
    title: 'Intereses',
    icon: Dumbbell,
    text: 'Cuando no programo, entreno. Me obsesiona el detalle, tanto en el código como fuera de él.',
  },
]

function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-mono text-xs text-accent border border-accent/30 rounded px-2 py-1 mb-4"
        >
          01 /
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl mb-8"
        >
          Sobre mí
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl text-muted leading-relaxed mb-14"
        >
          19 años, Barcelona. Aprendo rápido y me obsesiona el detalle. Estudié
          DAW en Monlau y ahora voy a especializarme en ciberseguridad. Cuando
          no programo, entreno.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden p-6 rounded-2xl border border-line bg-surface hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              <card.icon className="text-accent mb-4" size={24} />
              <h3 className="text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

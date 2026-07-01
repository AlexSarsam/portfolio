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
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-purple-light text-sm mb-2"
        >
          01 /
        </motion.p>
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
              className="p-6 rounded-2xl border border-line bg-surface hover:border-purple-light/50 hover:-translate-y-1 transition-all duration-300"
            >
              <card.icon className="text-purple-light mb-4" size={24} />
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

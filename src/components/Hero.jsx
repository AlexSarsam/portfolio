import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <header
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple/30 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-blue/25 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-purple-light/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-light text-sm uppercase tracking-widest mb-4"
        >
          Hola, soy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent mb-4"
        >
          Alex Sarsam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-xl md:text-2xl text-ink mb-6"
        >
          Frontend Developer Junior
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-muted leading-relaxed mb-10"
        >
          Construyo interfaces limpias y funcionales. Recién titulado en DAW,
          apasionado por el detalle y la experiencia de usuario.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple to-blue text-ink text-sm hover:opacity-90 transition-opacity"
          >
            Ver proyectos
            <ArrowRight size={16} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-ink text-sm hover:border-purple-light transition-colors"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero

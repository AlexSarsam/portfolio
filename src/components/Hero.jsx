import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <header
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />

      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-10 top-1/2 -translate-y-1/2 font-display text-[26rem] leading-none text-transparent [-webkit-text-stroke:1px_var(--color-line)] hidden lg:block"
      >
        AS
      </span>

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm uppercase tracking-widest mb-4"
        >
          Hola, soy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl text-ink mb-4"
        >
          Alex Sarsam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-xl md:text-2xl text-muted mb-6"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-bg text-sm font-medium hover:bg-accent-dim transition-colors"
          >
            Ver proyectos
            <ArrowRight size={16} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-ink text-sm hover:border-accent transition-colors"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero

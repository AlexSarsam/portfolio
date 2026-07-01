# Alex Sarsam — Portfolio

Portfolio personal de Alex Sarsam, desarrollador frontend junior. Construido con Vite, React 18, Tailwind CSS y Framer Motion.

## Stack

- [Vite](https://vite.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) para animaciones
- [Lucide React](https://lucide.dev/) para iconos

## Estructura

```
src/
  components/   # Navbar, Hero, About, Projects, Skills, Contact, Footer
  data/         # projects.js y skills.js — editar aquí el contenido
  App.jsx
  main.jsx
  index.css
```

Para actualizar proyectos o skills, edita directamente `src/data/projects.js` y `src/data/skills.js`.

## Cómo correr el proyecto en local

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

### Otros comandos

```bash
npm run build     # genera la build de producción en /dist
npm run preview   # sirve la build de producción en local
npm run lint      # ejecuta ESLint
```

## Deploy en Vercel

### Opción 1: desde la web

1. Sube el proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. Entra en [vercel.com](https://vercel.com/) e inicia sesión.
3. Pulsa **Add New → Project** e importa el repositorio.
4. Vercel detecta automáticamente que es un proyecto Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Pulsa **Deploy**.

### Opción 2: desde la CLI

```bash
npm install -g vercel
vercel login
vercel        # deploy de prueba
vercel --prod # deploy a producción
```

## Antes de publicar

Recuerda sustituir los placeholders (`#`) en `src/data/projects.js` con los enlaces de GitHub/demo de cada proyecto individual. Email, LinkedIn y GitHub en `Contact.jsx` / `Footer.jsx` ya están rellenados.

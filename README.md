# MIDNIGHT®

Portfolio personal de desarrollador digital, construido con React, TypeScript, Vite, Tailwind CSS y Framer Motion.

## Empezar

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
```

Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

### Publicar en GitHub Pages

Al subir cambios a `main`, GitHub Actions compila y publica el portfolio automáticamente en `https://miagbenitez.github.io/midnight/`. En el repositorio, selecciona **Settings → Pages → Build and deployment → GitHub Actions** para habilitar el despliegue. El primer despliegue puede tardar unos minutos.

### Vista en Campusitec

`index.html` detecta cuando se abre desde Campusitec y muestra el portfolio publicado dentro de la vista previa; fuera de Campusitec carga la aplicación React normalmente. `index.php` conserva la misma vista como alternativa para workspaces que prioricen PHP. En Campusitec, ejecuta el workspace y pulsa `Visitar sitio`.

## Personalización

- `src/data/siteConfig.ts`: email, WhatsApp, redes, foto de perfil, biografía, filosofía, intereses y objetivos. Los enlaces personales vacíos no se muestran.
- `src/data/projects.ts`: configura los repositorios que aparecen en Proyectos destacados. Solo se muestran los repositorios públicos seleccionados con `enabled: true`; los forks y archivados se excluyen. `featured` los destaca, y `title`, `description`, `image`, `liveDemo`, `technologies`, `problem`, `solution`, `screenshots` y `results` permiten personalizar su presentación y caso de estudio. Las capturas deben ser imágenes locales dentro de `public/` o enlaces públicos.
- `src/data/githubProjects.ts`: consulta el listado público de `miagbenitez` y los lenguajes de programación en la API oficial de GitHub. El nombre, la descripción, los enlaces y los lenguajes se completan desde GitHub, salvo que se configuren valores manuales. Los lenguajes detectados no reemplazan la lista manual de herramientas de cada caso de estudio.
- `src/data/technologies.ts`: cambia `configured` a `true` para mostrar únicamente tecnologías que quieras declarar como parte de tu stack.
- `public/logo.svg` y `public/favicon.svg`: identidad gráfica SVG editable.

El formulario valida los campos y abre el cliente de correo del visitante mediante `mailto:` cuando configuras un email. No envía ni simula envíos a un backend.

### Proyectos seleccionados

La selección actual de `miagbenitez` muestra:

- **ABISSMO / Expedición al abismo** — Sitio web interactivo sobre el océano.
- **Blossom Stay / Puerto Iguazú** — Sitio web de alojamientos en Puerto Iguazú.
- **MYSTERY HUB / Archivo de misterios** — Archivo digital interactivo.

Los tres enlaces de repositorio y las tecnologías se consultan desde GitHub. Sus portadas se definen en `src/data/projects.ts`, y la portada de MYSTERY HUB está en `public/projects/mystery-hub.svg`. GitHub no informa una página publicada para estos repositorios; por eso no se muestra un botón de demo. Puedes añadir el enlace cuando publiques cada proyecto.

### Seleccionar proyectos

Agrega una entrada a `projectConfiguration` en `src/data/projects.ts` para cada repositorio público que quieras mostrar:

```ts
{
  repository: 'repository-name',
  enabled: true,
  category: 'Websites',
  featured: true,
  title: 'Título opcional',
  description: 'Descripción opcional',
  image: '/projects/cover.webp',
  liveDemo: 'https://example.com',
  technologies: ['React', 'TypeScript'],
  problem: 'Describe la necesidad o el desafío del proyecto.',
  solution: 'Explica qué construiste y cuál fue tu aporte.',
  screenshots: ['/projects/screenshot-1.webp', '/projects/screenshot-2.webp'],
  results: 'Agrega resultados verificables o aprendizajes; evita inventar métricas.',
}
```

La configuración es una lista de selección: repositorios no configurados u ocultos con `enabled: false` no aparecen. `image` y `liveDemo` son opcionales; sin demo solo se muestra el enlace al repositorio. Cuando `technologies` se omite o está vacía, se obtienen los lenguajes del repositorio desde GitHub. GitHub solo devuelve repositorios públicos en esta integración; repositorios privados, forks y archivados no se muestran. La consulta del proyecto y sus lenguajes usa la API pública sin autenticación.

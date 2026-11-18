export type ProjectCategory = 'Websites' | 'Applications' | 'Experiments'
export type ProjectFilter = 'All' | ProjectCategory

export interface ProjectPresentation {
  repository: string
  enabled: boolean
  category: ProjectCategory
  featured?: boolean
  title?: string
  description?: string
  image?: string
  liveDemo?: string
  technologies?: string[]
  problem?: string
  solution?: string
  results?: string
  screenshots?: string[]
}

export interface PortfolioProject {
  id: string
  title: string
  description: string
  category: ProjectCategory
  technologies: string[]
  repositoryUrl: string
  liveDemo?: string
  image?: string
  featured: boolean
  problem?: string
  solution?: string
  results?: string
  screenshots?: string[]
}

// Solo aparecen repositorios públicos habilitados en esta lista.
export const projectConfiguration: ProjectPresentation[] = [
  {
    repository: 'abissmo',
    enabled: true,
    category: 'Websites',
    featured: true,
    title: 'ABISSMO / Expedición al abismo',
    description:
      'Una expedición interactiva por las zonas del océano y las especies que habitan sus profundidades.',
    image:
      'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=1200&q=85',
    liveDemo: 'https://campusitec.com/u/01M7QT2ACCS7M8MKKMK9CXE639/abissmo-f0153/',
  },
  {
    repository: 'blossom-stay-bnbb',
    enabled: true,
    category: 'Websites',
    featured: true,
    title: 'Blossom Stay / Puerto Iguazú',
    description:
      'Un sitio para descubrir alojamientos, habitaciones y experiencias en Puerto Iguazú, Misiones.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    liveDemo: 'https://campusitec.com/u/01M41TN3VD5X8VDHSVWAR8BJFB/blosssom-staybnb-df050/',
  },
  {
    repository: 'mistery.hub',
    enabled: true,
    category: 'Experiments',
    featured: true,
    title: 'MYSTERY HUB / Archivo de misterios',
    description:
      'Un archivo digital interactivo de investigaciones, casos inexplicables y documentos clasificados.',

    export type ProjectCategory = 'Websites' | 'Applications' | 'Experiments'
export type ProjectFilter = 'All' | ProjectCategory

export interface ProjectPresentation {
  repository: string
  enabled: boolean
  category: ProjectCategory
  featured?: boolean
  title?: string
  description?: string
  image?: string
  liveDemo?: string
  technologies?: string[]
  problem?: string
  solution?: string
  results?: string
  screenshots?: string[]
}

export interface PortfolioProject {
  id: string
  title: string
  description: string
  category: ProjectCategory
  technologies: string[]
  repositoryUrl: string
  liveDemo?: string
  image?: string
  featured: boolean
  problem?: string
  solution?: string
  results?: string
  screenshots?: string[]
}

// Solo aparecen repositorios públicos habilitados en esta lista.
export const projectConfiguration: ProjectPresentation[] = [
  {
    repository: 'abissmo',
    enabled: true,
    category: 'Websites',
    featured: true,
    title: 'ABISSMO / Expedición al abismo',
    description:
      'Una expedición interactiva por las zonas del océano y las especies que habitan sus profundidades.',
    image:
      'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=1200&q=85',
    liveDemo: 'https://campusitec.com/u/01M7QT2ACCS7M8MKKMK9CXE639/abissmo-f0153/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    problem:
      'Mostrar información sobre las profundidades del océano de forma atractiva y navegable, sin que el contenido se sienta denso o aburrido.',
    solution:
      'Diseñé una experiencia visual con secciones por zonas oceánicas, tipografía legible y un recorrido que invita a explorar. Prioricé la claridad y el ritmo de lectura.',
    results:
      'El sitio transmite mejor la sensación de inmersión y facilita descubrir las especies y datos de cada zona. Quedó una base sólida para seguir ampliando contenido.',
  },
  {
    repository: 'blossom-stay-bnbb',
    enabled: true,
    category: 'Websites',
    featured: true,
    title: 'Blossom Stay / Puerto Iguazú',
    description:
      'Un sitio para descubrir alojamientos, habitaciones y experiencias en Puerto Iguazú, Misiones.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    liveDemo: 'https://campusitec.com/u/01M41TN3VD5X8VDHSVWAR8BJFB/blosssom-staybnb-df050/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    problem:
      'Presentar opciones de alojamiento en Puerto Iguazú de forma clara, con buena jerarquía visual y sin perder el foco en la experiencia del visitante.',
    solution:
      'Armé una estructura simple de secciones (espacios, habitaciones, experiencias) con un diseño limpio y responsive, pensado para que la información se encuentre rápido.',
    results:
      'El sitio comunica mejor la propuesta de valor del alojamiento y facilita la exploración de las opciones. Sirve como base para futuras mejoras de reserva o contacto.',
  },
  {
    repository: 'mistery.hub',
    enabled: true,
    category: 'Experiments',
    featured: true,
    title: 'MYSTERY HUB / Archivo de misterios',
    description:
      'Un archivo digital interactivo de investigaciones, casos inexplicables y documentos clasificados.',
    image: '/projects/mystery-hub.svg',
    liveDemo: 'https://campusitec.com/u/01M7QT9NEGCYS0H8MY7NPXKPGX/misteryhub-a98e8/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    problem:
      'Crear un archivo de misterios que se sienta inmersivo y narrativo, sin perder usabilidad ni legibilidad.',
    solution:
      'Trabajé una estética de archivo clasificado con secciones temáticas, tipografía y detalles visuales que refuerzan la atmósfera. El recorrido invita a investigar caso por caso.',
    results:
      'El proyecto logra transmitir la atmósfera buscada y funciona como un experimento sólido de storytelling visual y navegación temática.',
  },
]
    image: '/projects/mystery-hub.svg',
    liveDemo: 'https://campusitec.com/u/01M7QT9NEGCYS0H8MY7NPXKPGX/misteryhub-a98e8/',
  },
]

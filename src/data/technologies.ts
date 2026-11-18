export interface Technology {
  name: string
  configured: boolean
}

// Cambia configured a true solo para tecnologías que quieras mostrar como parte de tu stack.
export const technologies: Technology[] = [
  { name: 'HTML', configured: true },
  { name: 'CSS', configured: true },
  { name: 'JavaScript', configured: true },
  { name: 'TypeScript', configured: true },
  { name: 'React', configured: true },
  { name: 'Vite', configured: true },
  { name: 'Tailwind CSS', configured: true },
  { name: 'Git', configured: true },
  { name: 'Python', configured: true },
]

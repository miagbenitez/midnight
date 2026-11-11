export interface Technology {
  name: string
  configured: boolean
}

// Cambia configured a true solo para tecnologías que quieras mostrar como parte de tu stack.
export const technologies: Technology[] = [
  { name: 'HTML', configured: false },
  { name: 'CSS', configured: true },
  { name: 'JavaScript', configured: true },
  { name: 'TypeScript', configured: false },
  { name: 'React', configured: false },
  { name: 'Next.js', configured: false },
  { name: 'Tailwind CSS', configured: false },
  { name: 'Git', configured: true },
  { name: 'Python', configured: true },
]

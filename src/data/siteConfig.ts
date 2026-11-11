export const siteConfig = {
  name: 'MIDNIGHT®',
  role: 'Desarrolladora web en formación',
  email: 'miagbenitez@gmail.com',
  whatsapp: '',
  socials: {
    instagram: '',
    github: '',
    linkedin: '',
  },
  about: {
    photo:
      'https://static.vecteezy.com/system/resources/thumbnails/024/568/859/small_2x/anime-minimalist-and-flat-logo-illustration-vector.jpg',
    biography:
      'Soy Mia Benítez, desarrolladora web en formación. Me gusta trabajar en lo visual y darles vida a las páginas con código, creando experiencias atractivas, claras y funcionales.',
    philosophy: 'Diseñar con intención. Construir con curiosidad.',
    interests: 'Diseño visual · Desarrollo web · Experiencias digitales',
    goals: 'Seguir creciendo como desarrolladora web y crear páginas atractivas, funcionales y cuidadas.',
  },
}

export const socialLinks = [
  { label: 'Instagram', href: siteConfig.socials.instagram },
  { label: 'GitHub', href: siteConfig.socials.github },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin },
].filter((link) => link.href)

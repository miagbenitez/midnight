import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { siteConfig, socialLinks } from '../data/siteConfig'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    if (!siteConfig.email) {
      setStatus('El formulario está listo, pero todavía no está conectado. Configura tu email en src/data/siteConfig.ts para habilitar el envío mediante tu cliente de correo.')
      return
    }

    const formData = new FormData(form)
    const subject = encodeURIComponent(`Consulta desde mi portfolio — ${String(formData.get('name'))}`)
    const body = encodeURIComponent(
      `Nombre: ${String(formData.get('name'))}\nEmail: ${String(formData.get('email'))}\n\n${String(formData.get('message'))}`,
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('Abriendo tu aplicación de correo para que puedas revisar y enviar el mensaje.')
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-container contact-grid">
        <div className="contact-intro">
          <SectionHeading eyebrow="TODO LO BUENO EMPIEZA AQUÍ" title="¿Tienes un proyecto en mente?" description="Creemos algo significativo, en conjunto." />
          <div className="contact-direct">
            {siteConfig.email ? (
              <a href={`mailto:${siteConfig.email}`}><Mail size={16} />{siteConfig.email}<ArrowUpRight size={14} /></a>
            ) : (
              <span><Mail size={16} />Email pendiente de configurar</span>
            )}
            {siteConfig.whatsapp && <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><MessageCircle size={16} />WhatsApp<ArrowUpRight size={14} /></a>}
          </div>
          {socialLinks.length > 0 && (
            <div className="contact-socials">
              {socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={13} /></a>)}
            </div>
          )}
          <p className="contact-config-note">Edita email, WhatsApp y redes en <code>src/data/siteConfig.ts</code>.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Tu nombre <span>*</span></label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="¿Cómo te llamas?" required maxLength={100} />
          <label htmlFor="contact-email">Tu correo electrónico <span>*</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="tu@correo.com" required maxLength={254} />
          <label htmlFor="contact-message">Cuéntame sobre tu proyecto <span>*</span></label>
          <textarea id="contact-message" name="message" rows={4} placeholder="¿Qué tienes en mente?" required maxLength={3000} />
          <button className="button button-primary" type="submit">Enviar mensaje <ArrowUpRight size={16} /></button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact

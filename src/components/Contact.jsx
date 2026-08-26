import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROFILE, LINKS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact__content > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="section__head">
        <span className="section__index">04</span>
        <h2 className="section__title">
          <span className="section__prompt">$</span> open ./contact
        </h2>
      </div>

      <div className="contact__content">
        <p className="contact__lead">
          Got a project, a role, or just want to talk shop? My inbox is open.
        </p>

        <div className="contact__links">
          {LINKS.map((link) => (
            <a
              key={link.command}
              href={link.href}
              className="contact__link"
              data-cursor
              target={link.command === 'email' ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              <span className="contact__link-arrow">→</span>
              <span className="contact__link-cmd">{link.command}</span>
              <span className="contact__link-label">{link.label}</span>
            </a>
          ))}
        </div>

        <p className="contact__hint">
          or head back up and try <code>$ github</code> in the terminal.
        </p>
      </div>
    </section>
  )
}

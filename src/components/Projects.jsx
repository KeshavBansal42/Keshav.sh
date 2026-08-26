import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.project-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 82%' },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section projects" id="projects" ref={sectionRef}>
      <div className="section__head">
        <span className="section__index">02</span>
        <h2 className="section__title">
          <span className="section__prompt">$</span> ls ./featured
        </h2>
      </div>

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            data-cursor
          >
            <div className="project-card__top">
              <span className="project-card__index">{project.index}</span>
              {project.team && (
                <span className="project-card__badge">team project</span>
              )}
            </div>

            <h3 className="project-card__name">{project.name}</h3>
            <p className="project-card__tagline">{project.tagline}</p>
            <p className="project-card__desc">{project.description}</p>

            <ul className="project-card__stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <span className="project-card__cta">view repo →</span>
          </a>
        ))}
      </div>
    </section>
  )
}

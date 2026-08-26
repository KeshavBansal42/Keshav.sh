import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { animate, scrambleText } from 'animejs'
import { PROFILE, ASCII_PORTRAIT, NEOFETCH } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about__neofetch',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const el = document.querySelector('.about__file')
    if (!el) return

    const animation = animate(el, {
      innerHTML: scrambleText({ chars: 'a-z0-9_.#', cursor: true }),
      duration: 1400,
      ease: 'inOutQuad',
    })

    return () => animation.pause()
  }, [])

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="section__head">
        <span className="section__index">01</span>
        <h2 className="section__title">
          <span className="section__prompt">$</span> whoami
        </h2>
      </div>

      <div className="about__content">
        <div className="about__neofetch">
          <div className="about__panel-bar">
            <span className="about__dots">
              <i /> <i /> <i />
            </span>
            <span className="about__file">neofetch --keshav</span>
          </div>

          <div className="neofetch">
            <pre className="neofetch__art" aria-label="ASCII portrait">
              {ASCII_PORTRAIT.join('\n')}
            </pre>
            <dl className="neofetch__stats">
              {NEOFETCH.map((row) => (
                <div className="neofetch__row" key={row.label}>
                  <dt className="neofetch__label">{row.label}</dt>
                  <dd className="neofetch__value">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="about__lead">{PROFILE.bio}</p>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROFILE } from '../data.js'
import { TerminalWindow } from './Terminal.jsx'

gsap.registerPlugin(ScrollTrigger)

const ROLES = ['Full-stack Developer', 'Systems Tinkerer', 'Polyglot Builder']

export default function Hero() {
  const sectionRef = useRef(null)
  const roleRef = useRef(null)
  const roleIndex = useRef(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        '.hero__name span',
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power4.out' },
      )
        .fromTo(
          '.hero__meta',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4',
        )
        .fromTo(
          '.hero__actions a',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.3',
        )
        .fromTo(
          '.hero__terminal',
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5',
        )

      gsap.to('.hero__scroll', {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: 'sine.inOut',
      })

      gsap.to('.hero__glitch', {
        opacity: 0.04,
        repeat: -1,
        yoyo: true,
        duration: 0.2,
        ease: 'steps(2)',
      })
    }, sectionRef)

    const typeRole = () => {
      const el = roleRef.current
      const text = ROLES[roleIndex.current]
      roleIndex.current = (roleIndex.current + 1) % ROLES.length

      const state = { value: '', index: 0 }
      const tick = () => {
        state.value = text.slice(0, state.index)
        el.textContent = state.value
        if (state.index < text.length) {
          state.index++
          setTimeout(tick, 55)
        } else {
          setTimeout(() => {
            const del = () => {
              state.value = text.slice(0, state.index)
              el.textContent = state.value
              if (state.index > 0) {
                state.index--
                setTimeout(del, 28)
              } else {
                typeRole()
              }
            }
            del()
          }, 1800)
        }
      }
      tick()
    }

    typeRole()

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__scanline" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__main">
          <p className="hero__tag">
            <span className="hero__dot" /> {PROFILE.location} — available for work
          </p>

          <h1 className="hero__name">
            <span className="hero__line">Keshav</span>
            <span className="hero__line hero__line--accent">Bansal</span>
          </h1>

          <div className="hero__role">
            <span className="hero__prompt">$</span>
            <span className="hero__role-text" ref={roleRef}>
              {ROLES[0]}
            </span>
            <span className="hero__caret">_</span>
          </div>

          <p className="hero__meta">
            I build things that run — event platforms, torrent clients, games, git
            internals — in six languages, end to end.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--accent" data-cursor>
              view work →
            </a>
            <a href="#about" className="btn btn--ghost" data-cursor>
              whoami
            </a>
          </div>
        </div>

        <div className="hero__terminal">
          <TerminalWindow />
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        ↓ scroll
      </a>
      <div className="hero__glitch" aria-hidden="true">
        {PROFILE.name.toUpperCase()}
      </div>
    </section>
  )
}

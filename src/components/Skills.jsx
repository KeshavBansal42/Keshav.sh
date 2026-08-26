import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SKILLS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills__group',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="section__head">
        <span className="section__index">03</span>
        <h2 className="section__title">
          <span className="section__prompt">$</span> cat skills.json
        </h2>
      </div>

      <div className="skills__grid">
        {SKILLS.map((group) => (
          <div className="skills__group" key={group.category}>
            <h3 className="skills__label">{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li className="skills__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

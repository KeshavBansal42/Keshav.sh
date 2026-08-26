import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ITEMS = [
  { label: 'about', href: '#about', cmd: './whoami' },
  { label: 'projects', href: '#projects', cmd: './projects' },
  { label: 'skills', href: '#skills', cmd: './skills' },
  { label: 'contact', href: '#contact', cmd: './contact' },
]

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.2 },
    )
  }, [])

  return (
    <nav className="nav" ref={navRef}>
      <a href="#top" className="nav__brand" data-cursor>
        <span className="nav__prompt">$</span> keshav<span className="nav__caret">_</span>
      </a>
      <ul className="nav__list">
        {ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="nav__link" data-cursor>
              <span className="nav__cmd">{item.cmd}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

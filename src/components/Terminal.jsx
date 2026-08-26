import { useEffect, useRef, useState } from 'react'
import { PROFILE, PROJECTS, ASCII_PORTRAIT, NEOFETCH } from '../data.js'

const HELP = [
  { group: 'about', items: [
    { cmd: 'whoami', desc: 'print neofetch + bio' },
    { cmd: 'projects', desc: 'list featured projects' },
  ] },
  { group: 'contact', items: [
    { cmd: 'github', desc: 'open my GitHub in a new tab' },
    { cmd: 'linkedin', desc: 'open my LinkedIn in a new tab' },
    { cmd: 'email', desc: 'start an email to me' },
  ] },
  { group: 'system', items: [
    { cmd: 'help', desc: 'show this menu' },
    { cmd: 'clear', desc: 'clear the terminal' },
  ] },
]

const WELCOME = [
  'KESHAV BANSAL — interactive terminal',
  "type 'help' for commands.",
]

export function TerminalWindow({ className = '' }) {
  const inputRef = useRef(null)
  const bodyRef = useRef(null)
  const [lines, setLines] = useState([
    { type: 'system', text: WELCOME[0] },
    { type: 'system', text: WELCOME[1] },
  ])

  const scrollToBottom = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [lines])

  const openUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const run = (raw) => {
    const input = raw.trim()
    if (!input) return

    const echo = { type: 'input', text: input }
    const responses = []

    switch (input.toLowerCase()) {
      case 'help':
        responses.push({ type: 'system', text: 'available commands:' })
        HELP.forEach((group) => {
          responses.push({ type: 'help-group', text: group.group })
          group.items.forEach((h) =>
            responses.push({ type: 'help', text: `${h.cmd.padEnd(10)} — ${h.desc}` }),
          )
        })
        break
      case 'github':
        responses.push({ type: 'out', text: 'opening GitHub…' })
        openUrl(PROFILE.github)
        break
      case 'linkedin':
        responses.push({ type: 'out', text: 'opening LinkedIn…' })
        openUrl(PROFILE.linkedin)
        break
      case 'email':
        responses.push({ type: 'out', text: 'opening your mail client…' })
        window.location.href = `mailto:${PROFILE.email}`
        break
      case 'whoami':
        responses.push({ type: 'neofetch' })
        break
      case 'projects':
        PROJECTS.forEach((p) =>
          responses.push({ type: 'out', text: `${p.index} ${p.name} — ${p.link}` }),
        )
        break
      case 'clear':
        setLines([])
        return
      default:
        responses.push({
          type: 'error',
          text: `command not found: ${input} — try 'help'`,
        })
    }

    setLines((prev) => [...prev, echo, ...responses])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    run(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <div
      className={`terminal__window ${className}`}
      onClick={() => inputRef.current.focus()}
    >
      <div className="terminal__bar">
        <span className="terminal__dots">
          <i /> <i /> <i />
        </span>
        <span className="terminal__title">keshav@portfolio: ~</span>
      </div>

      <div className="terminal__body" ref={bodyRef}>
        {lines.map((line, i) => (
          <div className={`terminal__line terminal__line--${line.type}`} key={i}>
            {line.type === 'input' && (
              <span>
                <span className="terminal__prompt">$ </span>
                {line.text}
              </span>
            )}
            {line.type === 'system' && (
              <span className="terminal__sys"># {line.text}</span>
            )}
            {line.type === 'help' && (
              <span className="terminal__help">{line.text}</span>
            )}
            {line.type === 'help-group' && (
              <div className="terminal__help-group">{line.text}</div>
            )}
            {line.type === 'out' && <span>{line.text}</span>}
            {line.type === 'error' && (
              <span className="terminal__error">{line.text}</span>
            )}
            {line.type === 'neofetch' && (
              <div className="terminal__neofetch">
                <pre className="terminal__neofetch-art">
                  {ASCII_PORTRAIT.join('\n')}
                </pre>
                <div className="terminal__neofetch-stats">
                  {NEOFETCH.map((row) => (
                    <div className="terminal__neofetch-row" key={row.label}>
                      <span className="terminal__neofetch-label">{row.label}</span>
                      <span className="terminal__neofetch-value">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <form className="terminal__form" onSubmit={onSubmit}>
          <span className="terminal__prompt">$ </span>
          <input
            ref={inputRef}
            className="terminal__input"
            type="text"
            autoComplete="off"
            spellCheck="false"
            aria-label="terminal command"
          />
        </form>
      </div>
    </div>
  )
}

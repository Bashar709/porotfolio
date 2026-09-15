import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { id: 'hjem', label: 'Hjem', icon: '🏠' },
  { id: 'om-meg', label: 'Om meg', icon: '👤' },
  { id: 'prosjekter', label: 'Prosjekter', icon: '💼' },
]

export default function Nav() {
  const [active, setActive] = useState('hjem')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-4 z-50 mx-auto mt-8 flex w-fit items-center rounded-full border border-line bg-panel/60 px-2 py-1.5 shadow-lg backdrop-blur-md">
      <button
        type="button"
        aria-label="Slå av/på meny"
        onClick={() => setOpen((o) => !o)}
        className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
      >
        <span
          className={`h-0.5 w-5 bg-accent transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
        />
        <span className={`h-0.5 w-5 bg-accent transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span
          className={`h-0.5 w-5 bg-accent transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
        />
      </button>

      <ul
        className={`${open ? 'flex' : 'hidden'} flex-col items-stretch gap-1 sm:flex sm:flex-row sm:items-center sm:gap-1`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === link.id
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted hover:text-accent hover:bg-accent/5'
              }`}
            >
              <span aria-hidden="true">{link.icon}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  )
}

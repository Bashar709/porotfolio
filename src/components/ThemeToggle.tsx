import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(
    () => document.documentElement.classList.contains('light'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    document.documentElement.classList.toggle('dark', !isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  return (
    <button
      type="button"
      aria-label="Byt tema"
      onClick={() => setIsLight((v) => !v)}
      className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent/10 hover:text-accent"
    >
      {isLight ? '🌙' : '☀️'}
    </button>
  )
}

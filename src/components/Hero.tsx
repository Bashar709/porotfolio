const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/bashar709',
    path: 'M12 .5A12 12 0 0 0 0 12.5c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.1 2 2.9 1.4 3.7 1 .1-.8.4-1.4.7-1.8-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.3-3.1-.1-.3-.6-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.7 4 18.7 4.3 18.7 4.3c.7 1.8.2 3.1.1 3.4.8.8 1.3 1.8 1.3 3.1 0 4.6-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bashar-m-61ba842a2/',
    path: 'M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.8 3.7-1.8C20.6 8.9 22 10.8 22 14.3V21h-4v-6.1c0-1.5-.1-3.5-2.2-3.5-2.2 0-2.6 1.8-2.6 3.4V21H9V9z',
  },
  {
    label: 'E-post',
    href: 'mailto:basharMohamad@bashar.no',
    path: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  },
]

export default function Hero() {
  return (
    <section
      id="hjem"
      className="mx-auto mt-[10vh] max-w-3xl scroll-mt-24 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#333] p-10 text-center shadow-2xl sm:p-16"
    >
      <h1 className="text-4xl font-bold tracking-widest text-white sm:text-5xl">
        Bashar Mohamad
      </h1>
      <p className="mt-2 text-muted">
        Bachelorstudent i informasjonsteknologi – Høgskulen på Vestlandet
      </p>
      <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
        På denne nettsiden finn du prosjekta eg har jobba med, samt
        informasjon om meg og kompetansen min.
      </p>

      <div className="mt-6 flex justify-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-all hover:-translate-y-1 hover:bg-accent/10 hover:text-accent hover:shadow-lg"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d={s.path} />
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}

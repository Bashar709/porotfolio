import Reveal from './Reveal'

type Project = {
  title: string
  description: string
  tags: string[]
  color: string
  href?: string
}

const projects: Project[] = [
  {
    title: 'Valentine Spesial',
    description:
      'Ei interaktiv og koseleg nettside laga med HTML, CSS og JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#ffd700',
    href: 'https://bashar.no/valentine/',
  },
  {
    title: 'Ulstein Auto Service',
    description: 'Eit system for verkstad — under arbeid.',
    tags: ['Java', 'Spring Boot', 'MVC'],
    color: '#4fb3d9',
  },
]

export default function Projects() {
  return (
    <section
      id="prosjekter"
      className="mx-auto mt-[8vh] mb-16 max-w-2xl scroll-mt-24 px-3 text-center"
    >
      <Reveal>
        <h2 className="inline-block border-b-[3px] border-accent pb-1.5 text-2xl font-bold text-text-strong">
          Mine Prosjekter
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          Her er eit utval av applikasjonar og nettsider eg har utvikla.
        </p>

        <div className="mt-7 flex flex-col gap-4 text-left">
          {projects.map((p) => (
            <div
              key={p.title}
              className="relative overflow-hidden rounded-xl border border-line bg-panel/50 p-4 transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: p.color }}
              />
              <h3 className="text-lg font-semibold text-text-strong">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{p.description}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-accent/20 bg-accent/10 px-2 py-1 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg border border-accent/20 px-3 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                  >
                    Åpne prosjekt ↗
                  </a>
                ) : (
                  <span className="inline-block rounded-lg border border-line px-3 py-2 text-sm font-semibold text-muted">
                    Kommer snart
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

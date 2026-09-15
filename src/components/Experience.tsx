import Reveal from './Reveal'

const jobs = [
  {
    role: 'Teknisk vakt – digital eksamen',
    place: 'Høgskulen på Vestlandet',
    period: 'sep 2025 – nå',
    desc: 'Brukarstøtte og feilsøking av IKT-utstyr og programvare for studentar under eksamen.',
    tags: ['Brukerstøtte', 'IKT-støtte', 'Feilsøking'],
  },
  {
    role: 'Studentassistent – DAT107',
    place: 'Høgskulen på Vestlandet',
    period: 'jan 2026 – juni 2026',
    desc: 'Rettleia medstudentar i programmering og følgde opp øvingstimar.',
    tags: ['Java', 'Rettleiing'],
  },
  {
    role: 'Butikkmedarbeider',
    place: 'Coop Obs Bygg, Ulstein',
    period: 'feb 2024 – aug 2026',
    desc: 'Kundeveiledning, varehandtering og kassearbeid i byggevareavdelinga.',
    tags: ['Kundeveiledning', 'Varehandtering'],
  },
]

export default function Experience() {
  return (
    <section
      id="erfaring"
      className="mx-auto mt-[8vh] max-w-2xl scroll-mt-24 px-3 text-center"
    >
      <Reveal>
        <h2 className="inline-block border-b-[3px] border-accent pb-1.5 text-2xl font-bold text-text-strong">
          Erfaring
        </h2>

        <div className="mt-7 flex flex-col gap-3 text-left">
          {jobs.map((job) => (
            <div
              key={job.role}
              className="rounded-xl border border-line bg-panel/50 p-4 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-text-strong">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-accent">{job.place}</p>
              <p className="mt-1.5 text-sm text-muted">{job.desc}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-accent/20 bg-accent/10 px-2 py-0.5 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

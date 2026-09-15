import Reveal from './Reveal'

const skills = [
  { title: 'Backend', items: 'Java, Spring Boot, REST-API, Programvarearkitektur' },
  { title: 'Frontend', items: 'HTML5, CSS, JavaScript, TypeScript, React' },
  { title: 'Database', items: 'SQL, Datamodellering' },
]

export default function About() {
  return (
    <section
      id="om-meg"
      className="mx-auto mt-[8vh] max-w-2xl scroll-mt-24 px-3 text-center"
    >
      <Reveal>
        <h2 className="inline-block border-b-[3px] border-accent pb-1.5 text-2xl font-bold text-text-strong">
          Om meg
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          Student på bachelorstudiet i informasjonsteknologi ved Høgskulen på
          Vestlandet, med spesialisering i programvareutvikling. Sterkast i
          Java, med erfaring frå både frontend og backend av webapplikasjonar
          og SQL-databasar. Praktisk erfaring som teknisk vakt ved digital
          eksamen, studentassistent i programmering, og frå kundeservice i
          butikk.
        </p>

        <div className="mt-7 rounded-xl border border-line bg-panel/50 p-5">
          <h3 className="mb-3 text-left text-lg font-semibold text-text-strong">
            Kompetanse
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-line bg-bg/40 p-3 text-center transition-transform hover:-translate-y-0.5"
              >
                <h4 className="text-sm font-semibold text-text-strong">
                  {s.title}
                </h4>
                <p className="mt-1 text-xs text-muted">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

const skills = [
  { title: 'Frontend', items: 'HTML, CSS, JavaScript, TypeScript, React' },
  { title: 'Backend', items: 'Java, Spring MVC' },
  { title: 'Programmering', items: 'Java, C++' },
  { title: 'Database', items: 'SQL, MySQL' },
  { title: 'Utvikling', items: 'Fullstack' },
]

export default function About() {
  return (
    <section
      id="om-meg"
      className="mx-auto mt-[8vh] max-w-2xl scroll-mt-24 px-3 text-center"
    >
      <h2 className="inline-block border-b-[3px] border-accent pb-1.5 text-2xl font-bold text-white">
        Om meg
      </h2>
      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
        Jeg er en IT-student ved HVL som brenner for systemutvikling. Jeg har
        jobbet med både frontend og backend, og liker å bygge funksjonelle og
        strukturerte løsninger.
      </p>

      <div className="mt-7 rounded-xl border border-line bg-white/[0.02] p-5">
        <h3 className="mb-3 text-left text-lg font-semibold text-white">
          Kompetanse
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-[#22272b] bg-[#0f151a] p-3 text-center transition-transform hover:-translate-y-0.5"
            >
              <h4 className="text-sm font-semibold text-white">{s.title}</h4>
              <p className="mt-1 text-xs text-white/60">{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

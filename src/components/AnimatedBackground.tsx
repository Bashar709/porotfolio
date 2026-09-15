export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="blob-1 absolute -left-24 top-[-10%] h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[110px]" />
      <div className="blob-2 absolute right-[-10%] top-[20%] h-[22rem] w-[22rem] rounded-full bg-accent/10 blur-[110px]" />
    </div>
  )
}

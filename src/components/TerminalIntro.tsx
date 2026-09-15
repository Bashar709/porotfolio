import { useEffect, useState } from 'react'

const COMMAND = 'whoami'
const OUTPUT = 'Bashar Mohamad — Software Developer'

export default function TerminalIntro() {
  const [typedCommand, setTypedCommand] = useState('')
  const [typedOutput, setTypedOutput] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const typeCommand = setInterval(() => {
      i++
      setTypedCommand(COMMAND.slice(0, i))
      if (i >= COMMAND.length) {
        clearInterval(typeCommand)
        setTimeout(() => {
          let j = 0
          const typeOutput = setInterval(() => {
            j++
            setTypedOutput(OUTPUT.slice(0, j))
            if (j >= OUTPUT.length) clearInterval(typeOutput)
          }, 25)
        }, 350)
      }
    }, 90)
    return () => clearInterval(typeCommand)
  }, [])

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <div className="mx-auto mb-6 w-full max-w-sm rounded-lg border border-line bg-[#010409]/80 p-4 text-left font-mono text-sm shadow-lg">
      <div className="mb-2 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <p className="text-[#8b949e]">
        <span className="text-[#58a6ff]">$</span> {typedCommand}
        {!typedOutput && showCursor && (
          <span className="text-[#58a6ff]">▌</span>
        )}
      </p>
      {typedOutput && (
        <p className="text-[#7ee787]">
          {typedOutput}
          {showCursor && <span>▌</span>}
        </p>
      )}
    </div>
  )
}

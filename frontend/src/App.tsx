import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import Lenis from 'lenis'

function App() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    animate(titleRef.current, {
      opacity: [0, 1],
      duration: 1000,
      ease: 'outQuad',
    })
  }, [])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="min-h-[200vh] bg-black text-white">
      <div className="min-h-screen flex items-center justify-center">
        <h1
          ref={titleRef}
          className="text-5xl font-bold"
        >
          ResLens
        </h1>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl">
          Scroll to test Lenis
        </p>
      </div>
    </main>
  )
}

export default App
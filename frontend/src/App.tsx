import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

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

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <h1
        ref={titleRef}
        className="text-5xl font-bold text-white"
      >
        ResLens
      </h1>
    </div>
  )
}

export default App
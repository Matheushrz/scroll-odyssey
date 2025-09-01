import React from 'react'

type Props = {
  size?: number
  gradientFrom: string
  gradientTo: string
  ring?: string
  glow?: string
  moons?: number
}

export const Planet: React.FC<Props> = ({
  size = 260,
  gradientFrom,
  gradientTo,
  ring = '#ffffff22',
  glow = 'rgba(168,85,247,.25)',
  moons = 2,
}) => {
  const id = Math.random().toString(36).slice(2,8)
  const moonEls = Array.from({length: moons}).map((_,i) => (
    <div key={i} className="absolute inset-0 animate-orbit-slow" style={{animationDelay: `-${i*4}s`}}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+${size/2-24}px)] h-3 w-3 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,.6)]"></div>
    </div>
  ))

  return (
    <div className="relative inline-block" style={{filter:'drop-shadow(0 0 60px rgba(168,85,247,.25))'}}>
      {/* Glow */}
      <div className="absolute inset-0 rounded-full planet-shadow" style={{background: glow}}></div>

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="relative">
        <defs>
          <radialGradient id={`g-${id}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor={gradientFrom}/>
            <stop offset="100%" stopColor={gradientTo}/>
          </radialGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={size/2 - 2} fill={`url(#g-${id})`} stroke="#ffffff12" strokeWidth="2"/>
      </svg>

      {/* Ring */}
      <div className="absolute inset-0 ring-mask">
        <div className="absolute inset-0 rounded-full border-2" style={{borderColor: ring, transform:'scale(1.2) rotateX(65deg) rotateZ(20deg)'}}></div>
      </div>

      {/* Moons */}
      <div className="absolute inset-0">{moonEls}</div>
    </div>
  )
}

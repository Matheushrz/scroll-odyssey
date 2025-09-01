import React, { useEffect, useRef } from 'react'

type Star = { x: number; y: number; r: number; vx: number; vy: number; tw: number }

function makeStars(n: number, w: number, h: number, speedScale=1): Star[] {
  return Array.from({length:n}, () => ({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*1.5 + .2,
    vx: (Math.random()-.5)*0.02*speedScale,
    vy: (Math.random()-.5)*0.02*speedScale,
    tw: Math.random()*Math.PI*2
  }))
}

export const Starfield: React.FC = () => {
  const bgRef = useRef<HTMLCanvasElement|null>(null)
  const fgRef = useRef<HTMLCanvasElement|null>(null)

  useEffect(() => {
    const bg = bgRef.current!, fg = fgRef.current!
    const bgc = bg.getContext('2d')!, fgc = fg.getContext('2d')!
    let w = bg.width = fg.width = window.innerWidth
    let h = bg.height = fg.height = window.innerHeight

    let bgStars = makeStars(Math.min(200, Math.floor(w/6)), w, h, 0.6)
    let fgStars = makeStars(Math.min(120, Math.floor(w/10)), w, h, 1.2)

    let raf = 0
    const render = () => {
      // background layer (slower)
      bgc.clearRect(0,0,w,h)
      bgStars.forEach(s => {
        s.x += s.vx; s.y += s.vy; s.tw += 0.01
        if (s.x<0) s.x = w; if (s.x>w) s.x = 0
        if (s.y<0) s.y = h; if (s.y>h) s.y = 0
        const alpha = 0.25 + (Math.sin(s.tw)+1)/2 * 0.35
        bgc.globalAlpha = alpha
        bgc.beginPath(); bgc.arc(s.x, s.y, s.r, 0, Math.PI*2); bgc.fillStyle = '#ffffff'; bgc.fill()
      })

      // foreground layer (faster, more twinkle)
      fgc.clearRect(0,0,w,h)
      fgStars.forEach(s => {
        s.x += s.vx*1.4; s.y += s.vy*1.4; s.tw += 0.025
        if (s.x<0) s.x = w; if (s.x>w) s.x = 0
        if (s.y<0) s.y = h; if (s.y>h) s.y = 0
        const alpha = 0.35 + (Math.sin(s.tw*1.3)+1)/2 * 0.55
        fgc.globalAlpha = alpha
        fgc.beginPath(); fgc.arc(s.x, s.y, s.r, 0, Math.PI*2); fgc.fillStyle = '#ffffff'; fgc.fill()
      })

      raf = requestAnimationFrame(render)
    }
    render()

    const onResize = () => {
      w = bg.width = fg.width = window.innerWidth
      h = bg.height = fg.height = window.innerHeight
      bgStars = makeStars(Math.min(200, Math.floor(w/6)), w, h, 0.6)
      fgStars = makeStars(Math.min(120, Math.floor(w/10)), w, h, 1.2)
    }
    window.addEventListener('resize', onResize)

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <div className="starfield fixed inset-0 -z-20">
      <canvas ref={bgRef} className="w-full h-full opacity-50" />
      <canvas ref={fgRef} className="w-full h-full opacity-80" />
    </div>
  )
}

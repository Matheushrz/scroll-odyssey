import React, { useEffect, useRef } from 'react'

export const Stars: React.FC = () => {
  const ref = useRef<HTMLCanvasElement|null>(null)
  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d')!
    let w = c.width = window.innerWidth, h = c.height = window.innerHeight
    const stars = Array.from({length:200}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.2 + .2,
      vx: (Math.random()-.5)*0.15,
      vy: (Math.random()-.5)*0.15
    }))

    const draw = () => {
      ctx.clearRect(0,0,w,h)
      ctx.fillStyle = '#fff'
      stars.forEach(s => {
        s.x += s.vx
        s.y += s.vy
        if(s.x<0||s.x>w) s.vx*=-1
        if(s.y<0||s.y>h) s.vy*=-1
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill()
      })
      requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => { w=c.width=window.innerWidth; h=c.height=window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return <canvas ref={ref} className="fixed inset-0 -z-10 opacity-60" />
}

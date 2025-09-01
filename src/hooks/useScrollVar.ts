import { useEffect } from 'react'

/** Sets --scroll on :root as [0..1] of page progress */
export function useScrollVar() {
  useEffect(() => {
    const el = document.documentElement
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      el.style.setProperty('--scroll', String(p))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}

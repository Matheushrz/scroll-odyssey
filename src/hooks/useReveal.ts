import { useEffect } from 'react'

export function useReveal(selector = '.reveal', rootMargin = '0px 0px -10% 0px') {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector)) as HTMLElement[]
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          io.unobserve(entry.target)
        }
      })
    }, { root: null, rootMargin, threshold: 0.15 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [selector, rootMargin])
}

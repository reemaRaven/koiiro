'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section').forEach((s) => {
      s.classList.add('reveal')
      observer.observe(s)
    })

    return () => observer.disconnect()
  }, [])

  return null
}

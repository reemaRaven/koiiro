'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function CharacterPortrait({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <img
        className="zoomable"
        src={src}
        alt={alt}
        tabIndex={0}
        role="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      />
      {open &&
        createPortal(
          <div
            className="lightbox open"
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} — enlarged`}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false)
            }}
          >
            <button className="lightbox-close" aria-label="Close" onClick={() => setOpen(false)}>
              &times;
            </button>
            <figure>
              <img src={src} alt={alt} />
              <figcaption>{alt}</figcaption>
            </figure>
          </div>,
          document.body
        )}
    </>
  )
}

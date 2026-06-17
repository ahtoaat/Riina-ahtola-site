'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setVisible(true)
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.10
      ringY += (mouseY - ringY) * 0.10
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onEnter = () => setVisible(true)
    const onLeave = () => setVisible(false)
    const onDown  = () => setClicked(true)
    const onUp    = () => setClicked(false)

    const attachHover = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true))
        el.addEventListener('mouseleave', () => setHovered(false))
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    attachHover()

    // Re-attach on DOM changes (e.g. hydration)
    const mo = new MutationObserver(attachHover)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      {/* Small dot — snaps instantly */}
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{
          width:           hovered ? 12 : clicked ? 6 : 8,
          height:          hovered ? 12 : clicked ? 6 : 8,
          marginTop:       hovered ? -2 : clicked ? 1 : 0,
          marginLeft:      hovered ? -2 : clicked ? 1 : 0,
          borderRadius:    '50%',
          background:      '#8B7355',
          opacity:         visible ? 1 : 0,
          transition:      'width 0.25s, height 0.25s, opacity 0.3s, margin 0.25s',
        }}
      />
      {/* Lagging ring */}
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
        style={{
          width:        hovered ? 56 : clicked ? 32 : 40,
          height:       hovered ? 56 : clicked ? 32 : 40,
          marginTop:    hovered ? -8 : clicked ? 4 : 0,
          marginLeft:   hovered ? -8 : clicked ? 4 : 0,
          borderRadius: '50%',
          border:       `1px solid rgba(139,115,85,${hovered ? 0.8 : 0.45})`,
          opacity:      visible ? 1 : 0,
          transition:   'width 0.4s cubic-bezier(0.25,0.46,0.45,0.94), height 0.4s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s, border-color 0.3s, margin 0.4s',
        }}
      />
    </>
  )
}

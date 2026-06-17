'use client'

import { useEffect, useRef, ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale'

interface RevealProps {
  children:   ReactNode
  className?: string
  delay?:     number
  direction?: Direction
  threshold?: number
}

const initialTransform: Record<Direction, string> = {
  up:    'translateY(48px)',
  left:  'translateX(-48px)',
  right: 'translateX(48px)',
  scale: 'scale(0.94)',
}

export default function Reveal({
  children,
  className = '',
  delay     = 0,
  direction = 'up',
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity    = '0'
    el.style.transform  = initialTransform[direction]
    el.style.transition = `opacity 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1'
          el.style.transform = 'none'
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

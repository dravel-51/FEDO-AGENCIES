'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'


interface SectionTransitionProps {
  children: ReactNode
  className?: string
  animationType?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  duration?: number
  delay?: number
  threshold?: number
}

export default function SectionTransition({
  children,
  className = '',
  animationType = 'slideUp',
  duration = 500,
  delay = 0,
  threshold = 0.1
}: SectionTransitionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin: '0px 0px -50px 0px'
  })

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Animation classes based on type
  const getAnimationClasses = () => {
    if (prefersReducedMotion) {
      return 'opacity-100 transform-none'
    }

    const baseClasses = `transition-all ease-out`
    const durationClass = `duration-${duration}`
    const delayClass = delay > 0 ? `delay-${delay}` : ''

    if (isIntersecting) {
      return `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`
    }

    switch (animationType) {
      case 'fade':
        return `${baseClasses} ${durationClass} ${delayClass} opacity-0`
      case 'slideUp':
        return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`
      case 'slideDown':
        return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-y-8`
      case 'slideLeft':
        return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-x-8`
      case 'slideRight':
        return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-x-8`
      case 'scale':
        return `${baseClasses} ${durationClass} ${delayClass} opacity-0 scale-95`
      case 'rotate':
        return `${baseClasses} ${durationClass} ${delayClass} opacity-0 rotate-3 scale-95`
      default:
        return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`
    }
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        willChange: prefersReducedMotion ? 'auto' : 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  )
}
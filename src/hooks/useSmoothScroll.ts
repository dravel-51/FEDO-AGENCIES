'use client'

import { useCallback, useEffect, useState, useMemo } from 'react'

interface UseSmoothScrollOptions {
  duration?: number
  easing?: 'easeInOut' | 'easeIn' | 'easeOut' | 'linear'
  offset?: number
}

interface ScrollToElementOptions {
  duration?: number
  easing?: 'easeInOut' | 'easeIn' | 'easeOut' | 'linear'
  offset?: number
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { duration = 500, easing = 'easeInOut', offset = 0 } = options
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

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

  // Easing functions - memoized to prevent re-creation
  const easingFunctions = useMemo(() => ({
    linear: (t: number) => t,
    easeIn: (t: number) => t * t,
    easeOut: (t: number) => t * (2 - t),
    easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  }), [])

  const scrollToElement = useCallback((
    elementId: string,
    customOptions?: Partial<UseSmoothScrollOptions>
  ) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const targetPosition = element.offsetTop - (customOptions?.offset ?? offset)
    
    // Use native smooth scroll if reduced motion is preferred
    if (prefersReducedMotion) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const animationDuration = customOptions?.duration ?? duration
    const easingFunction = easingFunctions[customOptions?.easing ?? easing]
    
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / animationDuration, 1)
      
      const easedProgress = easingFunction(progress)
      const currentPosition = startPosition + (distance * easedProgress)
      
      window.scrollTo(0, currentPosition)
      
      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [duration, easing, offset, prefersReducedMotion, easingFunctions])

  const scrollToTop = useCallback((customOptions?: Partial<UseSmoothScrollOptions>) => {
    if (prefersReducedMotion) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const options = { ...{ duration, easing }, ...customOptions }
    scrollToElement('top-anchor', { ...options, offset: 0 })
  }, [duration, easing, prefersReducedMotion, scrollToElement, easingFunctions])

  return { scrollToElement, scrollToTop }
}
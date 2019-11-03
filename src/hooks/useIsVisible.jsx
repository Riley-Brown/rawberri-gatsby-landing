import { useEffect, useState } from "react"

export const useIsVisible = ({ ref, rootMargin }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setVisible(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  // debounce function execution
  function debounce(func, delay) {
    let timeout = null
    return function() {
      window.clearTimeout(timeout)
      timeout = window.setTimeout(function() {
        func()
      }, delay)
    }
  }

  return visible
}

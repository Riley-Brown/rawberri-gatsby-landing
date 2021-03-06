import { useEffect, useState } from "react"

export const useIsVisible = ({
  ref,
  rootMargin,
  unobserveOnTrue,
  threshold,
}) => {
  const [visible, setVisible] = useState(false)
  const [observer, setObserver] = useState()

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setVisible(entry.isIntersecting)
      },
      {
        threshold: threshold,
      }
    )

    setObserver(obs)
    if (ref.current) {
      obs.observe(ref.current)
    }

    return () => {
      obs.unobserve(ref.current)
    }
  }, [])

  // unobserve after true if unobserve prop
  useEffect(() => {
    if (unobserveOnTrue && visible && observer) {
      observer.unobserve(ref.current)
    }
  }, [visible])

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

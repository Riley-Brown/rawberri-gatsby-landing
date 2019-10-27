import { useEffect, useState } from "react"

export const useIsVisible = ({ element }) => {
  const [visible, setVisible] = useState(null)
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : null
  )

  useEffect(() => {
    if (element.current) {
      setWindowHeight(window.innerHeight)
      isVisible() // initial visible check
      window.addEventListener("scroll", debounce(isVisible, 200))
    }

    return () => window.removeEventListener("scroll", isVisible)
  }, [element])

  // check element rect top
  const isVisible = () => {
    if (element.current) {
      const top = element.current.getBoundingClientRect().top
      const bottom = element.current.getBoundingClientRect().bottom

      if (bottom >= 50 && top <= windowHeight) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  }

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

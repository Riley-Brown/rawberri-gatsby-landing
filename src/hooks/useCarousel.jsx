import { useState, useEffect } from "react"
import { useIsVisible } from "./useIsVisible"

export function useCarousel({
  data,
  timeout,
  element,
  defaultVisible,
  arrowKeysCycle,
}) {
  const [index, setIndex] = useState(0)
  const visible = useIsVisible({ ref: element, defaultVisible })
  const [int, setInt] = useState(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    let interval

    // start interval if visible, else clear interval
    if (visible) {
      interval = setInterval(increment, timeout)
      setInt(interval)
      // cycle carousel with arrow keys
      arrowKeysCycle && window.addEventListener("keydown", arrowKeys)
    } else {
      clearInterval(interval)
      setInt(null)
      arrowKeysCycle && window.removeEventListener("keydown", arrowKeys)
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener("keydown", arrowKeys)
    }
  }, [index, visible, paused])

  // increment index, reset to 0 when index is on last item
  const increment = () => {
    if (!paused && visible)
      if (index >= data.length - 1) {
        setIndex(0)
      } else {
        setIndex(index => index + 1)
      }
  }

  const next = () => {
    if (index >= data.length - 1) {
      setIndex(0)
    } else {
      setIndex(index => index + 1)
    }
  }

  const previous = () => {
    if (index === 0) {
      setIndex(data.length - 1)
    } else {
      setIndex(index => index - 1)
    }
  }

  const indexClick = i => setIndex(i)

  const pause = () => {
    setPaused(true)
    clearInterval(int)
    setInt(null)
  }

  const resume = () => {
    setPaused(false)
    let interval = setInterval(increment, timeout)
    setInt(interval)
  }

  // cycle carousel with arrow keys
  const arrowKeys = e => {
    if (e.key === "ArrowRight" || e.keyCode === 39) {
      next()
    } else if (e.key === "ArrowLeft" || e.keyCode === 37) {
      previous()
    }
  }

  return [index, next, previous, indexClick, pause, resume]
}

import { useEffect, useRef, useState } from 'react'

export default function (value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const timerRef = useRef<any>(null)
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [value, delay])

  return debouncedValue
}

"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface CounterAnimationProps {
  end: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
}

export const CounterAnimation = ({
  end,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CounterAnimationProps) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    let startTimestamp: number
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)

      setCount(progress * end)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      }
    }

    controls.start({ opacity: 1, y: 0 })
    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration, controls])

  return (
    <motion.span initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.5 }}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </motion.span>
  )
}

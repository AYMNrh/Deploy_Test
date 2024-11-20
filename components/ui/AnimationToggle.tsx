"use client"

import { useAnimationContext } from "@/lib/animation-context"
import { motion } from "framer-motion"
import { FaPlay, FaPause } from "react-icons/fa"

export function AnimationToggle() {
  const { isAnimationEnabled, toggleAnimation } = useAnimationContext()

  return (
    <div className="fixed bottom-4 right-20 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleAnimation}
        className="p-2 rounded-full bg-primary text-primary-foreground shadow-lg"
        title={isAnimationEnabled ? "Disable animation" : "Enable animation"}
      >
        {isAnimationEnabled ? (
          <FaPause className="w-5 h-5" />
        ) : (
          <FaPlay className="w-5 h-5" />
        )}
        <span className="sr-only">
          {isAnimationEnabled ? "Disable animation" : "Enable animation"}
        </span>
      </motion.button>
    </div>
  )
} 
"use client"

import { useThemeContext } from "@/lib/theme-context"
import { motion } from "framer-motion"
import { FaPalette } from "react-icons/fa"
import { useState } from "react"

export function ThemeToggle() {
  const { colorTheme, setColorTheme } = useThemeContext()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { id: 'mint', name: 'Mint', colors: ['#00ADB5', '#222831'] },
    { id: 'default', name: 'Default', colors: ['#64ffda', '#0a192f'] },
    { id: 'purple', name: 'Purple', colors: ['#A64D79', '#1A1A1D'] },
    { id: 'violet', name: 'Violet', colors: ['#AD49E1', '#2E073F'] },
    { id: 'rose', name: 'Rose', colors: ['#AE445A', '#432E54'] }
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-primary text-primary-foreground shadow-lg"
          title="Select theme"
        >
          <FaPalette className="w-5 h-5" />
          <span className="sr-only">Select theme</span>
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full right-0 mb-2 bg-card rounded-lg shadow-lg p-2 min-w-[150px]"
          >
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setColorTheme(theme.id as any);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
                  ${colorTheme === theme.id ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary/50'}`}
              >
                <div className="flex space-x-1">
                  {theme.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span>{theme.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
} 
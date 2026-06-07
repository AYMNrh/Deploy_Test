"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaLightbulb } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  const slideInVariants = {
    hidden: { 
      x: -1000,
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        duration: 0.8
      }
    }
  };

  return (
    <div id="about" className="relative w-full flex justify-center items-center py-20 scroll-mt-20" ref={ref}>
      <motion.div
        className="w-full max-w-4xl px-4"
        variants={slideInVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 About section content goes here. Describe your background, skills, and what you're passionate about.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default AboutMe

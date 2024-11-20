"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaLightbulb, FaCode, FaHiking, FaPuzzlePiece } from 'react-icons/fa';
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
              👋 Hello there! I&apos;m Aymen Rhihil, a Data Scientist and Engineer passionate about transforming complex data into actionable insights. My journey into the world of data began with a love for math.
            </p>
            <p>
              <FaCode className="inline-block mr-2" />
              After completing my master&apos;s degree, during which I tackled challenges in data science, cloud computing, and deep learning, I dove headfirst into the professional world. My apprenticeship at BNP Paribas allowed me to dive into machine learning models for fraud detection. This experience showed me how programming, data, and AI are deeply interconnected, sparking a fascination with innovation in AI technologies.
            </p>
            <p>
              When I&apos;m not immersed in code or refining machine learning models, you might find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><FaHiking className="inline-block mr-2" /> Discovering new hiking trails around Île-de-France</li>
              <li><FaPuzzlePiece className="inline-block mr-2" /> Working on brain-teasing puzzles or logic games</li>
            </ul>
            <p>
              At present, I&apos;m diving deeper into machine learning while exploring creative side projects like developing Python scripts for video synchronization and dabbling in web development. I believe in lifelong learning and constantly seek ways to blend my technical expertise with creativity. Whether it&apos;s optimizing fraud detection or crafting fun TikTok videos, I&apos;m all about making life a bit more innovative and engaging. Ready to see what&apos;s next? Let&apos;s create something amazing together!
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default AboutMe

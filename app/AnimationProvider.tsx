"use client"

import React from 'react';
import { AnimationContext } from '@/lib/animation-context';

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isAnimationEnabled, setIsAnimationEnabled] = React.useState(false);

  const toggleAnimation = () => {
    setIsAnimationEnabled(prev => !prev);
    document.documentElement.style.setProperty(
      '--animation-opacity', 
      isAnimationEnabled ? '0' : '0.2'
    );
  };

  return (
    <AnimationContext.Provider value={{ isAnimationEnabled, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
} 
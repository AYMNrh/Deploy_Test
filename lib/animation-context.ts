import { createContext, useContext } from 'react';

type AnimationContextType = {
  isAnimationEnabled: boolean;
  toggleAnimation: () => void;
};

export const AnimationContext = createContext<AnimationContextType>({
  isAnimationEnabled: false,
  toggleAnimation: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext); 
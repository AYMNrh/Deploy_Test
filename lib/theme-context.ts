import { createContext, useContext } from 'react';

type ColorTheme = 'default' | 'purple' | 'violet' | 'rose' | 'mint';

type ThemeContextType = {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  colorTheme: 'default',
  setColorTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext); 
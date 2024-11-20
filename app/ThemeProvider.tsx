"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ThemeContext } from "@/lib/theme-context"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [colorTheme, setColorTheme] = React.useState<'default' | 'purple' | 'violet' | 'rose' | 'mint'>('default');

  const handleThemeChange = (theme: 'default' | 'purple' | 'violet' | 'rose' | 'mint') => {
    setColorTheme(theme);
    document.documentElement.style.setProperty('--theme-transition', 'all 0.3s ease');
    
    switch(theme) {
      case 'purple':
        setPurpleTheme();
        break;
      case 'violet':
        setVioletTheme();
        break;
      case 'rose':
        setRoseTheme();
        break;
      case 'mint':
        setMintTheme();
        break;
      default:
        setDefaultTheme();
    }
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme: handleThemeChange }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ThemeContext.Provider>
  );
}

function setPurpleTheme() {
  const root = document.documentElement;
  root.style.setProperty('--primary', '#A64D79');
  root.style.setProperty('--secondary', '#6A1E55');
  root.style.setProperty('--background', '#1A1A1D');
  root.style.setProperty('--card', '#3B1C32');
  root.style.setProperty('--muted', '#3B1C32');
  root.style.setProperty('--muted-foreground', '#6A1E55');
  root.style.setProperty('--accent', '#A64D79');
}

function setVioletTheme() {
  const root = document.documentElement;
  root.style.setProperty('--primary', '#AD49E1');
  root.style.setProperty('--secondary', '#7A1CAC');
  root.style.setProperty('--background', '#2E073F');
  root.style.setProperty('--card', '#7A1CAC');
  root.style.setProperty('--muted', '#7A1CAC');
  root.style.setProperty('--muted-foreground', '#EBD3F8');
  root.style.setProperty('--accent', '#EBD3F8');
}

function setRoseTheme() {
  const root = document.documentElement;
  root.style.setProperty('--primary', '#AE445A');
  root.style.setProperty('--secondary', '#4B4376');
  root.style.setProperty('--background', '#432E54');
  root.style.setProperty('--card', '#4B4376');
  root.style.setProperty('--muted', '#4B4376');
  root.style.setProperty('--muted-foreground', '#E8BCB9');
  root.style.setProperty('--accent', '#E8BCB9');
}

function setDefaultTheme() {
  const root = document.documentElement;
  root.style.setProperty('--primary', '#64ffda');
  root.style.setProperty('--secondary', '#233554');
  root.style.setProperty('--background', '#0a192f');
  root.style.setProperty('--card', '#112240');
  root.style.setProperty('--muted', '#233554');
  root.style.setProperty('--muted-foreground', '#8892b0');
  root.style.setProperty('--accent', '#ffd700');
}

function setMintTheme() {
  const root = document.documentElement;
  root.style.setProperty('--primary', '#00ADB5');
  root.style.setProperty('--secondary', '#393E46');
  root.style.setProperty('--background', '#222831');
  root.style.setProperty('--card', '#393E46');
  root.style.setProperty('--muted', '#393E46');
  root.style.setProperty('--muted-foreground', '#EEEEEE');
  root.style.setProperty('--accent', '#EEEEEE');
}

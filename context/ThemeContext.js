"use client"

import { createContext, useContext } from "react"

const colors = {
  primary: "#4CAF50",
  secondary: "#8BC34A",
  background: "#F9F9F9",
  card: "#FFFFFF",
  text: "#333333",
  gray: "#9E9E9E",
  lightGray: "#E0E0E0",
  white: "#FFFFFF",
  black: "#000000",
  error: "#D32F2F",
  success: "#388E3C",
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors,
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 16,
      xl: 24,
    },
  }

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

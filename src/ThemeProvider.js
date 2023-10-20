import React, { createContext } from 'react';
import tokens from './tokens';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: tokens }}>
      {children}
    </ThemeContext.Provider>
  );
};
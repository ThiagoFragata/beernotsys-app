import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

'use client';

import { store } from '@/redux/store';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './theme-provider';
import { Section } from './section';
const AppProviders = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}): React.JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Section> {children}</Section>
      </ThemeProvider>
    </Provider>
  );
};

export { AppProviders };

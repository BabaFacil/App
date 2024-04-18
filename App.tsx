import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeProvider } from './src/theme/Theme';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='transparent' />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

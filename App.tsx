import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';
import light from './src/theme/light';
import dark from './src/theme/dark';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'


export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <NavigationContainer>
        <StatusBar backgroundColor='transparent'/>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

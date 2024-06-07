import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { preventAutoHideAsync } from 'expo-splash-screen';

import { ThemeProvider } from './src/theme/Theme';
import { Splash } from '@/pages';
import Routes from './src/routes';

preventAutoHideAsync()

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewOnBoarding, setViewOnBoarding] = useState(false)

  const checkOnboarding = async () => {
    try {
      const response = await AsyncStorage.getItem("@viewedonboarding")
      
      if (response !== null) {
        setViewOnBoarding(true)
      }else{
        setViewOnBoarding(false)
      }
    } catch (e) {
      console.log(e);
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
      checkOnboarding();
  }, [])
  

  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='transparent' />
        {splashComplete ? <Routes viewedOnBoard={viewOnBoarding} />  : <Splash loading={loading} onComplete={setSplashComplete}/> }
      </NavigationContainer>
    </ThemeProvider>
  );
}

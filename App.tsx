import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View } from 'react-native';
import Routes from './src/routes';
import { ThemeProvider } from './src/theme/Theme';

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./src/assets/imgs/logo-text2.png')}
        style={{ width: '90%' }}
        resizeMode='contain'
      />
    </View>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [viewOnBoarding, setViewOnBoarding] = useState(false)

  const checkOnboarding = async () => {
    try {
      const response = await AsyncStorage.getItem("@viewedonboarding")

      if (response !== null) {
        setViewOnBoarding(true)
      }
    } catch (e) {
      console.log(e);

    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    checkOnboarding()
  }, [])

  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='transparent' />
        {loading ? <Loading /> : <Routes viewedOnBoard={viewOnBoarding} />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

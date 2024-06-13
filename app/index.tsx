import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { preventAutoHideAsync } from 'expo-splash-screen';

import Splash from './Splash';
import SignIn from './SignIn'
import Welcome from './Welcome';

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
      } else {
        setViewOnBoarding(false)
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    checkOnboarding();
  }, [])


  return (
    <>
      <StatusBar backgroundColor='transparent' />
      {splashComplete ? viewOnBoarding ? <SignIn /> : <Welcome /> : <Splash loading={loading} onComplete={setSplashComplete} />}
    </>
  );
}

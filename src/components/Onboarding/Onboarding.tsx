import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Check, ChevronRight } from 'lucide-react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import Paginator from '../ui/Paginator';
import OnBoardingItem from './OnboardingItem';
import slides from './slides';
import { Container } from './styles';

export default function Onboarding() {
    const theme = useTheme()

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current

    const slidesRef = useRef(null)

    useEffect(()=>{
        slidesRef.current?.scrollToIndex({
            index: currentIndex,
            animated: true
        })
    },[currentIndex])

    const scrollTo = async () => {
        if(currentIndex === slides.length -1){
            try {
                await AsyncStorage.setItem("@viewedonboarding", "true")
                router.replace('/SignIn')
                return
            } catch (e) {
                throw new Error(e)
                
            }
        }

        
        setCurrentIndex(currentIndex + 1)
    }
    const scrollBackwards = () => {
        if(currentIndex === 0){
            return
        }
        setCurrentIndex(currentIndex - 1)
    }
    return (
        <Container>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnBoardingItem item={item} />}
                    initialScrollIndex={0}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    scrollEnabled={false}
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    ref={slidesRef}
                />
            </View>
            <View style={{ paddingHorizontal: 20, width: "100%", justifyContent: "space-between", flexDirection: "row" }}>
                <GestureHandlerRootView style={{flex:0}}>
                    <TouchableOpacity style={{padding: 5}} onPress={scrollBackwards}>
                        <ChevronRight style={{
                            transform: [
                                { rotate: '-180 deg' }
                            ]
                        }} opacity={currentIndex === 0 ? 0.5 : 1} color={theme.COLORS.PRIMARY} size={32} />
                    </TouchableOpacity>
                </GestureHandlerRootView>
                <Paginator data={slides} scrollX={scrollX} />
                <GestureHandlerRootView style={{flex:0}}>
                    <TouchableOpacity style={{padding: 5}} onPress={scrollTo}>
                        {currentIndex < slides.length - 1 ? <ChevronRight color={theme.COLORS.PRIMARY} size={32} /> : <Check color={theme.COLORS.PRIMARY} size={32} />}
                    </TouchableOpacity>
                </GestureHandlerRootView>
            </View>
        </Container>
    )
}
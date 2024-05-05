import React, { useRef, useState } from 'react'
import { Animated, FlatList, View } from 'react-native'
import { ThemeContext } from 'styled-components'

import { Check, ChevronRight } from 'lucide-react-native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import Paginator from '../ui/Paginator'
import OnBoardingItem from './OnboardingItem'
import slides from './slides'
import { Container } from './styles'

export default function Onboarding() {

    let COLORS = ThemeContext._currentValue.COLORS

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current

    const slidesRef = useRef(null)
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;


    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
        } else {
            //redirect here
        }
    }
    const scrollBackwards = () => {
        if (currentIndex !== 0) {
            slidesRef.current.scrollToIndex({ index: currentIndex - 1 })
        }
    }
    return (
        <Container>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnBoardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    ref={slidesRef}
                />
            </View>
            <View style={{ paddingHorizontal: 20, width: "100%", justifyContent: "space-between", flexDirection: "row" }}>
                <GestureHandlerRootView>
                    <TouchableOpacity onPress={scrollBackwards}>
                        <ChevronRight style={{
                            transform: [
                                { rotate: '-180 deg' }
                            ]
                        }} opacity={currentIndex === 0 ? 0.5 : 1} color={COLORS.PRIMARY} size={32} />
                    </TouchableOpacity>
                </GestureHandlerRootView>
                <Paginator data={slides} scrollX={scrollX} />
                <GestureHandlerRootView>
                    <TouchableOpacity onPress={scrollTo}>
                        {currentIndex < slides.length - 1 ? <ChevronRight color={COLORS.PRIMARY} size={32} /> : <Check color={COLORS.PRIMARY} size={32} />}
                    </TouchableOpacity>
                </GestureHandlerRootView>
            </View>
        </Container>
    )
}
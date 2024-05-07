import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

interface defaultProps {
    data: any,
    scrollX: any
}

export default function Paginator({ data, scrollX }: defaultProps) {
    const {width} = useWindowDimensions()
    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {data.map((_, i) => {
                const inputRange = [(i-1) * width, i * width, (i + 1) * width]
                
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10,20,10],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1 ,0.8],
                    extrapolate: 'clamp'
                })
                return <Animated.View style={[styles.dot, {width: dotWidth, opacity }]} key={i.toString()} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "#E96181",
        marginHorizontal: 8,
    }
})
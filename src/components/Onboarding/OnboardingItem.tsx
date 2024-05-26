import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import * as S from './styles'

export default function OnboardingItem({ item }) {
    const { width } = useWindowDimensions()

    return (
        <S.Container style={[{ width, paddingHorizontal: 10 }]}>
            <S.Image source={item.image} style={[{ width, resizeMode: 'contain' }]} />

            <View style={{ flex: 0.3 }}>
                <S.Title>{item.title}</S.Title>
                <S.Description>{item.description}</S.Description>
            </View>
        </S.Container>

    )
}
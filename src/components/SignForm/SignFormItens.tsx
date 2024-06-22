import React from 'react'
import Card from '@/components/Card';
import { useWindowDimensions, View } from 'react-native'
import * as S from '@/pages/SignUp/styles'
import { useTheme } from 'styled-components/native';


export default function OnboardingItem({ item }) {
    const themeUse = useTheme();
    const { width } = useWindowDimensions()

    return (
        <S.Container style={[{ width, paddingHorizontal: 18 }]}>
            <S.PrincipalText >{item.title}</S.PrincipalText>
            {item.labels.map((label, index) => (
                
                <Card key={index} title={label.input}>
                    <S.ButtonNav>
                        <S.Nav>
                            <S.TextInput
                                placeholderTextColor={themeUse.COLORS.TEXT_SMALL}
                                secureTextEntry={item.label != 'Senha' || 'Confirmar Senha' ? false : true}
                            />
                        </S.Nav>
                    </S.ButtonNav>
                </Card>

            ))}
        </S.Container>

    )
}
import Card from '@/components/Card';
import * as S from '@/pages/SignUp/styles';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';


export default function OnboardingItem({ item }) {
    const themeUse = useTheme();
    const { width } = useWindowDimensions()

    return (
        <S.Container style={[{ width}]}>
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
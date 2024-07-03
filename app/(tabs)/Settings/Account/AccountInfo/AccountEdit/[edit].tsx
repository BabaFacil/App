import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { router, useLocalSearchParams } from 'expo-router';
import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, PencilLine } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { ThemeContext, ThemeType } from '@/theme/Theme';
import * as S from './styles';
import Card from '@/components/Card';
import Header from '@/components/ui/Header/Header';

// FIXME:  Warning: React has detected a change in the order of Hooks called.
//         This will lead to bugs and errors if not fixed.
export default function AccountEdit() {
    const navigation = useNavigation();
    const themeUse = useTheme()
    const { title } = useLocalSearchParams<{ title: string }>()

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const { theme, toggleTheme } = useContext(ThemeContext)

    const isDarkMode = theme === ThemeType.dark

    return (
        <>
            <S.BackgoundContainer>
            <Header text={"Informações da conta"}/>

                <S.Container contentContainerStyle={{ paddingBottom: 200 }}>
                    <S.PrincipalText >{title}</S.PrincipalText>
                    <Card title={title != 'Senha'? `Redefinir ${title}` : `Gerar nova ${title}` }>
                        <S.ButtonNav>
                            <S.Nav>
                                <S.TextInput
                                    placeholder={title !='Senha'? 'Kakashi' : '' }
                                    placeholderTextColor={themeUse.COLORS.TEXT_SMALL}
                                    secureTextEntry={title !='Senha'? false : true}  
                                />
                                <Text>
                                    <PencilLine strokeWidth={1} style={{ marginLeft: 10 }} color={themeUse.COLORS.ICON} size={20} />
                                </Text>
                            </S.Nav>
                        </S.ButtonNav>
                    </Card>
                    {title === 'Nome' && (
                        <Card title="Redifinir Sobrenome">
                            <S.ButtonNav>
                                <S.Nav>
                                    <S.TextInput 
                                        placeholder='Hatake'
                                        placeholderTextColor={themeUse.COLORS.TEXT_SMALL}
                                    />
                                    <Text>
                                        <PencilLine strokeWidth={1} style={{ marginLeft: 10 }} color={themeUse.COLORS.ICON} size={20} />
                                    </Text>
                                </S.Nav>
                            </S.ButtonNav>
                        </Card>
                    )}



                </S.Container>
            </S.BackgoundContainer>
        </>
    )
}


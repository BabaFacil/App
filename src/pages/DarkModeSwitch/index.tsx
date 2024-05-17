import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, Switch } from 'react-native-gesture-handler';
import { ThemeContext as ThemeContextStyled } from 'styled-components';
import Card from '@/components/Card';
import { ThemeContext, ThemeType } from '@/theme/Theme';
import * as S from './styles';

// FIXME:  Warning: React has detected a change in the order of Hooks called.
//         This will lead to bugs and errors if not fixed.
export default function DarkModeSwitch() {
    const navigation = useNavigation();
    let ICON_COLOR = ThemeContextStyled._currentValue.COLORS.ICON

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const { theme,toggleTheme } = useContext(ThemeContext)

    const isDarkMode = theme === ThemeType.dark

    return (
        <>
            <S.BackgoundContainer>
                <View style={{ flexDirection: 'row', marginTop: 40, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Settings') }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color={ICON_COLOR} size={28} /></TouchableOpacity>

                    {/* TODO: Fazer o texto aparecer quando o usuário rolar a página */}
                    <S.HeaderText >Modo escuro</S.HeaderText>
                </View>

                <S.Container contentContainerStyle={{ paddingBottom: 200 }}>
                    <Card>
                        <S.ButtonNav>
                            <S.Nav>
                                <S.Text>Trocar para o tema {theme === "dark" ? "claro" : "escuro"}</S.Text>
                            </S.Nav>
                            <GestureHandlerRootView>
                                <Switch value={isDarkMode} onValueChange={toggleTheme} />
                            </GestureHandlerRootView>
                        </S.ButtonNav>

                    </Card>

                </S.Container>
            </S.BackgoundContainer>
        </>
    )
}


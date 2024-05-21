import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, PencilLine } from 'lucide-react-native';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { GestureHandlerRootView, Switch } from 'react-native-gesture-handler';
import { ThemeContext as ThemeContextStyled } from 'styled-components';
import Card from '@/components/Card';
import { ThemeContext, ThemeType } from '@/theme/Theme';
import * as S from './styles';
import { useTheme } from 'styled-components/native';
import { useEffect } from 'react';

// FIXME:  Warning: React has detected a change in the order of Hooks called.
//         This will lead to bugs and errors if not fixed.
export default function AccountEdit() {
    const navigation = useNavigation();
    const themeUse = useTheme()
    const route = useRoute();
    const { title } = route.params;

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
                <View style={{ flexDirection: 'row', marginTop: 40, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('AccountInfo' as never) }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color={themeUse.COLORS.ICON} size={28} /></TouchableOpacity>

                    {/* TODO: Fazer o texto aparecer quando o usuário rolar a página */}
                    <S.HeaderText >Informações da conta</S.HeaderText>
                </View>

                <S.Container contentContainerStyle={{ paddingBottom: 200 }}>
                    <S.PrincipalText >{title}</S.PrincipalText>
                    <Card title={title != 'Senha'? `Redefinir ${title}` : `Gerar nova ${title}` }>
                        <S.ButtonNav>
                            <S.Nav>
                                <S.TextInput 
                                    placeholder={title !='Senha'? 'Kakashi' : '' }
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
                                    <S.TextInput placeholder='Hakate' />
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


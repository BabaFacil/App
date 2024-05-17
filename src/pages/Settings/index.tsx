import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, BookA, ChevronRight, Flag, Info, LogOut, MessageSquareText, Moon, PieChart, Scale, Shield } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'styled-components';
import Card from '@/components/Card';
import MenuBar from '@/components/MenuBar';
import * as S from './styles';


export default function Settings() {
    const navigation = useNavigation();
    
    let ICON_COLOR = ThemeContext._currentValue.COLORS.ICON
    let STROKE_ICON = ThemeContext._currentValue.COLORS.ICON_STROKE

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }


    return (
        <>
            <S.BackgoundContainer>
                <View style={{ flexDirection: 'row', marginTop: 40, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color={ICON_COLOR} size={28} /></TouchableOpacity>

                    {/* TODO: Fazer o texto aparecer quando o usuário rolar a página */}
                    <S.HeaderText >Configurações e Privacidade</S.HeaderText>
                </View>

                <S.Container contentContainerStyle={{ paddingBottom: 200 }}>
                    <S.PrincipalText >Configurações e Privacidade</S.PrincipalText>
                    <Card title="Conta">

                        <S.ButtonNav onPress={() => { navigation.navigate('Home') }}>
                            <S.Nav>
                                <Text>
                                    <Ionicons name="person-sharp" color={ICON_COLOR} size={16} />
                                </Text>
                                <S.Text>Perfil</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <MaterialIcons name="lock" color={ICON_COLOR} size={16} />
                                </Text>
                                <S.Text>Privacidade</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Shield fill={ICON_COLOR} color={ICON_COLOR} size={16} />
                                </Text>
                                <S.Text>Segurança</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <PieChart color={ICON_COLOR} size={16} />
                                </Text>
                                <S.Text>Estatiscas</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>
                    </Card>


                    <Card title="Conteudo e Interface">
                        <S.ButtonNav  onPress={() => { navigation.navigate('DarkModeSwitch') }}>
                            <S.Nav>
                                <Text>
                                    <Moon strokeWidth={1} fill={ICON_COLOR} color={ICON_COLOR} size={16} />
                                </Text>
                                <S.Text>Modo escuro</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <BookA strokeWidth={1.5} fill={ICON_COLOR} color={STROKE_ICON} size={16} />
                                </Text>
                                <S.Text>Idioma</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>
                    </Card>

                    <Card title="Suporte & Sobre">
                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <MessageSquareText strokeWidth={1} fill={ICON_COLOR} color={STROKE_ICON} size={16} />
                                </Text>
                                <S.Text>Suporte</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Scale strokeWidth={1.5} fill={ICON_COLOR} color={ICON_COLOR} size={16} />
                                </Text>
                                <S.Text>Termos e Condições</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Flag strokeWidth={1} fill={ICON_COLOR} color={ICON_COLOR} size={16} />
                                </Text>
                                <S.Text>Reporte um problema</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Info strokeWidth={2} fill={ICON_COLOR} color={STROKE_ICON} size={16} />
                                </Text>
                                <S.Text>Sobre nós</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>
                    </Card>

                    <Card title="Login">

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Ionicons name="person-sharp" color={ICON_COLOR} size={16} />
                                </Text>
                                <S.Text>Log-out</S.Text>
                            </S.Nav>
                            <Text><LogOut strokeWidth={2} color={ICON_COLOR} size={16} /></Text>
                        </S.ButtonNav>
                    </Card>

                </S.Container>
            </S.BackgoundContainer>
            <MenuBar TelaAtiva={'config'} />
        </>
    )
}


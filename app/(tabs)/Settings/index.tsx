import React from 'react';
import { Text } from 'react-native';

import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { BookA, ChevronRight, Flag, Info, LogOut, MessageSquareText, Moon, PieChart, Scale, Shield } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import Card from '@/components/Card';
import Header from '@/components/ui/Header/Header';
import * as S from './styles';


export default function Settings() {
    const theme = useTheme()

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
                <Header previousPage='Home' text={"Configurações e Privacidade"} />

                <S.Container contentContainerStyle={{ paddingBottom: 200 }}>
                    <S.PrincipalText >Configurações e Privacidade</S.PrincipalText>
                    <Card title="Conta">

                        <S.ButtonNav onPress={() => { router.push('./Account')}}>
                            <S.Nav>
                                <Text>
                                    <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                                </Text>
                                <S.Text>Perfil</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <MaterialIcons name="lock" color={theme.COLORS.ICON} size={16} />
                                </Text>
                                <S.Text>Privacidade</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Shield fill={theme.COLORS.ICON} color={theme.COLORS.ICON} size={16} />
                                </Text>
                                <S.Text>Segurança</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <PieChart color={theme.COLORS.ICON} size={16} />
                                </Text>
                                <S.Text>Estatiscas</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>
                    </Card>


                    <Card title="Conteudo e Interface">
                        <S.ButtonNav  onPress={() => { router.push('./DarkModeSwitch') }}>
                            <S.Nav>
                                <Text>
                                    <Moon strokeWidth={1} fill={theme.COLORS.ICON} color={theme.COLORS.ICON} size={16} />
                                </Text>
                                <S.Text>Modo escuro</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <BookA strokeWidth={1.5} fill={theme.COLORS.ICON} color={theme.COLORS.ICON_STROKE} size={16} />
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
                                    <MessageSquareText strokeWidth={1} fill={theme.COLORS.ICON} color={theme.COLORS.ICON_STROKE} size={16} />
                                </Text>
                                <S.Text>Suporte</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Scale strokeWidth={1.5} fill={theme.COLORS.ICON} color={theme.COLORS.ICON} size={16} />
                                </Text>
                                <S.Text>Termos e Condições</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Flag strokeWidth={1} fill={theme.COLORS.ICON} color={theme.COLORS.ICON} size={16} />
                                </Text>
                                <S.Text>Reporte um problema</S.Text>
                            </S.Nav>
                            <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                        </S.ButtonNav>

                        <S.ButtonNav>
                            <S.Nav>
                                <Text>
                                    <Info strokeWidth={2} fill={theme.COLORS.ICON} color={theme.COLORS.ICON_STROKE} size={16} />
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
                                    <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                                </Text>
                                <S.Text>Log-out</S.Text>
                            </S.Nav>
                            <Text><LogOut strokeWidth={2} color={theme.COLORS.ICON} size={16} /></Text>
                        </S.ButtonNav>
                    </Card>

                </S.Container>
            </S.BackgoundContainer>
        </>
    )
}


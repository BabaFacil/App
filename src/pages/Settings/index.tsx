import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, BookA, ChevronRight, Flag, Info, LogOut, MessageSquareText, Moon, PieChart, Scale, Shield } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card';
import MenuBar from '../../components/MenuBar';
import * as S from './styles';


export default function Settings() {
    const navigation = useNavigation();

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

            <View style={{ flexDirection: 'row', marginTop: 40, alignItems: "center" }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color="black" size={28} /></TouchableOpacity>

                {/* TODO: Fazer o texto aparecer quando o usuário rolar a página */}
                <Text style={{ marginLeft: 20, fontFamily: 'OpenSans_700Bold', fontSize: 16 }}>Configurações e Privacidade</Text>
            </View>

            <S.Container contentContainerStyle={{ paddingBottom: 200 }}>
                <Text style={{ marginLeft: 20, fontFamily: 'OpenSans_700Bold', fontSize: 22 }}>Configurações e Privacidade</Text>
                <Card title="Conta">

                    <S.ButtonNav onPress={() => { navigation.navigate('Home') }}>
                        <S.Nav>
                            <Text>
                                <Ionicons name="person-sharp" color="#ACACAC" size={16} />
                            </Text>
                            <S.Text>Perfil</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <Text>
                                <MaterialIcons name="lock" color="#ACACAC" size={16} />
                            </Text>
                            <S.Text>Privacidade</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <Text>
                                <Shield fill="#ACACAC" color="#ACACAC" size={16} />
                            </Text>
                            <S.Text>Segurança</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <Text>
                                <PieChart color="#ACACAC" size={16} />
                            </Text>
                            <S.Text>Estatiscas</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>
                </Card>


                <Card title="Conteudo e Interface">
                    <S.ButtonNav>
                        <S.Nav>
                            <Text>
                                <Moon strokeWidth={1} fill="#ACACAC" color="#ACACAC" size={16} />
                            </Text>
                            <S.Text>Modo escuro</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <Text>
                                <BookA strokeWidth={1.5} fill={"#ACACAC"} color="white" size={16} />
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
                                <MessageSquareText strokeWidth={1} fill="#ACACAC" color="white" size={16} />
                            </Text>
                            <S.Text>Suporte</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <Text>
                                <Scale strokeWidth={1.5} fill={"#ACACAC"} color="#ACACAC" size={16} />
                            </Text>
                            <S.Text>Termos e Condições</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <Text>
                                <Flag strokeWidth={1} fill={"#ACACAC"} color="#ACACAC" size={16} />
                            </Text>
                            <S.Text>Reporte um problema</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <Text>
                                <Info strokeWidth={2} fill={"#ACACAC"} color="white" size={16} />
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
                                <Ionicons name="person-sharp" color="#ACACAC" size={16} />
                            </Text>
                            <S.Text>Log-out</S.Text>
                        </S.Nav>
                        <Text><LogOut strokeWidth={2} color="#ACACAC" size={16} /></Text>
                    </S.ButtonNav>
                </Card>

            </S.Container>
            <MenuBar TelaAtiva={'config'} />
        </>
    )
}


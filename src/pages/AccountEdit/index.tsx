import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import React from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import { ArrowLeft, ArrowRight,  BookA, ChevronRight, Flag, Info, LogOut, MessageSquareText, Moon, PieChart, Scale, Shield } from 'lucide-react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import Card from "../../components/Card"
import MenuBar from "../../components/MenuBar"

export default function AccountEdit() {

    const navigation = useNavigation();
    const theme = useTheme()

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_700Bold,
      });
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

      const imagePaths = {
        'baba1': require('../../assets/imgs/baba1.png'),
        'baba2': require('../../assets/imgs/baba2.png'),
    };


  return (
        <S.BackgoundContainer>
            <View style={{ flexDirection: 'row', marginTop: 40, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('AccontInfo' as never) }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color={theme.COLORS.ICON} size={28} /></TouchableOpacity>

                    {/* TODO: Fazer o texto aparecer quando o usuário rolar a página */}
                    <S.HeaderText >Perfil</S.HeaderText>
            </View>

            <S.Container>
                <S.PrincipalText >Informações da Conta</S.PrincipalText>

                <S.UserImageNickname>
                    <Image
                        source={require('../../assets/imgs/baba1.png')}
                        style={{ height: 150, width: 150, borderRadius: 90}}
                        resizeMode='cover'
                    />
                </S.UserImageNickname>

                <Card title = "Informações da conta">
                    <S.ButtonNav>
                        <S.Nav>
                            <Text>Nome de Usuário </Text>
                            <Text style={{color: "#00000030", marginRight: 10, fontSize: 12}}>Kakashi Hatake</Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            {/* <Text>
                                <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                            </Text> */}
                            <Text>E-mail</Text>
                            <Text style={{color: "#00000030", marginRight: 10, fontSize: 12}}>kakashi.htake@outlook.com</Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            {/* <Text>
                                <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                            </Text> */}
                            <Text>Telefone</Text>
                            <Text style={{color: "#00000030", marginRight: 10, fontSize: 12}}>+55 11 98180-5816</Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            {/* <Text>
                                <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                            </Text> */}
                            <Text>Data de nascimento</Text>
                            <Text style={{color: "#00000030", marginRight: 10, fontSize: 12}}>17/10/2002</Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNavView>
                        <S.Nav>
                            {/* <Text>
                                <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                            </Text> */}
                            <Text style={{color: "#00000030", marginRight: 10, fontSize: 12}}>CPF</Text>
                            <Text style={{color: "#00000030", marginRight: 10}}>515.485.875.64</Text>
                        </S.Nav>
                    </S.ButtonNavView>

                    <S.ButtonNav>
                        <S.Nav>
                            {/* <Text>
                                <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                            </Text> */}
                            <Text>Senha</Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>
                </Card>


            </S.Container>

            <MenuBar TelaAtiva={'config'} />
        </S.BackgoundContainer>
  )
}

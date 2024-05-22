import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import Card from "../../components/Card";
import MenuBar from "../../components/MenuBar";
import * as S from './styles';

export default function Account() {

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
                    <TouchableOpacity onPress={() => { navigation.navigate('Settings' as never) }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color={theme.COLORS.ICON} size={28} /></TouchableOpacity>

                    {/* TODO: Fazer o texto aparecer quando o usuário rolar a página */}
                    <S.HeaderText >Configurações e Privacidade</S.HeaderText>
            </View>

            <S.Container>
                <S.PrincipalText >Perfil</S.PrincipalText>

                <S.UserImageNickname onPress={() => { navigation.navigate('AccountInfo' as never) }}>
                    <Image
                        source={require('../../assets/imgs/baba1.png')}
                        style={{ height: 90, width: 90, borderRadius: 90}}
                        resizeMode='cover'
                    />
                    <View style={{flexDirection: "column"}}>
                        <S.FirstText >Kakashi Hatake</S.FirstText>
                        <S.SegondText>+55 11 98180-5816</S.SegondText>
                        <S.SegondText>kakashi.htake@outlook.com</S.SegondText>
                    </View>
                    {/* <ArrowRight strokeWidth={1} style={{ marginLeft: 10 }} color={theme.COLORS.ICON} size={28} /> */}
                    <Text style={{ marginRight: 10}}><ChevronRight color="#8A8A8A" size={20}/></Text>
                </S.UserImageNickname>

                <Card title = "Preferencias">
                    <S.ButtonNav>
                        <S.Nav>
                            {/* <Text>
                                <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                            </Text> */}
                            <S.Text>Adcionar casa</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            {/* <Text>
                                <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                            </Text> */}
                            <S.Text>Idade das Babás</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            {/* <Text>
                                <Ionicons name="person-sharp" color={theme.COLORS.ICON} size={16} />
                            </Text> */}
                            <S.Text>Sexo das babás</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>
                </Card>


            </S.Container>

            <MenuBar TelaAtiva={'config'} />
        </S.BackgoundContainer>
  )
}

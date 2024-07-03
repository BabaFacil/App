import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import Card from "@/components/Card";
import * as S from './styles';
import { router } from 'expo-router';
import Header from '@/components/ui/Header/Header';

export default function Account() {

    const navigation = useNavigation();


    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_700Bold,
      });
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

      const imagePaths = {
        'baba1': require('@/assets/imgs/baba1.png'),
        'baba2': require('@/assets/imgs/baba2.png'),
    };


    return (
        <S.BackgoundContainer>
                <Header text={"Configurações e Privacidade"}/>
            <S.Container>
                <S.PrincipalText >Perfil</S.PrincipalText>

                <S.UserImageNickname onPress={() => { router.push('./AccountInfo') }}>
                    <Image
                        source={require('@/assets/imgs/baba1.png')}
                        style={{ height: 90, width: 90, borderRadius: 90}}
                        resizeMode='cover'
                    />
                    <View style={{flexDirection: "column"}}>
                        <S.FirstText >Kakashi Hatake</S.FirstText>
                        <S.SegondText>+55 11 98180-5816</S.SegondText>
                        <S.SegondText>kakashi.htake@outlook.com</S.SegondText>
                    </View>
                    <Text style={{ marginRight: 10}}><ChevronRight color="#8A8A8A" size={20}/></Text>
                </S.UserImageNickname>

                <Card title = "Preferencias">
                    <S.ButtonNav>
                        <S.Nav>
                            <S.Text>Adcionar casa</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <S.Text>Idade das Babás</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav>
                        <S.Nav>
                            <S.Text>Sexo das babás</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>
                </Card>


            </S.Container>

        </S.BackgoundContainer>
    )
}

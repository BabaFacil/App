import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { ArrowLeft, ChevronRight, PenIcon } from 'lucide-react-native';
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
        'baba1': require('@/assets/imgs/baba1.png'),
        'baba2': require('@/assets/imgs/baba2.png'),
    };


  return (
        <S.BackgoundContainer>
            <Header text={"Perfil"}/>

            <S.Container>
                <S.PrincipalText >Informações da Conta</S.PrincipalText>

                <S.UserImageNickname>
                    <Image
                        source={require('@/assets/imgs/baba1.png')}
                        style={{ height: 150, width: 150, borderRadius: 90}}
                        resizeMode='cover'
                    />
                    <S.EditView>
                        <PenIcon strokeWidth={1} color={theme.COLORS.ICON} size={20} />
                    </S.EditView>
                </S.UserImageNickname>

                <Card title = "Informações da conta">
                    <S.ButtonNav onPress={() => { router.push({pathname: './AccountEdit/[edit]', params: {title: 'nome'}}) }}>
                        <S.Nav>
                            <S.Text>Nome de Usuário </S.Text>
                            <S.InfoText>Kakashi Hatake</S.InfoText>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav onPress={() => { router.push({pathname: './AccountEdit/[edit]', params: {title: 'email'}}) }}>
                        <S.Nav>
                            <S.Text>E-mail</S.Text>
                            <S.InfoText>kakashi.htake@outlook.com</S.InfoText>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav onPress={() => { router.push({pathname: './AccountEdit/[edit]', params: {title: 'telefone'}}) }}>
                        <S.Nav>
                            <S.Text>Telefone</S.Text>
                            <S.InfoText>+55 11 98180-5816</S.InfoText>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNav onPress={() => { router.push({pathname: './AccountEdit/[edit]', params: {title: 'data de nascimento'}}) }}>
                        <S.Nav>
                            <S.Text>Data de nascimento</S.Text>
                            <S.InfoText>17/10/2002</S.InfoText>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>

                    <S.ButtonNavView>
                        <S.Nav>
                            <S.Text>CPF</S.Text>
                            <S.InfoText>515.485.875.64</S.InfoText>
                        </S.Nav>
                    </S.ButtonNavView>

                    <S.ButtonNav onPress={() => { router.push({pathname: './AccountEdit/[edit]', params: {title: 'senha'}}) }}>
                        <S.Nav>
                            <S.Text>Senha</S.Text>
                        </S.Nav>
                        <Text><ChevronRight color="#8A8A8A" size={16} style={{ justifyContent: "flex-end" }} /></Text>
                    </S.ButtonNav>
                </Card>


            </S.Container>

        </S.BackgoundContainer>
  )
}

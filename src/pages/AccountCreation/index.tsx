import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BtnC from '@/components/CustomButton';
import * as S from './styles';
export default function AccountCreation() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    
    <S.Container>
      <S.Return onPress={() => { navigation.navigate('SignIn' as never) }}>
        <Ionicons name="arrow-back" size={33} color="black" />
        <Text style={{ fontSize: 17 }}> Voltar</Text>
      </S.Return>
      <S.Form>
        <S.InputStyle placeholder='Nome:' />
        <S.InputStyle placeholder='Sobrenome:' />
        <S.InputStyle placeholder='Data de Nascimento:' keyboardType='number-pad' />
        <S.InputStyle placeholder='CPF:' keyboardType='number-pad' />
        <S.InputStyle placeholder='Email:' keyboardType='email-address' />
        <S.InputStyle placeholder='Senha:' secureTextEntry />
        <S.InputStyle placeholder='Confirmar Senha:' secureTextEntry />
        <BtnC
          buttonText='Cadastrar'
          btnColor='#E96181'
          colorText='#FFF'
          onPress={() => { navigation.navigate('Home' as never) }}
        // onPress={() => { modalRegisterRef.current?.open(); }}
        />
      </S.Form>
      <S.ContainerLogo>
        
        <S.LogoContent>
          <Image
            source={require('../../assets/imgs/logoFull.png')}
            style={{ width: '40%', padding: 5 }}
            resizeMode='contain'
          />
          
        </S.LogoContent>
        
      </S.ContainerLogo>
    </S.Container>
  )
}


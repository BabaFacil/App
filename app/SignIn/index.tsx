import React, { useRef } from 'react';
import { Image, Text } from 'react-native';

import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { router } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import BtnC from '@/components/CustomButton';
import * as S from './styles';


export default function SignIn() {
    const modalLoginRef = useRef(null)
    const modalRegisterRef = useRef(null)

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <S.Container >
                <S.ContainerLogo>
                    <Animatable.View animation='fadeInDown' delay={600} style={{ alignItems: 'center' }}>
                        <Image
                            source={require('@/assets/imgs/logo-text2.png')}
                            style={{ width: '90%' }}
                            resizeMode='contain'
                        />
                    </Animatable.View>
                </S.ContainerLogo>

                <Animatable.View delay={600} animation='fadeInUp'>
                    <BtnC
                        buttonText="Cadastrar"
                        btnColor='#E96181'
                        colorText='#FFF'
                        onPress={(event) => {
                            router.replace('/SignUp')
                        }}
                    />

                    <BtnC
                        buttonText='Acessar'
                        btnColor='transparent'
                        colorText='#E96181'
                        additionalStyles={{
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: '#E96181',
                        }}
                        onPress={(event) => {
                            event.persist();
                            modalLoginRef.current?.open();

                        }}
                    />

                </Animatable.View>

                {/* modals */}
                <Modalize ref={modalLoginRef} snapPoint={600} modalHeight={600} >
                    <S.TitleModal >
                        Login
                    </S.TitleModal>
                    <S.ModalContent >
                        <S.InputStyle
                            placeholder='Email'
                        />
                        <S.InputStyle
                            secureTextEntry
                            placeholder='Senha'
                        />
                    </S.ModalContent>
                    <BtnC
                        buttonText='Acessar'
                        btnColor='#E96181'
                        colorText='#fff'
                        onPress={(event) => {
                            event.persist();
                            router.replace('/home')
                        }}
                    />
                </Modalize>
            </S.Container>
        </GestureHandlerRootView>
    )
}


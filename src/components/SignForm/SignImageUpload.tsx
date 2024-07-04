import { useState } from 'react';
import { Alert, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useTheme } from 'styled-components/native';
import { router } from 'expo-router';
import BtnC from '@/components/CustomButton';
import * as S from '../../../app/SignUp/styles';


export default function SignImageUpload() {
    const [imageUri, setImageUri] = useState(null);
    const themeUse = useTheme();
    const { width } = useWindowDimensions()

    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (response.assets && response.assets.length > 0) {
                setImageUri(response.assets[0].uri); // Atualiza o estado com a URI da imagem selecionada
            } else if (response.didCancel) {
                Alert.alert('Upload de Imagem Cancelado');
            } else {
                Alert.alert('Falha ao Selecionar Imagem');
            }
        });
    };

    return (
        <S.Container style={[{ width }]}>
            <S.PrincipalText >Foto de Perfil</S.PrincipalText>

            <S.UserImageNickname>
                <TouchableOpacity onPress={selectImage}>
                    <Image
                        source={{ uri: imageUri }}
                        style={{ height: 250, width: 250, borderRadius: 125, backgroundColor: '#808080' }}
                        resizeMode='cover'
                    />
                </TouchableOpacity>
            </S.UserImageNickname>

            <S.Text>
                Está quase finalizando! Adicione uma foto para personalizar ainda mais seu perfil.
                Uma imagem vale mais que mil palavras e queremos que você se expresse da melhor
                maneira possível. Clique no botão acima para fazer o upload da sua foto favorita.
            </S.Text>

            <BtnC
                buttonText="Finalizar"
                btnColor='#E96181'
                colorText='#FFF'
                disable={false}
                additionalStyles={{
                    marginTop: 30,
                }}
                onPress={(event) => {
                    router.replace('Home')
                }}
            />

            <BtnC
                buttonText='Continuar sem Foto'
                btnColor='transparent'
                colorText='#E96181'
                disable={false}
                additionalStyles={{
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#E96181',
                }}
                onPress={(event) => {
                    router.replace('Home')
                }}
            />

        </S.Container>

    )
}
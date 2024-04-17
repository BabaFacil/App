
import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { Image, Text, View } from 'react-native';

import React from 'react';
import * as S from "./styles";

interface defaultProps {
    nomeBaba: string;
    dataAtc: string;
    horaInicio: string;
    horaFim: string;
    valor: number;
    img: string;
}



const ActivityCards = ({nomeBaba, dataAtc, horaInicio, horaFim, valor,  img }: defaultProps) => {

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
        <S.Card>
            <S.ContentService>
                <Image
                    source={imagePaths[img]}
                    style={{ height: 65, width: 65, borderRadius: 90 }}
                    resizeMode='cover'
                />
                <View style={{justifyContent: 'center'}}>
                    <S.NameText>{nomeBaba}</S.NameText>
                    <Text style={{ color: '#A8A8A8', fontSize: 13, fontFamily:"OpenSans_500Medium"}}>{convertData(dataAtc)}. {horaInicio} - {horaFim}</Text>
                    <Text style={{ color: '#A8A8A8', fontSize: 13, fontFamily:"OpenSans_500Medium"}}>R$ {valor.toFixed(2)}</Text>
                </View>
            </S.ContentService>
            <S.Btn>
                <Text>Chat</Text>
            </S.Btn>
        </S.Card>
    )
}

function convertData(dataAtc){

    const months = [
        'jan','fev', 'mar','abr','mai','jun','jul',
        'ago','set','out','nov','dez' 
    ]

    let divisionDate = dataAtc.split(/[\/-]/)
    
    let month = months[parseInt(divisionDate[1], 10) - 1]

    return `${divisionDate[0]} de ${month}`

}

export default ActivityCards;


import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import React from 'react'

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
        OpenSans_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const imagePaths = {
        'baba1': require('../assets/imgs/baba1.png'),
        'baba2': require('../assets/imgs/baba2.png'),
    };

    const styles = StyleSheet.create({
        card: {
            height: 80,
            padding: 10,
            alignItems: 'center',
            justifyContent: "space-between",
            flexDirection: 'row',
            marginTop: 20,
            width: '100%',
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 20,
        },
        contentService: {
            width: '65%',
            flexDirection: 'row',
            justifyContent: "space-between",
        },
        btn:{
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            width: '30%',
            backgroundColor: '#D9D9D9',

        }
    })
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.contentService}>
                <Image
                    source={imagePaths[img]}
                    style={{ height: 65, width: 65, borderRadius: 90 }}
                    resizeMode='cover'
                />
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 13}}>{nomeBaba}</Text>
                    <Text style={{ color: '#A8A8A8', fontSize: 13 }}>{convertData(dataAtc)}. {horaInicio} - {horaFim}</Text>
                    <Text style={{ color: '#A8A8A8', fontSize: 13}}>R$ {valor.toFixed(2)}</Text>
                </View>
            </View>
            <TouchableOpacity style = {styles.btn}>
                <Text>Chat</Text>
            </TouchableOpacity>
        </TouchableOpacity>
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

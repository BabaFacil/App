
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import React from 'react'

interface defaultProps{
    onPress: (e:any) => void;
    nome: string;
    idade: string;
    genero: string;
    img: string;
}

const KidCards = ({onPress, nome, idade, genero, img }: defaultProps) => {

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
      });
    
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

    const imagePaths = {
        'imgBoy': require('../assets/imgs/littleboy.png'),
        'imgGirl': require('../assets/imgs/littlegirl.png'),
      };

    const styles = StyleSheet.create({
        kids: {
            height: 240,
            marginTop: 10,
            backgroundColor: '#F1F1F130',
            borderRadius: 10,
            marginLeft:'2%',
            marginRight:'2%',
            width: '46%' 
        },
        infoKids: {
            fontFamily: 'OpenSans_400Regular',
            backgroundColor: genero == 'f'? '#E9618190' : '#98D2EB90',
            height: 30,
            flexDirection: "row",
            alignItems: 'center',
            paddingHorizontal: 2,
            justifyContent: 'space-between',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10
        }
    })
    return (
        <TouchableOpacity onPress={onPress} style={styles.kids}>
            <Image
                source={img as ImageSourcePropType}
                style={{ height: 240, width: '100%', borderRadius: 10 }}
                resizeMode='cover'
            />
            <View style={styles.infoKids}>
                <Text numberOfLines={1} ellipsizeMode="middle" style={{ color: '#fff', width:"70%", fontWeight: 'bold' }}>{nome}</Text>
                <Text numberOfLines={1} ellipsizeMode="middle" style={{ color: '#fff', fontWeight: 'bold' }}>{idade} anos</Text>
            </View>
        </TouchableOpacity>
    )
}

export default KidCards;

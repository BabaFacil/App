import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface defaultProps{
    TelaAtiva: string;
}
const MenuBar = ({ TelaAtiva }:defaultProps) => {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        menu: {
            position: 'absolute',
            bottom: -10,
            left: -3,
            right: 0,
            flexDirection: 'row',
            width: "102%",
            height: 80,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: '#EDEDED',
            backgroundColor: '#FFF',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignItems: 'center' }}>
                <FontAwesome name="home" size={23} color={TelaAtiva == 'home' ? '#E96181' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Activitys')} style={{ alignItems: 'center' }}>
                <FontAwesome name="list-ul" size={23} color={TelaAtiva == 'atividade' ? '#E96181' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Atividade</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center' }}>
                <FontAwesome name="wechat" size={23} color={TelaAtiva == 'chat' ? '#E96181' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Settings')} style={{ alignItems: 'center' }}>
                <FontAwesome name="user" size={23} color={TelaAtiva == 'config' ? '#E96181' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Config</Text>
            </TouchableOpacity>

        </View>
    );

};

export default MenuBar;

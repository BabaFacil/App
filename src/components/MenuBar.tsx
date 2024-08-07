import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

interface defaultProps{
    TelaAtiva: string;
}
const MenuBar = ({ TelaAtiva }:defaultProps) => {
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
            <TouchableOpacity onPress={() => router.replace('/Home')} style={{ alignItems: 'center' }}>
                <FontAwesome name="home" size={23} color={TelaAtiva.includes('home') ? '#E96181' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> router.replace('/Activitys')} style={{ alignItems: 'center' }}>
                <FontAwesome name="list-ul" size={23} color={TelaAtiva.includes('activitys') ? '#E96181' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Atividade</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> router.replace('/PreChat')} style={{ alignItems: 'center' }}>
                <FontAwesome name="wechat" size={23} color={TelaAtiva.includes('prechat') ? '#E96181' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> router.replace('/Settings')} style={{ alignItems: 'center' }}>
                <FontAwesome name="user" size={23} color={TelaAtiva.includes('settings') ? '#E96181' : '#C8C8C8'} />
                <Text style={{ fontSize: 12 }}>Config</Text>
            </TouchableOpacity>

        </View>
    );

};

export default MenuBar;

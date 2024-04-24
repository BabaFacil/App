import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, Camera, Phone, SendHorizontal, Video } from 'lucide-react-native'
import React from 'react'
import { Image, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from 'styled-components'
import * as S from './styles'
import MenuBar from '../../components/MenuBar'
import Message from '../../components/Message'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'

export default function Chat() {
    const navigation = useNavigation();
    let COLORS = ThemeContext._currentValue.COLORS

    const nannyPic = require('../../assets/imgs/baba1.png')

    return (<>
        <S.Container>
            <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'column', marginTop: 40 }}>
                <S.Header>
                    <TouchableOpacity onPress={() => { navigation.navigate('Activitys') }}><ArrowLeft strokeWidth={1} color={COLORS.TEXT_PRIMARY} size={28} /></TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image source={nannyPic} style={{ height: 32, width: 32, borderRadius: 90 }} />
                        <S.Name>Adriana Grande</S.Name>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity>
                            <Video color={COLORS.TEXT_PRIMARY} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 15 }}>
                            <Phone color={COLORS.TEXT_PRIMARY} />
                        </TouchableOpacity>
                    </View>
                </S.Header>
                <GestureHandlerRootView>

                    <S.MessagesContainer automaticallyAdjustKeyboardInsets={true}>
                        {/* THIS IS AN EXAMPLE OF A STATIC USAGE! */}
                        <Message type="sent" dateSent='11:09 AM' message={"Quais seriam os seus horarios disponiveis?"} />
                        <Message type="recivied" dateSent='11:12 AM' message={"Olá, tenho horario para segunda-feira das 21:00 ás 8:00 de terça-feira, depois disso só na primeira semana de maio. "} />
                        <Message type="sent" dateSent='11:16 AM' message={"Vou ficar com esse horário mesmo"} />
                        <Message type="recivied" dateSent='11:19 AM' message={"Ok. Agendado"} />
                    </S.MessagesContainer>
                </GestureHandlerRootView>

                {/* Input Message */}
                <S.MessageInputContainer>
                    <S.SendImageContainer>
                        <Camera color={COLORS.BACKGROUND} />
                    </S.SendImageContainer>
                    <S.MessageInput multiline={true} placeholder='Message' placeholderTextColor={COLORS.BACKGROUND_800} />
                    <TouchableOpacity >
                        <SendHorizontal color={COLORS.BACKGROUND_800} />
                    </TouchableOpacity>
                </S.MessageInputContainer>
            </View>

        </S.Container>

    </>)
}
import { router } from "expo-router"
import { ArrowLeft } from "lucide-react-native"
import { View } from "react-native-animatable"
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler"
import * as S from './styles'
import { useTheme } from "styled-components/native"

interface defaultProps{
    previousPage?: string
    text: string
    additionalStyles?: object 
}

export default function Header({text, previousPage, additionalStyles}: defaultProps) {
    const theme = useTheme()
    
    return (
        <View style={{ flexDirection: 'row', marginTop: 40, alignItems: "center", ...additionalStyles }}>
            <GestureHandlerRootView style={{flex:0}}>
                <TouchableOpacity onPress={() => { router.push(previousPage || ".././") }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color={theme.COLORS.ICON} size={28} /></TouchableOpacity>
            </GestureHandlerRootView>
            {/* TODO: Fazer o texto aparecer quando o usuário rolar a página */}
            <S.HeaderText >{text}</S.HeaderText>
        </View>
    )
}
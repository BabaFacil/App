import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans'
import { Search } from 'lucide-react-native'
import { default as React } from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from 'styled-components'
import MenuBar from '../../components/MenuBar'
import PreChatCard from '../../components/PreChatCard'
import * as S from './styles'

export default function PreChat() {
    let COLORS = ThemeContext._currentValue.COLORS

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_700Bold,
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <S.Container>
                <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'column', marginTop: 40 }}>
                    <S.Header>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <S.Name>Mensagens</S.Name>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <GestureHandlerRootView>
                                <TouchableOpacity>
                                    <Search color={COLORS.TEXT_PRIMARY} />
                                </TouchableOpacity>
                            </GestureHandlerRootView>
                        </View>
                    </S.Header>
                </View>
                <S.DockGlobal>
                    <PreChatCard />
                </S.DockGlobal>

            </S.Container>
            <MenuBar TelaAtiva='chat' />
        </>
    )
}
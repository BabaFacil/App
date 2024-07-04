import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans'
import { Search } from 'lucide-react-native'
import { default as React } from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from 'styled-components'
import PreChatCard from '@/components/PreChatCard'
import * as S from './styles'
import { useTheme } from 'styled-components/native'
import DATA from '@/mocks/babysitterData.mock'
import { router } from 'expo-router'

export default function PreChat() {
    const theme = useTheme()

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
                <View style={{ justifyContent: "space-between", flexDirection: 'column', marginTop: 40 }}>
                    <S.Header>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <S.Name>Mensagens</S.Name>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <GestureHandlerRootView>
                                <TouchableOpacity>
                                    <Search color={theme.COLORS.TEXT_PRIMARY} />
                                </TouchableOpacity>
                            </GestureHandlerRootView>
                        </View>
                    </S.Header>
                </View>
                <S.DockGlobal>
                    <GestureHandlerRootView>
                        <S.MessagesContainer
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}
                        data={DATA}
                        keyExtractor={(item:any) => item.id}
                        ItemSeparatorComponent={S.Separator}
                        renderItem={({item}:any)=> <PreChatCard onPress={()=>{router.push(`./Chat/${item.id}`)}} name={item.name} lastMessage={item.lastMessage} lastMassageDate={item.lastMassageDate} photo={item.photo} isNewMessage={item.isNewMessage} newMsgCount={item.newMsgCount} sent={item.sent} isSender={item.isSender} />}
                        />
                    </GestureHandlerRootView>
                </S.DockGlobal>
            </S.Container>
        </>
    )
}
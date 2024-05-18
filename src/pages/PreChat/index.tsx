import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans'
import { Search } from 'lucide-react-native'
import { default as React } from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from 'styled-components'
import MenuBar from '@/components/MenuBar'
import PreChatCard from '@/components/PreChatCard'
import * as S from './styles'
import { useTheme } from 'styled-components/native'

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

    // THIS IS AN EXAMPLE OF A STATIC USAGE!
    const DATA = [
        {
            id: "9822e691-2fe2-4fc4-b648-ffef5ac144ad",
            name: "Adriana Grande",
            lastMessage: "Certo amanhã iremos providenciar a ida, agradecida pelo contato",
            lastMassageDate: "4:23PM",
            photo: 'baba1',
            sent: true,
            isSender: true,
            isNewMessage: true,
            newMsgCount: 10
        },
        {
            id: "c87a53ef-1240-45c6-9bf5-8ee77c081b7d",
            name: "Bruna Lima",
            lastMessage: "Olá boa tarde, tudo certo para amanhã!",
            lastMassageDate: "Seg",
            photo: 'baba2',
            sent: false,
            isSender: true,
            isNewMessage: true,
            newMsgCount: 1
        },

        {
            id: "e177d500-40d9-42c4-b56c-a08f1bbbb306",
            name: "Nayeon Barboza Dias",
            lastMessage: "Boa noite, se puder avaliar meu perfil, e deixar um comentário ficarei muito agradecida!",
            lastMassageDate: "22/04",
            photo: 'baba1',
            sent: false,
            isSender: false,
            isNewMessage: false,
            newMsgCount: 0
        },
        {
            id: "eb96a582-70f8-4306-b999-0c035a95ef64",
            name: "Chaeyoung de Oliveira da Silva",
            lastMessage: "😊",
            lastMassageDate: "28/12/2023",
            photo: 'baba2',
            sent: false,
            isSender: false,
            isNewMessage: false,
            newMsgCount: 0
        },
        
        
    ]
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
                        renderItem={({item}:any)=> <PreChatCard name={item.name} lastMessage={item.lastMessage} lastMassageDate={item.lastMassageDate} photo={item.photo} isNewMessage={item.isNewMessage} newMsgCount={item.newMsgCount} sent={item.sent} isSender={item.isSender} />}
                        />
                    </GestureHandlerRootView>
                </S.DockGlobal>
            </S.Container>
            <MenuBar TelaAtiva='chat' />
        </>
    )
}
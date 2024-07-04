import { Check, CheckCheck } from 'lucide-react-native'
import { Image, Text, View } from 'react-native'
import { ThemeContext } from 'styled-components/native'
import * as S from './styles'
import { useTheme } from 'styled-components/native';

interface defaultProps {
    onPress: (e:any) => void;
    name: string,
    lastMessage: string,
    lastMassageDate: string,
    photo: string
    sent: boolean
    isSender: boolean
    newMsgCount?: number
    isNewMessage?: boolean
}

export default function PreChatCard({onPress,name, lastMessage, lastMassageDate, photo, newMsgCount, isNewMessage, sent, isSender }: defaultProps) {
    const theme = useTheme()
    const imagePaths = {
        'baba1': require('@/assets/imgs/baba1.png'),
        'baba2': require('@/assets/imgs/baba2.png'),
    };

    return (
        <>
            <S.ButtonNav onPress={onPress}>
                <S.Nav>
                    <Image
                        source={imagePaths[photo]}
                        style={{ height: 50, width: 50, borderRadius: 90 }}
                        resizeMode='cover'
                    />
                    <S.MessageInfo>
                        <S.Name numberOfLines={1} ellipsizeMode="middle" >{name}</S.Name>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            {isSender ?
                                <View style={{ marginRight: 2 }}>
                                    {sent ? <CheckCheck size={16} color={theme.COLORS.PRIMARY} /> : <Check size={16} color={theme.COLORS.ICON} />}
                                </View>
                                : []
                            }

                            <Text numberOfLines={1} ellipsizeMode="tail">{lastMessage}</Text>
                        </View>
                    </S.MessageInfo>
                </S.Nav>
                <S.DateMessageContainer>
                    {isNewMessage ? <S.TextDateNotification>{lastMassageDate}</S.TextDateNotification> : <S.TextDate>{lastMassageDate}</S.TextDate>}
                    {isNewMessage ? <S.NotificationCount>{newMsgCount > 9 ? (9 + "+") : newMsgCount}</S.NotificationCount> : [<Text></Text>]}

                </S.DateMessageContainer>
            </S.ButtonNav>
        </>
    )
}
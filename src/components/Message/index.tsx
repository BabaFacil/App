import * as S from './styles'

interface defaultProps {
    message: string;
    dateSent: string;
    type: string;
}

export default function Message({ message,dateSent, type }: defaultProps) {
    const messageType = {
        recivied:
            [<S.LeftAlignedMessage>
                <S.LeftMessageContainer>
                    <S.Text>{message}</S.Text>
                </S.LeftMessageContainer>
                <S.HourText>{dateSent}</S.HourText>
            </S.LeftAlignedMessage>],

        sent:
            [<S.RightAlignedMessage>
                <S.RightMessageContainer>
                    <S.Text>{message}</S.Text>
                </S.RightMessageContainer>
                <S.HourText>{dateSent}</S.HourText>
            </S.RightAlignedMessage>]
    }
    return (
        messageType[type]
    )
}
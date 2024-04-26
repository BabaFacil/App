import styled from "styled-components/native"

// Move to Mensage component!
export const RightAlignedMessage = styled.View`
    margin-bottom: 5px;
    align-items: flex-end;
`
export const RightMessageContainer = styled.View`
    padding: 10px;
    border-top-left-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
`

export const LeftAlignedMessage = styled.View`
    margin-bottom: 5px;
    align-items: flex-start;
`
export const LeftMessageContainer = styled.View`
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
`

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.FONT.MEDIUM};
    color: #FFF;
`

export const HourText = styled.Text`
    font-family: ${({ theme }) => theme.FONT.MEDIUM};
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-size: 10px;
`
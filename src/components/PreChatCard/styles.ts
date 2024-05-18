import styled from 'styled-components/native';


export const ButtonNav = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;

`;

export const Nav = styled.View`
    flex: 1;
    flex-direction: row;
    justify-items: center;
    align-items: center;
`;

export const Name = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
    font-family: ${({theme})=> theme.FONT.BOLD}
    font-size: 18px;
`
export const MessageInfo = styled.View`
    max-width: 85%;
    margin-left: 10px;
    
`

export const NotificationCount = styled.Text`
    padding: 5px;
    width: 25px;
    height: 25px;
    text-align: center;
    color: ${({theme})=> theme.COLORS.BACKGROUND};
    background-color: ${({theme})=> theme.COLORS.PRIMARY};
    border-radius: 90px;
`

export const DateMessageContainer = styled.View`
    justify-content: space-around;
    align-items: flex-end;
`

// Variations
export const TextDate = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`
export const TextDateNotification = styled.Text`
    font-family: ${({theme})=> theme.FONT.BOLD};
    color: ${({theme})=> theme.COLORS.PRIMARY};
`
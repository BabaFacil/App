import styled from "styled-components/native";

export const Container = styled.View`
    /* flex: 1; */
    background-color:${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 15px;
    height: 100%;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

export const Name = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-family: ${({ theme }) => theme.FONT.BOLD};
    width: 66%;
    padding: 0 0 0 15px;
    font-size: 18px;
`

export const SendImageContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 5px;
    border-radius: 20px;

`

export const MessagesContainer = styled.ScrollView`
    height: 82%;
`

export const MessageInputContainer = styled.KeyboardAvoidingView`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 20px;
    /* margin: 0 0 100px 0; */
    padding: 0 10px 0 10px;
`

export const MessageInput = styled.TextInput`
    width: 75%;
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONT.MEDIUM};
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

    padding: 5px 0 5px 0;
`

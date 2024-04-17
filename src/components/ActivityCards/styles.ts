import styled from "styled-components/native";

export const Card = styled.View`
    height: 80px;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 20px;
    width: 100%;
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    border-width: 1px;
    border-radius: 10px;
`

export const ContentService = styled.View`
    width: 65%;
    flex-direction: row;
    justify-content: space-between;
`

export const NameText = styled.Text`
    font-size: 13px;
    font-family:"OpenSans_700Bold";
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`

export const Btn = styled.TouchableOpacity`
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    width: 30%;
    background-color: #D9D9D9;
`
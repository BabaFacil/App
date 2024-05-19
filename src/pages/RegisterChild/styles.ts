import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 15px;
    height: 100%;
    gap: 20px;
`

export const Return = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
` 

export const ReturnText = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONT.MEDIUM};
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`

export const FormContainer = styled.View`
    flex-direction: column;
    height: 90%;
    justify-content: space-between;
    gap: 20px;
`

export const FileInput = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    height: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`

export const TextInput = styled.TextInput`
    text-align: left;
    padding: 10px 15px;
    border: 2px solid;
    border-color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    border-radius: 15px;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`

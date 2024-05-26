import styled from "styled-components/native";

export const Container = styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    
`
export const Image = styled.Image`
    flex: 0.7;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 26px;
    margin-bottom: 10px;
    text-align: center;
    font-family: ${({theme})=> theme.FONT.BOLD};
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`

export const Description = styled.Text`
    font-size: 14px;
    padding: 0 10px 0 10px;
    font-family: ${({theme})=> theme.FONT.MEDIUM};
    color: #656565;
    text-align: center;
`
import styled from "styled-components/native";

export const MarginContainer = styled.View`
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
`
export const LabelCard = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
    font-size:16px;
    font-family: 'OpenSans_700Bold';
`

export const Container = styled.View`
    border-radius: 10px;

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;

    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
`

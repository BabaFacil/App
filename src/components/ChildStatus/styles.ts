import { Dimensions } from "react-native";
import styled from "styled-components/native";

const dimensions = Dimensions.get('window')

export const Status = styled.View`
    width: ${dimensions.width/25};
    height:${dimensions.width/25};
    border-radius: 90px;
    margin-right: 5px;
`

export const Container = styled.View`
    padding: 5px 20px;
    flex-direction: row;
    align-items: center;
    width: 100%;

`
export const StatusText = styled.Text`
    font-family: ${({theme})=> theme.FONT.MEDIUM};
`
export const StatusTextBold = styled.Text`
    color: ${({theme})=> theme.COLORS.PRIMARY};
    font-family: ${({theme})=> theme.FONT.BOLD};
    text-decoration: underline;
`
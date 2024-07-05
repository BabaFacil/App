import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const TextPrincipal = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
    font-family: 'OpenSans_700Bold';
    font-size: 23px;
`

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const DockGlobal = styled.View`
    flex: 1;
    padding-top: 25px;
    margin: 15px;
`;


import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const DockGlobal = styled.View`
    flex: 1;
    padding-top: 25px;
    margin: 15px;

`;

export const DockServices = styled.View`
    margin-top: 20px;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;

`;

export const Services = styled.TouchableOpacity`
    height: 90px;
    width: 48%;
    background-color: #E96181;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const DockKids = styled.View`
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
`

export const AddBtn = styled.TouchableOpacity`
    position: absolute;
    bottom: 80px;
    right: 20px;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 70px;
    background-color: #E96181
`
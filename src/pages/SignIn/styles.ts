import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'



export const Container = styled.View`
    flex: 1;
    background-color: '#fff';
`;

export const ContainerLogo = styled.View`
    justify-content: center;
    margin-top: 7%;
    margin-bottom: 70%;
    flex: 2;
`;

export const InputStyle = styled.TextInput`
    width: 90%;
    border-width: 2px;
    border-radius: 15px;
    border-color: #ff9fb6;
    padding: 15px;
    margin: 20px;
    align-items: center;
    justify-content: center;
`;

export const TitleModal = styled.Text`
    text-align: center;
    margin: 25px;
    font-family: "OpenSans_400Regular";
    font-size: 25px;
    color: #E96181;
`;

export const ModalContent = styled.View`
    flex: 1;
    height: 180px;
    justify-content: center;
    align-items: center;

`
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND};
`;

export const Return = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
    margin-top: 56px;
`;

export const Form = styled.View`
    z-index: 999;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
`;

export const InputStyle = styled.TextInput`
    border-width: 2px;
    border-radius: 15px;
    border-color: ${({theme})=> theme.COLORS.PRIMARY};
    background-color: ${({theme})=> theme.COLORS.BACKGROUND};
    padding: 10px;
    margin: 20px;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
`;

export const ContainerLogo = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const LogoContent = styled.View`
    flex-direction: row;
    align-items: center;
`;
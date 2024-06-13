import styled from 'styled-components/native';

export const BackgoundContainer = styled.View`  
    height: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`

export const HeaderText = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY} ;
    margin-left: 20px;
    font-family: 'OpenSans_700Bold';
    font-size: 16px ;
`

export const Container = styled.ScrollView`
    margin-top: 10px;
`;

export const ButtonNav = styled.View`
    flex-direction: row;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    align-self: center;
    align-items: center;
`;

export const PrincipalText = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
    margin-left: 20px;
    font-family: 'OpenSans_700Bold';
    font-size: 22px;
`

export const Nav = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.Text`
    color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
    margin-left: 20px;
    margin-top: 30px;
    font-family: 'OpenSans_500Medium';
    font-size: 14px;
`

export const TextInput = styled.TextInput`
    width: 90%;
    color: ${({theme})=> theme.COLORS.TEXT_SMALL};
`